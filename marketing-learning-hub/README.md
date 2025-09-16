
# Marketing Learning Paths LMS

[![CI](https://github.com/<YOUR_GITHUB_USERNAME>/marketing-learning-hub/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/<YOUR_GITHUB_USERNAME>/marketing-learning-hub/actions)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-blue)](https://<YOUR_GITHUB_USERNAME>.github.io/marketing-learning-hub/)

## Quick Start

```sh
npm create docusaurus@latest marketing-learning-hub classic --typescript
cd marketing-learning-hub
npm i
npm run start
```

## Config You Must Change
- `docusaurus.config.ts`: `url`, `baseUrl`, `organizationName`, `projectName`
- `.github/workflows/deploy-pages.yml`: ensure branch is `main`

## Deploy Notes
- Enable GitHub Pages (Settings → Pages → Source: GitHub Actions)
- Ensure Actions permissions: "Read and write" for workflows
- Push to `main` to trigger deploy

## Troubleshooting
- **Broken links error:** See `onBrokenLinks` in `docusaurus.config.ts` (set to `throw` for strict, change to `warn` if needed)
- **Base URL 404s:** Confirm `baseUrl` is `/marketing-learning-hub/` for project pages
- **Cache issues:** Run `npm ci` to clear and reinstall
- **GitHub Pages:** Ensure branch is `main` and workflow permissions are correct

## Information Architecture
- Tracks → Modules → Quizzes → Resources → Admin

---

## Local Setup
```sh
npm create docusaurus@latest marketing-learning-hub classic --typescript
cd marketing-learning-hub
npm i
npm run start
```

## Git + GitHub
```sh
git init
git add .
git commit -m "feat: scaffold Marketing Learning Paths (Docusaurus v3)"
gh repo create <YOUR_GITHUB_USERNAME>/marketing-learning-hub --public --source=. --remote=origin --push
# or set origin manually then
git push -u origin main
```

## GitHub Pages
- In GitHub → Settings → Pages → Build & deployment: Source = GitHub Actions
- Ensure Actions permissions allow `Read and write` for workflows
- Push a small change to main to trigger deploy:
	```sh
	echo "# deploy" >> docs/about.md
	git add -A && git commit -m "chore: trigger deploy" && git push
	```

## Verify
- Open: https://<YOUR_GITHUB_USERNAME>.github.io/marketing-learning-hub/
- If 404, confirm `url` and `baseUrl` in config and that Actions ran successfully.
