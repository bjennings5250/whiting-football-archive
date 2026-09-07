# Maintaining the Whiting Football archive

## Add a season
Add a Season record to data/seasons.ts. Reuse the existing schema; /seasons/[year] is the shared template. Set status to collecting while assembling material, and documented only once there is meaningful content. Add optimized images to public/photos/<year>. Give every photo accurate alternative text, dimensions, and a thumbnail. The template hides empty schedules, rosters, coaching assistants, captains, honors, stories, and photos.

## Reunion promotion
Set enabled to false in data/reunion.ts to remove the reunion component on every page. Archive records and photographs remain intact.

## Sources and missing material
The 2016 season preserves the supplied brief's results and totals. Tournament rounds/results were checked against the official IHSAA-linked Class 2A bracket on September 6, 2026 (Central time). The 43-player MaxPreps all-time roster entry provided names and grades; the detailed roster could not be retrieved, so jersey numbers and positions are absent. Names retain source spelling pending reconciliation with an original team roster.

Assistant coaches, captains, honors, and statistical leaders remain empty. Do not fill them from inference. Store disagreements in discrepancies; the season page displays record notes. Store provenance in each season's sources.

1996 currently has no supplied season records or photographs and is identified as a collection in progress. It is not presented as a completed archive.

## Photographs
The original Dropbox collection contains 1,434 JPGs. An 80-image evenly spaced sample was reviewed, and 60 images were selected for this initial gallery; 18 are curated on the season page. The gallery is a selection, not an exhaustive digitization of all 1,434 photographs. Web images are resized to a maximum 2000px; thumbnails to 640px, retaining original files in Dropbox. All captions describe visible subjects without inventing identities or game details. docs/photo-sources.json retains source filenames and Dropbox identifiers. data/photos-2016.json contains public presentation data only.

To add another gallery, set that season’s gallery array to its complete photo list. The shared gallery route uses it automatically. Season photo arrays should contain just the curated story selection.

## Development
Use Node 22.13 or later. npm install, npm run dev, npm run build. Sites registration is in .openai/hosting.json. Do not put credentials into source files. The website has no database, CMS, accounts, or forms. Hosting access controls are managed by Sites independently of the archive code.
