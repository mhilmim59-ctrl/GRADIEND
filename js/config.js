// GRADIEND — konfigurasi website (statis, tanpa database).
// Semua nilai di bawah bersifat publik.

window.GRADIEND_CONFIG = {
  // Alamat resmi situs (dipakai untuk canonical & data terstruktur artikel). Ganti jika memakai domain sendiri.
  siteUrl: "https://gradiend.vercel.app",

  // Instagram Rohis. Isi "posts" dengan tautan postingan/reel (salin dari Instagram: ... > Salin tautan)
  // agar tampil sebagai embed di beranda dan halaman Media Sosial. Kosongkan jika belum ada.
  // Contoh: posts: ["https://www.instagram.com/p/AbCdEfGhIjK/", "https://www.instagram.com/reel/XyZ12345/"]
  instagram: {
    username: "rohis62_",
    url: "https://www.instagram.com/rohis62_/",
    posts: []
  },

  // Jadwal salat (sumber data: Kemenag RI)
  prayerApiBase: "https://api.myquran.com/v3/sholat",
  kemenagUrl: "https://bimasislam.kemenag.dev/jadwal-sholat",

  // Al-Qur'an (teks Arab, Latin & terjemahan Indonesia dari Kemenag RI via equran.id)
  quranApiBase: "https://equran.id/api/v2",

  // Data warna tajwid (Quran.com)
  tajwidApiBase: "https://api.quran.com/api/v4"
};
