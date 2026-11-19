/* Bab 3 — Salat
   Jenis blok isi: p, h, ol, ul, tabel, dalil, box, catatan, read, link
   Blok { t: "ib", k: "..." } menampilkan bagian dari js/ibadah.js:
   fardu, gerakan, dzikir, sunnah, jumat, jenazah */
window.GRADIEND_FIKIH.salat = {
  rujukan: ["Safinatun Najah (Syekh Salim bin Sumair Al-Hadhrami)", "Fathul Qarib (Ibnu Qasim Al-Ghazi)", "Al-Fiqh al-Manhaji (Mustafa Al-Khin dkk.)"],
  topik: [
    /* ------------------------------------------------------ SYARAT SALAT */
    {
      id: "syarat-salat",
      judul: "Syarat Salat",
      intinya: "Syarat salat ada dua: syarat wajib (siapa yang wajib salat) dan syarat sah (yang harus terpenuhi agar salat sah).",
      isi: [
        { t: "p", x: "**Syarat** adalah hal yang harus ada sebelum dan selama salat, tetapi bukan bagian dari gerakan salat itu sendiri. Bila salah satu syarat tidak terpenuhi, salat tidak sah." },
        { t: "h", x: "Syarat wajib salat" },
        { t: "ol", items: ["Beragama Islam.", "Baligh.", "Berakal.", "Suci dari haid dan nifas (bagi perempuan)."] },
        { t: "h", x: "Syarat sah salat" },
        { t: "ol", items: [
          "**Mengetahui masuknya waktu salat**, dengan yakin atau berijtihad (misalnya lewat jadwal salat).",
          "**Menghadap kiblat** bagi yang mampu. Orang yang salat sunnah di atas kendaraan saat bepergian boleh menghadap ke arah kendaraannya.",
          "**Menutup aurat.** Laki-laki: antara pusar sampai lutut. Perempuan: seluruh tubuh kecuali wajah dan kedua telapak tangan. Penutup tidak boleh tembus pandang sehingga warna kulit terlihat.",
          "**Suci dari hadas kecil dan hadas besar** (wudhu atau mandi, atau tayamum bila ada uzur).",
          "**Suci dari najis** pada badan, pakaian, dan tempat salat.",
          "**Mengetahui bahwa salat itu fardu.**",
          "**Tidak meyakini salah satu fardu salat sebagai sunnah.**",
          "**Menjauhi pembatal-pembatal salat.**"
        ] },
        { t: "dalil", ar: "فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ وَحَيْثُ مَا كُنْتُمْ فَوَلُّوا وُجُوهَكُمْ شَطْرَهُ", arti: "Maka hadapkanlah wajahmu ke arah Masjidil Haram. Dan di mana saja kamu berada, hadapkanlah wajahmu ke arah itu.", sumber: "QS. Al-Baqarah: 144" },
        { t: "h", x: "Pembatal salat" },
        { t: "ul", items: [
          "Berbicara dengan sengaja (dua huruf atau satu huruf yang bermakna).",
          "Banyak bergerak, yaitu tiga gerakan besar berturut-turut.",
          "Makan atau minum, walau sedikit bila sengaja.",
          "Berhadas atau terkena najis yang tidak segera dibuang.",
          "Terbukanya aurat dan tidak segera ditutup.",
          "Mengubah niat atau ragu-ragu dalam niat.",
          "Membelakangi kiblat dengan sengaja.",
          "Menambah rukun fi'li dengan sengaja, seperti menambah rukuk.",
          "Tertawa terbahak-bahak hingga terdengar dua huruf.",
          "Murtad."
        ] },
        { t: "link", href: "jadwal-salat.html", x: "Lihat waktu salat hari ini sesuai lokasi Anda" },
        { t: "box", judul: "Yang perlu diingat", items: ["Syarat wajib salat 4: Islam, baligh, berakal, suci dari haid dan nifas.", "Syarat sah salat 8: tahu masuk waktu, menghadap kiblat, menutup aurat, suci dari hadas, suci dari najis, tahu fardunya, tidak meyakini fardu sebagai sunnah, menjauhi pembatal."] }
      ]
    },
    /* ------------------------------------------------------ RUKUN SALAT */
    {
      id: "rukun-salat",
      judul: "Rukun Salat",
      intinya: "Rukun salat ada 17 bila tuma'ninah dihitung tersendiri (13 bila tuma'ninah digabung dengan rukun yang menyertainya).",
      isi: [
        { t: "p", x: "**Rukun** adalah bagian inti salat yang tidak boleh ditinggalkan. Salat tidak sah bila ada rukun yang tertinggal, dan rukun tidak bisa diganti dengan sujud sahwi." },
        { t: "tabel", head: ["No", "Rukun salat", "Keterangan"], rows: [
          ["1", "Niat", "Di dalam hati, bersamaan dengan takbiratul ihram."],
          ["2", "Takbiratul ihram", "Mengucapkan \"Allāhu akbar\" saat memulai salat."],
          ["3", "Berdiri bagi yang mampu", "Pada salat fardu. Yang tidak mampu boleh duduk, lalu berbaring."],
          ["4", "Membaca Al-Fatihah", "Pada setiap rakaat, dengan basmalah dan sesuai tajwid."],
          ["5", "Rukuk", "Membungkuk hingga kedua telapak tangan sampai ke lutut."],
          ["6", "Tuma'ninah dalam rukuk", "Diam sejenak setelah semua anggota tenang."],
          ["7", "I'tidal", "Bangkit dari rukuk dan berdiri tegak."],
          ["8", "Tuma'ninah dalam i'tidal", "Diam sejenak."],
          ["9", "Sujud dua kali", "Pada setiap rakaat."],
          ["10", "Tuma'ninah dalam sujud", "Diam sejenak."],
          ["11", "Duduk di antara dua sujud", "Duduk dengan tegak."],
          ["12", "Tuma'ninah dalam duduk itu", "Diam sejenak."],
          ["13", "Duduk tasyahud akhir", "Pada rakaat terakhir."],
          ["14", "Membaca tasyahud akhir", "Setelah duduk."],
          ["15", "Salawat kepada Nabi SAW", "Setelah tasyahud akhir."],
          ["16", "Salam yang pertama", "Mengucapkan \"As-salāmu 'alaikum wa raḥmatullāh\"."],
          ["17", "Tertib", "Mengerjakan rukun secara berurutan."]
        ] },
        { t: "p", x: "Sebagian kitab menghitung 13 rukun dengan menyatukan tuma'ninah ke dalam rukuk, i'tidal, sujud, dan duduk. Keduanya sama isinya, hanya cara menghitungnya berbeda." },
        { t: "dalil", arti: "Rasulullah SAW melihat seseorang salat dengan terburu-buru lalu bersabda, \"Kembalilah dan salatlah, karena engkau belum salat.\" Beliau mengulanginya tiga kali, kemudian mengajarkan agar tenang (tuma'ninah) dalam setiap gerakan.", sumber: "HR. Bukhari dan Muslim, hadis orang yang buruk salatnya" },
        { t: "h", x: "Bukan rukun: sunnah ab'adh dan hai'at" },
        { t: "tabel", head: ["Jenis", "Contoh", "Jika tertinggal"], rows: [
          ["Sunnah ab'adh", "Tasyahud awal, duduk tasyahud awal, qunut, berdiri untuk qunut, salawat kepada Nabi SAW pada tasyahud awal, salawat kepada keluarga Nabi SAW pada tasyahud akhir.", "Salat tetap sah, dan disunnahkan sujud sahwi."],
          ["Sunnah hai'at", "Doa iftitah, ta'awudz, membaca surat, takbir perpindahan, tasbih rukuk dan sujud, doa antara dua sujud, salam kedua.", "Salat tetap sah, tidak perlu sujud sahwi."]
        ] },
        { t: "link", href: "fikih/salat.html#tata-cara-salat", x: "Lihat tata cara salat langkah demi langkah dengan bacaannya" },
        { t: "box", judul: "Yang perlu diingat", items: ["Rukun salat 17 (atau 13 bila tuma'ninah digabung).", "Rukun yang tertinggal membuat salat tidak sah. Sunnah ab'adh yang tertinggal diganti sujud sahwi."] }
      ]
    },
    /* ------------------------------------------------------ SALAT FARDU */
    {
      id: "fardu-salat",
      judul: "Salat Fardu Lima Waktu",
      intinya: "Salat fardu dalam sehari semalam ada lima: Subuh (2 rakaat), Zuhur (4), Asar (4), Magrib (3), dan Isya (4), jumlahnya 17 rakaat.",
      isi: [
        { t: "dalil", ar: "إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا", arti: "Sesungguhnya salat itu adalah kewajiban yang waktunya telah ditentukan bagi orang-orang yang beriman.", sumber: "QS. An-Nisa': 103" },
        { t: "ib", k: "fardu" },
        { t: "p", x: "Pada hari Jumat, laki-laki yang memenuhi syarat mengerjakan salat Jumat sebagai pengganti salat Zuhur." },
        { t: "link", href: "jadwal-salat.html", x: "Lihat waktu salat hari ini sesuai lokasi Anda" },
        { t: "box", judul: "Yang perlu diingat", items: ["Subuh 2, Zuhur 4, Asar 4, Magrib 3, Isya 4 rakaat, total 17 rakaat.", "Dibaca keras (jahr): Subuh, dua rakaat pertama Magrib dan Isya. Dibaca pelan (sirr): Zuhur, Asar, rakaat ketiga Magrib, dan dua rakaat terakhir Isya."] }
      ]
    },
    /* ------------------------------------------------- TATA CARA SALAT */
    {
      id: "tata-cara-salat",
      judul: "Tata Cara Salat Langkah demi Langkah",
      intinya: "Urutan salat dari takbiratul ihram sampai salam, lengkap dengan bacaan Arab, Latin, dan artinya.",
      isi: [
        { t: "ib", k: "gerakan" },
        { t: "h", x: "Dzikir setelah salat" },
        { t: "ib", k: "dzikir" }
      ]
    },
    /* ------------------------------------------------- MENGANGKAT TANGAN */
    {
      id: "mengangkat-tangan",
      judul: "Waktu Sunnah Mengangkat Kedua Tangan",
      intinya: "Mengangkat kedua tangan disunnahkan pada empat tempat dalam salat.",
      isi: [
        { t: "ol", items: [
          "Ketika **takbiratul ihram**.",
          "Ketika akan **rukuk**.",
          "Ketika **bangkit dari rukuk** (i'tidal).",
          "Ketika **berdiri dari tasyahud awal** menuju rakaat ketiga."
        ] },
        { t: "dalil", ar: "كَانَ إِذَا قَامَ إِلَى الصَّلَاةِ رَفَعَ يَدَيْهِ حَتَّى تَكُونَا حَذْوَ مَنْكِبَيْهِ، فَإِذَا أَرَادَ أَنْ يَرْكَعَ فَعَلَ مِثْلَ ذَلِكَ، وَإِذَا رَفَعَ رَأْسَهُ مِنَ الرُّكُوعِ فَعَلَ مِثْلَ ذَلِكَ", arti: "Apabila Rasulullah SAW berdiri untuk salat, beliau mengangkat kedua tangannya hingga sejajar dengan kedua bahunya. Apabila hendak rukuk beliau melakukan hal yang sama, dan apabila bangkit dari rukuk beliau melakukan hal yang sama.", sumber: "HR. Bukhari dan Muslim, dari Ibnu Umar RA" },
        { t: "p", x: "Tempat keempat disebutkan dalam riwayat Bukhari, bahwa Rasulullah SAW juga mengangkat kedua tangan ketika berdiri dari dua rakaat (tasyahud awal)." },
        { t: "h", x: "Cara mengangkat tangan" },
        { t: "ul", items: ["Angkat kedua tangan bersamaan dengan takbir, sejajar bahu, dengan telapak menghadap kiblat dan jari-jari terbuka sedang.", "Setelah takbiratul ihram, turunkan tangan lalu letakkan tangan kanan di atas tangan kiri di bawah dada dan di atas pusar.", "Tidak mengangkat tangan ketika sujud, duduk di antara dua sujud, dan salam."] },
        { t: "catatan", x: "Mazhab Hanafi hanya mengangkat tangan pada takbiratul ihram, sedangkan mazhab Syafi'i, Maliki (dalam sebagian riwayat), dan Hanbali mengangkatnya pada empat tempat di atas." },
        { t: "box", judul: "Yang perlu diingat", items: ["Empat tempat: takbiratul ihram, rukuk, bangkit dari rukuk, berdiri dari tasyahud awal."] }
      ]
    },
    /* ------------------------------------------------------- SUJUD */
    {
      id: "syarat-sujud",
      judul: "Syarat dan Anggota Sujud",
      intinya: "Sujud harus di atas tujuh anggota tubuh dan memenuhi tujuh syarat.",
      isi: [
        { t: "dalil", ar: "أُمِرْتُ أَنْ أَسْجُدَ عَلَى سَبْعَةِ أَعْظُمٍ: عَلَى الْجَبْهَةِ، وَأَشَارَ بِيَدِهِ إِلَى أَنْفِهِ، وَالْيَدَيْنِ، وَالرُّكْبَتَيْنِ، وَأَطْرَافِ الْقَدَمَيْنِ", arti: "Aku diperintahkan sujud di atas tujuh tulang: dahi (beliau mengisyaratkan ke hidungnya), kedua tangan, kedua lutut, dan ujung kedua telapak kaki.", sumber: "HR. Bukhari dan Muslim, dari Ibnu Abbas RA" },
        { t: "h", x: "Tujuh anggota sujud" },
        { t: "ol", items: ["Dahi (disunnahkan bersama hidung).", "Telapak tangan kanan.", "Telapak tangan kiri.", "Lutut kanan.", "Lutut kiri.", "Perut jari-jari kaki kanan.", "Perut jari-jari kaki kiri."] },
        { t: "h", x: "Syarat sujud" },
        { t: "ol", items: [
          "Sujud di atas tujuh anggota tersebut.",
          "Dahi terbuka (tidak terhalang peci, kain, atau rambut yang menutupi).",
          "Menekankan dahi ke tempat sujud (tidak sekadar menyentuh).",
          "Bagian bawah tubuh (pantat) lebih tinggi daripada bagian atas (kepala).",
          "Tuma'ninah.",
          "Tidak turun untuk sujud karena sebab lain, misalnya jatuh karena terkejut lalu itu dianggap sujud.",
          "Tidak sujud di atas sesuatu yang ikut bergerak mengikuti gerakan salat, seperti ujung sorban atau pakaian yang dipakainya."
        ] },
        { t: "p", x: "Disunnahkan juga meletakkan kedua tangan sejajar bahu atau telinga, menjauhkan siku dari lambung, merenggangkan perut dari paha, dan menghadapkan jari kaki ke arah kiblat." },
        { t: "box", judul: "Yang perlu diingat", items: ["Anggota sujud 7: dahi, dua telapak tangan, dua lutut, dua ujung jari kaki.", "Syarat sujud 7."] }
      ]
    },
    /* ----------------------------------------------- WAKTU HARAM SALAT */
    {
      id: "waktu-haram-salat",
      judul: "Waktu yang Haram Mengerjakan Salat",
      intinya: "Menurut mazhab Syafi'i, ada lima waktu ketika salat sunnah tanpa sebab diharamkan.",
      isi: [
        { t: "dalil", ar: "لَا صَلَاةَ بَعْدَ الصُّبْحِ حَتَّى تَرْتَفِعَ الشَّمْسُ، وَلَا صَلَاةَ بَعْدَ الْعَصْرِ حَتَّى تَغِيبَ الشَّمْسُ", arti: "Tidak ada salat (sunnah) sesudah salat Subuh sampai matahari naik, dan tidak ada salat sesudah salat Asar sampai matahari terbenam.", sumber: "HR. Bukhari dan Muslim, dari Abu Said Al-Khudri RA" },
        { t: "tabel", head: ["No", "Waktu terlarang"], rows: [
          ["1", "Setelah salat Subuh sampai matahari terbit."],
          ["2", "Ketika matahari terbit sampai naik setinggi tombak (kira-kira 15–20 menit)."],
          ["3", "Ketika matahari tepat di tengah langit (istiwa') sampai tergelincir, kecuali pada hari Jumat."],
          ["4", "Setelah salat Asar sampai matahari terbenam."],
          ["5", "Ketika matahari menguning dan terbenam sampai terbenam sempurna."]
        ] },
        { t: "h", x: "Yang tetap boleh dikerjakan pada waktu itu" },
        { t: "ul", items: [
          "Salat fardu, baik tepat waktu maupun qadha.",
          "Salat sunnah yang memiliki sebab, misalnya tahiyyatul masjid, sunnah wudhu, salat gerhana, dan dua rakaat setelah tawaf.",
          "Salat jenazah.",
          "Salat di tanah haram Makkah, yang boleh dikerjakan kapan saja."
        ] },
        { t: "catatan", x: "Dalam mazhab Syafi'i larangan ini berlaku untuk salat sunnah yang tidak memiliki sebab. Mazhab Hanafi dan Hanbali memiliki rincian berbeda, termasuk soal qadha salat sunnah dan salat jenazah." },
        { t: "link", href: "jadwal-salat.html", x: "Lihat waktu terbit, Dhuha, dan Zuhur hari ini di halaman Waktu Salat" },
        { t: "box", judul: "Yang perlu diingat", items: ["Lima waktu: setelah Subuh, saat terbit sampai setinggi tombak, saat istiwa' (kecuali Jumat), setelah Asar, dan saat terbenam.", "Salat yang punya sebab tetap boleh."] }
      ]
    },
    /* --------------------------------------------------- SUJUD SAHWI */
    {
      id: "sujud-sahwi",
      judul: "Sebab Sujud Sahwi",
      intinya: "Sujud sahwi adalah dua sujud di akhir salat sebagai penambal kekurangan karena lupa atau ragu.",
      isi: [
        { t: "p", x: "**Sujud sahwi** dikerjakan sebelum salam, setelah tasyahud akhir dan salawat. Hukumnya sunnah. Ada empat sebab:" },
        { t: "ol", items: [
          "**Meninggalkan salah satu sunnah ab'adh**, misalnya lupa tasyahud awal lalu sudah berdiri tegak, atau lupa membaca qunut Subuh.",
          "**Melakukan sesuatu yang bila disengaja membatalkan salat**, tetapi dilakukan karena lupa dan sedikit, misalnya berbicara sedikit karena lupa, atau menambah rukuk atau sujud karena lupa.",
          "**Memindahkan rukun qauli ke tempat lain**, misalnya membaca tasyahud atau salawat bukan pada tempatnya karena lupa.",
          "**Ragu-ragu tentang jumlah rakaat** lalu melanjutkan salat dengan mengerjakan rukun fi'li, karena mungkin itu menambah rakaat."
        ] },
        { t: "dalil", ar: "إِذَا شَكَّ أَحَدُكُمْ فِي صَلَاتِهِ فَلَمْ يَدْرِ كَمْ صَلَّى ثَلَاثًا أَمْ أَرْبَعًا فَلْيَطْرَحِ الشَّكَّ وَلْيَبْنِ عَلَى مَا اسْتَيْقَنَ ثُمَّ يَسْجُدُ سَجْدَتَيْنِ قَبْلَ أَنْ يُسَلِّمَ", arti: "Apabila salah seorang kalian ragu dalam salatnya dan tidak tahu sudah salat tiga atau empat rakaat, hendaklah ia membuang keraguannya dan berpegang pada yang ia yakini, kemudian sujud dua kali sebelum salam.", sumber: "HR. Muslim, dari Abu Said Al-Khudri RA" },
        { t: "h", x: "Cara sujud sahwi" },
        { t: "ol", items: [
          "Selesaikan salat sampai tasyahud akhir, salawat, dan doa (jangan salam dahulu).",
          "Bertakbir lalu sujud dua kali, dengan duduk tenang di antaranya, seperti sujud biasa.",
          "Duduk kembali, membaca tasyahud ringkas bila perlu, lalu salam."
        ] },
        { t: "h", x: "Ketentuan lain" },
        { t: "ul", items: [
          "Bila ragu jumlah rakaat, ambil jumlah yang paling sedikit (yang diyakini), lalu sujud sahwi.",
          "Makmum mengikuti imam. Bila imam sujud sahwi, makmum ikut sujud sahwi.",
          "Meninggalkan sunnah hai'at (seperti doa iftitah) tidak perlu sujud sahwi.",
          "Bila sujud sahwi ditinggalkan, salat tetap sah karena hukumnya sunnah."
        ] },
        { t: "p", x: "Bacaan dalam sujud sahwi sama seperti sujud biasa, yaitu tasbih sujud. Sebagian ulama Syafi'iyah menganjurkan menambahkan dzikir \"Subḥāna man lā yanāmu wa lā yas-hū\" (Maha Suci Dzat yang tidak tidur dan tidak lupa), tetapi dzikir ini tidak berasal dari hadis yang kuat." },
        { t: "box", judul: "Yang perlu diingat", items: ["Sebab sujud sahwi 4: meninggalkan sunnah ab'adh, melakukan hal yang membatalkan bila sengaja (karena lupa), memindahkan rukun qauli, dan ragu jumlah rakaat.", "Dilakukan sebelum salam, dua sujud."] }
      ]
    },
    /* --------------------------------------------------- SALAT SUNNAH */
    {
      id: "salat-sunnah",
      judul: "Salat Sunnah: Niat dan Bacaan",
      intinya: "Salat sunnah rawatib, Dhuha, Tahajud, Witir, Tarawih, Tahiyyatul masjid, sunnah wudhu, Istikharah, dan Id beserta niat dan bacaannya.",
      isi: [
        { t: "ib", k: "sunnah" }
      ]
    }
  ]
};
