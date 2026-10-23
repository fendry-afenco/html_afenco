# Code change log (latest change only)

Only the most recent change is kept here. Each new code change replaces this entry.

## 1. When
2026-10-22, 6:25 PM PT (Thursday)

## 2. What changed
Fixed the hero legend ("What are OODA and CTEM?" block) breaking when the browser window is resized to about 800-1100px wide. The legend was locked to one wide row, but the hero image column is narrower than that at those widths, so the label squeezed into five short lines and the block spilled out to the left, under the "Book an intro call" button.
Now the legend decides based on the width of the hero image column, not the screen width:
- Wide enough (image column 760px or more, e.g. large desktop screens): unchanged, label on the left and the lines on the right, right-aligned under the image.
- Narrower: the label sits on top and the lines below it, left-aligned with the image. The lines can wrap inside the image width, so nothing overflows.
This replaces the earlier "screen 780px or narrower" stacking rule, which did not cover the in-between widths.
Nothing was changed on GitHub; the live site updates only when you publish these local files.

## 3. Which files and folders
- `html_afenco/v1.1/assets/script/styles.css`: `.hero-art` is now a named size container, and the legend's stacking rule is a container query (`@container hero-art (max-width:760px)`) instead of a screen-width media query.
- `html_afenco/v1.1/README.md`: this change log.
- No other files were changed. `html_afenco/v1.0/` was not touched.
