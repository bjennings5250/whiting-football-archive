# Maintaining the Whiting Football archive

## Add a season
Add a Season record to data/seasons.ts. Reuse the existing schema; /seasons/[year] is the shared template. Set status to collecting while assembling material, and documented only once there is meaningful content. Add optimized images to public/photos/<year>. Give every photo accurate alternative text, dimensions, and a thumbnail. The template hides empty schedules, rosters, coaching assistants, captains, honors, stories, and photos.

## Reunion promotion
Set enabled to false in data/reunion.ts to remove the reunion component on every page. Archive records and photographs remain intact.

## Sources and missing material
See PHASE-2-REVIEW.md for the current content audit, source conflicts, and browser QA. The detailed roster, statistical tables, leaders, honors, videos and photographs live in data files. Empty optional sections remain hidden. Store unresolved source disagreements in the season discrepancies array. Captains and an official team photograph remain unverified.

## Photographs
The revised gallery contains 55 selected photographs, 18 featured on the season page, after review of 419 distinct images. Original filenames and Dropbox provenance are in docs/photo-sources.json. Set the season gallery array for its larger gallery and photos for its featured selection. The shared photo viewer supplies keyboard and touch navigation.

## Development
Use Node 22.13 or later. npm install, npm run dev, npm run build. Sites registration is in .openai/hosting.json. Do not put credentials into source files. The website has no database, CMS, accounts, or forms. Hosting access controls are managed by Sites independently of the archive code.
