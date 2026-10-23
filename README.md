# Code change log (latest change only)

Only the most recent change is kept here. Each new code change replaces this entry.

## 1. When
2026-10-22, 7:25 PM PT (Thursday)

## 2. What changed
Changed the message the Contact form shows while it isn't connected to a form service yet. It now reads "The form isn’t connected yet. Please email me at fendry@afen-co.com" instead of asking visitors to call the phone number.
The other form messages (invalid email, sending, sent, and send failed) are unchanged. The send-failed message still mentions the phone number.
Nothing was changed on GitHub; the live site updates only when you publish these local files.

## 3. Which files and folders
- `html_afenco/v1.1/assets/script/main.js`: the "form isn't connected" message text in the form's submit handler.
- `html_afenco/v1.1/README.md`: this change log.
- No other files were changed. `html_afenco/v1.0/` was not touched.
