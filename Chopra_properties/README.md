# Chopra Properties

Chopra Properties is a full-stack property listing platform with:
- Flask backend APIs
- SQLite database
- Image uploads
- Static frontend served from `dist/public`

## Project Structure

```text
Chopra_properties/
|- asgi.py
|- run.py
|- render.yaml
|- backend/
|  |- server.py
|  |- requirements.txt
|  `- chopra.db
|- dist/
|  `- public/
`- backend/uploads/ (created automatically at runtime)
```

## Local Run

Prerequisites:
- Python 3.11+

Install dependencies:

```bash
pip install -r backend/requirements.txt
pip install uvicorn starlette
```

Run app:

```bash
python run.py
```

Open:
- `http://127.0.0.1:8000` (or the next free port shown by `run.py`)

## Environment Variables

Create a local `.env` (do not commit):

```env
SESSION_SECRET=change_this_to_a_long_random_value
ADMIN_USERNAME=admin
ADMIN_PASSWORD=strong_password_here
```

## Render Deployment

This repository includes `render.yaml` for Blueprint deployment.

### 1) Push code to GitHub

```bash
git add .
git commit -m "add render deployment docs"
git push
```

### 2) Deploy with Render Blueprint

1. Go to Render Dashboard
2. Click `New +` -> `Blueprint`
3. Select this GitHub repository
4. Confirm deploy

Render uses:
- Build: `pip install -r backend/requirements.txt uvicorn starlette`
- Start: `uvicorn asgi:app --host 0.0.0.0 --port $PORT`

### 3) Set Environment Variables in Render

In Render service settings, add:

- `SESSION_SECRET`
- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`

### 4) Persistent Disk

`render.yaml` mounts a persistent disk at:
- `/opt/render/project/src/backend`

This protects SQLite data (`backend/chopra.db`) and uploaded files (`backend/uploads/`) across restarts/redeploys.

## Domain Setup (Hostinger -> Render)

1. In Render: `Settings` -> `Custom Domains`
2. Add:
- `yourdomain.com`
- `www.yourdomain.com`
3. Copy DNS records shown by Render
4. In Hostinger DNS, add those same records
5. Wait for propagation and SSL issuance

## Important Notes

- Keep `.env` private.
- Uploaded files are configured to save in `backend/uploads`, which is inside the mounted disk path.
- Never commit real secrets in code or git history.
