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
  author: "GRADIEND Divisi Syiar",
  excerpt: "Peringatan Hari Besar Islam (PHBI) Maulid Nabi Muhammad SAW yang dianjurkan oleh Rohis SMAN 62 Jakarta dengan melibatkan pelajar Tingkatan 10 sebagai jawatankuasa.",
  image: "assets/events/maulidgema.JPG",
  content: `Rohis SMAN 62 Jakarta telah berjaya menganjurkan Peringatan Hari Besar Islam (PHBI) Maulid Nabi Muhammad SAW dengan tema "GEMA" (Generasi Meneladani Akhlak Rasulullah). Majlis ini berlangsung meriah di halaman sekolah dengan kehadiran para pelajar dan guru yang berkumpul bersama untuk memperingati keperibadian serta perjuangan Nabi Muhammad SAW.

Istimewanya pada penganjuran kali ini, pihak Rohis memberdayakan pelajar Tingkatan 10 untuk terlibat secara aktif sebagai jawatankuasa pelaksana. Dengan bimbingan dan pendampingan daripada abang dan kakak Tingkatan 11 Rohis, para pelajar Tingkatan 10 belajar menguruskan pelbagai keperluan majlis, sekali gus mengasah kepimpinan dan kerjasama pasukan dalam menjayakan acara keagamaan ini.`
}

];
