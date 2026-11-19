/* =====================================================================
   Daftar bab Fikih (menu "Fikih").
   - Bab yang berkas isinya ada di js/fikih/<slug>.js otomatis terbit.
   - Bab tanpa berkas isi tampil sebagai "Segera hadir".
   - "topik" dipakai untuk pencarian di halaman Fikih selama isi bab belum ditulis.
   ===================================================================== */
window.GRADIEND_FIKIH = window.GRADIEND_FIKIH || {};
window.GRADIEND_FIKIH_META = {
  judul: "Fikih Ibadah Mazhab Syafi'i",
  catatan: "Materi fikih ini disusun mengikuti mazhab Syafi'i yang umum diajarkan di Indonesia, sebagai bahan belajar bersama di Rohis SMAN 62 Jakarta. Pada sebagian masalah para ulama berbeda pendapat dan perbedaan itu dimaklumi. Materi ini tidak menggantikan bimbingan guru. Bila ada yang kurang tepat, mohon dikoreksi oleh guru atau pembina.",
  tinjauan: ""   // isi dengan nama pembina yang meninjau, mis. "Ust. Fulan, 12 Januari 2027". Bila diisi, akan tampil di setiap bab.
};
window.GRADIEND_FIKIH_BAB = [
  { slug: "dasar", no: 1, judul: "Dasar Islam", ikon: "fa-star-and-crescent",
    ringkas: "Rukun Islam, Rukun Iman, dan tanda-tanda baligh.",
    seoJudul: "Rukun Islam, Rukun Iman & Tanda Baligh | Fikih GRADIEND Rohis 62",
    seoDesc: "Penjelasan lima Rukun Islam, enam Rukun Iman, dan tanda-tanda baligh menurut mazhab Syafi'i, lengkap dengan dalil dan tabel ringkas dari Rohis 62.",
    topik: ["Rukun Islam", "Rukun Iman", "Tanda-tanda baligh"] },
  { slug: "thaharah", no: 2, judul: "Thaharah (Bersuci)", ikon: "fa-droplet",
    ringkas: "Air, hadas, najis, wudhu, mandi wajib, tayamum, haid, dan nifas.",
    seoJudul: "Thaharah: Wudhu, Najis, Mandi Wajib & Tayamum | Fikih GRADIEND",
    seoDesc: "Fikih bersuci menurut mazhab Syafi'i: macam air, hadas, najis dan cara membasuhnya, rukun dan pembatal wudhu, mandi wajib, tayamum, haid, dan nifas.",
    topik: ["Macam-macam air", "Hadas", "Najis", "Cara membasuh najis", "Wudhu: fardu dan syarat", "Pembatal wudhu", "Mandi wajib", "Larangan bagi orang junub", "Haid, nifas, istihadhah", "Larangan bagi wanita haid", "Tayamum"] },
  { slug: "salat", no: 3, judul: "Salat", ikon: "fa-person-praying",
    ringkas: "Syarat, rukun, dan fardu salat; sujud; waktu terlarang; sujud sahwi.",
    seoJudul: "Fikih Salat: Syarat, Rukun, Sujud Sahwi | Fikih GRADIEND Rohis 62",
    seoDesc: "Fikih salat menurut mazhab Syafi'i: syarat dan rukun salat, anggota sujud, waktu sunnah mengangkat tangan, waktu haram salat, dan sebab sujud sahwi.",
    topik: ["Syarat salat", "Rukun salat", "Fardu salat", "Waktu sunnah mengangkat kedua tangan", "Syarat dan anggota sujud", "Waktu haram mengerjakan salat", "Sebab sujud sahwi"] },
  { slug: "jemaah", no: 4, judul: "Salat Jemaah dan Salat Khusus", ikon: "fa-users",
    ringkas: "Imam dan makmum, jamak dan qasar, salat Jumat, gerhana, dan minta hujan.",
    seoJudul: "Salat Jemaah, Jamak Qasar & Jumat | Fikih GRADIEND Rohis 62",
    seoDesc: "Syarat imam dan makmum, syarat salat berjemaah, jamak dan qasar, syarat salat Jumat, rukun khutbah, salat gerhana, dan salat istisqa menurut mazhab Syafi'i.",
    topik: ["Kapan niat menjadi imam wajib", "Syarat menjadi makmum", "Syarat salat berjemaah", "Salat jamak dan qasar", "Syarat salat Jumat", "Rukun dan syarat khutbah Jumat", "Salat gerhana", "Salat minta hujan"] },
  { slug: "jenazah", no: 5, judul: "Mengurus Jenazah", ikon: "fa-dove",
    ringkas: "Kewajiban terhadap jenazah, memandikan, mengkafani, menyalatkan, menguburkan, dan takziah.",
    seoJudul: "Cara Mengurus Jenazah: Memandikan & Mengkafani | Fikih GRADIEND",
    seoDesc: "Tata cara memandikan, mengkafani, menyalatkan, dan menguburkan jenazah menurut mazhab Syafi'i, lengkap dengan niat, doa, dalil, serta adab takziah.",
    topik: ["Kewajiban terhadap jenazah", "Memandikan jenazah", "Mengkafani jenazah", "Menyalatkan jenazah", "Menguburkan jenazah", "Takziah"] },
  { slug: "zakat", no: 6, judul: "Zakat", ikon: "fa-coins",
    ringkas: "Syarat wajib, jenis zakat, nisab, dan golongan penerima.",
    seoJudul: "Zakat: Syarat, Nisab & Penerima | Fikih GRADIEND Rohis 62",
    seoDesc: "Penjelasan zakat menurut mazhab Syafi'i: syarat wajib, zakat fitrah dan mal, nisab, dan delapan golongan penerima zakat.",
    topik: ["Zakat"] },
  { slug: "puasa", no: 7, judul: "Puasa", ikon: "fa-moon",
    ringkas: "Yang mewajibkan puasa, syarat sah, syarat wajib, rukun, dan pembatal.",
    seoJudul: "Puasa: Syarat, Rukun & Pembatal | Fikih GRADIEND Rohis 62",
    seoDesc: "Fikih puasa Ramadan menurut mazhab Syafi'i: perkara yang mewajibkan puasa, syarat sah dan wajib, rukun, serta hal yang membatalkan puasa.",
    topik: ["Perkara yang mewajibkan puasa", "Syarat sah puasa", "Syarat wajib puasa", "Rukun puasa", "Pembatal puasa"] },
  { slug: "haji", no: 8, judul: "Haji dan Umrah", ikon: "fa-kaaba",
    ringkas: "Syarat, rukun, wajib, dan larangan ihram.",
    seoJudul: "Haji dan Umrah: Syarat & Rukun | Fikih GRADIEND Rohis 62",
    seoDesc: "Penjelasan haji dan umrah menurut mazhab Syafi'i: syarat wajib, rukun, wajib haji, dan larangan saat ihram.",
    topik: ["Pengertian dan syarat wajib haji", "Miqat dan ihram", "Rukun dan wajib haji", "Tata cara umrah", "Tata cara haji", "Larangan ihram dan dam"] },
  { slug: "waris", no: 9, judul: "Hukum Waris", ikon: "fa-scale-balanced",
    ringkas: "Ahli waris, bagian waris, dan penghalangnya.",
    seoJudul: "Hukum Waris Islam (Faraid) | Fikih GRADIEND Rohis 62",
    seoDesc: "Dasar hukum waris Islam: ahli waris, bagian masing-masing, dan hal yang menghalangi waris, disusun mengikuti mazhab Syafi'i.",
    topik: ["Dasar hukum waris", "Hak sebelum waris", "Rukun dan penghalang waris", "Daftar ahli waris", "Bagian ahli waris", "Ashabah dan hijab", "Aul dan radd", "Kalkulator waris"] },
  { slug: "kurban", no: 10, judul: "Kurban dan Akikah", ikon: "fa-cow",
    ringkas: "Hukum, syarat hewan, waktu, dan tata cara.",
    seoJudul: "Kurban dan Akikah: Hukum & Syarat Hewan | Fikih GRADIEND",
    seoDesc: "Hukum, syarat hewan, waktu penyembelihan, dan pembagian kurban serta akikah menurut mazhab Syafi'i.",
    topik: ["Hukum kurban", "Syarat hewan kurban", "Waktu kurban", "Tata cara penyembelihan", "Pembagian daging kurban", "Akikah"] }
];
