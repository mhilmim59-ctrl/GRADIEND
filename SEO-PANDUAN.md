# Panduan SEO GRADIEND Rohis 62

## 1. Temuan penting: nama "GRADIEND" bentrok
Kata **gradiend** sudah dipakai proyek riset AI (paket Python `gradiend`, makalah ICLR 2026, GitHub aieng-lab). Mesin pencari memberi peringkat tinggi untuk mereka, jadi mengetik "gradiend" saja tidak akan memunculkan situs ini.

**Strategi:** jangan bersaing di kata "gradiend". Kuasai pencarian yang memang dipakai orang:
- `rohis 62`, `rohis sman 62`, `rohis sman 62 jakarta`, `gradiend rohis 62`
- fitur: `quran online tajwid berwarna`, `waktu salat hari ini`, `asmaul husna`, `doa harian`, `tasbih digital`

Di semua tempat (website, Instagram, grup, tautan), tulis nama lengkap yang **konsisten**: **GRADIEND Rohis 62 / Rohis SMAN 62 Jakarta**. Jangan menulis "GRADIEND" sendirian.

## 2. Setelah deploy (sekali saja)
1. Buka `https://gradiend.vercel.app/robots.txt`, `/sitemap.xml`, `/llms.txt`, dan `/artikel/phbi-maulid-gema-2026.html`. Semua harus terbuka.
2. **Google Search Console** → Sitemaps → kirim `sitemap.xml` (sudah ada 126 URL). Lalu **Inspeksi URL** → tempel beranda → **Minta pengindeksan**. Ulangi untuk `quran.html`, `doa.html`, `jadwal-salat.html`, `event.html`.
3. **Bing Webmaster Tools** (bing.com/webmasters) → Import dari Google Search Console → kirim sitemap. ChatGPT dan beberapa asisten AI memakai indeks Bing.
4. **IndexNow** (memberi tahu Bing/Yandex lebih cepat): setelah deploy selesai, jalankan `node scripts/indexnow.js`. Kunci sudah ada di root: `dc713789d9bd17e3cbe48d3b6fcce219.txt`.
5. Vercel → Settings → Security: pastikan *Attack Challenge Mode* dan *Bot Protection* **mati**, agar crawler tidak diblokir.

## 3. Setiap menambah event
1. Tambah blok di `js/events.js` (lihat petunjuk di file itu). Isi `excerpt` yang jelas, 1-2 kalimat.
2. (Opsional) isi `instagram: "https://www.instagram.com/p/KODE/"` agar postingan IG ikut tampil di artikel.
3. Jalankan `node scripts/build-seo.js` lalu commit. Di Vercel skrip ini jalan otomatis, tapi menjalankannya sendiri membuat Anda bisa memeriksa hasilnya.
4. Setelah deploy: Search Console → Inspeksi URL → alamat `/artikel/<id>.html` → Minta pengindeksan.
5. Bagikan artikelnya di Instagram dan grup WhatsApp (ada tombol Bagikan di tiap artikel).

Tulis artikel minimal 300 kata, pakai foto sendiri, dan sebutkan "Rohis SMAN 62 Jakarta" secara natural.

## 4. Instagram (@rohis62_)
**Di Instagram (dikerjakan manual):**
- **Nama tampilan** (kolom Nama, ikut dicari): `Rohis 62 SMAN 62 Jakarta`
- **Bio** (maks. 150 karakter), contoh:
  `Rohis SMAN 62 Jakarta | GRADIEND (Generasi Dakwah Islam Enam Dua) 🕌 Kajian • Event • Dakwah`
- **Link di bio:** `https://gradiend.vercel.app`. Tanpa ini Instagram tidak mengirim pengunjung ke website.
- **Kategori akun:** Organisasi Pendidikan / Komunitas. Tambahkan email `rohissman62jkt@gmail.com`.
- **Tag lokasi** SMA Negeri 62 Jakarta di setiap postingan kegiatan.
- **Caption** (contoh): "Alhamdulillah, PHBI Maulid Nabi \"GEMA\" berjalan lancar. Baca ceritanya di gradiend.vercel.app (link di bio). #Rohis62 #RohisSMAN62 #SMAN62Jakarta #GRADIEND"
- **Sorotan** (Highlight) dengan nama "Event", "Kajian", "Tentang Rohis 62", dan pin 3 postingan terbaik.
- Isi teks alternatif (alt text) pada foto agar mudah dipahami mesin.

**Di website (sudah terpasang):**
- Bagian "Ikuti @rohis62_" di beranda, kartu Instagram di halaman Media Sosial, tombol Instagram di tiap artikel, dan tautan identitas `rel="me"`.
- Untuk menampilkan postingan asli: buka postingan di Instagram → ⋯ → **Salin tautan**, lalu tempel di `js/config.js`:
  ```js
  instagram: {
    username: "rohis62_",
    url: "https://www.instagram.com/rohis62_/",
    posts: ["https://www.instagram.com/p/AbCdEfGhIjK/", "https://www.instagram.com/reel/XyZ12345/"]
  },
  ```
  Beranda menampilkan 3 postingan pertama, halaman Media Sosial menampilkan 6. Hanya akun publik yang bisa di-embed.

## 5. Off-page: bangun sinyal kepercayaan
Mesin pencari dan AI merekomendasikan situs yang **dibicarakan dan ditautkan pihak lain**. Target realistis: 1-2 tautan baru per bulan.
- **Website SMAN 62 Jakarta:** minta operator/humas menautkan ke GRADIEND di halaman ekstrakurikuler atau kesiswaan.
- **Akun sekolah, OSIS, MPK, dan ekskul lain:** minta mereka menaut @rohis62_ dan gradiend.vercel.app di bio atau story saat ada kegiatan bersama.
- **Alumni Rohis:** minta menaut di grup alumni, bio Instagram/LinkedIn mereka, dan membagikan artikel event.
- **Komunitas Rohis dan pelajar Islam se-Jakarta:** kirim artikel kegiatan, minta dimuat atau ditautkan.
- **Media sekolah/pelajar:** kirim ringkasan event (judul, 1 paragraf, 1-2 foto, tautan artikel).
- Variasikan teks tautan: "Rohis SMAN 62 Jakarta", "GRADIEND Rohis 62", "gradiend.vercel.app".
- **Jangan** membeli tautan atau memakai layanan "backlink murah". Itu bisa membuat situs dihukum Google.

## 6. Rutinitas mingguan (15 menit)
- Publikasi 1 artikel event + 1 postingan Instagram yang menaut ke artikel tersebut.
- Search Console → Performa: lihat kata kunci yang mendatangkan klik, dan halaman yang belum terindeks.
- Cek hasil pencarian: `rohis 62`, `rohis sman 62 jakarta`, `gradiend rohis 62`.

**Waktu hasil:** pengindeksan beberapa hari; naik peringkat untuk "rohis sman 62 jakarta" biasanya 2-8 minggu; kemunculan di jawaban AI umumnya lebih lama lagi dan bergantung pada seberapa sering Rohis 62 disebut di luar website ini.

## 7. Jika pindah ke domain sendiri (misalnya gradiend.id)
Ganti `siteUrl` di `js/config.js`; ganti `https://gradiend.vercel.app` di `robots.txt`, `llms.txt`, dan `<head>` tiap halaman; ganti nama berkas kunci IndexNow bila perlu; jalankan `node scripts/build-seo.js`. Di Vercel tambahkan domain baru dan jadikan alamat lama mengalihkan (redirect 301) ke domain baru.
