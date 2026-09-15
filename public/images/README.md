# Farm media assets

Use real, owned or licensed media from the Focado Farms operation. The site currently expects a hero video plus a mixed gallery of still photos and short clips.

## Required photo files

Keep these filenames and JPG format, or update the paths in `lib/content.ts` if you rename them:

- `hero.jpg`
- `breeds/large-white.jpg`
- `breeds/landrace.jpg`
- `breeds/tn70.jpg`
- `gallery/farm.jpg`
- `gallery/breeding-stock.jpg`
- `gallery/piglets.jpg`
- `gallery/delivery.jpg`

Prioritise well-lit photos of the farm, healthy pigs, housing, staff handling animals, vaccination, and loading or delivery. Avoid unrelated equipment close-ups, decorative scenery, or stock photography that does not reflect the local operation.

## Required video files

Place short MP4 clips in the `public/videos` folder. The current gallery and hero are wired to these files:

- `farm-tour.mp4` — used as the hero background video
- `piglet-housing.mp4` — shows piglet housing or farm conditions
- `loading-handling.mp4` — shows handling and farm operations

## Media guidelines

- Use short, high-quality clips that show real farm activity
- Keep video lengths practical for web loading and mobile viewing
- Use a still image poster for each video if you want a cleaner preview thumbnail
- Upload everything together and keep filenames consistent with the references in `lib/content.ts`

The site structure is designed to display the hero video at the top of the piglets page and a full media gallery beneath it with both photos and videos.