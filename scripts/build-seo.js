#!/usr/bin/env node
/* =====================================================================
   GRADIEND — build SEO (aman dijalankan berulang kali)

   Yang dikerjakan skrip ini:
   1. Mengisi daftar konten statis (doa, Asmaul Husna, tajwid, event, daftar surah)
      di dalam HTML supaya terbaca crawler Google/AI yang tidak menjalankan JavaScript.
      (Di browser, JavaScript tetap menggantinya dengan tampilan interaktif.)
   2. Mengisi blok "Tentang halaman ini" + tautan "Jelajahi juga" di tiap halaman.
   3. Membuat satu halaman statis per event: artikel/<id>.html (lengkap dengan meta & JSON-LD).
   4. Membuat sitemap.xml.

   Cara pakai:  node scripts/build-seo.js
   Di Vercel skrip ini dijalankan otomatis lewat vercel.json (buildCommand).
   Jalankan manual setiap menambah event/doa baru, lalu commit hasilnya.
   ===================================================================== */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const read = f => fs.readFileSync(path.join(ROOT, f), "utf8");
const write = (f, s) => { fs.mkdirSync(path.dirname(path.join(ROOT, f)), { recursive: true }); fs.writeFileSync(path.join(ROOT, f), s); };
const load = f => { const sb = { window: {} }; vm.runInNewContext(read(f), sb); return sb.window; };
const warn = (...a) => console.warn("  [peringatan]", ...a);

const esc = v => String(v == null ? "" : v).replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
const jsonForScript = o => JSON.stringify(o).replace(/</g, "\\u003c");
const MONTHS = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const dateID = v => { const [y, m, d] = String(v).split("-").map(Number); return y && m && d ? `${d} ${MONTHS[m - 1]} ${y}` : String(v || ""); };
const initials = n => String(n || "GRADIEND").split(/\s+/).filter(Boolean).slice(0, 2).map(x => x[0].toUpperCase()).join("") || "G";

const cfg = load("js/config.js").GRADIEND_CONFIG || {};
const SITE = String(cfg.siteUrl || "https://gradiend.vercel.app").replace(/\/$/, "");
const IG = (cfg.instagram && cfg.instagram.url) || "https://www.instagram.com/rohis62_/";
const OG = SITE + "/assets/og-image.png";
const ORG_ID = SITE + "/#organization", SITE_ID = SITE + "/#website";

const events = (load("js/events.js").GRADIEND_EVENTS || [])
  .filter(e => e && e.id && e.title && !e.draft)
  .sort((a, b) => String(b.date).localeCompare(String(a.date)));

/* ---------- penanda di HTML: <!--NAMA:START--> ... <!--NAMA:END--> ---------- */
function fill(file, name, content) {
  let s = read(file);
  const re = new RegExp(`<!--${name}:START-->[\\s\\S]*?<!--${name}:END-->`);
  if (!re.test(s)) { warn(`penanda ${name} tidak ada di ${file}`); return; }
  s = s.replace(re, () => `<!--${name}:START-->${content}<!--${name}:END-->`);
  write(file, s);
}
const step = (label, fn) => { try { fn(); console.log("ok  ", label); } catch (e) { warn(label, e && e.message); } };

/* ---------- 1. daftar surah (untuk crawler; di browser diganti data dari API) ---------- */
const SURAH = `Al-Fatihah|Pembukaan|7;Al-Baqarah|Sapi Betina|286;Ali 'Imran|Keluarga Imran|200;An-Nisa'|Wanita|176;Al-Ma'idah|Hidangan|120;Al-An'am|Binatang Ternak|165;Al-A'raf|Tempat yang Tertinggi|206;Al-Anfal|Harta Rampasan Perang|75;At-Taubah|Pengampunan|129;Yunus|Nabi Yunus|109;Hud|Nabi Hud|123;Yusuf|Nabi Yusuf|111;Ar-Ra'd|Guruh|43;Ibrahim|Nabi Ibrahim|52;Al-Hijr|Gunung Al-Hijr|99;An-Nahl|Lebah|128;Al-Isra'|Perjalanan Malam|111;Al-Kahf|Gua|110;Maryam|Maryam|98;Ta Ha|Ta Ha|135;Al-Anbiya'|Para Nabi|112;Al-Hajj|Haji|78;Al-Mu'minun|Orang-orang Mukmin|118;An-Nur|Cahaya|64;Al-Furqan|Pembeda|77;Asy-Syu'ara'|Para Penyair|227;An-Naml|Semut|93;Al-Qasas|Kisah-kisah|88;Al-'Ankabut|Laba-laba|69;Ar-Rum|Bangsa Romawi|60;Luqman|Luqman|34;As-Sajdah|Sujud|30;Al-Ahzab|Golongan yang Bersekutu|73;Saba'|Kaum Saba'|54;Fatir|Pencipta|45;Ya Sin|Yasin|83;As-Saffat|Barisan-barisan|182;Sad|Sad|88;Az-Zumar|Rombongan|75;Gafir|Maha Pengampun|85;Fussilat|Yang Dijelaskan|54;Asy-Syura|Musyawarah|53;Az-Zukhruf|Perhiasan|89;Ad-Dukhan|Kabut|59;Al-Jasiyah|Yang Berlutut|37;Al-Ahqaf|Bukit Pasir|35;Muhammad|Nabi Muhammad|38;Al-Fath|Kemenangan|29;Al-Hujurat|Kamar-kamar|18;Qaf|Qaf|45;Az-Zariyat|Angin yang Menerbangkan|60;At-Tur|Bukit|49;An-Najm|Bintang|62;Al-Qamar|Bulan|55;Ar-Rahman|Yang Maha Pengasih|78;Al-Waqi'ah|Hari Kiamat|96;Al-Hadid|Besi|29;Al-Mujadalah|Perempuan yang Menggugat|22;Al-Hasyr|Pengusiran|24;Al-Mumtahanah|Perempuan yang Diuji|13;As-Saff|Barisan|14;Al-Jumu'ah|Hari Jumat|11;Al-Munafiqun|Orang-orang Munafik|11;At-Tagabun|Hari Dinampakkan Kesalahan|18;At-Talaq|Talak|12;At-Tahrim|Mengharamkan|12;Al-Mulk|Kerajaan|30;Al-Qalam|Pena|52;Al-Haqqah|Hari Kiamat|52;Al-Ma'arij|Tempat Naik|44;Nuh|Nabi Nuh|28;Al-Jinn|Jin|28;Al-Muzzammil|Orang yang Berselimut|20;Al-Muddassir|Orang yang Berkemul|56;Al-Qiyamah|Hari Kiamat|40;Al-Insan|Manusia|31;Al-Mursalat|Malaikat yang Diutus|50;An-Naba'|Berita Besar|40;An-Nazi'at|Malaikat yang Mencabut|46;'Abasa|Ia Bermuka Masam|42;At-Takwir|Menggulung|29;Al-Infitar|Terbelah|19;Al-Mutaffifin|Orang yang Curang|36;Al-Insyiqaq|Terbelah|25;Al-Buruj|Gugusan Bintang|22;At-Tariq|Yang Datang di Malam Hari|17;Al-A'la|Yang Paling Tinggi|19;Al-Gasyiyah|Hari Pembalasan|26;Al-Fajr|Fajar|30;Al-Balad|Negeri|20;Asy-Syams|Matahari|15;Al-Lail|Malam|21;Ad-Duha|Waktu Duha|11;Asy-Syarh|Pelapangan|8;At-Tin|Buah Tin|8;Al-'Alaq|Segumpal Darah|19;Al-Qadr|Kemuliaan|5;Al-Bayyinah|Bukti yang Nyata|8;Az-Zalzalah|Guncangan|8;Al-'Adiyat|Kuda Perang yang Berlari|11;Al-Qari'ah|Hari Kiamat|11;At-Takasur|Bermegah-megahan|8;Al-'Asr|Masa|3;Al-Humazah|Pengumpat|9;Al-Fil|Gajah|5;Quraisy|Suku Quraisy|4;Al-Ma'un|Barang-barang Berguna|7;Al-Kausar|Nikmat yang Banyak|3;Al-Kafirun|Orang-orang Kafir|6;An-Nasr|Pertolongan|3;Al-Lahab|Gejolak Api|5;Al-Ikhlas|Ikhlas|4;Al-Falaq|Waktu Subuh|5;An-Nas|Manusia|6`
  .split(";").map((x, i) => { const [nama, arti, ayat] = x.split("|"); return { n: i + 1, nama, arti, ayat: +ayat }; });
if (SURAH.length !== 114 || SURAH.reduce((a, s) => a + s.ayat, 0) !== 6236) throw new Error("data surah tidak valid (harus 114 surah / 6236 ayat)");

/* ---------- 2. konten statis per halaman ---------- */
const eventCardStatic = e => `<a class="card event-card" href="artikel/${encodeURIComponent(e.id)}.html">
    <div class="event-cover">${e.image ? `<img src="${esc(e.image)}" alt="${esc(e.title)}" loading="lazy">` : `<div class="cover-icon"><i class="fa-solid fa-mosque"></i></div>`}</div>
    <div class="event-body"><div class="meta">${esc(e.category || "Kegiatan")} · ${dateID(e.date)}</div><h3>${esc(e.title)}</h3><p>${esc(e.excerpt || "")}</p>
    <div class="author"><span class="avatar">${initials(e.author)}</span>${esc(e.author || "GRADIEND")}</div></div></a>`;

step("event & beranda", () => {
  fill("event.html", "SEO", events.map(eventCardStatic).join("") || '<div class="empty">Belum ada event.</div>');
  fill("index.html", "SEO", events.slice(0, 3).map(eventCardStatic).join("") || '<div class="empty">Belum ada event. Nantikan kegiatan Rohis berikutnya.</div>');
});

step("daftar surah", () => {
  fill("quran.html", "SEO", `<h2 style="margin:0 0 14px">Daftar 114 surah Al-Qur'an</h2><div class="seo-surah">` +
    SURAH.map(s => `<a class="card" href="quran.html?s=${s.n}"><b>${s.n}. ${esc(s.nama)}</b><span>${esc(s.arti)} · ${s.ayat} ayat</span></a>`).join("") + "</div>");
});

const doa = load("js/doa.js"), DOA = doa.GRADIEND_DOA || [], KAT = doa.GRADIEND_DOA_KATEGORI || [];
step("doa", () => {
  const kn = id => (KAT.find(k => k.id === id) || {}).nama || id;
  fill("doa.html", "SEO", DOA.map(d => `<article class="card dx-card"><div class="dx-top"><h3>${esc(d.judul)}</h3><span class="dx-kat">${esc(kn(d.kat))}</span></div>
  <div class="dx-ar" lang="ar" dir="rtl">${esc(d.ar)}</div><div class="dx-latin">${esc(d.latin)}</div><div class="dx-arti">${esc(d.arti)}</div>
  <div class="dx-foot"><small>${esc(d.sumber || "")}</small></div></article>`).join(""));
});

const AH = load("js/asmaul-husna.js").GRADIEND_ASMAUL_HUSNA || [];
step("asmaul husna", () => {
  fill("asmaul-husna.html", "SEO", AH.map(x => `<article class="card ah-card"><span class="ah-no">${x.n}</span><div class="ah-ar" lang="ar" dir="rtl">${esc(x.ar)}</div><div class="ah-latin">${esc(x.latin)}</div><div class="ah-arti">${esc(x.arti)}</div></article>`).join(""));
});

const TW = load("js/tajwid.js").GRADIEND_TAJWID || [];
step("tajwid", () => {
  fill("tajwid.html", "SEO", `<div class="seo-static">` + TW.map(sec => `<section><h2 id="${esc(sec.id)}">${esc(sec.judul)}</h2><p>${esc(sec.intro)}</p>` +
    (sec.hukum || []).map(h => `<article class="card"><h3>${esc(h.nama)}${h.arab ? ` <span lang="ar" dir="rtl">(${esc(h.arab)})</span>` : ""}</h3>
    <p>${esc(h.def)}</p>${h.huruf ? `<p><b>Huruf:</b> <span lang="ar" dir="rtl">${esc(h.huruf)}</span></p>` : ""}${h.cara ? `<p><b>Cara membaca:</b> ${esc(h.cara)}</p>` : ""}
    ${(h.contoh || []).length ? `<ul>${h.contoh.map(c => `<li><span lang="ar" dir="rtl">${esc(c.ar)}</span> — ${esc(c.ket)}${c.ref ? ` (${esc(c.ref)})` : ""}</li>`).join("")}</ul>` : ""}</article>`).join("") + "</section>").join("") + "</div>");
});


/* ---------- 2b. panduan wudhu & salat (halaman jadwal-salat.html) ---------- */
const IB = load("js/ibadah.js").GRADIEND_IBADAH || {};
const ibRead = b => `<div class="ib-read">${b.label ? `<div class="ib-read-label">${esc(b.label)}</div>` : ""}<div class="ib-ar" lang="ar" dir="rtl">${esc(b.ar)}</div><div class="ib-lat">${esc(b.latin)}</div><div class="ib-arti">${esc(b.arti)}</div>${b.sumber ? `<div class="ib-src">${esc(b.sumber)}</div>` : ""}</div>`;
const ibTag = j => `<span class="ib-tag ib-${esc(String(j).toLowerCase())}">${esc(j)}</span>`;
const ibSteps = list => `<ol class="ib-steps">${(list || []).map(x => `<li class="ib-step"><div class="ib-step-head"><h4>${esc(x.judul)}</h4>${x.jenis ? ibTag(x.jenis) : ""}</div><p>${esc(x.isi)}</p>${(x.bacaan || []).map(ibRead).join("")}</li>`).join("")}</ol>`;
const ibSurat = list => (list && list.length) ? `<div class="ib-surat"><b>Bacaan surat setelah Al-Fatihah:</b> ${list.map(x => `${x.r ? `<span class="ib-r">${esc(x.r)}</span> ` : ""}<a href="quran.html?s=${x.n}">${esc(x.nama)}</a>`).join(" · ")}</div>` : "";
const ibUl = a => `<ul class="ib-list">${(a || []).map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;
const ibOl = a => `<ol class="ib-list">${(a || []).map(x => `<li>${esc(x)}</li>`).join("")}</ol>`;
const ibTable = (head, rows) => `<div class="ib-table-wrap"><table class="ib-table"><thead><tr>${head.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${rows.map(r => `<tr>${r.map((c, i) => `<td>${i === 0 ? `<b>${esc(c)}</b>` : esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;

step("panduan wudhu & salat", () => {
  if (!IB.wudhu) throw new Error("js/ibadah.js kosong");
  const w = IB.wudhu, t = IB.tayammum, f = IB.fardu || [];
  const html = `<section class="section" id="tata-cara" style="padding-top:10px"><div class="container">
  <div class="section-head"><div><div class="eyebrow">Panduan ibadah</div><h2 class="section-title">Tata cara bersuci dan salat</h2><p class="section-sub">Dari wudhu, salat wajib, sampai salat sunnah, lengkap dengan bacaan Arab, Latin, dan artinya.</p></div></div>
  <div class="notice">${esc(IB.catatan)}</div>
  <nav class="ib-nav" aria-label="Isi panduan"><a href="#wudhu">Wudhu</a><a href="#tayammum">Tayammum</a><a href="#salat-wajib">Salat wajib</a><a href="#gerakan-salat">Urutan gerakan &amp; bacaan</a><a href="#dzikir-setelah-salat">Dzikir setelah salat</a><a href="#salat-sunnah">Salat sunnah</a></nav>

  <article class="ib-block" id="wudhu"><h3 class="ib-h">1. Tata cara wudhu</h3><p class="ib-lead">${esc(w.intro)}</p>
    ${ibSteps(w.langkah)}
    <div class="ib-two"><div><h4 class="ib-h2">Rukun wudhu (6)</h4>${ibOl(w.rukun)}</div><div><h4 class="ib-h2">Sunnah wudhu</h4>${ibUl(w.sunnah)}</div></div>
    <h4 class="ib-h2">Hal-hal yang membatalkan wudhu</h4>${ibUl(w.pembatal)}</article>

  <article class="ib-block" id="tayammum"><h3 class="ib-h">2. Tata cara tayammum</h3><p class="ib-lead">${esc(t.intro)}</p>${ibSteps(t.langkah)}</article>

  <article class="ib-block" id="salat-wajib"><h3 class="ib-h">3. Salat wajib lima waktu</h3>
    <p class="ib-lead">Salat fardu lima waktu adalah rukun Islam yang kedua dan wajib bagi setiap muslim yang baligh dan berakal. Berikut jumlah rakaat, waktu, dan cara membacanya. Waktu hari ini sesuai lokasi Anda ada pada jadwal di bagian atas halaman.</p>
    ${ibTable(["Salat", "Rakaat", "Waktu", "Bacaan"], f.map(x => [x.nama, `${x.rakaat} rakaat`, x.waktu, x.bacaan]))}
    <h4 class="ib-h2">Lafal niat tiap salat</h4>
    ${f.map(x => ibRead({ label: `Niat salat ${x.nama}`, ar: x.niat.ar, latin: x.niat.latin, arti: x.niat.arti })).join("")}
    <p class="ib-lead" style="margin-top:12px">${esc(IB.keteranganNiat)}</p>
    <div class="ib-two"><div><h4 class="ib-h2">Syarat sah salat</h4>${ibUl(IB.syarat)}</div><div><h4 class="ib-h2">Rukun salat (13)</h4>${ibOl(IB.rukunSalat)}</div></div>
    <p class="ib-lead">${esc(IB.tuma)}</p>
    <div class="ib-cards wide">
      <div class="card ib-card" id="salat-jumat"><h4>${esc(IB.jumat.judul)}</h4><p>${esc(IB.jumat.isi)}</p>${(IB.jumat.niat || []).map(ibRead).join("")}${ibSurat(IB.jumat.surat)}</div>
      <div class="card ib-card" id="salat-jenazah"><h4>${esc(IB.jenazah.judul)}</h4><p>${esc(IB.jenazah.isi)}</p>${(IB.jenazah.niat || []).map(ibRead).join("")}${ibSteps(IB.jenazah.langkah)}</div>
    </div></article>

  <article class="ib-block" id="gerakan-salat"><h3 class="ib-h">4. Urutan gerakan dan bacaan salat</h3>
    <p class="ib-lead">Berikut urutan satu rakaat sampai salam, lengkap dengan bacaannya. Label <b>Rukun</b> berarti bagian yang menentukan sahnya salat, sedangkan <b>Sunnah</b> menyempurnakan salat.</p>
    ${ibSteps(IB.gerakan)}
    <h4 class="ib-h2">Susunan rakaat</h4>
    <div class="ib-cards">${(IB.susunan || []).map(x => `<div class="card ib-card"><h4>${esc(x.judul)}</h4><p>${esc(x.isi)}</p></div>`).join("")}</div></article>

  <article class="ib-block" id="dzikir-setelah-salat"><h3 class="ib-h">5. Dzikir setelah salat</h3><p class="ib-lead">${esc(IB.dzikir.intro)}</p>${(IB.dzikir.bacaan || []).map(ibRead).join("")}<p class="ib-lead" style="margin-top:12px">${esc(IB.dzikir.catatan)} <a href="doa.html" style="color:var(--green);font-weight:800">Lihat kumpulan doa</a></p></article>

  <article class="ib-block" id="salat-sunnah"><h3 class="ib-h">6. Salat sunnah</h3><p class="ib-lead">${esc(IB.sunnahIntro)}</p>
    <h4 class="ib-h2">Salat sunnah rawatib (mengiringi salat fardu)</h4>
    ${ibTable(["Salat fardu", "Sebelum", "Sesudah"], (IB.rawatib || []).map(r => [r.waktu, r.sebelum, r.sesudah]))}
    <p class="ib-lead">${esc(IB.rawatibKet)}</p>
    <h4 class="ib-h2">Lafal niat salat rawatib</h4>
    ${(IB.rawatibNiat || []).map(ibRead).join("")}${ibSurat(IB.rawatibSurat)}
    <h4 class="ib-h2">Salat sunnah lainnya: niat dan bacaan</h4>
    <p class="ib-lead">${esc(IB.niatCatatan)}</p>
    <div class="ib-cards wide">${(IB.sunnah || []).map(x => `<div class="card ib-card" id="${esc(String(x.nama).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""))}"><h4>${esc(x.nama)}</h4><div class="ib-meta">${esc(x.rakaat)}</div><p><b>Waktu:</b> ${esc(x.waktu)}</p><p>${esc(x.isi)}</p>${(x.niat || []).map(ibRead).join("")}${ibSurat(x.surat)}${(x.bacaan || []).map(ibRead).join("")}<div class="ib-src">Dalil: ${esc(x.dalil)}</div></div>`).join("")}</div></article>
  </div></section>`;
  fill("jadwal-salat.html", "IBADAH", html);
});

/* ---------- 3. blok "Tentang halaman ini" + "Jelajahi juga" ---------- */
const L = {
  quran: ["quran.html", "fa-book-quran", "Baca Al-Qur'an online"], tajwid: ["tajwid.html", "fa-spell-check", "Belajar tajwid"],
  ah: ["asmaul-husna.html", "fa-star-and-crescent", "Asmaul Husna 99 nama Allah"], doa: ["doa.html", "fa-hands-praying", "Kumpulan doa harian"],
  salat: ["jadwal-salat.html", "fa-clock", "Waktu salat hari ini"], tasbih: ["tasbih.html", "fa-fingerprint", "Tasbih digital"],
  event: ["event.html", "fa-newspaper", "Event & artikel Rohis 62"], sejarah: ["sejarah.html", "fa-landmark", "Sejarah Rohis SMAN 62 Jakarta"],
  sosmed: ["media-sosial.html", "fa-brands fa-instagram", "Instagram @rohis62_"], kontak: ["kontak.html", "fa-envelope", "Kontak Rohis 62"], home: ["/", "fa-house", "Beranda GRADIEND Rohis 62"]
};
const links = keys => `<div class="seo-links">${keys.map(k => `<a href="${L[k][0]}"><i class="fa-solid ${L[k][1]}"></i> ${L[k][2]}</a>`).join("")}</div>`;
const about = (h, paras, extra, rel) => `\n<section class="seo-about"><div class="container"><div class="seo-about-inner"><h2>${h}</h2>${paras.map(p => `<p>${p}</p>`).join("")}${extra || ""}<h3 style="margin:18px 0 0;font-size:15px">Jelajahi juga</h3>${links(rel)}</div></div></section>\n`;

const ABOUT = {
  "quran.html": about("Baca Al-Qur'an online bersama GRADIEND Rohis 62", [
    "Halaman Al-Qur'an GRADIEND menyajikan 114 surah dengan teks Arab bergaya mushaf Indonesia, transliterasi Latin, terjemahan bahasa Indonesia, tafsir per ayat, dan murottal dari Misyari Rasyid Al-Afasy. Tajwid dapat ditampilkan berwarna lengkap dengan panduan warna, sedangkan tombol Latin, Terjemahan, dan Tafsir memudahkan Anda menyesuaikan tampilan.",
    "Teks, terjemahan, dan tafsir bersumber dari equran.id (Kemenag RI), sedangkan warna tajwid memakai data Quran.com. Semua dapat dibuka tanpa login, cocok untuk tadarus, belajar membaca, atau menemani kegiatan Rohis SMAN 62 Jakarta."], "", ["tajwid", "ah", "doa", "salat"]),
  "tajwid.html": about("Belajar tajwid dari dasar", [
    "Halaman ini merangkum hukum bacaan Al-Qur'an yang sering dipelajari siswa, lengkap dengan contoh ayat dan panduan warna tajwid. Bagian yang tersedia:"],
    `<ul>${TW.map(s => `<li>${esc(s.judul)}</li>`).join("")}</ul><p>Tajwid dipelajari lewat talaqqi, yaitu mendengar dan menirukan langsung dari guru. Karena itu, gunakan halaman ini sebagai ringkasan belajar dan tetap bimbingan guru atau pembina Rohis.</p>`, ["quran", "doa", "ah", "event"]),
  "asmaul-husna.html": about("99 Asmaul Husna: Arab, Latin, dan artinya", [
    `Asmaul Husna adalah nama-nama Allah yang terbaik. Halaman ini memuat ${AH.length} nama lengkap dengan tulisan Arab, bacaan Latin, dan artinya, ditambah audio untuk membantu menghafal serta fitur "Nama hari ini" yang berganti setiap hari.`,
    "Gunakan kolom pencarian untuk menemukan nama berdasarkan bacaan, arti, atau nomor."], "", ["doa", "quran", "tasbih", "event"]),
  "doa.html": about("Kumpulan doa harian dan ibadah", [
    `Terdapat ${DOA.length} doa dari kategori berikut: ${KAT.map(k => esc(k.nama)).join(", ")}. Setiap doa dilengkapi tulisan Arab, bacaan Latin, arti, dan sumbernya, serta tombol salin dan pencarian.`,
    "Pastikan bacaan Arab dilafalkan dengan benar dan belajarlah langsung kepada guru atau pembina Rohis. Sumber hadis ditulis ringkas, jadi rujuklah kitab aslinya untuk penelusuran lebih lanjut."], "", ["ah", "quran", "tasbih", "salat"]),
  "jadwal-salat.html": about("Cara waktu salat dihitung", [
    "Waktu salat dihitung langsung dari koordinat perangkat Anda dengan kriteria Kemenag RI: Subuh pada sudut matahari 20° di bawah ufuk, Isya 18°, Asar menurut mazhab Syafi'i, dan waktu pengaman (ihtiyat) pada tiap waktu. Halaman ini menampilkan Imsak, Subuh, Terbit, Dhuha, Zuhur, Asar, Magrib, dan Isya beserta hitung mundur menuju salat berikutnya.",
    "Jika izin lokasi tidak diberikan, halaman memakai Jakarta sebagai lokasi bawaan. Untuk pencocokan resmi, jadwal Kemenag RI dapat dilihat di situs Bimas Islam.",
    "Di bagian bawah jadwal tersedia panduan lengkap tata cara wudhu, tayammum, salat wajib lima waktu beserta bacaannya, dzikir setelah salat, dan salat sunnah seperti rawatib, Dhuha, Tahajud, Witir, dan Tarawih."], "", ["quran", "doa", "tasbih", "event"]),
  "tasbih.html": about("Cara memakai tasbih digital", [
    "Pilih target 33, 99, 100, atau bebas, lalu ketuk lingkaran besar untuk menambah hitungan. Tombol kurang dan reset tersedia bila Anda salah menghitung. Hitungan tersimpan di perangkat Anda selama browser mengizinkan penyimpanan.",
    "Tasbih digital ini dibuat oleh Rohis 62 SMAN 62 Jakarta dan gratis tanpa login."], "", ["doa", "ah", "quran", "salat"]),
  "event.html": about("Dokumentasi kegiatan Rohis 62", [
    "Halaman ini menghimpun event, kajian, dan artikel dokumentasi kegiatan Rohis SMAN 62 Jakarta. Setiap artikel punya alamat sendiri yang mudah dibagikan lewat WhatsApp, dan dapat dicari berdasarkan judul, kategori (Kajian, Keislaman, Sosial, Kegiatan, Lainnya), atau isi artikel.",
    "Ikuti juga Instagram @rohis62_ untuk kabar terbaru kegiatan Rohis."], "", ["sosmed", "sejarah", "kontak", "home"]),
  "sejarah.html": about("Rohis 62 hari ini", [
    "Rohis SMAN 62 Jakarta tetap menjadi wadah kegiatan keislaman dan ukhuwah siswa. GRADIEND, Generasi Dakwah Islam Enam Dua, merangkum dokumentasi, event, dan fitur ibadah dalam satu ruang digital."], "", ["event", "sosmed", "kontak", "home"]),
  "media-sosial.html": about("Temukan Rohis 62 di Instagram", [
    "Akun resmi Rohis SMAN 62 Jakarta di Instagram adalah @rohis62_. Cari juga kata kunci &ldquo;Rohis 62&rdquo; atau &ldquo;GRADIEND&rdquo; untuk dokumentasi kegiatan dan pengumuman terbaru."], "", ["event", "sejarah", "kontak", "home"]),
  "kontak.html": about("Hubungi Rohis SMAN 62 Jakarta", [
    "Untuk pertanyaan seputar kegiatan, kolaborasi, atau silaturahmi, kirim email ke rohissman62jkt@gmail.com. Anda juga dapat mengikuti Instagram @rohis62_ untuk kabar terbaru."], "", ["sosmed", "event", "sejarah", "home"])
};
step("blok tentang halaman", () => { for (const f in ABOUT) fill(f, "SEO-ABOUT", ABOUT[f]); });

/* ---------- 4. halaman statis per artikel: artikel/<id>.html ---------- */
step("halaman artikel statis", () => {
  const tpl = read("artikel.html");
  if (!/<!--SEO-HEAD:START-->/.test(tpl) || !/<!--SEO:START-->/.test(tpl)) throw new Error("penanda artikel.html tidak lengkap");
  fs.rmSync(path.join(ROOT, "artikel"), { recursive: true, force: true });
  for (const e of events) {
    if (!/^[a-z0-9][a-z0-9_-]*$/i.test(e.id)) { warn("id event tidak valid, dilewati:", e.id); continue; }
    const url = `${SITE}/artikel/${e.id}.html`;
    const plain = String(e.content || "").replace(/\s+/g, " ").trim();
    let desc = String(e.excerpt || plain).trim(); if (desc.length > 200) desc = desc.slice(0, 197).replace(/\s+\S*$/, "") + "…";
    const title = `${e.title} | GRADIEND Rohis 62`;
    const img = e.image ? (/^https?:/.test(e.image) ? e.image : `${SITE}/${String(e.image).replace(/^\//, "")}`) : OG;
    const igPost = e.instagram ? [e.instagram] : [];
    const ld = { "@context": "https://schema.org", "@graph": [
      { "@type": "Article", "@id": url + "#article", mainEntityOfPage: url, headline: e.title, description: desc, image: [img], inLanguage: "id-ID",
        datePublished: e.date, dateModified: e.date, articleSection: e.category || "Kegiatan", wordCount: plain ? plain.split(" ").length : 0,
        author: { "@type": "Organization", name: e.author || "GRADIEND" }, publisher: { "@id": ORG_ID }, isPartOf: { "@id": SITE_ID } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: SITE + "/" },
        { "@type": "ListItem", position: 2, name: "Event & Artikel", item: SITE + "/event.html" },
        { "@type": "ListItem", position: 3, name: e.title, item: url }] }] };
    const head = `<!--SEO-HEAD:START-->
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
<meta name="author" content="${esc(e.author || "GRADIEND")}">
<meta name="theme-color" content="#0c6b4d">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="id" href="${url}"><link rel="alternate" hreflang="x-default" href="${url}">
<meta property="og:url" content="${url}"><meta property="og:site_name" content="GRADIEND Rohis 62"><meta property="og:locale" content="id_ID"><meta property="og:type" content="article">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:image" content="${esc(img)}">
<meta property="article:published_time" content="${esc(e.date)}"><meta property="article:section" content="${esc(e.category || "Kegiatan")}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(desc)}"><meta name="twitter:image" content="${esc(img)}">
<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>
<script type="application/ld+json">${jsonForScript(ld)}</script>
<!--SEO-HEAD:END-->`;
    const body = String(e.content || "").split(/\r?\n\s*\r?\n/).filter(Boolean).map(x => `<p>${esc(x.trim()).replace(/\r?\n/g, "<br>")}</p>`).join("");
    const box = `<!--SEO:START--><div class="article-cover">${e.image ? `<img src="${esc(e.image)}" alt="${esc(e.title)}">` : ""}</div>
 <div class="eyebrow" style="margin-top:25px">${esc(e.category || "Kegiatan")} · ${dateID(e.date)}</div>
 <h1>${esc(e.title)}</h1><p class="lead">${esc(e.excerpt || "")}</p>
 <div class="article-info"><span>${esc(e.author || "GRADIEND")}</span><span>${dateID(e.date)}</span></div>
 <article class="article-content">${body}</article>${igPost.length ? `<p><a href="${esc(e.instagram)}" rel="noopener">Lihat postingan Instagram</a></p>` : ""}<!--SEO:END-->`;
    let out = tpl
      .replace(/<!--SEO-HEAD:START-->[\s\S]*?<!--SEO-HEAD:END-->/, () => head)
      .replace(/<!--SEO:START-->[\s\S]*?<!--SEO:END-->/, () => box)
      .replace("<!--SEO-ID-->", () => `<script>window.GRADIEND_ARTICLE_ID=${jsonForScript(e.id)};</script>`);
    write(`artikel/${e.id}.html`, out);
  }
  console.log(`      ${events.length} halaman artikel dibuat`);
});

/* ---------- 5. sitemap.xml ---------- */
step("sitemap.xml", () => {
  const latest = events.length ? events[0].date : null;
  const U = [];
  const add = (loc, mod, pr) => U.push(`  <url>\n    <loc>${esc(SITE + loc)}</loc>${mod ? `\n    <lastmod>${mod}</lastmod>` : ""}\n    <priority>${pr}</priority>\n  </url>`);
  [["/", latest, "1.0"], ["/quran.html", null, "0.9"], ["/jadwal-salat.html", null, "0.9"], ["/doa.html", null, "0.8"], ["/asmaul-husna.html", null, "0.8"],
   ["/tajwid.html", null, "0.8"], ["/tasbih.html", null, "0.6"], ["/event.html", latest, "0.7"], ["/sejarah.html", null, "0.6"], ["/media-sosial.html", null, "0.5"], ["/kontak.html", null, "0.5"]]
    .forEach(([l, m, p]) => add(l, m, p));
  SURAH.forEach(s => add(`/quran.html?s=${s.n}`, null, "0.6"));
  events.forEach(e => add(`/artikel/${encodeURIComponent(e.id)}.html`, e.date, "0.7"));
  write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${U.join("\n")}\n</urlset>\n`);
  console.log(`      ${U.length} URL`);
});
console.log("build-seo selesai.");
