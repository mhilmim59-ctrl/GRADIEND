// Membuat sitemap.xml otomatis (halaman utama + setiap artikel di js/events.js).
// Jalankan setiap kali menambah event baru:   node scripts/generate-sitemap.js
// Lalu commit sitemap.xml bersama perubahan lainnya.
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const load = file => {
  const sandbox = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, file), "utf8"), sandbox);
  return sandbox.window;
};

const SITE = (load("js/config.js").GRADIEND_CONFIG.siteUrl || "https://gradiend.vercel.app").replace(/\/$/, "");
const events = (load("js/events.js").GRADIEND_EVENTS || [])
  .filter(e => e && e.id && e.title && !e.draft)
  .sort((a, b) => String(b.date).localeCompare(String(a.date)));

const today = new Date().toISOString().slice(0, 10);
const latest = events.length ? events[0].date : today;
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const pages = [
  ["/", today, "1.0"],
  ["/quran.html", today, "0.9"],
  ["/jadwal-salat.html", today, "0.9"],
  ["/doa.html", today, "0.8"],
  ["/asmaul-husna.html", today, "0.8"],
  ["/tajwid.html", today, "0.8"],
  ["/tasbih.html", today, "0.6"],
  ["/event.html", latest, "0.7"],
  ["/sejarah.html", today, "0.6"],
  ["/media-sosial.html", today, "0.4"],
  ["/kontak.html", today, "0.4"],
];
const articles = events.map(e => ["/artikel.html?id=" + encodeURIComponent(e.id), e.date, "0.6"]);

const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  [...pages, ...articles].map(([loc, mod, pr]) =>
    `  <url>\n    <loc>${esc(SITE + loc)}</loc>\n    <lastmod>${mod}</lastmod>\n    <priority>${pr}</priority>\n  </url>`).join("\n") +
  "\n</urlset>\n";

fs.writeFileSync(path.join(root, "sitemap.xml"), xml);
console.log(`sitemap.xml dibuat: ${pages.length} halaman + ${articles.length} artikel`);
