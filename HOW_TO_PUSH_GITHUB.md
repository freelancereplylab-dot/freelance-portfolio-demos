# How to push these to GitHub

I don't have your GitHub credentials, so you'll do this part yourself. It takes 5 minutes.

## Option A — Push each project as a separate repo (recommended for portfolio)

Each project becomes a standalone repo. Cleaner per-project README on GitHub, easier to link from Fiverr/Contra portfolio.

1. Sign in to https://github.com under your `freelancereplylab@gmail.com` account (or create a new account if you want a separate identity).
2. For each of the 4 folders, create a new public repo with the same name:
   - `restaurant-landing`
   - `catalog-scraper`
   - `form-fill-csv`
   - `kpi-dashboard-bot`
3. From inside each project folder, run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

(Replace `<your-username>` and `<repo-name>`.)

## Option B — One mono-repo `portfolio`

Easier (1 command sequence), but visitors see all projects in one repo instead of dedicated ones.

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

## After pushing

For each repo, on GitHub:
1. Click the gear icon next to "About" → add a one-line description (copy from each project's `portfolio-description.md`).
2. Add topics: `nextjs`, `puppeteer`, `automation`, `tailwind`, etc. so the repo is discoverable.
3. Pin the 4 repos on your GitHub profile (Customize your pins button).

Then on Fiverr:
- Profile → Portfolio → Add project — link the GitHub URL + paste the short description from `portfolio-description.md` + upload a screenshot (instructions in each project's README).

On Contra:
- Profile → Work → Add work → External link → paste the GitHub URL + screenshot + description.

## If you want me to push for you

You'd need to give me either:
- A GitHub Personal Access Token (Settings → Developer settings → PAT → Tokens (classic) → `repo` scope), OR
- Run `gh auth login` yourself once on this machine and tell me when it's done

Then I can `git init && commit && push` programmatically for each repo. Just say the word.
