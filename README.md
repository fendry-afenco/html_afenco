# Code change log (latest change only)

Only the most recent change is kept here. Each new code change replaces this entry.

## 1. When
2026-11-05, 7:55 PM PT (Thursday)

## 2. What changed
Switched the site's Formspree form address from https://formspree.io/f/mqppnyye to the new one, https://formspree.io/f/mpppnoqo, in all three places it was used:
- the Contact form on the home page (the form's fallback `action`),
- the Contact form's script setting (`CONFIG.formEndpoint` in main.js), which is what the page actually uses when JavaScript runs,
- the Unsubscribe page's form.
The old address no longer appears anywhere in v1.3. The Unsubscribe page now uses the same new form as the Contact form; tell me if you want it on a different form.
Not tested with a live submission, so no test message was sent. After you publish, submit the contact form and the unsubscribe form once each and check that both arrive where you set up the new Formspree form to deliver (confirm the notification email on the new form in Formspree first).
Nothing was changed on GitHub; the live site updates only when you publish these local files.

## 3. Which files and folders
- `html_afenco/v1.3/index.html`: the Contact form's `action`.
- `html_afenco/v1.3/assets/script/main.js`: `CONFIG.formEndpoint`.
- `html_afenco/v1.3/unsubscribe.html`: the Unsubscribe form's `action`.
- `html_afenco/v1.3/README.md`: this change log.
- No other files were changed. `html_afenco/v1.0/`, `html_afenco/v1.1/` and `html_afenco/v1.2/` were not touched.
