// Memberi tahu Bing/Yandex (dan mesin pencari lain pendukung IndexNow) bahwa halaman baru/berubah.
// Jalankan SETELAH deploy selesai:   node scripts/indexnow.js
// Butuh Node 18+ dan internet. Kunci = nama berkas <32 hex>.txt di root situs.
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const keyFile = fs.readdirSync(root).find(f => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) { console.error("Berkas kunci IndexNow tidak ditemukan di root."); process.exit(1); }
const key = keyFile.replace(".txt", "");
const sb = { window: {} }; vm.runInNewContext(fs.readFileSync(path.join(root, "js/config.js"), "utf8"), sb);
const site = (sb.window.GRADIEND_CONFIG.siteUrl || "https://gradiend.vercel.app").replace(/\/$/, "");
const xml = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1].replace(/&amp;/g, "&"));
fetch("https://api.indexnow.org/indexnow", {
  method: "POST", headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(site).host, key, keyLocation: `${site}/${key}.txt`, urlList: urls })
}).then(r => console.log(`IndexNow: HTTP ${r.status} untuk ${urls.length} URL (200/202 = diterima)`)).catch(e => console.error("Gagal:", e.message));
