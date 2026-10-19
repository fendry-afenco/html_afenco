# Code change log (latest change only)

Only the most recent change is kept here. Each new code change replaces this entry.

## 1. When
2026-10-18, 6:03 PM PT (Sunday)

## 2. What changed
Widened the page container (class `wrap`) from a 1120px to a 1350px maximum width.
The container still shrinks to fit narrower screens, so phones and small laptops look the same.
Applies to every page that uses the shared stylesheet: home, privacy, terms and 404.

## 3. Which files and folders
- `html_afenco/v1.1/styles.css`: the `--wrap` value at the top of the file changed from `1120px` to `1350px`.
- No other files were changed. `html_afenco/v1.0/` was not touched.
