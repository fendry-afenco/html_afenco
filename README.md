# Code change log (latest change only)

Only the most recent change is kept here. Each new code change replaces this entry.

## 1. When
2026-11-05, 4:00 PM PT (Thursday)

## 2. What changed
Turned on Cloudflare Web Analytics for the site. Your Cloudflare site entry for afen-co.com uses the JavaScript snippet only: your domain's DNS and email are not touched, and the site is not proxied through Cloudflare.
- The Cloudflare snippet (with your token) is on the home page, Privacy Policy, Terms of Service and the 404 page. It is not on the Unsubscribe page. The old commented-out placeholder in the home page was removed.
- Privacy Policy, section 1: the sentence saying the site uses no tracking scripts now says it uses Cloudflare Web Analytics to count visits and page views, sets no cookies, does not track visitors across other sites and builds no advertising profiles.
- Privacy Policy, section 3: Cloudflare Web Analytics added to the list of service providers we share information with.
- Terms of Service, section 9: Cloudflare Web Analytics added to the list of third-party services.
The Privacy Policy effective date stays November 5, 2026; update it to the day you publish if that is later.
Not tested against Cloudflare: loading the pages would have counted as visits. After you publish, visit afen-co.com once and check Observability > Analytics > Web analytics in Cloudflare; data can take a little while to appear, and visitors with ad blockers will not be counted. Your attorney should approve the updated policy wording.
Nothing was changed on GitHub; the live site updates only when you publish these local files.

## 3. Which files and folders
- `html_afenco/v1.3/index.html`, `privacy.html`, `terms.html`, `404.html`: the Cloudflare snippet before the closing body tag.
- `html_afenco/v1.3/privacy.html`: sections 1 and 3.
- `html_afenco/v1.3/terms.html`: section 9.
- `html_afenco/v1.3/README.md`: this change log.
- No other files were changed. `html_afenco/v1.0/`, `html_afenco/v1.1/` and `html_afenco/v1.2/` were not touched.
