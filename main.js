// ---- CONFIG ----
const WHATSAPP_NUMBER = "923025820230"; // no + or spaces

// Build a WhatsApp link that always includes the current page URL in the message
function buildWhatsAppLink(customMessage) {
  const pageUrl = window.location.href;
  const baseMsg = customMessage || "Hi, I'm interested in guest posting.";
  const fullMsg = `${baseMsg}\n\nPage: ${pageUrl}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMsg)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  // Wire every element with data-wa-btn to the WhatsApp link (with page URL baked in)
  document.querySelectorAll("[data-wa-btn]").forEach((el) => {
    const msg = el.getAttribute("data-wa-msg") || null;
    el.setAttribute("href", buildWhatsAppLink(msg));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }

  // Highlight active nav link based on current file name
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav.main-nav a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });

  // Contact form: since this is a static site, submit via WhatsApp instead of a server
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("cf-name").value.trim();
      const email = document.getElementById("cf-email").value.trim();
      const niche = document.getElementById("cf-niche") ? document.getElementById("cf-niche").value.trim() : "";
      const message = document.getElementById("cf-message").value.trim();
      const composed = `New inquiry from website contact form:\nName: ${name}\nEmail: ${email}\nNiche: ${niche}\nMessage: ${message}`;
      window.open(buildWhatsAppLink(composed), "_blank");
    });
  }
});
