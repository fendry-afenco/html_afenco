# Code change log (latest change only)

Only the most recent change is kept here. Each new code change replaces this entry.

## 1. When
2026-11-04, 4:05 PM PT (Wednesday)

## 2. What changed
Connected the Contact form to Formspree by setting `formEndpoint` to https://formspree.io/f/mqppnyye. Submissions now post to Formspree, which emails them to you, and the visitor sees "Message sent. I’ll reply within one business day." The "form isn’t connected yet" message no longer appears.
The form fields (name, email, message, newsletter checkbox and the hidden spam trap) already matched what Formspree expects, so the form markup is unchanged.
Not tested with a live submission, so no test message was sent to your inbox. Send one yourself after publishing and confirm it arrives; Formspree may ask you to confirm the first submission by email.
Nothing was changed on GitHub; the live site updates only when you publish these local files.

## 3. Which files and folders
- `html_afenco/v1.2/assets/script/main.js`: `formEndpoint` set to the Formspree URL.
- `html_afenco/v1.2/README.md`: this change log.
- No other files were changed. `html_afenco/v1.0/` and `html_afenco/v1.1/` were not touched.
