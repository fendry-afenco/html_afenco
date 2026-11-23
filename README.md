# Code change log (latest change only)

Only the most recent change is kept here. Each new code change replaces this entry.

## 1. When
2026-11-23, 9:30 AM PT (Monday)

## 2. What changed
Changed the booking link used by the three "Book a call" buttons (header, hero and the Intro call row) from https://calendly.com/fendry-afen-co/30min to https://calendly.com/fendry-afen-co/new-meeting. The buttons still open in a new tab.
The link is set in one place only (`bookingUrl` in main.js), so nothing else on the site mentioned the old address.
The wording on the page still says "30-minute" intro call (in the booking section, the Intro call row, and the search and share descriptions). If the new Calendly event has a different length, that wording should be updated to match.
Nothing was changed on GitHub; the live site updates only when you publish these local files.

## 3. Which files and folders
- `html_afenco/v1.3/assets/script/main.js`: `bookingUrl` set to the new Calendly address.
- `html_afenco/v1.3/README.md`: this change log.
- No other files were changed. `html_afenco/v1.0/`, `html_afenco/v1.1/` and `html_afenco/v1.2/` were not touched.
