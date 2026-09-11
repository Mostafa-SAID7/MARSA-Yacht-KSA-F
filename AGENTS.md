# Base44 Dev Environment

## Overview
MARSA is a pure-frontend Angular 20.3 app (Vite-based dev server via `@angular/build:dev-server`). No backend, no database, no external services or secrets required.

## Running
```bash
docker compose -f docker-compose.base44.yml up -d
```
- App served on **host port 3000** (mapped to container port 4200).
- The compose service runs `npm install` then `ng serve` with `--host 0.0.0.0 --allowed-hosts true`.
- Source is bind-mounted at `/app`; edits hot-reload via Vite watch mode (`CHOKIDAR_USEPOLLING=true` for bind-mount reliability).

## Verification
- `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/` → 200
- The served HTML includes `<script type="module" src="/@vite/client">` confirming live-reload dev mode (not a production build).

## Project Layout
- App source: `marsa/src/` (Angular standalone components, single-page home with anchor routes).
- Entry: `marsa/src/main.ts` → `AppComponent` → routes in `marsa/src/app/app.routes.ts`.
- No environment files or API calls — purely static/client-side.
