/* Two settings to fill in before you publish (see README.md):
   formEndpoint: the URL your form service gives you, e.g. "https://formspree.io/f/xxxxxxxx"
   bookingUrl:   a scheduling link (Cal.com, Calendly, etc.). Leave "" to send visitors to the contact form. */
const CONFIG = { formEndpoint: "", bookingUrl: "" };
const PHONE = "+1 415 483 5242";

if (CONFIG.bookingUrl) {
  document.querySelectorAll("[data-book]").forEach(a => { a.href = CONFIG.bookingUrl; a.rel = "noopener"; });
}

const form = document.getElementById("contact-form");
const statusEl = document.getElementById("status");
function say(msg, cls) { statusEl.textContent = msg; statusEl.className = cls || ""; }

/* "Enquire" buttons pre-fill the message so visitors don't start from a blank box. */
document.querySelectorAll("[data-service]").forEach(a => {
  a.addEventListener("click", () => {
    if (!form.message.value.trim()) form.message.value = "I’d like to talk about: " + a.dataset.service + ".";
  });
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = form.email.value.trim();
  if (!email || !form.email.checkValidity()) { say("Enter a valid email address so I can reply.", "err"); form.email.focus(); return; }
  if (form._gotcha.value) return;
  if (!CONFIG.formEndpoint) { say("The form isn’t connected yet. Please call " + PHONE + ".", "err"); return; }
  const btn = form.querySelector("button[type=submit]");
  btn.disabled = true; say("Sending…");
  try {
    const res = await fetch(CONFIG.formEndpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error(res.status);
    form.reset(); say("Message sent. I’ll reply within one business day.", "ok");
  } catch (err) {
    say("The message didn’t send. Please try again or call " + PHONE + ".", "err");
  } finally { btn.disabled = false; }
});
