# Afen website v1.1

Upload the CONTENTS of this folder (not the folder itself) to the root of your static host
(Cloudflare Pages, GitHub Pages, etc.). Open index.html in a browser to preview locally.

## Before you publish (2 settings)
Edit main.js, near the top:
- formEndpoint: URL from a form service (e.g. Formspree). Until set, the form tells visitors to call.
- bookingUrl: a scheduling link (Cal.com, Calendly). Until set, "Book a call" jumps to the contact form.

## Please confirm (written by Claude, not from your site)
- About: "7.5 years at Okta ... grew [the demo library] from about 30 to a peak of 680 monthly users" (from your notes).
- Hourly-rate note under the price list ("Hourly rates differ by practice area"). Rates work out to
  $200, $200, $300, $400 per hour. Edit or align the prices if you prefer.
- privacy.html and terms.html are general templates, not legal advice. They say the site sets no
  cookies and uses no tracking scripts. Update them if you add analytics, a scheduling tool or payments.
- Domain: canonical, sitemap and share-image links assume https://afen-co.com/.

## Optional
- Private analytics: in index.html, fill in the commented Cloudflare Web Analytics snippet at the bottom.

## What changed from v1.0
Shorter headline; OODA/CTEM caption; name and proof point in About; "How to work with me" 3-step line;
hourly equivalents and rate note; Enquire buttons that pre-fill the message; 44 px tap targets;
font built into styles.css (no Google Fonts); privacy.html, terms.html, 404.html; share image, PNG
favicons, robots.txt, sitemap.xml; richer structured data (founder, logo, area served, services).

## Files
index.html, privacy.html, terms.html, 404.html, styles.css, main.js, favicon.svg, favicon-32.png,
apple-touch-icon.png, icon-192.png, icon-512.png, robots.txt, sitemap.xml, assets/img/*
