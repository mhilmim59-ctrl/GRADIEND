/* =====================================================================
   DATA EVENT & ARTIKEL — edit file ini untuk menambah event.
   =====================================================================
   CARA MENAMBAH EVENT
   1. Salin salah satu blok { ... } di bawah (termasuk koma di akhirnya).
   2. Tempel di dalam tanda [ ] paling atas (event terbaru boleh di mana saja,
      urutan otomatis berdasarkan tanggal).
   3. Isi datanya, simpan, lalu commit/push ke GitHub. Vercel akan deploy otomatis.

   KETERANGAN FIELD
   - id       : kode unik, huruf kecil tanpa spasi, mis. "kajian-ahad-1". Dipakai di URL.
   - title    : judul event.
   - date     : tanggal format "TAHUN-BULAN-TANGGAL", mis. "2026-10-12".
   - category : "Kajian" | "Keislaman" | "Sosial" | "Kegiatan" | "Lainnya".
   - author   : nama penulis (boleh dikosongkan, default "GRADIEND").
   - excerpt  : ringkasan 1–2 kalimat (tampil di kartu).
   - image    : (opsional) foto cover. Taruh file di folder assets/events/ lalu
                tulis "assets/events/nama-file.jpg". Hapus baris ini jika tidak ada foto.
   - content  : isi artikel. Pakai tanda ` (backtick) di awal & akhir.
                Satu baris kosong = paragraf baru.
   - draft    : (opsional) tulis draft: true untuk menyembunyikan event sementara.

   CONTOH (ini masih berupa komentar — salin blok di bawah ke daftar, jangan diaktifkan di sini):

   {
     id: "kajian-ahad-pertama",
     title: "Kajian Ahad Pagi: Memulai Hari dengan Ilmu",
     date: "2026-10-12",
     category: "Kajian",
     author: "Rohis 62",
     excerpt: "Kajian ringan bersama alumni tentang adab menuntut ilmu.",
     image: "assets/events/kajian-ahad.jpg",
     content: `Paragraf pertama artikel.

Paragraf kedua artikel. Tinggalkan satu baris kosong di antara paragraf.`
   },
   ===================================================================== */

window.GRADIEND_EVENTS = [

  // ⬇️ Tempel event baru di sini ⬇️
   
{
  id: "phbi-maulid-gema-2026",
  title: "PHBI Maulid Nabi: GEMA (Generasi Meneladani Akhlak Rasulullah)",
  date: "2026-09-25",
  category: "Kegiatan",
  author: "GRADIEND - Syiar",
  excerpt: "Peringatan Maulid Nabi di SMAN 62 Jakarta melibatkan langsung anak-anak kelas 10 sebagai pantia.",
  image: "137156.jpg",
  content: `Rohis SMAN 62 Jakarta baru saja mengadakan acara Peringatan Hari Besar Islam (PHBI) Maulid Nabi dengan tema "GEMA" (Generasi Meneladani Akhlak Rasulullah). Acara ini berlangsung hangat dan seru, di mana para siswa berkumpul dan duduk bersama di lapangan sekolah untuk mengingat kembali keteladanan akhlak Rasulullah[cite: 1].

Hal yang bikin acara ini makin spesial adalah kepanitiaannya yang memberdayakan langsung anak-anak kelas 10. Walaupun menjadi pengalaman baru bagi mereka, acaranya tetap berjalan lancar karena terus didampingi dan diarahkan oleh kakak-kakak Rohis kelas 11. Jadi, selain untuk memperingati hari besar Islam, momen ini juga menjadi kesempatan untuk adik-adik kelas 10 belajar berorganisasi dan melatih kerja sama tim.`
}

];
