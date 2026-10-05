# GRADIEND WEB

Website statis (HTML/CSS/JS) untuk Rohis SMAN 62 Jakarta. Tanpa database dan tanpa login admin:
event dan quote ditambahkan langsung lewat kode.

## Halaman

- `index.html` — Beranda (event terbaru + quote harian)
- `event.html` — Daftar event & artikel
- `artikel.html?id=...` — Isi artikel
- `jadwal-salat.html` — Waktu salat
- `quran.html` — Al-Qur'an (Arab berwarna tajwid, Latin, terjemahan Indonesia, tafsir per ayat, murottal)
- `asmaul-husna.html` — 99 nama Allah (Arab, Latin, arti) dengan pencarian
- `doa.html` — Kumpulan doa (harian, ibadah, perlindungan, ilmu, keluarga, ampunan, kesulitan) dengan Arab, Latin, arti, sumber, pencarian, dan tombol salin
- `tajwid.html` — Panduan hukum tajwid (nun mati, mim mati, mad, qalqalah, alif lam, lam jalalah dan ra', makharijul huruf, tanda waqaf) dengan contoh ayat berwarna dan pencarian
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

## Audio Asmaul Husna

Pemutar audio di `asmaul-husna.html` memutar satu berkas: `assets/audio/asmaul-husna.mp3` (play/jeda, geser posisi, ulangi). Untuk mengganti audio, timpa berkas itu dengan nama yang sama.

## Doa-doa

Isi halaman `doa.html` ada di `js/doa.js`. Untuk menambah doa, salin satu blok di `window.GRADIEND_DOA`, isi `kat` (salah satu id kategori), `judul`, `ar`, `latin`, `arti`, dan `sumber`. Pastikan teks Arab dan sumbernya benar sebelum ditambahkan.

## Tajwid

Isi halaman `tajwid.html` ada di `js/tajwid.js`. Tiap hukum punya nama, pengertian, huruf, cara baca, dan contoh. Tambah atau ubah dengan menyalin satu blok.

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
