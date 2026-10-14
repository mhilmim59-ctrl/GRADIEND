/* =====================================================================
   REGISTRI HADITS — dimuat di hadits.html
   =====================================================================
   Data tiap kitab ada di file terpisah: js/hadits/<id>.js
   (dimuat hanya saat kitab itu dipilih). Berkas kitab dibuat oleh
   `node tools/fetch-hadits.js` (lihat README). Berkas yang belum dibuat
   akan menampilkan pesan "belum tersedia" di halaman.

   Penyusun kitab (mukharrij) hanya ada di sini. Sahabat perawi dan
   rantai sanad ada di data tiap hadits (hanya di js/hadits/pilihan.js).
   ===================================================================== */
window.GRADIEND_HADITS_KATEGORI = [
  { id: "niat",    nama: "Niat dan Ikhlas",   ikon: "fa-heart" },
  { id: "iman",    nama: "Iman dan Akidah",   ikon: "fa-star-and-crescent" },
  { id: "akhlak",  nama: "Akhlak dan Adab",   ikon: "fa-hand-holding-heart" },
  { id: "ibadah",  nama: "Ibadah",            ikon: "fa-mosque" },
  { id: "ilmu",    nama: "Ilmu",              ikon: "fa-book-open" },
  { id: "muamalah",nama: "Muamalah dan Sosial", ikon: "fa-people-group" }
];


window.GRADIEND_HADITS_DATA = window.GRADIEND_HADITS_DATA || {};

/* jumlah = perkiraan jumlah hadits (untuk info saja). Ubah daftar ini
   sesuai kitab yang benar-benar kamu unduh. */
window.GRADIEND_HADITS_KITAB = {
  bukhari: { nama: "Shahih al-Bukhari",  penyusun: "Imam Muhammad bin Isma'il al-Bukhari", wafat: "256 H", file: "js/hadits/bukhari.js" },
  muslim:  { nama: "Shahih Muslim",      penyusun: "Imam Muslim bin al-Hajjaj an-Naisaburi", wafat: "261 H", file: "js/hadits/muslim.js" },
  abudaud: { nama: "Sunan Abu Dawud",    penyusun: "Imam Abu Dawud as-Sijistani", wafat: "275 H", file: "js/hadits/abudaud.js" },
  tirmidzi:{ nama: "Sunan at-Tirmidzi",  penyusun: "Imam at-Tirmidzi", wafat: "279 H", file: "js/hadits/tirmidzi.js" },
  nasai:   { nama: "Sunan an-Nasa'i",    penyusun: "Imam an-Nasa'i", wafat: "303 H", file: "js/hadits/nasai.js" },
  ibnumajah:{ nama: "Sunan Ibnu Majah",  penyusun: "Imam Ibnu Majah al-Qazwini", wafat: "273 H", file: "js/hadits/ibnumajah.js" },
  ahmad:   { nama: "Musnad Ahmad",       penyusun: "Imam Ahmad bin Hanbal", wafat: "241 H", file: "js/hadits/ahmad.js" },
  darimi:  { nama: "Sunan ad-Darimi",    penyusun: "Imam ad-Darimi", wafat: "255 H", file: "js/hadits/darimi.js" },
  malik:   { nama: "Muwaththa' Malik",   penyusun: "Imam Malik bin Anas", wafat: "179 H", file: "js/hadits/malik.js" }
};
