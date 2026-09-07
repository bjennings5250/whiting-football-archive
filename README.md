# Whiting Oilers Football Archive

The permanent historical archive for Whiting High School football in Whiting, Indiana. The responsive site preserves the fully documented 1996 and 2016 teams, including season stories, schedules, rosters, statistics, honors, photographs, and video.

Production: [https://whitingfootball.com](https://whitingfootball.com)

## Archive routes

- `/` — archive homepage
- `/seasons` — season index
- `/seasons/1996` — 1996 season archive, including the owner-supplied highlight video
- `/seasons/2016` — 2016 regional championship season archive
- `/photos` and `/photos/:year` — season photo galleries
- `/history` — program history

## Local development

Use Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. To verify the historical data, referenced media, and production build before a release, run:

```bash
python3 scripts/verify-archive.py
npm run build
```

## Production workflow

`main` is the production branch. Vercel builds and deploys every commit to `main`; pull requests and other branches receive preview deployments. No environment variables or external data services are required.

The ongoing publishing workflow is:

1. Edit and verify the archive locally.
2. Commit and push the change to GitHub.
3. Vercel automatically creates the corresponding preview or production deployment.

The canonical production hostname is `whitingfootball.com`. `www.whitingfootball.com` redirects to the canonical HTTPS URL.

## Release history and rollback

- Version 14 includes the owner-supplied 1996 highlight video and begins at commit `add7219f95101f83193536c5e47182644b0d7ee6`.
- Version 13 is preserved at commit `8f0e11cb69d12992c3b60dc9e7ef8f159da964f2` and by the `v13-rollback` Git tag.

To inspect the Version 13 rollback point without changing the production branch:

```bash
git switch --detach v13-rollback
```

Return to current production with `git switch main`.

## Content notes

Historical facts and source notes live under `data/`. Archive media lives under `public/`. Do not alter verified historical records without a documented source or owner confirmation. Do not commit credentials, local environment files, generated builds, or Vercel metadata; these are excluded by `.gitignore`.
