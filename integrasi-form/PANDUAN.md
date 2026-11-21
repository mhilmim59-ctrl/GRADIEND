# Event otomatis dari Google Form

Pengurus cukup mengisi Google Form. Beberapa menit kemudian, event baru tampil di website (halaman Event, beranda, halaman artikel sendiri, dan sitemap), tanpa menyentuh GitHub.

```
Isi Google Form
   -> Skrip (Google Apps Script) memeriksa isian
   -> foto dikecilkan dan disimpan ke GitHub (assets/events/)
   -> berkas data dibuat di GitHub (data/events/<id>.json)
   -> Vercel membangun ulang situs otomatis (1 sampai 3 menit)
   -> event tampil di gradiend.vercel.app
```

## Pengaman yang sudah ada
- **Kode pengurus.** Form memiliki isian "Kode pengurus". Bila kode salah atau kosong, event disimpan sebagai **draf** (belum tampil), dan admin menerima email untuk menyetujui.
- **Mode persetujuan.** Isi `AUTO_PUBLISH` dengan `tidak` agar semua event menjadi draf sampai disetujui.
- **Pemeriksaan isian.** Judul, tanggal, kategori, panjang teks, tautan Instagram, dan jenis foto diperiksa. Isian yang tidak benar ditolak dan admin menerima email berisi alasannya.
- **Aman dari kode berbahaya.** Semua teks dari Form ditampilkan sebagai teks biasa, bukan kode.
- **Token terbatas.** Token GitHub hanya boleh mengubah satu repositori, dan disimpan di Properti Skrip (bukan di dalam kode).

## Langkah 1. Buat Google Form
Buka forms.google.com, buat Form baru, lalu tambahkan pertanyaan berikut. **Judul pertanyaan harus sama persis** (huruf besar dan kecil, tanda kurung).

| Judul pertanyaan | Jenis | Wajib |
|---|---|---|
| Judul event | Jawaban singkat | Ya |
| Tanggal kegiatan | Tanggal | Ya |
| Kategori | Dropdown: Kajian, Keislaman, Sosial, Kegiatan, Lainnya | Ya |
| Nama penulis | Jawaban singkat | Tidak |
| Ringkasan singkat | Paragraf (1-2 kalimat, tampil di kartu event) | Ya |
| Isi artikel | Paragraf (pisahkan alinea dengan baris kosong) | Ya |
| Foto kegiatan | Upload file: 1 file, hanya gambar, maks 10 MB | Tidak |
| Link foto (Google Drive) | Jawaban singkat (alternatif bila tidak mengunggah) | Tidak |
| Link Instagram (opsional) | Jawaban singkat, tautan postingan atau reel | Tidak |
| Kode pengurus | Jawaban singkat | Ya |

Catatan:
- Pertanyaan **upload file** mewajibkan pengisi masuk dengan akun Google. Fotonya tersimpan di Google Drive pemilik Form.
- Jangan membagikan tautan Form ke publik. Bagikan ke pengurus saja, karena Form memuat isian kode.

## Langkah 2. Buat token GitHub
1. Login ke GitHub dengan akun pemilik repositori (`mhilmim59-ctrl`).
2. Klik foto profil, **Settings**, **Developer settings**, **Personal access tokens**, **Fine-grained tokens**, lalu **Generate new token**.
3. Isi nama (misalnya `gradiend-form`), **Expiration** 1 tahun (catat tanggalnya di kalender untuk memperbaruinya).
4. **Repository access**: pilih **Only select repositories**, lalu pilih `GRADIEND`.
5. **Permissions**, **Repository permissions**, **Contents**: pilih **Read and write**.
6. Klik **Generate token** dan **salin tokennya sekarang** (hanya tampil sekali).

## Langkah 3. Pasang skrip
1. Di Google Form, klik titik tiga (pojok kanan atas), lalu **Editor skrip** (Script editor).
2. Hapus isi bawaan, lalu tempel seluruh isi berkas `Code.gs` di folder ini. Klik **Simpan**.
3. Bila nama akun atau repositori berbeda, ubah `OWNER` dan `REPO` di bagian atas skrip.
4. Klik ikon roda gigi (**Project Settings**), turun ke **Script Properties**, lalu **Add script property** untuk empat properti ini:

| Properti | Isi |
|---|---|
| `GITHUB_TOKEN` | token dari Langkah 2 |
| `KODE_PENGURUS` | kode rahasia pilihan Anda (mis. `rohis62-2027`) |
| `ADMIN_EMAIL` | email yang menerima laporan |
| `AUTO_PUBLISH` | `ya` (terbit otomatis bila kode benar) atau `tidak` (semua jadi draf) |

## Langkah 4. Aktifkan
1. Di editor skrip, pilih fungsi **ujiGithub** lalu klik **Jalankan**. Setujui izin yang diminta. Bila muncul peringatan "Google belum memverifikasi aplikasi ini", klik **Lanjutan**, lalu **Buka (tidak aman)**. Ini skrip milik Anda sendiri. Di **Log eksekusi** harus muncul `Kode GitHub: 200`.
2. Pilih fungsi **pasangTrigger** lalu **Jalankan** (cukup sekali).

## Langkah 5. Coba
1. Buka Form, isi semua kolom dengan kode pengurus yang benar, lalu kirim.
2. Dalam satu menit, email laporan masuk ke `ADMIN_EMAIL`.
3. Di GitHub, folder `data/events` memuat berkas baru, dan Vercel memulai deploy.
4. Setelah deploy berstatus Ready, event tampil di `gradiend.vercel.app/event.html`.

## Bila ada yang salah
| Gejala | Penyebab dan solusi |
|---|---|
| Email "GAGAL memproses event" | Baca alasannya di email, perbaiki isian, lalu isi Form lagi. |
| Alasan memuat kode 401 atau 403 | Token salah, kedaluwarsa, atau izinnya kurang (harus Contents: Read and write pada repositori `GRADIEND`). Buat token baru dan perbarui `GITHUB_TOKEN`. |
| Alasan memuat kode 404 | Nama `OWNER` atau `REPO` di skrip salah, atau token tidak mencakup repositori itu. |
| Tidak ada email dan tidak ada berkas baru | Pemicu belum dipasang. Jalankan `pasangTrigger` lagi. Lihat juga **Eksekusi** di editor skrip. |
| Event muncul tanpa foto | Email laporan memuat catatan penyebabnya (format harus JPG, PNG, atau WebP; atau akses ke berkas Drive). |
| Event tidak tampil walau berkas ada | Berstatus draf. Buka berkasnya di GitHub, ubah `"draft": true` menjadi `"draft": false`, lalu Commit. |
| Event tidak tampil dan Vercel gagal | Buka log build di Vercel. Berkas JSON yang rusak dilewati dan tidak menggagalkan build. |

## Menerbitkan, mengubah, dan menghapus
- **Menerbitkan draf:** buka `data/events/<id>.json` di GitHub, klik ikon pensil, ubah `"draft": true` menjadi `"draft": false`, lalu **Commit changes**.
- **Mengubah event:** sunting berkas JSON yang sama (judul, isi, dan seterusnya), lalu Commit.
- **Menghapus event:** buka berkas JSON, klik ikon tong sampah, lalu Commit. Foto di `assets/events/` boleh ikut dihapus.
- **Menambah event tanpa Form:** pada GitHub pilih **Add file**, **Create new file**, beri nama `data/events/<id>.json` (id berisi huruf kecil, angka, dan tanda minus), lalu isi sesuai contoh di bawah.

```json
{
  "id": "kajian-subuh-2026-11-21",
  "title": "Kajian Subuh: Adab Menuntut Ilmu",
  "date": "2026-11-21",
  "category": "Kajian",
  "author": "Rohis 62",
  "excerpt": "Ringkasan 1-2 kalimat.",
  "content": "Alinea pertama.\n\nAlinea kedua.",
  "image": "assets/events/kajian-subuh-2026-11-21.jpg",
  "instagram": "https://www.instagram.com/p/AbCdEfGhIjK/"
}
```
`image`, `instagram`, dan `draft` boleh dihilangkan. Kategori: Kajian, Keislaman, Sosial, Kegiatan, atau Lainnya.

## Hal yang perlu diketahui
- **Dua deploy per event berfoto.** Foto dan data disimpan sebagai dua commit, sehingga Vercel membangun dua kali. Paket gratis Vercel membatasi jumlah deploy harian (sekitar 100), jadi tidak masalah untuk penggunaan normal.
- **Draf tetap terlihat di GitHub.** Bila repositori bersifat publik, orang yang membuka GitHub bisa membaca berkas draf. Isi draf tidak muncul di situs. Gunakan repositori privat bila ingin draf benar-benar tertutup (Vercel tetap bisa memakainya).
- **Perbarui token** sebelum kedaluwarsa. Bila lupa, Form tetap bisa diisi tetapi laporan "GAGAL" akan dikirim.
- **Form tidak bisa mengedit event lama.** Perubahan dilakukan lewat GitHub.
- Skrip dan panduan ini ikut terunggah ke situs (folder `integrasi-form`). Tidak ada rahasia di dalamnya, karena token dan kode disimpan di Properti Skrip.
