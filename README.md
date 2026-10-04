# GRADIEND WEB

Website statis (HTML/CSS/JS) untuk Rohis SMAN 62 Jakarta. Tanpa database dan tanpa login admin:
event dan quote ditambahkan langsung lewat kode.

## Halaman

- `index.html` — Beranda (event terbaru + quote harian)
- `event.html` — Daftar event & artikel
- `artikel.html?id=...` — Isi artikel
- `jadwal-salat.html` — Waktu salat
- `quran.html` — Al-Qur'an (Arab berwarna tajwid, Latin, terjemahan Indonesia, tafsir per ayat, murottal)
- `asmaul-husna.html` — 99 nama Allah (Arab, Latin, arti) dengan pencarian dan audio
- `tasbih.html` — Tasbih digital
- `sejarah.html`, `media-sosial.html`, `kontak.html`

## Menambah event

Buka `js/events.js`, salin contoh di bagian atas file ke dalam daftar `window.GRADIEND_EVENTS`, isi datanya, lalu commit.
Foto cover (opsional) disimpan di `assets/events/` dan dipanggil dengan `image: "assets/events/nama-file.jpg"`.
Event bisa disembunyikan sementara dengan `draft: true`.

## Menambah quote

Buka `js/quotes.js`, tambahkan satu baris di dalam `window.GRADIEND_QUOTES`:

```js
{ type: "hadits", text: "Isi quote...", source: "HR. Bukhari" },
```

`type` bisa `"quran"`, `"hadits"`, atau `"tokoh"`. Quote di beranda berganti setiap hari, dan tombol "Quote lain" mengacak.
Pastikan isi dan sumber quote benar sebelum ditambahkan.

## Al-Qur'an

Halaman `quran.html` mengambil data dari API publik langsung dari browser, jadi butuh koneksi internet:

- Teks Arab, Latin, terjemahan, tafsir, dan murottal: equran.id (sumber: Kemenag RI).
- Warna tajwid: Quran.com. Jika data tajwid gagal dimuat, ayat tetap tampil tanpa warna.

Alamat kedua API ada di `js/config.js` (`quranApiBase` dan `tajwidApiBase`).
Tombol **Tajwid** menyalakan atau mematikan warna (beserta panduan warnanya), tombol **Tafsir** membuka semua tafsir,
dan setiap ayat punya tombol tafsirnya sendiri.

## Asmaul Husna

Data 99 nama ada di `js/asmaul-husna.js`. Untuk mengubah arti atau ejaan Latin, edit teksnya lalu commit.

**Audio:** tiap kartu punya tombol putar, dan ada tombol "Putar semua". Urutan pemutaran:

1. Jika ada berkas `assets/audio/asmaul-husna/01.mp3` sampai `99.mp3` (nama dua digit sesuai nomor), berkas itu yang diputar.
2. Jika tidak ada, nama dibacakan oleh suara Arab bawaan browser/perangkat (Web Speech API). Kualitas bergantung pada perangkat; di perangkat tanpa suara Arab akan muncul pemberitahuan.

Untuk suara yang konsisten di semua perangkat, taruh rekaman mp3 per nama di folder tersebut.

## Fitur tersembunyi

Di footer semua halaman, teks "GRADIEND 32" bisa diketuk. Isinya "Keajaiban Al-Qur'an dan Sains", yaitu ayat yang sering dikaitkan
dengan temuan sains. Datanya ada di `js/keajaiban.js` (dimuat hanya saat diketuk). Tambah topik dengan menyalin satu blok di daftar tersebut.

## GitHub & Vercel

1. Upload semua isi folder ini ke repository GitHub (struktur folder `assets/`, `css/`, `js/` jangan diubah).
2. Import repository ke Vercel: Framework Preset **Other**, Build Command dan Output Directory dikosongkan.
3. Setiap commit baru akan di-deploy otomatis.

Supabase tidak lagi dipakai. Project Supabase lama boleh dihapus.

## Data salat

Halaman salat memakai geolocation browser lalu mencari kabupaten/kota di API yang mendokumentasikan sumber jadwal dari Kemenag RI.
