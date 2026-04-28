from __future__ import annotations

import json
import os
import uuid
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

from flask import Flask, jsonify, request, send_from_directory, session
from psycopg import connect
from psycopg.rows import dict_row

ROOT_DIR = Path(__file__).resolve().parent.parent
BACKEND_DIR = ROOT_DIR / "backend"
UPLOAD_DIR = BACKEND_DIR / "uploads"
DIST_DIR = ROOT_DIR / "dist" / "public"


def load_env_file(env_path: Path) -> None:
    if not env_path.exists():
        return
    for raw_line in env_path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        os.environ.setdefault(key.strip(), value.strip())


def load_connection_string(connection_path: Path) -> None:
    if os.getenv("DATABASE_URL"):
        return
    if not connection_path.exists():
        return
    value = connection_path.read_text(encoding="utf-8").strip()
    if value:
        os.environ.setdefault("DATABASE_URL", value)


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def get_db():
    database_url = os.getenv("DATABASE_URL", "").strip()
    if not database_url:
        raise RuntimeError("DATABASE_URL is required for PostgreSQL/Supabase connection.")
    return connect(database_url, row_factory=dict_row)


def init_db() -> None:
    UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
    with get_db() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS listings (
                id BIGSERIAL PRIMARY KEY,
                title TEXT NOT NULL,
                description TEXT NOT NULL,
                price INTEGER NOT NULL,
                previous_price INTEGER,
                location TEXT NOT NULL,
                category TEXT NOT NULL CHECK (category IN ('Domestic', 'Commercial')),
                images TEXT NOT NULL DEFAULT '[]',
                status TEXT NOT NULL DEFAULT 'Available' CHECK (status IN ('Available', 'Sold')),
                visit_count INTEGER NOT NULL DEFAULT 0,
                lister_id TEXT,
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL
            );
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS inquiries (
                id BIGSERIAL PRIMARY KEY,
                property_id BIGINT NOT NULL,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                phone TEXT NOT NULL,
                message TEXT,
                created_at TEXT NOT NULL,
                FOREIGN KEY (property_id) REFERENCES listings(id) ON DELETE CASCADE
            );
            """
        )
        conn.commit()


def listing_to_json(row: dict[str, Any]) -> dict[str, Any]:
    images = []
    try:
        images = json.loads(row["images"] or "[]")
    except json.JSONDecodeError:
        images = []
    return {
        "id": row["id"],
        "title": row["title"],
        "description": row["description"],
        "price": row["price"],
        "previousPrice": row["previous_price"],
        "location": row["location"],
        "category": row["category"],
        "images": images,
        "status": row["status"],
        "visitCount": row["visit_count"],
        "listerId": row["lister_id"],
        "createdAt": row["created_at"],
        "updatedAt": row["updated_at"],
    }


def inquiry_to_json(row: dict[str, Any]) -> dict[str, Any]:
    return {
        "id": row["id"],
        "propertyId": row["property_id"],
        "name": row["name"],
        "email": row["email"],
        "phone": row["phone"],
        "message": row["message"],
        "createdAt": row["created_at"],
        "listingTitle": row.get("listing_title"),
    }


def is_admin() -> bool:
    return bool(session.get("is_admin") is True)


def parse_listing_payload(payload: dict[str, Any], partial: bool = False) -> dict[str, Any]:
    required_fields = ["title", "description", "price", "location", "category"]
    if not partial:
        missing = [field for field in required_fields if field not in payload]
        if missing:
            raise ValueError(f"Missing fields: {', '.join(missing)}")

    data: dict[str, Any] = {}
    if "title" in payload:
        data["title"] = str(payload["title"]).strip()
    if "description" in payload:
        data["description"] = str(payload["description"]).strip()
    if "price" in payload:
        data["price"] = int(payload["price"])
    if "previousPrice" in payload and payload["previousPrice"] not in ("", None):
        data["previous_price"] = int(payload["previousPrice"])
    if "location" in payload:
        data["location"] = str(payload["location"]).strip()
    if "category" in payload:
        category = str(payload["category"])
        if category not in ("Domestic", "Commercial"):
            raise ValueError("Invalid category")
        data["category"] = category
    if "status" in payload:
        status = str(payload["status"])
        if status not in ("Available", "Sold"):
            raise ValueError("Invalid status")
        data["status"] = status
    if "images" in payload:
        images = payload["images"] or []
        if not isinstance(images, list):
            raise ValueError("images must be an array")
        data["images"] = json.dumps([str(item) for item in images])
    data["updated_at"] = now_iso()
    return data


load_env_file(ROOT_DIR / ".env")
load_connection_string(ROOT_DIR / "connection_string.txt")
init_db()

app = Flask(__name__, static_folder=str(DIST_DIR), static_url_path="")
app.config["SECRET_KEY"] = os.getenv("SESSION_SECRET", "local-dev-secret-change-me")
app.config["MAX_CONTENT_LENGTH"] = 10 * 1024 * 1024


@app.errorhandler(400)
def handle_400(_err):
    return jsonify({"message": "Bad request"}), 400


@app.errorhandler(404)
def handle_404(_err):
    if request.path.startswith("/api/"):
        return jsonify({"message": "Not found"}), 404
    if DIST_DIR.exists() and (DIST_DIR / "index.html").exists():
        return send_from_directory(DIST_DIR, "index.html")
    return jsonify({"message": "Frontend build missing. Ensure `dist/public` exists."}), 404


@app.post("/api/admin/login")
def admin_login():
    body = request.get_json(silent=True) or {}
    username = str(body.get("username", "")).strip()
    password = str(body.get("password", "")).strip()
    if not username or not password:
        return jsonify({"message": "Username and password are required"}), 400

    admin_username = os.getenv("ADMIN_USERNAME", "admin")
    admin_password = os.getenv("ADMIN_PASSWORD", "admin123")
    if username != admin_username or password != admin_password:
        return jsonify({"message": "Invalid username or password"}), 401

    session["is_admin"] = True
    session["admin_username"] = username
    return jsonify({"success": True, "username": username})


@app.get("/api/admin/session")
def admin_session():
    if is_admin():
        return jsonify({"isAdmin": True, "username": session.get("admin_username")})
    return jsonify({"isAdmin": False}), 401


@app.post("/api/admin/logout")
def admin_logout():
    session["is_admin"] = False
    session["admin_username"] = None
    return jsonify({"success": True})


@app.get("/api/listings")
def list_listings():
    category = request.args.get("category")
    status = request.args.get("status")
    sort = request.args.get("sort", "newest")
    search = request.args.get("search")
    is_reduced = request.args.get("isReduced", "false").lower() == "true"

    where = ["1=1"]
    params: list[Any] = []
    if category:
        where.append("category = %s")
        params.append(category)
    if status:
        where.append("status = %s")
        params.append(status)
    if search:
        where.append("(title ILIKE %s OR location ILIKE %s OR description ILIKE %s)")
        token = f"%{search}%"
        params.extend([token, token, token])
    if is_reduced:
        where.append("previous_price IS NOT NULL AND previous_price > price")

    order = "created_at DESC"
    if sort == "price_asc":
        order = "price ASC"
    elif sort == "price_desc":
        order = "price DESC"
    elif sort == "hot":
        order = "visit_count DESC, created_at DESC"

    with get_db() as conn:
        rows = conn.execute(
            f"SELECT * FROM listings WHERE {' AND '.join(where)} ORDER BY {order}",
            params,
        ).fetchall()
    return jsonify([listing_to_json(row) for row in rows])


@app.get("/api/listings/<int:listing_id>")
def get_listing(listing_id: int):
    with get_db() as conn:
        row = conn.execute("SELECT * FROM listings WHERE id = %s", (listing_id,)).fetchone()
    if not row:
        return jsonify({"message": "Listing not found"}), 404
    return jsonify(listing_to_json(row))


@app.post("/api/listings/<int:listing_id>/view")
def increment_view(listing_id: int):
    with get_db() as conn:
        row = conn.execute("SELECT visit_count FROM listings WHERE id = %s", (listing_id,)).fetchone()
        if not row:
            return jsonify({"message": "Listing not found"}), 404
        visit_count = int(row["visit_count"]) + 1
        conn.execute("UPDATE listings SET visit_count = %s, updated_at = %s WHERE id = %s", (visit_count, now_iso(), listing_id))
        conn.commit()
    return jsonify({"visitCount": visit_count})


@app.post("/api/listings")
def create_listing():
    if not is_admin():
        return jsonify({"message": "Admin login required"}), 401
    body = request.get_json(silent=True) or {}
    try:
        data = parse_listing_payload(body, partial=False)
    except (ValueError, TypeError) as err:
        return jsonify({"message": str(err)}), 400

    created_at = now_iso()
    with get_db() as conn:
        row = conn.execute(
            """
            INSERT INTO listings
            (title, description, price, previous_price, location, category, images, status, visit_count, lister_id, created_at, updated_at)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, 0, NULL, %s, %s)
            RETURNING *
            """,
            (
                data.get("title"),
                data.get("description"),
                data.get("price"),
                data.get("previous_price"),
                data.get("location"),
                data.get("category"),
                data.get("images", "[]"),
                data.get("status", "Available"),
                created_at,
                created_at,
            ),
        ).fetchone()
        conn.commit()
    return jsonify(listing_to_json(row)), 201


@app.put("/api/listings/<int:listing_id>")
def update_listing(listing_id: int):
    if not is_admin():
        return jsonify({"message": "Admin login required"}), 401
    body = request.get_json(silent=True) or {}
    try:
        data = parse_listing_payload(body, partial=True)
    except (ValueError, TypeError) as err:
        return jsonify({"message": str(err)}), 400

    with get_db() as conn:
        existing = conn.execute("SELECT * FROM listings WHERE id = %s", (listing_id,)).fetchone()
        if not existing:
            return jsonify({"message": "Listing not found"}), 404

        if "price" in data and data["price"] < int(existing["price"]) and "previous_price" not in data:
            data["previous_price"] = int(existing["price"])

        if not data:
            row = existing
        else:
            columns = ", ".join([f"{key} = %s" for key in data.keys()])
            params = list(data.values()) + [listing_id]
            conn.execute(f"UPDATE listings SET {columns} WHERE id = %s", params)
            row = conn.execute("SELECT * FROM listings WHERE id = %s", (listing_id,)).fetchone()
            conn.commit()
    return jsonify(listing_to_json(row))


@app.delete("/api/listings/<int:listing_id>")
def delete_listing(listing_id: int):
    if not is_admin():
        return jsonify({"message": "Admin login required"}), 401
    with get_db() as conn:
        existing = conn.execute("SELECT id FROM listings WHERE id = %s", (listing_id,)).fetchone()
        if not existing:
            return jsonify({"message": "Listing not found"}), 404
        conn.execute("DELETE FROM listings WHERE id = %s", (listing_id,))
        conn.commit()
    return ("", 204)


@app.post("/api/inquiries")
def create_inquiry():
    body = request.get_json(silent=True) or {}
    required = ["propertyId", "name", "email", "phone"]
    for field in required:
        if field not in body or body[field] in (None, ""):
            return jsonify({"message": f"{field} is required"}), 400

    property_id = int(body["propertyId"])
    created_at = now_iso()
    with get_db() as conn:
        listing = conn.execute("SELECT id FROM listings WHERE id = %s", (property_id,)).fetchone()
        if not listing:
            return jsonify({"message": "Listing not found"}), 404
        row = conn.execute(
            """
            INSERT INTO inquiries (property_id, name, email, phone, message, created_at)
            VALUES (%s, %s, %s, %s, %s, %s)
            RETURNING *
            """,
            (
                property_id,
                str(body["name"]).strip(),
                str(body["email"]).strip(),
                str(body["phone"]).strip(),
                str(body.get("message") or "").strip(),
                created_at,
            ),
        ).fetchone()
        conn.commit()
    return jsonify(inquiry_to_json(row)), 201


@app.get("/api/inquiries")
def list_inquiries():
    if not is_admin():
        return jsonify({"message": "Admin login required"}), 401
    with get_db() as conn:
        rows = conn.execute(
            """
            SELECT i.*, l.title AS listing_title
            FROM inquiries i
            JOIN listings l ON l.id = i.property_id
            ORDER BY i.created_at DESC
            """
        ).fetchall()
    return jsonify([inquiry_to_json(row) for row in rows])


@app.post("/api/upload")
def upload_file():
    if not is_admin():
        return jsonify({"message": "Admin login required"}), 401
    file = request.files.get("file")
    if not file or not file.filename:
        return jsonify({"message": "No file uploaded"}), 400
    ext = Path(file.filename).suffix.lower()
    safe_name = f"{uuid.uuid4().hex}{ext}"
    target = UPLOAD_DIR / safe_name
    file.save(target)
    return jsonify({"url": f"/uploads/{safe_name}"})


@app.get("/uploads/<path:filename>")
def uploaded_files(filename: str):
    return send_from_directory(UPLOAD_DIR, filename)


@app.get("/api/admin/listings")
def admin_listings():
    if not is_admin():
        return jsonify({"message": "Admin login required"}), 401
    with get_db() as conn:
        rows = conn.execute("SELECT * FROM listings ORDER BY created_at DESC").fetchall()
    return jsonify([listing_to_json(row) for row in rows])


@app.get("/api/admin/inquiries")
def admin_inquiries():
    return list_inquiries()


@app.get("/api/admin/stats")
def admin_stats():
    if not is_admin():
        return jsonify({"message": "Admin login required"}), 401
    with get_db() as conn:
        total = conn.execute("SELECT COUNT(*) AS c FROM listings").fetchone()["c"]
        available = conn.execute("SELECT COUNT(*) AS c FROM listings WHERE status = 'Available'").fetchone()["c"]
        sold = conn.execute("SELECT COUNT(*) AS c FROM listings WHERE status = 'Sold'").fetchone()["c"]
        inquiries = conn.execute("SELECT COUNT(*) AS c FROM inquiries").fetchone()["c"]
    return jsonify(
        {
            "totalListings": total,
            "availableListings": available,
            "soldListings": sold,
            "totalInquiries": inquiries,
        }
    )


@app.get("/")
def root_index():
    if DIST_DIR.exists() and (DIST_DIR / "index.html").exists():
        return send_from_directory(DIST_DIR, "index.html")
    return jsonify({"message": "Frontend build missing. Ensure `dist/public` exists."}), 500


@app.get("/<path:path>")
def spa_files(path: str):
    if path.startswith("api/") or path.startswith("uploads/"):
        return jsonify({"message": "Not found"}), 404
    if DIST_DIR.exists():
        target = DIST_DIR / path
        if target.exists() and target.is_file():
            return send_from_directory(DIST_DIR, path)
        if (DIST_DIR / "index.html").exists():
            return send_from_directory(DIST_DIR, "index.html")
    return jsonify({"message": "Frontend build missing. Ensure `dist/public` exists."}), 500


if __name__ == "__main__":
    port = int(os.getenv("PORT", "5000"))
    app.run(host="0.0.0.0", port=port, debug=True)
