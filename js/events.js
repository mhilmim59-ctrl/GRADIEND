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

];
