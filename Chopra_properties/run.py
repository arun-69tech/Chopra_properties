from __future__ import annotations

import argparse
import socket
import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parent


def run_command(command: list[str], description: str) -> None:
    print(f"\n[run.py] {description}...")
    result = subprocess.run(["cmd", "/c", *command], cwd=ROOT)
    if result.returncode != 0:
        raise SystemExit(result.returncode)


def is_port_in_use(host: str, port: int) -> bool:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.settimeout(0.3)
        return sock.connect_ex((host, port)) == 0


def find_available_port(host: str, preferred_port: int, max_tries: int = 25) -> int:
    if not is_port_in_use(host, preferred_port):
        return preferred_port

    for offset in range(1, max_tries + 1):
        candidate = preferred_port + offset
        if not is_port_in_use(host, candidate):
            return candidate

    raise RuntimeError(
        f"Could not find a free port between {preferred_port} and {preferred_port + max_tries}."
    )


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Run Chopra Properties backend on Uvicorn."
    )
    parser.add_argument("--host", default="127.0.0.1", help="Host for Uvicorn")
    parser.add_argument("--port", type=int, default=8000, help="Preferred port for Uvicorn")
    args = parser.parse_args()

    selected_port = find_available_port(args.host, args.port)
    if selected_port != args.port:
        print(
            f"\n[run.py] Port {args.port} is in use. Switching to available port {selected_port}."
        )

    print(f"\n[run.py] Starting app at http://{args.host}:{selected_port}")
    print("[run.py] Press Ctrl+C to stop.\n")
    run_command(
        [
            sys.executable,
            "-m",
            "uvicorn",
            "asgi:app",
            "--host",
            args.host,
            "--port",
            str(selected_port),
        ],
        "Starting backend (Flask via Uvicorn)",
    )


if __name__ == "__main__":
    main()
