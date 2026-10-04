(() => {
  const cfg = window.GRADIEND_CONFIG || {};
  window.GRADIEND = { config: cfg };

  /* ---------- helper umum ---------- */
  window.escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, m => ({
    "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"
  }[m]));
  window.initials = name => String(name || "GRADIEND").split(/\s+/).filter(Boolean).slice(0,2).map(x => x[0].toUpperCase()).join("") || "G";
  window.dateID = value => new Date(value + "T00:00:00").toLocaleDateString("id-ID", { day:"numeric", month:"long", year:"numeric" });

  window.toast = message => {
    let el = document.querySelector(".toast");
    if (!el) { el = document.createElement("div"); el.className = "toast"; document.body.appendChild(el); }
    el.textContent = message; el.classList.add("show");
    clearTimeout(window.__toast); window.__toast = setTimeout(() => el.classList.remove("show"), 2800);
  };

  /* ---------- event (data ada di js/events.js) ---------- */
  // Event yang tampil: bukan draft, diurutkan dari tanggal terbaru.
  window.getEvents = () => (window.GRADIEND_EVENTS || [])
    .filter(e => e && e.id && e.title && !e.draft)
    .slice()
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));

  window.eventCard = (e, icon = "fa-mosque") => `<a class="card event-card" href="artikel.html?id=${encodeURIComponent(e.id)}">
    <div class="event-cover">${e.image ? `<img src="${escapeHtml(e.image)}" alt="" loading="lazy">` : `<div class="cover-icon"><i class="fa-solid ${icon}"></i></div>`}</div>
    <div class="event-body"><div class="meta">${escapeHtml(e.category || "Kegiatan")} · ${dateID(e.date)}</div><h3>${escapeHtml(e.title)}</h3><p>${escapeHtml(e.excerpt || "")}</p>
    <div class="author"><span class="avatar">${initials(e.author)}</span>${escapeHtml(e.author || "GRADIEND")}</div></div>
  </a>`;

  /* ---------- UI umum ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    const dark = localStorage.getItem("gradiend_theme") === "dark";
    if (dark) document.body.classList.add("dark");
    document.querySelector("[data-theme]")?.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      localStorage.setItem("gradiend_theme", document.body.classList.contains("dark") ? "dark" : "light");
    });
    const nav = document.querySelector(".nav");
    document.querySelector("[data-menu]")?.addEventListener("click", () => nav?.classList.toggle("mobile-open"));
    document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => nav?.classList.remove("mobile-open")));

    const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll(".nav-links a[data-page]").forEach(a => {
      if (a.dataset.page === current) a.classList.add("active");
    });

    /* fitur tersembunyi: ketuk "GRADIEND 32" di footer -> js/keajaiban.js (dimuat saat dibutuhkan) */
    const egg = document.querySelector(".footer-bottom span:last-child");
    if (egg) {
      egg.setAttribute("tabindex", "-1");
      egg.style.cursor = "default";
      egg.addEventListener("click", () => {
        if (window.openKeajaiban) return window.openKeajaiban();
        const sc = document.createElement("script");
        sc.src = "js/keajaiban.js";
        sc.onload = () => window.openKeajaiban && window.openKeajaiban();
        document.head.appendChild(sc);
      });
    }

    const observer = new IntersectionObserver(entries => entries.forEach(x => x.isIntersecting && x.target.classList.add("show")), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
  });
})();
