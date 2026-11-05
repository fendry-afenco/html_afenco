/* Thank-you page: shows what the visitor entered. The details are passed from the contact form
   through sessionStorage (they stay in this browser tab and are never put in the page address). */
(function () {
  let data = null;
  try {
    const raw = sessionStorage.getItem("afenSent");
    if (raw) data = JSON.parse(raw);
    sessionStorage.removeItem("afenSent");   // show once, then forget
  } catch (e) { data = null; }
  if (!data) return;                          // direct visit or storage blocked: generic thank-you only

  const fields = { "s-name": "name", "s-title": "title", "s-company": "company", "s-email": "email" };
  let shown = false;
  Object.keys(fields).forEach(function (id) {
    const v = data[fields[id]];
    if (typeof v === "string" && v.trim()) {
      document.getElementById(id).textContent = v.slice(0, 200);   // textContent: never interpreted as HTML
      shown = true;
    } else {
      document.getElementById(id).parentElement.hidden = true;
    }
  });
  if (shown) document.getElementById("sent").hidden = false;
})();
