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

  /* ---------- animasi loading (hanya sekali per sesi, tanpa gambar/library tambahan) ---------- */
  // Mode lewat js/config.js -> preloader: "session" (default, sekali per sesi) | "always" | "off"
  const preMode = cfg.preloader || "session";
  let preActive = false;
  try {
    preActive = preMode === "always" || (preMode === "session" && !sessionStorage.getItem("gradiend_intro"));
  } catch (e) { preActive = preMode !== "off"; }

  if (preActive) {
    try { sessionStorage.setItem("gradiend_intro", "1"); } catch (e) {}
    const css = document.createElement("style");
    css.textContent = `
#gd-pre{position:fixed;inset:0;z-index:99999;display:grid;place-items:center;background:radial-gradient(circle at 50% 42%,#0b6b4c 0%,#064634 45%,#03251a 100%);color:#fff;transition:opacity .7s ease,visibility .7s ease,transform .7s cubic-bezier(.7,0,.2,1)}
#gd-pre.gd-out{opacity:0;visibility:hidden;transform:scale(1.04)}
#gd-pre .gd-glow{position:absolute;width:min(70vw,520px);aspect-ratio:1;border-radius:50%;background:radial-gradient(circle,rgba(239,217,142,.28),rgba(239,217,142,0) 65%);animation:gdBreath 2.4s ease-in-out infinite}
#gd-pre .gd-box{position:relative;display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 22px}
#gd-pre .gd-logo{position:relative;width:min(52vw,210px);overflow:hidden;opacity:0;animation:gdPop .9s cubic-bezier(.2,.9,.2,1.15) .1s forwards}
#gd-pre .gd-logo img{display:block;width:100%;height:auto;filter:drop-shadow(0 10px 28px rgba(0,0,0,.35))}
#gd-pre .gd-logo:after{content:"";position:absolute;top:0;left:-60%;width:40%;height:100%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.55),transparent);transform:skewX(-18deg);animation:gdShine 1.5s ease .9s 1}
#gd-pre .gd-ar{margin-top:26px;font-family:Amiri,"Amiri Quran",serif;font-size:clamp(22px,5.4vw,30px);line-height:1.6;color:#f0d685;opacity:0;animation:gdUp .8s ease .55s forwards}
#gd-pre .gd-tag{margin-top:4px;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#cae6d7;font-weight:700;opacity:0;animation:gdUp .8s ease .8s forwards}
#gd-pre .gd-bar{margin-top:26px;width:min(56vw,190px);height:3px;border-radius:99px;background:rgba(255,255,255,.14);overflow:hidden;opacity:0;animation:gdUp .6s ease .9s forwards}
#gd-pre .gd-bar i{display:block;height:100%;width:100%;transform-origin:left;transform:scaleX(0);background:linear-gradient(90deg,#cba34d,#f0d685);border-radius:inherit;animation:gdFill var(--gd-dur,1.2s) cubic-bezier(.4,0,.2,1) .9s forwards}
#gd-pre.gd-done .gd-bar i{animation:none;transform:scaleX(1);transition:transform .25s ease}
html.gd-lock,html.gd-lock body{overflow:hidden}
@keyframes gdPop{0%{opacity:0;transform:translateY(18px) scale(.82) rotate(-3deg)}100%{opacity:1;transform:none}}
@keyframes gdUp{0%{opacity:0;transform:translateY(12px)}100%{opacity:1;transform:none}}
@keyframes gdShine{0%{left:-60%}100%{left:130%}}
@keyframes gdFill{0%{transform:scaleX(0)}100%{transform:scaleX(.92)}}
@keyframes gdBreath{0%,100%{transform:scale(.9);opacity:.7}50%{transform:scale(1.08);opacity:1}}
@media(prefers-reduced-motion:reduce){#gd-pre .gd-glow,#gd-pre .gd-logo:after{animation:none}#gd-pre .gd-logo,#gd-pre .gd-ar,#gd-pre .gd-tag,#gd-pre .gd-bar{opacity:1;animation:none}#gd-pre .gd-bar i{animation:none;transform:scaleX(1)}}`;
    const el = document.createElement("div");
    el.id = "gd-pre";
    el.setAttribute("role", "status");
    el.setAttribute("aria-label", "Memuat GRADIEND");
    el.innerHTML = `<div class="gd-glow"></div><div class="gd-box">
      <div class="gd-logo"><img src="assets/gradiend-logo.png" alt="GRADIEND"></div>
      <div class="gd-ar" dir="rtl" lang="ar">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
      <div class="gd-tag">Generasi Dakwah Islam Enam Dua</div>
      <div class="gd-bar"><i></i></div></div>`;
    // app.js dimuat di <head>: pasang overlay sebelum halaman sempat tergambar (tanpa kedip)
    document.head.appendChild(css);
    document.documentElement.appendChild(el);
    document.documentElement.classList.add("gd-lock");

    const MIN = 1500, MAX = 4500, t0 = performance.now();
    let closed = false;
    const close = () => {
      if (closed) return; closed = true;
      el.classList.add("gd-done");
      setTimeout(() => {
        el.classList.add("gd-out");
        document.documentElement.classList.remove("gd-lock");
        document.dispatchEvent(new Event("gradiend:ready"));   // animasi .reveal baru mulai setelah overlay hilang
        setTimeout(() => { el.remove(); css.remove(); }, 800);
      }, 250);
    };
    const loaded = () => setTimeout(close, Math.max(0, MIN - (performance.now() - t0)));
    if (document.readyState === "complete") loaded(); else window.addEventListener("load", loaded, { once: true });
    setTimeout(close, MAX);                                     // pengaman: jangan pernah menahan situs lebih dari 4,5 detik
  }

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

    // animasi muncul saat di-scroll; kalau loading masih tampil, tunggu sampai selesai agar tidak terbuang di balik overlay
    const startReveal = () => {
      const observer = new IntersectionObserver(entries => entries.forEach(x => {
        if (x.isIntersecting) { x.target.classList.add("show"); observer.unobserve(x.target); }
      }), { threshold: .12 });
      document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    };
    if (document.getElementById("gd-pre")) document.addEventListener("gradiend:ready", startReveal, { once: true });
    else startReveal();
  });
})();
