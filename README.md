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
- `robots.txt`, `sitemap.xml`, `llms.txt` — berkas SEO (lihat bagian *SEO*)
- `400.html`, `401.html`, `403.html`, `404.html`, `408.html`, `410.html`, `429.html`, `500.html`, `502.html`, `503.html`, `504.html` — halaman error bertema GRADIEND (lihat bagian *Halaman error*)

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

## SEO

Situs sudah disiapkan agar mudah ditemukan mesin pencari dan asisten AI (ChatGPT, Gemini, Claude, Perplexity, dll.):

- Setiap halaman punya `<title>`, meta description, canonical, Open Graph/Twitter Card, dan data terstruktur JSON-LD (`WebSite`, `Organization`, `FAQPage`, `WebPage`, `BreadcrumbList`, `WebApplication`). Gambar pratinjau tautan: `assets/og-image.png` (1200×630).
- `artikel.html?id=...` mengisi title, description, canonical, dan JSON-LD `Article` otomatis dari data di `js/events.js`.
- Beranda punya bagian **Tentang / FAQ** yang terlihat dan identik dengan data `FAQPage`. Edit bersama-sama: teks di `index.html` dan JSON-LD di `<head>` harus sama.
- `robots.txt` mengizinkan semua crawler (termasuk crawler AI) dan menunjuk ke `sitemap.xml`. `llms.txt` adalah ringkasan situs untuk AI.
- Alamat situs ada di `js/config.js` (`siteUrl`). Jika pindah ke domain sendiri, ganti nilai itu, lalu ganti `https://gradiend.vercel.app` di semua berkas (`robots.txt`, `llms.txt`, meta tag di `<head>`) dan jalankan ulang skrip sitemap.
- Halaman error (4xx/5xx) memakai `noindex` supaya tidak muncul di hasil pencarian.

**Setiap menambah event**, perbarui sitemap lalu commit:

```
node scripts/generate-sitemap.js
```

**Setelah deploy:** buka Google Search Console (situs sudah terverifikasi lewat `googled7487f308570ca5c.html`), kirim `https://gradiend.vercel.app/sitemap.xml`, lalu minta pengindeksan untuk beranda. Daftarkan juga di Bing Webmaster Tools, karena ChatGPT dan beberapa asisten AI memakai indeks Bing. Pastikan fitur *Bot Protection / Attack Challenge Mode* di Vercel tidak memblokir crawler.

## Data salat

Halaman salat memakai geolocation browser lalu mencari kabupaten/kota di API yang mendokumentasikan sumber jadwal dari Kemenag RI.

## Halaman error

Setiap kode error punya halaman sendiri dengan tema GRADIEND (hijau-emas, mode terang/gelap, satu ayat yang sesuai, tombol Beranda/Kembali, dan pintasan ke fitur utama). Tampilannya diatur oleh blok `.err-*` di bagian bawah `css/style.css`.

- **404** langsung dipakai otomatis oleh GitHub Pages, Netlify, Cloudflare Pages, dan Vercel bila `404.html` ada di akar situs.
- Kode lain (400, 401, 403, 408, 410, 429, 5xx) baru tampil kalau server diatur untuk memakainya. Contoh nginx: `error_page 403 /403.html; error_page 500 502 503 504 /500.html;` dan Apache (`.htaccess`): `ErrorDocument 403 /403.html`. Hosting statis murni tidak bisa memicu kode selain 404, jadi halaman ini tetap bisa dibuka langsung lewat alamatnya.
- Halaman error bisa muncul di alamat apa pun (misalnya `/a/b/c`), karena itu tiap berkasnya memasang `<base href>` lewat variabel `ROOT` di bagian `<head>`. Nilai bawaannya `"/"`. Kalau situs dipasang di subfolder (mis. `https://user.github.io/GRADIEND/`), ganti `ROOT` menjadi `"/GRADIEND/"` di semua berkas error.
- Pastikan teks ayat di tiap halaman error sudah benar sebelum dipublikasikan.
