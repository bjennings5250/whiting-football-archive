# Whiting Football Archive

The Whiting Football Archive is a responsive historical site preserving Whiting High School football seasons, team records, rosters, statistics, photos, and video.

## Archive routes

- `/` — archive homepage
- `/seasons` — season index
- `/seasons/1996` — 1996 season archive, including the owner-supplied highlight video
- `/seasons/2016` — 2016 regional championship season archive
- `/photos` and `/photos/:year` — season photo galleries
- `/history` — program history

## Local development

Node.js 22.13 or newer is required.

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

Run the archive data checks with:

```bash
python3 scripts/verify-archive.py
```

## Production workflow

`main` is the production branch. Branches and pull requests are intended to receive preview deployments before merge. The canonical production hostname is `whitingfootball.com`; `www.whitingfootball.com` redirects to the canonical hostname.

Do not commit secrets. Local environment files, generated builds, dependencies, and Vercel metadata are excluded by `.gitignore`.

## Release history and rollback

- Version 14: `add7219f95101f83193536c5e47182644b0d7ee6` — adds the owner-supplied 1996 highlight video.
- Version 13 rollback point: `8f0e11c` — the prior verified release.

To inspect the Version 13 source without changing the production branch:

```bash
git switch --detach 8f0e11c
```

Return to production with `git switch main`.
