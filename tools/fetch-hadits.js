#!/usr/bin/env node
/* Unduh hadits (Arab + terjemah Indonesia) dari API publik gadingnst/hadith-api
   (https://github.com/gadingnst/hadith-api, lisensi MIT, data dari tafsirq.com)
   lalu simpan sebagai berkas JS per kitab di js/hadits/<id>.js.

   Pemakaian (Node 18+, butuh internet, jalankan di komputer kamu, bukan di Vercel):
     node tools/fetch-hadits.js              # semua kitab
     node tools/fetch-hadits.js bukhari      # satu kitab
     node tools/fetch-hadits.js bukhari muslim

   Id kitab di sini = id di js/hadits/index.js. Pemetaan ke id API ada di API_ID.
   Hasil berformat ringkas [[no, arab, terjemah], ...] supaya berkas lebih kecil. */
const fs = require("fs"), path = require("path");
const BASE = process.env.HADITH_API || "https://api.hadith.gading.dev";
const API_ID = { bukhari:"bukhari", muslim:"muslim", abudaud:"abu-daud", tirmidzi:"tirmidzi", nasai:"nasai", ibnumajah:"ibnu-majah", ahmad:"ahmad", darimi:"darimi", malik:"malik" };
const STEP = 300, OUT = path.join(__dirname, "..", "js", "hadits");
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function getJson(url, tries = 4) {
  for (let i = 1; i <= tries; i++) {
    try {
      const r = await fetch(url);
      if (!r.ok) throw new Error("HTTP " + r.status);
      return await r.json();
    } catch (err) {
      if (i === tries) throw new Error(url + " -> " + err.message);
      await sleep(1000 * i);
    }
  }
}
// Cari array {number, arab, id} di dalam respons (tahan terhadap perbedaan bentuk).
function findItems(node) {
  if (Array.isArray(node)) return node.length && node[0] && "number" in node[0] ? node : node.flatMap(findItems);
  if (node && typeof node === "object") { if ("number" in node && "arab" in node) return [node]; return Object.values(node).flatMap(findItems); }
  return [];
}
const clean = s => String(s || "").replace(/\s+/g, " ").trim();

async function fetchKitab(id) {
  const api = API_ID[id];
  if (!api) throw new Error("Id kitab tidak dikenal: " + id);
  const meta = await getJson(`${BASE}/books`);
  const book = findItems(meta).length ? null : JSON.stringify(meta).match(new RegExp(`"id":"${api}"[^}]*?"available":(\\d+)`));
  const total = book ? +book[1] : null;
  if (!total) throw new Error("Jumlah hadits " + api + " tidak terbaca dari /books; isi manual TOTAL_" + id.toUpperCase());
  const all = new Map();
  for (let from = 1; from <= total; from += STEP) {
    const to = Math.min(from + STEP - 1, total);
    const data = await getJson(`${BASE}/books/${api}?range=${from}-${to}`);
    findItems(data).forEach(h => all.set(+h.number, [+h.number, clean(h.arab), clean(h.id)]));
    process.stdout.write(`\r${id}: ${all.size}/${total}`);
    await sleep(300);
  }
  process.stdout.write("\n");
  const rows = [...all.values()].sort((a, b) => a[0] - b[0]);
  const body = rows.map(r => JSON.stringify(r)).join(",\n");
  fs.writeFileSync(path.join(OUT, id + ".js"),
    `/* ${id} — ${rows.length} hadits. Dibuat oleh tools/fetch-hadits.js dari ${BASE} (gadingnst/hadith-api, MIT). */\n` +
    `window.GRADIEND_HADITS_DATA = window.GRADIEND_HADITS_DATA || {};\nwindow.GRADIEND_HADITS_DATA.${id} = [\n${body}\n];\n`);
  console.log(`${id}: ${rows.length} hadits disimpan ke js/hadits/${id}.js`);
}

(async () => {
  const ids = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(API_ID);
  for (const id of ids) { try { await fetchKitab(id); } catch (e) { console.error("\nGAGAL", id, e.message); process.exitCode = 1; } }
})();
