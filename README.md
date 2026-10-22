# Code change log (latest change only)

Only the most recent change is kept here. Each new code change replaces this entry.

## 1. When
2026-10-19, 10:37 PM PT (Monday)

## 2. What changed
Made the content area of every section 1350px wide on large screens (header bar, hero, About, Practice areas, Demo Strategy Review, How to work with me, Contact, footer, and the Privacy, Terms and 404 pages).
Before, 1350px was the width including the side margins, so the content itself was only 1254px wide. Now the content is 1350px and the side margins sit outside it.
Screens narrower than about 1446px still shrink to fit (for example, the content is 1344px wide on a 1440px screen), and phones are unchanged.

## 3. Which files and folders
- `html_afenco/v1.1/assets/script/styles.css`: the `.wrap` rule's `max-width` changed from `var(--wrap)` to `calc(var(--wrap) + var(--gut) * 2)`. The `--wrap` value stays at 1350px.
- `html_afenco/v1.1/README.md`: this change log.
- No other files were changed. `html_afenco/v1.0/` was not touched.
