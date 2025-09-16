---
title: Update Process
sidebar_label: Update Process
keywords: [admin, update process]
description: Process for updating the LMS.
image: /img/logo.svg
---

# Update Process

## Monthly Checklist
- Build: `npm run build`
- Check links: `npm run check:links`
- Version bump: update version in package.json
- Deploy: push to main branch

## Commands
- `npm run build`
- `npm run check:links`
- `git add . && git commit -m "update" && git push`

---

[Next: Home](../../index.md)
