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
- `hadits.html` — Kumpulan hadits (matan + terjemah, sahabat perawi, penyusun kitab, sanad, takhrij, derajat, penjelasan, rujukan syarah) dengan pencarian, kategori, filter derajat, dan Hadits Pilihan Hari Ini
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
Teks Arab yang tampil selalu teks Kemenag RI (gaya Mushaf Standar Indonesia). Warna tajwid dari Quran.com hanya dipakai sebagai petunjuk: tiap huruf dicocokkan ke huruf yang sama di teks Kemenag lalu diberi warna beserta harakatnya, jadi harakat tidak hilang atau bertabrakan. Jika kecocokan terlalu rendah, ayat itu tampil polos tanpa warna. Font Arab bawaan Amiri Quran. Untuk font resmi Kemenag, taruh berkas `LPMQ-IsepMisbah.ttf` di `assets/fonts/`, otomatis dipakai bila ada.

Tombol **Tajwid** menyalakan atau mematikan warna (beserta panduan warnanya), tombol **Tafsir** membuka semua tafsir,
dan setiap ayat punya tombol tafsirnya sendiri.

## Asmaul Husna

Data 99 nama ada di `js/asmaul-husna.js`. Untuk mengubah arti atau ejaan Latin, edit teksnya lalu commit.

## Audio Asmaul Husna

Pemutar audio di `asmaul-husna.html` memutar satu berkas: `assets/audio/asmaul-husna.mp3` (play/jeda, geser posisi, ulangi). Untuk mengganti audio, timpa berkas itu dengan nama yang sama.

## Doa-doa

Isi halaman `doa.html` ada di `js/doa.js`. Untuk menambah doa, salin satu blok di `window.GRADIEND_DOA`, isi `kat` (salah satu id kategori), `judul`, `ar`, `latin`, `arti`, dan `sumber`. Pastikan teks Arab dan sumbernya benar sebelum ditambahkan.

## Hadits

Halaman `hadits.html` memakai data yang **dipisah per file** di `js/hadits/`:

- `index.js` — daftar kategori dan daftar kitab (nama, penyusun/mukharrij, wafat, lokasi berkas). Ubah daftar kitab di sini.
- `pilihan.js` — hadits yang sudah dilengkapi manual: sahabat perawi, sanad, takhrij, derajat, penjelasan (makna, kosakata, konteks, faedah), dan rujukan syarah. Cara menambah: salin satu blok, penjelasan field ada di komentar atas file. `pilihan: true` memasukkannya ke rotasi "Hadits Pilihan Hari Ini".
- `<kitab>.js` (mis. `bukhari.js`) — isi lengkap satu kitab (Arab + terjemah Indonesia). Berkas ini dibuat otomatis, dan baru dimuat browser saat kitabnya dipilih.

Tiga hal dipisah: **penyusun kitab** (di `index.js`), **sahabat perawi** (field `sahabat`), dan **rantai perawi dalam sanad** (field `sanad`). Field `bab.id` disiapkan untuk fitur relasi hadits dengan bab kitab (belum aktif). Tiap hadits bisa ditautkan lewat `hadits.html#id-hadits`.

### Mengunduh data kitab

Sumber: [gadingnst/hadith-api](https://github.com/gadingnst/hadith-api) (MIT; data dari tafsirq.com), berisi Bukhari, Muslim, Abu Dawud, Tirmidzi, Nasa'i, Ibnu Majah, Ahmad, Darimi, dan Malik dengan teks Arab dan terjemah Indonesia.
Di komputer kamu (Node 18+, perlu internet):

```
node tools/fetch-hadits.js            # semua kitab
node tools/fetch-hadits.js bukhari    # satu kitab
```

Hasilnya `js/hadits/<kitab>.js`; commit berkas itu. Kitab yang berkasnya belum ada tampil sebagai "belum tersedia". Data unduhan hanya berisi nomor, Arab, dan terjemah; sanad, derajat, dan penjelasan tetap diisi manual di `pilihan.js`. Periksa mutu data (nomor, terjemah) sebelum dipublikasikan.
Ukuran: Musnad Ahmad (26 ribu hadits) bisa puluhan MB. Jika terlalu berat untuk Vercel atau pembaca, jangan unduh kitab itu.

## Tajwid

Isi halaman `tajwid.html` ada di `js/tajwid.js`. Tiap hukum punya nama, pengertian, huruf, cara baca, dan contoh. Tambah atau ubah dengan menyalin satu blok.

## Favicon

Ikon tab browser memakai `assets/iconlight.png` (tema terang) dan `assets/icondark.png` (tema gelap), dipasang lewat tag `<link rel="icon">` di setiap halaman. Browser memilih sesuai tema sistem/browser pembaca. Jika terbalik, tukar nama berkas di tag tersebut.

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
