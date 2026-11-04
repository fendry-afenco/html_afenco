# Code change log (latest change only)

Only the most recent change is kept here. Each new code change replaces this entry.

## 1. When
2026-11-04, 10:05 AM PT (Wednesday)

## 2. What changed
Connected the "Book a call" buttons to your 30-minute Calendly link (https://calendly.com/fendry-afen-co/30min). The three buttons (header "Book a call", hero "Book an intro call", and the free Intro call row in the booking list) now open Calendly in a new tab instead of scrolling to the contact form.
The 60-minute Calendly link (https://calendly.com/fendry-afen-co/new-meeting) was not placed anywhere, because the page has no 60-minute service. It can be added once you decide where it belongs.
The contact form is still not connected (`formEndpoint` is empty).
Nothing was changed on GitHub; the live site updates only when you publish these local files.

## 3. Which files and folders
- `html_afenco/v1.2/assets/script/main.js`: `bookingUrl` set to the 30-minute link; the booking buttons open in a new tab with `noopener noreferrer`.
- `html_afenco/v1.2/README.md`: this change log.
- No other files were changed. `html_afenco/v1.0/` and `html_afenco/v1.1/` were not touched.
