# Publishing Local Changes to GitHub

Follow these steps to push the latest updates to `Code.js` and `Dashboard.html` (or any other files) from your local Apps Script clone to GitHub.

## 1. Confirm You Are on the Correct Branch
```bash
git status -sb
git branch
```
Verify that the active branch is the one you want to update (for example, `work`).

## 2. Pull the Latest Changes (Optional but Recommended)
```bash
git pull origin <branch-name>
```
Replace `<branch-name>` with your branch. This ensures your local copy is up to date before committing.

## 3. Stage the Modified Files
```bash
git add src/Code.js src/Dashboard.html
```
You can also run `git add .` to stage all modified files if you are confident about the changes.

## 4. Review the Staged Changes
```bash
git status

git diff --cached
```
Check the output to confirm that only the intended updates are staged.

## 5. Commit the Changes with a Descriptive Message
```bash
git commit -m "Describe the updates you made"
```
Choose a message that clearly summarizes the changes (e.g., `"Refresh SYS dashboard filters and bulk actions"`).

## 6. Push the Commit to GitHub
```bash
git push origin <branch-name>
```
This uploads your commit to the remote GitHub repository.

## 7. Create or Update a Pull Request (If Needed)
If you are collaborating with others, open a pull request on GitHub so teammates can review and merge the changes.

---
**Tip:** Run any required tests or linters before committing to keep the main branch stable.
