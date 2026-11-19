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

const ibPiece = k => {
  const w = IB.wudhu || {}, t = IB.tayammum || {}, f = IB.fardu || [];
  switch (k) {
    case "wudhu": return `${ibSteps(w.langkah)}<h3 class="fk-h">Sunnah wudhu</h3>${ibUl(w.sunnah)}`;
    case "tayammum": return ibSteps(t.langkah);
    case "fardu": return `${ibTable(["Salat", "Rakaat", "Waktu", "Bacaan"], f.map(x => [x.nama, `${x.rakaat} rakaat`, x.waktu, x.bacaan]))}
      <h3 class="fk-h">Lafal niat tiap salat</h3>${f.map(x => ibRead({ label: `Niat salat ${x.nama}`, ar: x.niat.ar, latin: x.niat.latin, arti: x.niat.arti })).join("")}
      <p class="ib-lead" style="margin-top:12px">${esc(IB.keteranganNiat)}</p>`;
    case "gerakan": return `<p>Berikut urutan satu rakaat sampai salam, lengkap dengan bacaannya. Label <b>Rukun</b> berarti bagian yang menentukan sahnya salat, sedangkan <b>Sunnah</b> menyempurnakan salat.</p>
      ${ibSteps(IB.gerakan)}<p>${esc(IB.tuma)}</p>
      <h3 class="fk-h">Susunan rakaat</h3><div class="ib-cards">${(IB.susunan || []).map(x => `<div class="card ib-card"><h4>${esc(x.judul)}</h4><p>${esc(x.isi)}</p></div>`).join("")}</div>`;
    case "dzikir": return `<p>${esc(IB.dzikir.intro)}</p>${(IB.dzikir.bacaan || []).map(ibRead).join("")}<p style="margin-top:12px">${esc(IB.dzikir.catatan)} <a href="quran.html?s=2" style="color:var(--green);font-weight:800">Buka surat Al-Baqarah</a></p>`;
    case "sunnah": return `<p>${esc(IB.sunnahIntro)}</p>
      <h3 class="fk-h">Salat sunnah rawatib (mengiringi salat fardu)</h3>
      ${ibTable(["Salat fardu", "Sebelum", "Sesudah"], (IB.rawatib || []).map(r => [r.waktu, r.sebelum, r.sesudah]))}
      <p>${esc(IB.rawatibKet)}</p>
      <h3 class="fk-h">Lafal niat salat rawatib</h3>${(IB.rawatibNiat || []).map(ibRead).join("")}${ibSurat(IB.rawatibSurat)}
      <h3 class="fk-h">Salat sunnah lainnya: niat dan bacaan</h3><p>${esc(IB.niatCatatan)}</p>
      <div class="ib-cards wide">${(IB.sunnah || []).map(x => `<div class="card ib-card" id="${esc(String(x.nama).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""))}"><h4>${esc(x.nama)}</h4><div class="ib-meta">${esc(x.rakaat)}</div><p><b>Waktu:</b> ${esc(x.waktu)}</p><p>${esc(x.isi)}</p>${(x.niat || []).map(ibRead).join("")}${ibSurat(x.surat)}${(x.bacaan || []).map(ibRead).join("")}<div class="ib-src">Dalil: ${esc(x.dalil)}</div></div>`).join("")}</div>`;
    case "jumat": return `${(IB.jumat.niat || []).map(ibRead).join("")}${ibSurat(IB.jumat.surat)}<p style="margin-top:10px">${esc(IB.jumat.isi)}</p>`;
    case "jenazah": return `${(IB.jenazah.niat || []).map(ibRead).join("")}${ibSteps(IB.jenazah.langkah)}`;
    default: warn("kunci ib tidak dikenal:", k); return "";
  }
};

/* halaman Waktu Salat hanya menyimpan kartu penaut ke menu Fikih */
step("panduan di halaman Waktu Salat", () => {
  const cards = [
    ["fikih/thaharah.html#praktik-wudhu", "fa-droplet", "Tata cara wudhu", "Urutan wudhu, niat, dan doa setelah wudhu."],
    ["fikih/thaharah.html#praktik-tayamum", "fa-hand", "Tata cara tayamum", "Niat dan langkah tayamum bila air tidak ada."],
    ["fikih/salat.html#tata-cara-salat", "fa-person-praying", "Tata cara salat", "Gerakan dan bacaan dari takbir sampai salam."],
    ["fikih/salat.html#fardu-salat", "fa-clock", "Rakaat dan niat salat fardu", "Jumlah rakaat, waktu, dan lafal niat lima waktu."],
    ["fikih/salat.html#salat-sunnah", "fa-moon", "Salat sunnah", "Rawatib, Dhuha, Tahajud, Witir, Tarawih, dan lainnya."],
    ["fikih.html", "fa-book-open", "Semua materi Fikih", "Rukun Islam, bersuci, salat, puasa, dan seterusnya."]
  ];
  fill("jadwal-salat.html", "IBADAH", `<section class="section" id="tata-cara" style="padding-top:10px"><div class="container">
  <div class="section-head"><div><div class="eyebrow">Panduan ibadah</div><h2 class="section-title">Cara wudhu dan salat</h2><p class="section-sub">Panduan lengkap beserta dalil dan bacaannya ada di menu Fikih.</p></div></div>
  <div class="ib-cards">${cards.map(c => `<a class="card ib-card" href="${c[0]}"><h4><i class="fa-solid ${c[1]}"></i> ${esc(c[2])}</h4><p>${esc(c[3])}</p></a>`).join("")}</div>
  </div></section>`);
});

/* ---------- 2c. Fikih (menu "Fikih": fikih.html dan fikih/<bab>.html) ---------- */
const FK_URLS = [];
step("fikih", () => {
  const ctx = vm.createContext({ window: {} });
  const dir = path.join(ROOT, "js/fikih");
  fs.readdirSync(dir).filter(f => f.endsWith(".js")).sort().forEach(f => vm.runInContext(read("js/fikih/" + f), ctx));
  const W = ctx.window, META = W.GRADIEND_FIKIH_META || {}, BAB = W.GRADIEND_FIKIH_BAB || [], DATA = W.GRADIEND_FIKIH || {};
  const inl = x => esc(x).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
  const live = BAB.filter(b => DATA[b.slug] && (DATA[b.slug].topik || []).some(t => !t.draf));
  const topicsOf = b => ((DATA[b.slug] || {}).topik || []).filter(t => !t.draf);


  /* kalkulator zakat (dihitung di browser; nilai emas dan beras diisi pengguna) */
  const CALC_JS = String.raw`(function(){
  var $=function(i){return document.getElementById(i)};
  var num=function(v){return parseInt(String(v||"").replace(/[^0-9]/g,""),10)||0};
  var rp=function(x){return "Rp "+Math.round(x).toLocaleString("id-ID")};
  var root=$("fk-calc"); if(!root) return;
  [].slice.call(root.querySelectorAll("[data-rp]")).forEach(function(el){
    el.addEventListener("input",function(){var d=el.value.replace(/[^0-9]/g,"");el.value=d?Number(d).toLocaleString("id-ID"):"";run()});
  });
  [].slice.call(root.querySelectorAll("input:not([data-rp])")).forEach(function(el){el.addEventListener("input",run);el.addEventListener("change",run)});
  function run(){
    var g=num($("kz-emas").value), nis=g*85, off=g<=0;
    $("kz-nisab").textContent=off?"isi harga emas dulu":rp(nis);
    var m=num($("kz-m1").value)+num($("kz-m2").value)+num($("kz-m3").value)+num($("kz-m4").value)-($("kz-kurangi").checked?num($("kz-m5").value):0);
    var o=$("kz-out-mal");
    if(off){o.innerHTML="Isi harga emas terlebih dahulu."}
    else if(m<=0){o.innerHTML="Isi nilai harta Anda."}
    else if(m>=nis){o.innerHTML="Total harta: <b>"+rp(m)+"</b>. Sudah mencapai nisab ("+rp(nis)+").<br>Zakat mal (2,5%): <b>"+rp(m*0.025)+"</b>.<br><small>Wajib bila harta sudah dimiliki genap satu tahun hijriah.</small>"}
    else{o.innerHTML="Total harta: <b>"+rp(m)+"</b>. Belum mencapai nisab ("+rp(nis)+"), jadi belum wajib zakat mal."}
    var bln=num($("kz-p1").value)+num($("kz-p2").value), thn=bln*12; o=$("kz-out-pen");
    if(off){o.innerHTML="Isi harga emas terlebih dahulu."}
    else if(bln<=0){o.innerHTML="Isi penghasilan per bulan."}
    else if(thn>=nis){o.innerHTML="Penghasilan setahun: <b>"+rp(thn)+"</b>. Sudah mencapai nisab.<br>Zakat per bulan (2,5%): <b>"+rp(bln*0.025)+"</b>, atau zakat setahun: <b>"+rp(thn*0.025)+"</b>."}
    else{o.innerHTML="Penghasilan setahun: <b>"+rp(thn)+"</b>. Belum mencapai nisab ("+rp(nis)+"), jadi belum wajib zakat penghasilan."}
    var j=Number($("kz-f1").value)||0, h=num($("kz-f2").value), t=parseFloat(String($("kz-f3").value).replace(",","."))||0; o=$("kz-out-fit");
    if(j<=0||t<=0){o.innerHTML="Isi jumlah jiwa dan takaran per jiwa."}
    else{var kg=j*t;o.innerHTML="Total beras: <b>"+kg.toLocaleString("id-ID")+" kg</b> untuk "+j+" jiwa."+(h>0?"<br>Perkiraan dalam rupiah: <b>"+rp(kg*h)+"</b>.":"<br><small>Isi harga beras per kg untuk melihat nominal rupiah.</small>")+"<br><small>Nominal resmi mengikuti ketetapan BAZNAS atau lembaga zakat setempat tahun ini.</small>"}
  }
  run();
})();`;
  const fkCalc = () => `<div class="fk-calc" id="fk-calc">
    <div class="fk-calc-top"><label>Harga emas per gram (Rp)<input class="fk-in" data-rp id="kz-emas" type="text" inputmode="numeric" placeholder="contoh: 1.500.000" autocomplete="off"></label>
      <div class="fk-calc-nisab">Nisab (85 gram emas)<b id="kz-nisab">isi harga emas dulu</b></div></div>
    <p class="fk-calc-hint">Isi dengan harga emas hari ini (cek di toko emas terpercaya atau situs harga emas). Nilai ini dipakai sebagai patokan nisab.</p>
    <div class="fk-calc-cards">
      <section class="card fk-calc-card"><h3>Zakat mal (harta simpanan)</h3>
        <label>Uang tunai dan tabungan (Rp)<input class="fk-in" data-rp id="kz-m1" type="text" inputmode="numeric" autocomplete="off"></label>
        <label>Emas dan perak, nilai sekarang (Rp)<input class="fk-in" data-rp id="kz-m2" type="text" inputmode="numeric" autocomplete="off"></label>
        <label>Piutang lancar dan surat berharga (Rp)<input class="fk-in" data-rp id="kz-m3" type="text" inputmode="numeric" autocomplete="off"></label>
        <label>Barang dagangan: modal dan laba (Rp)<input class="fk-in" data-rp id="kz-m4" type="text" inputmode="numeric" autocomplete="off"></label>
        <label>Utang yang jatuh tempo (Rp)<input class="fk-in" data-rp id="kz-m5" type="text" inputmode="numeric" autocomplete="off"></label>
        <label class="fk-check"><input type="checkbox" id="kz-kurangi"> Kurangi utang jatuh tempo (sesuai pedoman BAZNAS)</label>
        <p class="fk-calc-note">Hanya untuk harta yang sudah dimiliki satu tahun hijriah.</p>
        <div class="fk-calc-out" id="kz-out-mal" aria-live="polite"></div></section>
      <section class="card fk-calc-card"><h3>Zakat penghasilan</h3>
        <label>Gaji per bulan (Rp)<input class="fk-in" data-rp id="kz-p1" type="text" inputmode="numeric" autocomplete="off"></label>
        <label>Penghasilan lain per bulan (Rp)<input class="fk-in" data-rp id="kz-p2" type="text" inputmode="numeric" autocomplete="off"></label>
        <p class="fk-calc-note">Dihitung dari penghasilan kotor, dikalikan 12 bulan untuk dibandingkan dengan nisab.</p>
        <div class="fk-calc-out" id="kz-out-pen" aria-live="polite"></div></section>
      <section class="card fk-calc-card"><h3>Zakat fitrah</h3>
        <label>Jumlah jiwa<input class="fk-in" id="kz-f1" type="number" min="1" step="1" value="1" inputmode="numeric"></label>
        <label>Takaran beras per jiwa (kg)<input class="fk-in" id="kz-f3" type="text" inputmode="decimal" value="2,5" autocomplete="off"></label>
        <label>Harga beras per kg (Rp)<input class="fk-in" data-rp id="kz-f2" type="text" inputmode="numeric" placeholder="contoh: 15.000" autocomplete="off"></label>
        <div class="fk-calc-out" id="kz-out-fit" aria-live="polite"></div></section>
    </div>
    <script>${CALC_JS}</script></div>`;


  /* kalkulator waris sederhana (pasangan, ayah, ibu, anak laki-laki, anak perempuan) */
  const WARIS_JS = String.raw`(function(){
  var $=function(i){return document.getElementById(i)};
  var num=function(v){return parseInt(String(v||"").replace(/[^0-9]/g,""),10)||0};
  var rp=function(x){return "Rp "+Math.round(x).toLocaleString("id-ID")};
  var gcd=function(a,b){return b?gcd(b,a%b):a};
  var frac=function(n,d){var g=gcd(n,d);return (n/g)+"/"+(d/g)};
  var pct=function(x){return (Math.round(x*10000)/100).toLocaleString("id-ID")+"%"};
  var root=$("fk-waris"); if(!root) return;
  [].slice.call(root.querySelectorAll("[data-rp]")).forEach(function(el){
    el.addEventListener("input",function(){var d=el.value.replace(/[^0-9]/g,"");el.value=d?Number(d).toLocaleString("id-ID"):"";run()});
  });
  [].slice.call(root.querySelectorAll("select,input:not([data-rp])")).forEach(function(el){el.addEventListener("input",run);el.addEventListener("change",run)});
  /* seluruh bagian dihitung dalam 24-an (kelipatan 1/2,1/3,1/4,1/6,1/8) */
  function hitung(c){
    var anak=c.L+c.P>0, rows=[], sp=0, F=0, i;
    if(c.pas==="suami"){sp=anak?6:12; rows.push({n:"Suami",c:1,u:sp})}
    if(c.pas==="istri"){sp=anak?3:6; rows.push({n:"Istri",c:c.istri,u:sp})}
    if(c.ibu){var mu=anak?4:((c.ayah&&c.pas!=="none")?(24-sp)/3:8); rows.push({n:"Ibu",c:1,u:mu})}
    var ay=null; if(c.ayah){ay={n:"Ayah",c:1,u:(anak?4:0),sisa:false,f:anak}; rows.push(ay)}
    var aP=null; if(c.L===0&&c.P>0){aP={n:"Anak perempuan",c:c.P,u:(c.P===1?12:16)}; rows.push(aP)}
    for(i=0;i<rows.length;i++)F+=rows[i].u;
    if(!rows.length&&c.L===0) return {err:"Pilih minimal satu ahli waris."};
    var den=24, aul=false;
    if(F>24){den=F; aul=true}
    else{
      var R=24-F;
      if(c.L>0){
        var unit=2*c.L+c.P, uL=R*2*c.L/unit, uP=R*c.P/unit;
        rows.push({n:"Anak laki-laki",c:c.L,u:uL,sisa:true});
        if(c.P>0) rows.push({n:"Anak perempuan",c:c.P,u:uP,sisa:true});
      } else if(R>0){
        if(c.ayah){ay.u+=R; ay.sisa=true}
        else return {radd:true};
      }
    }
    return {rows:rows,den:den,aul:aul};
  }
  function run(){
    var c={pas:$("kw-pas").value,istri:Math.max(1,Math.min(4,parseInt($("kw-istri").value,10)||1)),ayah:$("kw-ayah").checked,ibu:$("kw-ibu").checked,L:Math.max(0,parseInt($("kw-l").value,10)||0),P:Math.max(0,parseInt($("kw-p").value,10)||0)};
    $("kw-istri-wrap").style.display=c.pas==="istri"?"block":"none";
    var h=num($("kw-harta").value), o=$("kw-out"), r=hitung(c);
    if(r.err){o.innerHTML=r.err;return}
    if(r.radd){o.innerHTML="Kasus ini menyisakan harta yang tidak diterima ashabah, sehingga perlu pembahasan <b>radd</b> yang diperselisihkan ulama (lihat topik Aul dan Radd). Kalkulator ini tidak menghitungnya. Silakan konsultasi kepada ahli faraid atau Pengadilan Agama.";return}
    var html='<div class="ib-table-wrap"><table class="ib-table"><thead><tr><th>Ahli waris</th><th>Bagian</th><th>Persen</th><th>Jumlah</th><th>Per orang</th></tr></thead><tbody>', tot=0;
    r.rows.forEach(function(x){
      var share=x.u/r.den; tot+=share;
      var b=Number.isInteger(x.u)&&!x.sisa?frac(x.u,r.den):"sisa (ashabah)";
      if(x.n==="Ayah"&&x.sisa)b=x.f?"1/6 + sisa":"sisa (ashabah)";
      var nama=x.n+(x.c>1?" ("+x.c+" orang)":"");
      html+="<tr><td><b>"+nama+"</b></td><td>"+b+"</td><td>"+pct(share)+"</td><td>"+(h>0?rp(h*share):"-")+"</td><td>"+(h>0&&x.c>1?rp(h*share/x.c):(h>0?rp(h*share):"-"))+"</td></tr>";
    });
    html+="</tbody></table></div>";
    html+="<p class='fk-calc-note'>Jumlah seluruh bagian: "+pct(tot)+(r.aul?". Terjadi <b>aul</b>: bagian-bagian disusutkan sebanding agar jumlahnya sama dengan seluruh harta.":".")+(c.ibu&&c.ayah&&c.pas!=="none"&&c.L+c.P===0?" Pada kasus ini ibu menerima 1/3 dari sisa setelah bagian pasangan (kasus Umariyyatain), sehingga bagiannya 1/6 atau 1/4 dari seluruh harta.":"")+(h>0?"":" Isi nilai harta bersih untuk melihat nominal rupiah.")+"</p>";
    o.innerHTML=html;
  }
  run();
})();`;
  const fkWaris = () => `<div class="fk-calc" id="fk-waris">
    <div class="fk-calc-cards">
      <section class="card fk-calc-card"><h3>Ahli waris yang ada</h3>
        <label>Pasangan pewaris<select class="fk-in" id="kw-pas"><option value="none">Tidak ada</option><option value="suami">Suami</option><option value="istri">Istri</option></select></label>
        <div id="kw-istri-wrap" style="display:none"><label>Jumlah istri (1 sampai 4)<input class="fk-in" id="kw-istri" type="number" min="1" max="4" value="1"></label></div>
        <label class="fk-check"><input type="checkbox" id="kw-ayah"> Ayah masih hidup</label>
        <label class="fk-check"><input type="checkbox" id="kw-ibu"> Ibu masih hidup</label>
        <label>Jumlah anak laki-laki<input class="fk-in" id="kw-l" type="number" min="0" value="0"></label>
        <label>Jumlah anak perempuan<input class="fk-in" id="kw-p" type="number" min="0" value="0"></label>
        <label>Harta bersih (Rp)<input class="fk-in" data-rp id="kw-harta" type="text" inputmode="numeric" placeholder="setelah dikurangi biaya jenazah, utang, dan wasiat" autocomplete="off"></label>
        <p class="fk-calc-note">Harta bersih adalah harta peninggalan setelah dikurangi biaya perawatan jenazah, utang, dan wasiat (paling banyak 1/3).</p></section>
      <section class="card fk-calc-card" style="grid-column:span 2"><h3>Hasil pembagian</h3><div id="kw-out" class="fk-calc-out" aria-live="polite"></div></section>
    </div>
    <script>${WARIS_JS}</script></div>`;

  const block = b => {
    switch (b.t) {
      case "p": return `<p>${inl(b.x)}</p>`;
      case "h": return `<h3 class="fk-h">${inl(b.x)}</h3>`;
      case "ol": return `<ol class="fk-list">${b.items.map(i => `<li>${inl(i)}</li>`).join("")}</ol>`;
      case "ul": return `<ul class="fk-list">${b.items.map(i => `<li>${inl(i)}</li>`).join("")}</ul>`;
      case "tabel": return `<div class="ib-table-wrap"><table class="ib-table"><thead><tr>${b.head.map(h => `<th>${inl(h)}</th>`).join("")}</tr></thead><tbody>${b.rows.map(r => `<tr>${r.map((c, i) => `<td>${i === 0 ? `<b>${inl(c)}</b>` : inl(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
      case "dalil": return `<blockquote class="fk-dalil">${b.ar ? `<div class="ib-ar" lang="ar" dir="rtl">${esc(b.ar)}</div>` : ""}<div class="ib-arti">${inl(b.arti || "")}</div>${b.sumber ? `<div class="ib-src">${esc(b.sumber)}</div>` : ""}</blockquote>`;
      case "box": return `<aside class="fk-box"><b>${esc(b.judul || "Yang perlu diingat")}</b><ul>${b.items.map(i => `<li>${inl(i)}</li>`).join("")}</ul></aside>`;
      case "catatan": return `<div class="fk-note"><b>${esc(b.judul || "Catatan perbedaan pendapat")}:</b> ${inl(b.x)}</div>`;
      case "read": return ibRead(b);
      case "ib": return ibPiece(b.k);
      case "kalkulator": return b.k === "waris" ? fkWaris() : fkCalc();
      case "link": return `<p class="fk-link"><a href="${esc(b.href)}"><i class="fa-solid fa-arrow-right"></i> ${inl(b.x)}</a></p>`;
      default: warn("jenis blok tidak dikenal:", b.t); return "";
    }
  };
  const topic = t => `<article class="fk-topic" id="${esc(t.id)}"><h2>${esc(t.judul)}</h2><p class="fk-intinya">${inl(t.intinya || "")}</p>${(t.isi || []).map(block).join("")}<p class="fk-up"><a href="#fk-top">Kembali ke daftar isi</a></p></article>`;

  /* kerangka halaman dari sejarah.html (menu, footer, skrip) */
  const shell = read("sejarah.html");
  const shellPre = shell.slice(0, shell.indexOf("<main")), shellPost = shell.slice(shell.indexOf("</main>") + 7);
  const headBlock = ({ title, desc, url, ld }) => `<!--SEO-HEAD:START-->
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
<meta name="author" content="GRADIEND — Rohis SMAN 62 Jakarta">
<meta name="theme-color" content="#0c6b4d">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="id" href="${url}"><link rel="alternate" hreflang="x-default" href="${url}">
<meta property="og:url" content="${url}"><meta property="og:site_name" content="GRADIEND Rohis 62"><meta property="og:locale" content="id_ID"><meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:image" content="${OG}">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(desc)}"><meta name="twitter:image" content="${OG}">
<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>
<script type="application/ld+json">${jsonForScript(ld)}</script>
<!--SEO-HEAD:END-->`;
  const page = (head, inner) => {
    let pre = shellPre.replace(/<!--SEO-HEAD:START-->[\s\S]*?<!--SEO-HEAD:END-->/, () => head);
    if (!/<base /.test(pre)) pre = pre.replace(/<meta name="viewport"[^>]*>/, m => `${m}\n<base href="/">`);
    return `${pre}<main class="section"><div class="container" id="fk-top">${inner}</div></main>${shellPost}`;
  };
  const review = META.tinjauan ? `<p class="fk-review"><i class="fa-solid fa-circle-check"></i> Ditinjau oleh: ${esc(META.tinjauan)}</p>` : "";
  const notice = `<div class="notice">${esc(META.catatan || "")}${review}</div>`;

  fs.rmSync(path.join(ROOT, "fikih"), { recursive: true, force: true });

  /* halaman bab */
  live.forEach((b, idx) => {
    const T = topicsOf(b), d = DATA[b.slug], url = `${SITE}/fikih/${b.slug}.html`;
    const prev = live[idx - 1], next = live[idx + 1];
    const ld = { "@context": "https://schema.org", "@graph": [
      { "@type": "WebPage", "@id": url + "#webpage", url, name: b.seoJudul, description: b.seoDesc, inLanguage: "id-ID", isPartOf: { "@id": SITE_ID }, publisher: { "@id": ORG_ID }, breadcrumb: { "@id": url + "#breadcrumb" }, mainEntity: { "@id": url + "#topik" } },
      { "@type": "BreadcrumbList", "@id": url + "#breadcrumb", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: SITE + "/" },
        { "@type": "ListItem", position: 2, name: "Fikih", item: SITE + "/fikih.html" },
        { "@type": "ListItem", position: 3, name: b.judul, item: url }] },
      { "@type": "ItemList", "@id": url + "#topik", name: "Topik " + b.judul, itemListElement: T.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.judul, url: `${url}#${t.id}` })) }] };
    const inner = `
  <nav class="fk-crumb" aria-label="Remah roti"><a href="/">Beranda</a> <span>›</span> <a href="fikih.html">Fikih</a> <span>›</span> <span>${esc(b.judul)}</span></nav>
  <div class="section-head"><div><div class="eyebrow">Fikih · Bab ${b.no}</div><h1 class="section-title">${esc(b.judul)}</h1><p class="section-sub">${esc(b.ringkas)}</p></div></div>
  ${notice}
  <div class="fk-layout">
    <aside class="fk-toc"><details open><summary><i class="fa-solid fa-list"></i> Daftar isi</summary><ol>${T.map(t => `<li><a href="#${esc(t.id)}">${esc(t.judul)}</a></li>`).join("")}</ol></details></aside>
    <div class="fk-content">${T.map(topic).join("")}
      ${(d.rujukan || []).length ? `<section class="fk-ref"><h3 class="fk-h">Rujukan</h3><ul class="fk-list">${d.rujukan.map(r => `<li>${esc(r)}</li>`).join("")}</ul></section>` : ""}
      <nav class="fk-pn" aria-label="Bab lainnya">${prev ? `<a href="fikih/${prev.slug}.html">‹ ${esc(prev.judul)}</a>` : "<span></span>"}${next ? `<a href="fikih/${next.slug}.html">${esc(next.judul)} ›</a>` : "<span></span>"}</nav>
    </div>
  </div>
  <script>if(window.innerWidth<900){var d=document.querySelector(".fk-toc details");if(d)d.removeAttribute("open")}</script>`;
    write(`fikih/${b.slug}.html`, page(headBlock({ title: b.seoJudul, desc: b.seoDesc, url, ld }), inner));
    FK_URLS.push(`/fikih/${b.slug}.html`);
  });

  /* halaman utama Fikih */
  const hubUrl = SITE + "/fikih.html";
  const hubTitle = "Fikih Ibadah Mazhab Syafi'i: Wudhu, Salat, Zakat, Puasa | GRADIEND", hubDesc = "Belajar fikih ibadah mazhab Syafi'i bersama Rohis 62: rukun Islam, thaharah, salat, jenazah, zakat, puasa, haji, waris, kurban, dan akikah, lengkap dengan dalil.";
  const hubLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "CollectionPage", "@id": hubUrl + "#webpage", url: hubUrl, name: hubTitle, description: hubDesc, inLanguage: "id-ID", isPartOf: { "@id": SITE_ID }, publisher: { "@id": ORG_ID }, breadcrumb: { "@id": hubUrl + "#breadcrumb" }, mainEntity: { "@id": hubUrl + "#bab" } },
    { "@type": "BreadcrumbList", "@id": hubUrl + "#breadcrumb", itemListElement: [{ "@type": "ListItem", position: 1, name: "Beranda", item: SITE + "/" }, { "@type": "ListItem", position: 2, name: "Fikih", item: hubUrl }] },
    { "@type": "ItemList", "@id": hubUrl + "#bab", name: "Bab Fikih", itemListElement: live.map((b, i) => ({ "@type": "ListItem", position: i + 1, name: b.judul, url: `${SITE}/fikih/${b.slug}.html` })) }] };
  const card = b => {
    const on = live.includes(b), T = topicsOf(b);
    const soon = on ? (b.topikSegera || []).map(x => `<li class="fk-tl fk-tl-soon">${esc(x)} · segera</li>`).join("") : "";
    const topics = (on ? T.map(t => `<li class="fk-tl"><a href="fikih/${b.slug}.html#${esc(t.id)}">${esc(t.judul)}</a></li>`).join("") : (b.topik || []).map(x => `<li class="fk-tl">${esc(x)}</li>`).join("")) + soon;
    const head = on ? `<a class="fk-card-head" href="fikih/${b.slug}.html">` : `<div class="fk-card-head">`;
    const headEnd = on ? "</a>" : "</div>";
    return `<section class="card fk-card${on ? "" : " fk-soon"}" data-q="${esc((b.judul + " " + b.ringkas + " " + (b.topik || []).join(" ") + " " + T.map(t => t.judul).join(" ") + " " + (b.topikSegera || []).join(" ")).toLowerCase())}">
    ${head}<span class="fk-ico"><i class="fa-solid ${esc(b.ikon)}"></i></span><span><small>Bab ${b.no}${on ? "" : " · segera hadir"}</small><h2>${esc(b.judul)}</h2></span>${headEnd}
    <p>${esc(b.ringkas)}</p>${b.sementara ? `<p><a class="fk-temp" href="${esc(b.sementara.href)}">${esc(b.sementara.label)} →</a></p>` : ""}
    <ul class="fk-tlist">${topics}</ul></section>`;
  };
  const hubInner = `
  <div class="section-head"><div><div class="eyebrow">Belajar</div><h1 class="section-title">Fikih Ibadah Mazhab Syafi'i</h1><p class="section-sub">Panduan hukum bersuci, salat, puasa, zakat, dan ibadah lainnya, disusun per bab dengan dalil dan ringkasan yang mudah diingat.</p></div></div>
  ${notice}
  <div class="fk-search"><i class="fa-solid fa-magnifying-glass"></i><input id="fk-q" type="search" placeholder="Cari topik: wudhu, najis, haid, zakat..." aria-label="Cari topik fikih" autocomplete="off"></div>
  <div class="fk-grid" id="fk-grid">${BAB.map(card).join("")}</div>
  <p class="empty" id="fk-empty" hidden>Tidak ada topik yang cocok. Coba kata kunci lain.</p>
  <script>(function(){var q=document.getElementById("fk-q"),cards=[].slice.call(document.querySelectorAll(".fk-card")),e=document.getElementById("fk-empty");q.addEventListener("input",function(){var v=q.value.trim().toLowerCase(),n=0;cards.forEach(function(c){var ok=!v||c.getAttribute("data-q").indexOf(v)>-1;c.hidden=!ok;if(ok)n++});e.hidden=n>0})})()</script>`;
  write("fikih.html", page(headBlock({ title: hubTitle, desc: hubDesc, url: hubUrl, ld: hubLd }), hubInner));
  FK_URLS.unshift("/fikih.html");
  console.log(`      ${live.length} bab terbit dari ${BAB.length}; ${live.reduce((a, b) => a + topicsOf(b).length, 0)} topik`);
});

/* ---------- 3. blok "Tentang halaman ini" + "Jelajahi juga" ---------- */
const L = {
  quran: ["quran.html", "fa-book-quran", "Baca Al-Qur'an online"], tajwid: ["tajwid.html", "fa-spell-check", "Belajar tajwid"],
  ah: ["asmaul-husna.html", "fa-star-and-crescent", "Asmaul Husna 99 nama Allah"], doa: ["doa.html", "fa-hands-praying", "Kumpulan doa harian"],
  salat: ["jadwal-salat.html", "fa-clock", "Waktu salat hari ini"], tasbih: ["tasbih.html", "fa-fingerprint", "Tasbih digital"],
  event: ["event.html", "fa-newspaper", "Event & artikel Rohis 62"], sejarah: ["sejarah.html", "fa-landmark", "Sejarah Rohis SMAN 62 Jakarta"],
  sosmed: ["media-sosial.html", "fa-brands fa-instagram", "Instagram @rohis62_"], kontak: ["kontak.html", "fa-envelope", "Kontak Rohis 62"], home: ["/", "fa-house", "Beranda GRADIEND Rohis 62"],
  fikih: ["fikih.html", "fa-book-open", "Fikih ibadah mazhab Syafi'i"]
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
    "Panduan tata cara wudhu, tayamum, salat wajib, dan salat sunnah beserta bacaannya ada di menu Fikih, pada bab Thaharah dan bab Salat."], "", ["fikih", "quran", "doa", "tasbih"]),
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
  FK_URLS.forEach((u, i) => add(u, null, i === 0 ? "0.8" : "0.7"));
  SURAH.forEach(s => add(`/quran.html?s=${s.n}`, null, "0.6"));
  events.forEach(e => add(`/artikel/${encodeURIComponent(e.id)}.html`, e.date, "0.7"));
  write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${U.join("\n")}\n</urlset>\n`);
  console.log(`      ${U.length} URL`);
});
console.log("build-seo selesai.");
