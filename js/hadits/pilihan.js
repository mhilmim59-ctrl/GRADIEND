/* =====================================================================
   DATA HADITS — tampil di hadits.html
   =====================================================================
   Tiga hal yang SENGAJA dipisah (jangan dicampur):
     1. Penyusun kitab (mukharrij)  -> di KITAB, mis. Imam Bukhari
     2. Sahabat perawi (rawi a'la)  -> field `sahabat`
     3. Rantai perawi dalam sanad   -> field `sanad` (urut dari guru penyusun
                                       kitab sampai sahabat)

   CARA MENAMBAH HADITS: salin satu blok di window.GRADIEND_HADITS, isi datanya.
   Nomor tampil (No) dibuat otomatis dari urutan. `no` di dalam `kitab` adalah
   nomor hadits di kitab sumber.

   Field:
     id        : unik, huruf kecil tanpa spasi (dipakai untuk tautan #id)
     kitab     : id dari GRADIEND_HADITS_KITAB
     no        : nomor hadits di kitab itu
     bab       : { id, nama }  id dipakai nanti untuk fitur relasi bab kitab
     kategori  : array id dari GRADIEND_HADITS_KATEGORI
     kunci     : kata kunci tambahan untuk pencarian (opsional)
     pilihan   : true -> ikut dalam rotasi "Hadits Pilihan Hari Ini"
     ar        : matan Arab (berharakat)
     terjemah  : terjemahan Indonesia
     sahabat   : nama sahabat perawi
     sanad     : [ { nama, tingkat } ... ]  (opsional; kosongkan jika belum diverifikasi)
     takhrij   : [ { kitab, no } ... ]  kitab lain yang meriwayatkan (opsional)
     derajat   : { status, keterangan }  status: sahih | hasan | daif | maudhu
     penjelasan: { makna, kosakata:[{kata,arti}], konteks, faedah:[...] }
     syarah    : [ "Nama kitab syarah — penulis" ... ]

   PENTING: periksa matan, nomor, sanad, dan derajat ke kitab aslinya sebelum
   menambah. Jangan menyalin dari sumber yang tidak jelas.
   ===================================================================== */

/* Hadits pilihan yang sudah dilengkapi (sanad, takhrij, derajat, penjelasan, syarah). */
window.GRADIEND_HADITS_DATA = window.GRADIEND_HADITS_DATA || {};
window.GRADIEND_HADITS_DATA.pilihan = [

  { id: "niat-bukhari-1", kitab: "bukhari", no: 1,
    bab: { id: "bukhari-bad-il-wahy", nama: "Bagaimana permulaan turunnya wahyu kepada Rasulullah ﷺ" },
    kategori: ["niat", "ibadah"], kunci: "hijrah ikhlas amal arbain", pilihan: true,
    ar: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ",
    terjemah: "Sesungguhnya setiap amal tergantung niatnya, dan setiap orang hanya mendapatkan apa yang ia niatkan. Maka siapa yang hijrahnya karena dunia yang ingin ia raih, atau karena wanita yang ingin ia nikahi, maka hijrahnya kepada apa yang ia tuju.",
    sahabat: "Umar bin al-Khattab radhiyallahu 'anhu",
    sanad: [
      { nama: "Al-Humaidi (Abdullah bin az-Zubair)", tingkat: "Guru Imam Bukhari" },
      { nama: "Sufyan bin 'Uyainah", tingkat: "" },
      { nama: "Yahya bin Sa'id al-Anshari", tingkat: "" },
      { nama: "Muhammad bin Ibrahim at-Taimi", tingkat: "Tabi'in" },
      { nama: "'Alqamah bin Waqqash al-Laitsi", tingkat: "Tabi'in" },
      { nama: "Umar bin al-Khattab", tingkat: "Sahabat" }
    ],
    takhrij: [ { kitab: "Shahih Muslim", no: "1907" } ],
    derajat: { status: "sahih", keterangan: "Muttafaq 'alaih (disepakati Bukhari dan Muslim)." },
    penjelasan: {
      makna: "Nilai sebuah amal di sisi Allah ditentukan oleh niat pelakunya. Amal yang sama bentuknya bisa berbeda nilainya karena niat yang berbeda. Hadits ini menjadi salah satu poros ajaran Islam.",
      kosakata: [
        { kata: "الأعمال", arti: "amal perbuatan" },
        { kata: "النيات", arti: "niat, tekad hati untuk melakukan sesuatu" },
        { kata: "هجرته", arti: "hijrahnya, perpindahan dari satu tempat ke tempat lain" }
      ],
      konteks: "Disampaikan Umar bin al-Khattab di atas mimbar dan berkaitan dengan hijrah. Riwayat sebab tambahan (mis. kisah Ummu Qais) diperselisihkan; rujuk pembahasannya di Fathul Bari sebelum dicantumkan.",
      faedah: [
        "Niat adalah syarat sahnya amal dan penentu pahalanya.",
        "Wajib memperbaiki niat sebelum dan selama beramal.",
        "Amal yang berat tetap bisa tidak bernilai jika niatnya salah."
      ]
    },
    syarah: [
      "Fathul Bari — Ibnu Hajar al-'Asqalani",
      "Jami' al-'Ulum wal-Hikam — Ibnu Rajab al-Hanbali",
      "Syarah Arba'in an-Nawawiyyah — Imam an-Nawawi"
    ]
  },

  { id: "iman-bukhari-13", kitab: "bukhari", no: 13,
    bab: { id: "bukhari-kitab-iman", nama: "Kitab Iman: termasuk iman adalah mencintai saudaranya seperti mencintai dirinya" },
    kategori: ["iman", "akhlak", "muamalah"], kunci: "cinta saudara persaudaraan sesama muslim", pilihan: true,
    ar: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    terjemah: "Tidak (sempurna) iman salah seorang di antara kalian sampai ia mencintai untuk saudaranya apa yang ia cintai untuk dirinya sendiri.",
    sahabat: "Anas bin Malik radhiyallahu 'anhu",
    sanad: [
      { nama: "Musaddad", tingkat: "Guru Imam Bukhari" },
      { nama: "Yahya al-Qaththan", tingkat: "" },
      { nama: "Syu'bah bin al-Hajjaj", tingkat: "" },
      { nama: "Qatadah bin Di'amah", tingkat: "Tabi'in" },
      { nama: "Anas bin Malik", tingkat: "Sahabat" }
    ],
    takhrij: [ { kitab: "Shahih Muslim", no: "45" } ],
    derajat: { status: "sahih", keterangan: "Muttafaq 'alaih." },
    penjelasan: {
      makna: "Iman yang sempurna menuntut seseorang menginginkan kebaikan bagi sesama Muslim sebagaimana ia menginginkannya bagi dirinya. Yang ditiadakan adalah kesempurnaan iman, bukan pokok iman.",
      kosakata: [
        { kata: "لا يؤمن", arti: "tidak (sempurna) imannya" },
        { kata: "يحب", arti: "mencintai, menginginkan" },
        { kata: "لأخيه", arti: "untuk saudaranya (sesama Muslim)" }
      ],
      konteks: "Hadits ini disampaikan sebagai pokok adab dalam persaudaraan seiman. Tambahkan sebab wurud jika ditemukan dalam rujukan syarah.",
      faedah: [
        "Kecintaan kepada sesama Muslim termasuk tanda kesempurnaan iman.",
        "Menjauhi iri, dengki, dan sikap mementingkan diri sendiri.",
        "Menjadi dasar akhlak dalam bergaul dan bermuamalah."
      ]
    },
    syarah: [
      "Fathul Bari — Ibnu Hajar al-'Asqalani",
      "Syarah Arba'in an-Nawawiyyah — Imam an-Nawawi (hadits ke-13)"
    ]
  }

];
