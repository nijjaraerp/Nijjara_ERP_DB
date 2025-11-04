# Auto-sync GitHub -> VS Code -> Apps Script

This document explains how the repository is configured to auto-sync code to Google Apps Script using `clasp` and GitHub Actions.

Files added:

- `.github/workflows/clasp-sync.yml` — GitHub Actions workflow that runs `npx @google/clasp push --force` on push to `main` (or via manual dispatch).
- `.vscode/settings.json` — workspace settings to enable `git.autofetch` and hide local `~/.clasprc.json` from the editor.

Required secret (add in GitHub repo Settings → Secrets & variables → Actions):

- `CLASPRC_JSON` — the contents of your local `%USERPROFILE%\.clasprc.json` after you run `clasp login` locally. This allows the workflow to authenticate and push to Apps Script.

How to produce `CLASPRC_JSON` locally:

1. On your development machine run:

```powershell
npx @google/clasp login
```

2. Copy the contents of the `%USERPROFILE%\.clasprc.json` file (or `~/.clasprc.json` on Linux/macOS).

3. In GitHub, create a new repository secret named `CLASPRC_JSON` and paste the full JSON content.

Security notes:

- Treat `CLASPRC_JSON` like a password. Do not paste it into issues or chat.
- Consider using a service account for CI deployments instead of a personal clasp token. If you choose that route, add `GCP_SERVICE_ACCOUNT_KEY` as the secret and modify the workflow to use it.

Testing the workflow:

1. Commit and push this branch (or merge to `main`) after adding the secret.
2. On GitHub Actions, trigger the workflow (it runs on push to `main`, or use 'Run workflow' on the Actions page if on another branch).
3. Inspect the workflow logs — the step 'Push to Apps Script (clasp)' should run `npx @google/clasp push` and report success or an error message from clasp.

If you want, I can also add a service-account-based workflow variant. Tell me which approach you prefer.
