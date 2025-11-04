# Copilot instructions — Nijjara_ERP_DB

This repository is a Google Apps Script web app that uses a Google Spreadsheet as its primary datastore. The goal of these instructions is to help an AI coding agent make small, safe, and useful edits quickly.

Key facts (big picture)

- Server-side code is consolidated in `src/Code.js` (monolithic, ~7k lines). Most business logic, sheet-name constants and debug utilities live here.
- Front-end HTML/JS are under `src/` (examples: `Dashboard.html`, `ViewTab.js.html`, `FormModal.js.html`). These are served by Apps Script webapp endpoints.
- Project manifest is `src/appsscript.json` (runtime: V8, webapp access: ANYONE_ANONYMOUS).
- The canonical spreadsheet id is defined in `src/Code.js` as `CONFIG.SPREADSHEET_ID` and referenced elsewhere. Changing it affects the entire app.
- Documentation about schema and architecture is in `docs/` (see `ERP_Schema_and_Data_2025-11-04_06-56-51.md` and `ERP Architecture & Conflict Analysis.md`).

Where to make changes

- Small business logic fixes: edit `src/Code.js`. Keep edits small and local — the file is intentionally consolidated.
- Add/adjust front-end UI: edit the specific `src/*.html` or `src/*.js.html` file. The HTML files often expect server-side names defined in `Code.js`.
- Add new data entities: update `CONFIG.SHEETS` in `src/Code.js` (add sheet name), then add any dynamic form metadata in `DYNAMIC_FORMS_FALLBACK` and pane configs (e.g., `HR_PANE_CONFIG`).

Patterns and conventions to follow (do not invent alternatives)

- CONFIG-centric: The `CONFIG` object in `src/Code.js` is the single source for sheet names, IDs and feature flags. Examples: `CONFIG.SHEETS.USERS === 'SYS_Users'`, `CONFIG.SPREADSHEET_ID`.
- Sheet naming conventions: system tables use `SYS_` prefix; views use `PV_` prefix (e.g., `PV_HR_Employees`). Keep that pattern for consistency.
- Debugging/logging: code uses `debugLog`, `debugError`, `wrapFunctionWithErrorHandling_`, `sanitizeForLog`, and `Logger.log`. Use these helpers when adding instrumentation rather than ad-hoc console logging.
- Error handling: wrap risky logic with `withErrorHandling` or `wrapFunctionWithErrorHandling_` so logs stay consistent with existing format.
- Global functions: Apps Script exposes top-level functions to the execution environment — new public endpoints should be defined at the top level (not as module-scoped closures that hide them).

Integration points & external dependencies

- Google Spreadsheet: primary datastore — referenced by `CONFIG.SPREADSHEET_ID` and `CONFIG.SPREADSHEET_URL` in `src/Code.js`.
- Apps Script runtime: defined in `src/appsscript.json` (V8). Web app is configured as `executeAs: USER_DEPLOYING` and `access: ANYONE_ANONYMOUS`.
- package.json only lists `@modelcontextprotocol/server-github` as a dependency. There are no npm scripts defined — there is no discovered automated deploy/test flow in package.json.

Tests and developer workflows (discoverable from repo)

- There are test artifacts in `test_files/` (e.g. `Code.test.js`, `Setup.test.js`, `Dashboard.test.html`), but no npm test script or CI config was found. Tests appear to be standalone files — run them manually or wire them to a test runner before automating.
- No `clasp` configuration or CI workflow files found in the repository root. Deployments are likely manual via Apps Script console or a separate automation not checked in here.

How to implement a small feature safely (example)

1. Add sheet constant: edit `CONFIG.SHEETS` in `src/Code.js`.
2. Add dynamic form metadata: add a `DYNAMIC_FORMS_FALLBACK` entry for the new entity (look at existing entries like `Sub_PRJ_Main`).
3. Add UI changes in `src/` HTML/JS file; keep changes minimal and test in the Apps Script web UI.
4. Use `wrapFunctionWithErrorHandling_` for newly added server functions so logging and errors match existing patterns.

What not to change without asking the maintainers

- Do not change `CONFIG.SPREADSHEET_ID` or sheet names unless you are migrating data or have confirmation; this will break the app.
- Avoid large refactors of `src/Code.js` into multiple files without an accompanying deployment and test plan — the current structure is intentionally consolidated.

References (where to look)

- Monolithic server implementation: `src/Code.js`
- Empty/placeholder server setup: `src/Setup.js` (exists but currently empty)
- App manifest: `src/appsscript.json`
- Front-end pages: `src/Dashboard.html`, `src/ViewTab.js.html`, `src/FormModal.js.html`
- Docs: `docs/ERP_Schema_and_Data_2025-11-04_06-56-51.md`, `docs/ERP Architecture & Conflict Analysis.md`
- Tests (manual): `test_files/`

If anything here is incomplete or you'd like CI/deploy instructions added, tell me how you currently deploy and run tests and I'll update this file accordingly.

— End of instructions
