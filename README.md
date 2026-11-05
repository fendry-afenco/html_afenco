# Code change log (latest change only)

Only the most recent change is kept here. Each new code change replaces this entry.

## 1. When
2026-11-04, 11:20 PM PT (Wednesday)

## 2. What changed
Fixed the handwriting notes so the "…" at the start or end of a quote can no longer be left alone on its own line. On the live site, the Okta note ("… Oktaprise was a force multiplier for the global presales organization …") wrapped so the closing "…”" sat by itself on a third line.
Two fixes: the opening "“…" and the closing "…”" are now tied to their neighbouring word with a non-breaking space (in all six notes), and the notes' text now wraps in balanced lines, so the lines come out an even length. As a result the notes look slightly narrower than before.
The quote wording, attributions and font are unchanged.
Checked in a desktop-width render through a temporary local server. Phone width not re-checked.
Nothing was changed on GitHub; the live site updates only when you publish these local files.

## 3. Which files and folders
- `html_afenco/v1.3/index.html`: non-breaking spaces next to the ellipses in the six notes.
- `html_afenco/v1.3/assets/script/styles.css`: balanced line wrapping on the notes.
- `html_afenco/v1.3/README.md`: this change log.
- No other files were changed. `html_afenco/v1.0/`, `html_afenco/v1.1/` and `html_afenco/v1.2/` were not touched.
