/**
 * GRADIEND Rohis 62 — Integrasi Google Form -> GitHub
 *
 * Setiap kali ada jawaban Form, skrip ini:
 *   1. membaca dan memeriksa isian,
 *   2. (bila ada) mengambil foto dari Google Drive, mengecilkannya, lalu menyimpannya ke GitHub
 *      di assets/events/,
 *   3. membuat berkas data/events/<id>.json di GitHub.
 * GitHub memicu Vercel, dan Vercel membangun halaman event secara otomatis.
 *
 * Langkah pemasangan lengkap ada di PANDUAN.md. Token GitHub dan kode pengurus TIDAK ditulis di
 * sini; keduanya disimpan di "Properti Skrip" (Project Settings > Script Properties).
 */

var CFG = {
  OWNER: "mhilmim59-ctrl",
  REPO: "GRADIEND",
  BRANCH: "main",
  EVENTS_DIR: "data/events",
  IMAGES_DIR: "assets/events",
  SITE: "https://gradiend.vercel.app",

  // Judul pertanyaan di Google Form. HARUS sama persis dengan yang ada di Form.
  Q: {
    judul: "Judul event",
    tanggal: "Tanggal kegiatan",
    kategori: "Kategori",
    penulis: "Nama penulis",
    ringkasan: "Ringkasan singkat",
    isi: "Isi artikel",
    foto: "Foto kegiatan",
    linkFoto: "Link foto (Google Drive)",
    instagram: "Link Instagram (opsional)",
    kode: "Kode pengurus"
  },

  KATEGORI: ["Kajian", "Keislaman", "Sosial", "Kegiatan", "Lainnya"],
  MAKS: { judul: 140, penulis: 60, ringkasan: 300, isi: 20000 },
  LEBAR_FOTO: 1600,
  MAKS_FOTO_BYTE: 8 * 1024 * 1024
};

/* ============================================================== PEMICU UTAMA */

/** Dijalankan otomatis tiap Form dikirim (setelah pasangTrigger dijalankan sekali). */
function onFormSubmit(e) {
  var props = PropertiesService.getScriptProperties();
  var admin = props.getProperty("ADMIN_EMAIL");
  var judulMentah = "";
  try {
    var jawaban = bacaJawaban_(e.response);
    judulMentah = String(jawaban[CFG.Q.judul] || "");
    var hasil = proses_(jawaban, props);
    kirimEmail_(admin, "[GRADIEND] Event " + (hasil.terbit ? "terbit" : "menunggu persetujuan") + ": " + hasil.judul,
      ringkasanHasil_(hasil));
    return hasil;
  } catch (err) {
    Logger.log("GAGAL: " + err);
    kirimEmail_(admin, "[GRADIEND] GAGAL memproses event: " + judulMentah,
      "Event tidak dibuat.\n\nAlasan: " + (err && err.message ? err.message : err) +
      "\n\nPeriksa isian Form dan Properti Skrip, lalu isi Form lagi atau buat berkas secara manual.");
    throw err;
  }
}

/** Inti proses; dipisah agar bisa diuji. Mengembalikan ringkasan hasil. */
function proses_(jawaban, props) {
  var v = validasi_(jawaban);
  if (v.galat.length) throw new Error(v.galat.join(" "));

  var kodeBenar = !!props.getProperty("KODE_PENGURUS") && v.kode === props.getProperty("KODE_PENGURUS");
  var langsungTerbit = kodeBenar && props.getProperty("AUTO_PUBLISH") !== "tidak";

  var id = cariIdTersedia_(buatSlug_(v.judul) + "-" + v.tanggal);
  var data = {
    id: id, title: v.judul, date: v.tanggal, category: v.kategori,
    author: v.penulis || "GRADIEND", excerpt: v.ringkasan, content: v.isi
  };
  if (v.instagram) data.instagram = v.instagram;
  if (!langsungTerbit) data.draft = true;

  var catatanFoto = "";
  if (v.fotoId) {
    try {
      var foto = ambilFoto_(v.fotoId);
      var pathFoto = CFG.IMAGES_DIR + "/" + id + "." + foto.ext;
      simpanFile_(pathFoto, Utilities.base64Encode(foto.bytes), "Foto event: " + v.judul);
      data.image = pathFoto;
    } catch (errFoto) {
      catatanFoto = "Foto dilewati: " + errFoto.message;
      Logger.log(catatanFoto);
    }
  }

  var pathJson = CFG.EVENTS_DIR + "/" + id + ".json";
  simpanFile_(pathJson, Utilities.base64Encode(JSON.stringify(data, null, 2) + "\n", Utilities.Charset.UTF_8),
    (langsungTerbit ? "Event baru: " : "Event baru (draf): ") + v.judul);

  return { id: id, judul: v.judul, terbit: langsungTerbit, kodeBenar: kodeBenar, pathJson: pathJson, catatanFoto: catatanFoto, adaFoto: !!data.image };
}

/* ============================================================== VALIDASI */

function bacaJawaban_(response) {
  var peta = {};
  response.getItemResponses().forEach(function (ir) {
    peta[ir.getItem().getTitle()] = ir.getResponse();
  });
  return peta;
}

function bersihkan_(teks, maks) {
  var t = String(teks == null ? "" : teks)
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  return maks && t.length > maks ? null : t;
}

function validasi_(j) {
  var Q = CFG.Q, galat = [];
  function ambil(kunci, maks, wajib) {
    var t = bersihkan_(j[Q[kunci]], maks);
    if (t === null) { galat.push("\"" + Q[kunci] + "\" terlalu panjang (maks " + maks + " karakter)."); return ""; }
    if (wajib && !t) galat.push("\"" + Q[kunci] + "\" wajib diisi.");
    return t;
  }
  var judul = ambil("judul", CFG.MAKS.judul, true).replace(/\n/g, " ");
  var penulis = ambil("penulis", CFG.MAKS.penulis, false).replace(/\n/g, " ");
  var ringkasan = ambil("ringkasan", CFG.MAKS.ringkasan, true).replace(/\n/g, " ");
  var isi = ambil("isi", CFG.MAKS.isi, true);
  var kode = String(j[Q.kode] == null ? "" : j[Q.kode]).trim();

  var tanggal = String(j[Q.tanggal] == null ? "" : j[Q.tanggal]).trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(tanggal) || isNaN(new Date(tanggal + "T00:00:00Z").getTime())) {
    galat.push("\"" + Q.tanggal + "\" tidak valid (harus tanggal yang benar).");
  }

  var kategori = String(j[Q.kategori] == null ? "" : j[Q.kategori]).trim();
  if (CFG.KATEGORI.indexOf(kategori) < 0) galat.push("\"" + Q.kategori + "\" harus salah satu dari: " + CFG.KATEGORI.join(", ") + ".");

  var instagram = String(j[Q.instagram] == null ? "" : j[Q.instagram]).trim();
  if (instagram && !/^https:\/\/(www\.)?instagram\.com\/(p|reel|reels|tv)\/[A-Za-z0-9_-]{5,}\/?(\?.*)?$/.test(instagram)) {
    galat.push("\"" + Q.instagram + "\" bukan tautan postingan atau reel Instagram yang benar.");
  }

  var fotoId = "";
  var unggah = j[Q.foto];
  if (unggah && unggah.length) fotoId = String(unggah[0]);
  else if (j[Q.linkFoto]) fotoId = idDriveDariTautan_(String(j[Q.linkFoto]));

  return { galat: galat, judul: judul, penulis: penulis, ringkasan: ringkasan, isi: isi, tanggal: tanggal,
           kategori: kategori, instagram: instagram, fotoId: fotoId, kode: kode };
}

function idDriveDariTautan_(url) {
  var m = String(url).match(/\/d\/([A-Za-z0-9_-]{15,})/) || String(url).match(/[?&]id=([A-Za-z0-9_-]{15,})/);
  return m ? m[1] : "";
}

/** "Kajian Subuh: Adab!" -> "kajian-subuh-adab" (huruf kecil, angka, tanda minus). */
function buatSlug_(teks) {
  var s = String(teks).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 50).replace(/-+$/g, "");
  return s || "event";
}

/* ============================================================== FOTO */

function ambilFoto_(fileId) {
  var file = DriveApp.getFileById(fileId);           // juga meminta izin Drive
  var mime = file.getMimeType();
  if (!/^image\/(jpeg|png|webp)$/.test(mime)) throw new Error("Berkas foto harus JPG, PNG, atau WebP.");
  var blob = null;
  try {
    var res = UrlFetchApp.fetch("https://drive.google.com/thumbnail?id=" + fileId + "&sz=w" + CFG.LEBAR_FOTO, {
      headers: { Authorization: "Bearer " + ScriptApp.getOAuthToken() },
      muteHttpExceptions: true, followRedirects: true
    });
    if (res.getResponseCode() === 200) {
      var b = res.getBlob();
      if (/^image\//.test(b.getContentType() || "")) blob = b;
    }
  } catch (e) { Logger.log("thumbnail gagal: " + e); }
  if (!blob) {
    if (file.getSize() > CFG.MAKS_FOTO_BYTE) throw new Error("Foto terlalu besar (maks 8 MB).");
    blob = file.getBlob();
  }
  var tipe = blob.getContentType() || mime;
  var bytes = blob.getBytes();
  if (bytes.length > CFG.MAKS_FOTO_BYTE) throw new Error("Foto terlalu besar (maks 8 MB).");
  return { bytes: bytes, ext: tipe.indexOf("png") >= 0 ? "png" : (tipe.indexOf("webp") >= 0 ? "webp" : "jpg") };
}

/* ============================================================== GITHUB */

function github_(metode, rute, muatan) {
  var token = PropertiesService.getScriptProperties().getProperty("GITHUB_TOKEN");
  if (!token) throw new Error("GITHUB_TOKEN belum diisi di Properti Skrip.");
  var opsi = {
    method: metode,
    headers: { Authorization: "Bearer " + token, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" },
    muteHttpExceptions: true
  };
  if (muatan) { opsi.contentType = "application/json"; opsi.payload = JSON.stringify(muatan); }
  var res = UrlFetchApp.fetch("https://api.github.com/repos/" + CFG.OWNER + "/" + CFG.REPO + "/" + rute, opsi);
  var teks = res.getContentText(), isi = null;
  try { isi = JSON.parse(teks); } catch (e) { isi = null; }
  return { kode: res.getResponseCode(), isi: isi, teks: teks };
}

function adaDiGithub_(pathBerkas) {
  var r = github_("get", "contents/" + pathBerkas + "?ref=" + encodeURIComponent(CFG.BRANCH));
  if (r.kode === 200) return true;
  if (r.kode === 404) return false;
  throw new Error("GitHub menjawab " + r.kode + " saat memeriksa berkas: " + String(r.teks).slice(0, 200));
}

function simpanFile_(pathBerkas, base64, pesan) {
  var r = github_("put", "contents/" + pathBerkas, { message: pesan, content: base64, branch: CFG.BRANCH });
  if (r.kode !== 200 && r.kode !== 201) {
    throw new Error("Gagal menyimpan " + pathBerkas + " ke GitHub (kode " + r.kode + "): " + String(r.teks).slice(0, 200));
  }
}

/** Cari id yang belum dipakai (baik berkas JSON maupun fotonya). */
function cariIdTersedia_(dasar) {
  for (var i = 1; i <= 20; i++) {
    var id = i === 1 ? dasar : dasar + "-" + i;
    if (!adaDiGithub_(CFG.EVENTS_DIR + "/" + id + ".json") &&
        !adaDiGithub_(CFG.IMAGES_DIR + "/" + id + ".jpg") &&
        !adaDiGithub_(CFG.IMAGES_DIR + "/" + id + ".png") &&
        !adaDiGithub_(CFG.IMAGES_DIR + "/" + id + ".webp")) return id;
  }
  throw new Error("Terlalu banyak event dengan judul dan tanggal yang sama.");
}

/* ============================================================== EMAIL */

function ringkasanHasil_(h) {
  var blob = "https://github.com/" + CFG.OWNER + "/" + CFG.REPO + "/blob/" + CFG.BRANCH + "/" + h.pathJson;
  var edit = "https://github.com/" + CFG.OWNER + "/" + CFG.REPO + "/edit/" + CFG.BRANCH + "/" + h.pathJson;
  var t = "Judul: " + h.judul + "\nStatus: " + (h.terbit ? "TERBIT" : "DRAF (belum tampil di situs)") + "\n";
  if (!h.terbit) {
    t += h.kodeBenar
      ? "Mode terbit otomatis dimatikan (AUTO_PUBLISH = tidak).\n"
      : "Kode pengurus kosong atau salah.\n";
    t += "\nUntuk MENERBITKAN: buka tautan edit di bawah, ubah \"draft\": true menjadi \"draft\": false (atau hapus baris itu), lalu Commit.\nUntuk MENOLAK: hapus berkas tersebut di GitHub.\n";
  } else {
    t += "\nHalaman akan aktif sekitar 1-3 menit setelah Vercel selesai membangun ulang:\n" + CFG.SITE + "/artikel/" + h.id + ".html\n";
  }
  if (h.catatanFoto) t += "\nCatatan: " + h.catatanFoto + "\n";
  t += "\nBerkas data: " + blob + "\nEdit berkas: " + edit + "\n";
  return t;
}

function kirimEmail_(alamat, subjek, isi) {
  if (!alamat) { Logger.log("ADMIN_EMAIL kosong; email tidak dikirim.\n" + subjek + "\n" + isi); return; }
  MailApp.sendEmail(alamat, subjek, isi);
}

/* ============================================================== PEMASANGAN & UJI */

/** Jalankan SEKALI dari editor: memasang pemicu "saat Form dikirim". */
function pasangTrigger() {
  var form = FormApp.getActiveForm();
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === "onFormSubmit") ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger("onFormSubmit").forForm(form).onFormSubmit().create();
  Logger.log("Pemicu terpasang untuk Form: " + form.getTitle());
}

/** Uji tanpa mengirim ke GitHub: menampilkan hasil validasi dari data contoh. */
function ujiValidasi() {
  var contoh = {};
  contoh[CFG.Q.judul] = "Kajian Subuh: Adab Menuntut Ilmu";
  contoh[CFG.Q.tanggal] = "2026-11-21";
  contoh[CFG.Q.kategori] = "Kajian";
  contoh[CFG.Q.penulis] = "Rohis 62";
  contoh[CFG.Q.ringkasan] = "Kajian ringan bersama alumni.";
  contoh[CFG.Q.isi] = "Paragraf satu.\n\nParagraf dua.";
  var v = validasi_(contoh);
  Logger.log(JSON.stringify(v, null, 2));
  Logger.log("id contoh: " + buatSlug_(v.judul) + "-" + v.tanggal);
}

/** Uji koneksi GitHub (hanya membaca): memastikan token benar dan repo bisa diakses. */
function ujiGithub() {
  var r = github_("get", "contents/" + CFG.EVENTS_DIR + "?ref=" + encodeURIComponent(CFG.BRANCH));
  Logger.log("Kode GitHub: " + r.kode);
  if (r.kode === 200) Logger.log("Berhasil. Isi folder data/events: " + r.isi.map(function (f) { return f.name; }).join(", "));
  else Logger.log("Gagal. Periksa GITHUB_TOKEN, nama repo, dan izin token (Contents: Read and write). Pesan: " + String(r.teks).slice(0, 300));
}
