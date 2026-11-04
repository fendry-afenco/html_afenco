# Code change log (latest change only)

Only the most recent change is kept here. Each new code change replaces this entry.

## 1. When
2026-11-04, 9:35 AM PT (Wednesday)

## 2. What changed
Reverted the headshot in the Credentials section to the earlier sharpened version ("headshot-sharp-mild"): the original small photo enlarged 2x, lightly de-noised and mildly sharpened (694 x 686 px). This undoes the straightened and re-cropped versions made afterwards.
The image's width and height attributes were set back to 694 x 686. The page layout is unchanged.
Nothing was changed on GitHub; the live site updates only when you publish these local files.

## 3. Which files and folders
- `html_afenco/v1.2/assets/img/fendry-utama.jpg`: restored to the 694 x 686 sharpened version.
- `html_afenco/v1.2/index.html`: width and height attributes on the headshot image.
- `html_afenco/v1.2/README.md`: this change log.
- No other files were changed. `html_afenco/v1.0/` and `html_afenco/v1.1/` were not touched.
