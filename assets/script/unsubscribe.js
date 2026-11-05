/* Unsubscribe page: sends the request through the form's own action address (Formspree). */
const form = document.getElementById("unsub-form");
const statusEl = document.getElementById("status");
function say(msg, cls) { statusEl.textContent = msg; statusEl.className = cls || ""; }

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = form.email.value.trim();
  if (!email || !form.email.checkValidity()) { say("Enter the email address you want to unsubscribe.", "err"); form.email.focus(); return; }
  if (form._gotcha.value) return;
  const btn = form.querySelector("button[type=submit]");
  btn.disabled = true; say("Sending…");
  try {
    const res = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error(res.status);
    form.reset();
    say("Thanks. I’ve received your request and will remove you from the update list promptly, and no later than 10 business days.", "ok");
  } catch (err) {
    say("The request didn’t send. Please try again, or email info@afen-co.com with the word “unsubscribe”.", "err");
  } finally { btn.disabled = false; }
});
