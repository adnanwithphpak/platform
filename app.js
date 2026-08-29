const SITE = {
  whatsapp: "923025820230",
  nav: [
    ["Home", "/"], ["Marketplace", "/high-da-guest-post-sites/"],
    ["Services", "/guest-posting-service/"], ["Industries", "/industries/"],
    ["Blog", "/blog/"], ["About", "/about.html"], ["Contact", "/contact.html"]
  ]
};

function headerMarkup() {
  const path = location.pathname;
  const links = SITE.nav.map(([name, href]) => {
    const target = href.split("#")[0];
    const active = target === "/" ? path === "/" || path.endsWith("/index.html") : path.startsWith(target);
    return `<a class="${active ? "active" : ""}" href="${href}">${name}</a>`;
  }).join("");
  return `<header class="site-header"><nav class="nav shell">
    <a class="brand" href="/"><img class="brand-logo" src="/assets/images/brand-icon-192.png" alt="Guest Post Platform logo"><span>GuestPostPlatform</span></a>
    <button class="menu-toggle" aria-label="Toggle menu" aria-expanded="false">&#9776;</button>
    <div class="nav-links">${links}</div><a class="nav-cta" href="/contact.html">Get Started</a>
  </nav></header>`;
}

function footerMarkup() {
  return `<footer class="site-footer"><div class="shell footer-grid">
    <div class="footer-brand"><a class="brand" href="/"><img class="brand-logo" src="/assets/images/brand-icon-192.png" alt="Guest Post Platform logo"><span>GuestPostPlatform</span></a><p>A guest post marketplace and managed outreach partner for relevant editorial placements.</p></div>
    <div><h4>Services</h4><a href="/high-da-guest-post-sites/">Marketplace</a><a href="/blogger-outreach/">Blogger Outreach</a><a href="/white-label-guest-posting/">White Label</a></div>
    <div><h4>Explore</h4><a href="/industries/">Industries</a><a href="/blog/">Blog</a><a href="/about.html">About</a><a href="/contact.html">Contact</a></div>
    <div><h4>Get in touch</h4><a href="#" data-wa>WhatsApp</a><a href="/contact.html">Request a Quote</a><a href="/privacy-policy/">Privacy</a><a href="/terms-of-service/">Terms</a></div>
  </div><div class="shell footer-bottom"><span>&copy; 2026 Guest Post Platform. All rights reserved.</span><span>Marketplace &amp; managed blogger outreach</span></div></footer>`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#site-header").innerHTML = headerMarkup();
  document.querySelector("#site-footer").innerHTML = footerMarkup();
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "\u00d7" : "\u2630";
  });
  document.querySelectorAll("[data-wa]").forEach((item) => {
    const message = item.dataset.message || "Hi, I want to discuss guest posting opportunities.";
    item.href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message + "\n\nPage: " + location.href)}`;
    item.target = "_blank";
    item.rel = "noopener";
  });
  const form = document.querySelector("#contact-form");
  if (form) form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const message = `Website inquiry\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nNiche: ${data.get("niche")}\nMessage: ${data.get("message")}`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
  });
});
