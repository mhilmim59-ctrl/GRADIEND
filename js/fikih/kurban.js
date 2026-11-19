/* Bab 10 — Kurban dan Akikah
   Jenis blok isi: p, h, ol, ul, tabel, dalil, box, catatan, read, link */
window.GRADIEND_FIKIH.kurban = {
  rujukan: ["Safinatun Najah (Syekh Salim bin Sumair Al-Hadhrami)", "Fathul Qarib (Ibnu Qasim Al-Ghazi)", "Al-Fiqh al-Manhaji (Mustafa Al-Khin dkk.)"],
  topik: [
    /* ------------------------------------------------ HUKUM KURBAN */
    {
      id: "hukum-kurban",
      judul: "Pengertian dan Hukum Kurban",
      intinya: "Kurban (udhhiyah) adalah menyembelih hewan ternak tertentu pada Iduladha dan hari tasyrik untuk mendekatkan diri kepada Allah. Hukumnya sunnah muakkad.",
      isi: [
        { t: "p", x: "**Kurban (udhhiyah)** adalah hewan ternak yang disembelih pada hari Iduladha (10 Zulhijah) sampai akhir hari tasyrik (13 Zulhijah) sebagai ibadah. Rasulullah SAW berkurban dengan dua ekor domba jantan yang bertanduk (HR. Bukhari dan Muslim)." },
        { t: "dalil", ar: "فَصَلِّ لِرَبِّكَ وَانْحَرْ", arti: "Maka laksanakanlah salat karena Tuhanmu, dan berkurbanlah.", sumber: "QS. Al-Kautsar: 2" },
        { t: "ul", items: [
          "**Hukum:** sunnah muakkad (sangat dianjurkan) bagi muslim yang mampu. Menurut mazhab Syafi'i, bila dalam satu rumah sudah ada yang berkurban, anjuran bagi anggota rumah lainnya terpenuhi (sunnah kifayah), walau masing-masing yang mampu tetap lebih utama berkurban.",
          "**Syarat orang yang berkurban:** Islam, baligh, berakal, merdeka, dan mampu (memiliki kelebihan harta dari kebutuhan pokok pada hari Id dan hari tasyrik).",
          "Kurban menjadi **wajib** bila dinazarkan."
        ] },
        { t: "catatan", x: "Mazhab Hanafi berpendapat kurban wajib bagi yang mampu dan mukim. Mazhab Syafi'i, Maliki, dan Hanbali berpendapat sunnah muakkad." },
        { t: "box", judul: "Yang perlu diingat", items: ["Kurban: sunnah muakkad bagi yang mampu; wajib bila dinazarkan.", "Waktu: 10 Zulhijah setelah salat Id sampai akhir 13 Zulhijah."] }
      ]
    },
    /* ------------------------------------------------ SYARAT HEWAN */
    {
      id: "syarat-hewan-kurban",
      judul: "Syarat Hewan Kurban",
      intinya: "Hewan kurban adalah unta, sapi (atau kerbau), atau kambing (atau domba) yang sudah cukup umur dan sehat tanpa cacat berat.",
      isi: [
        { t: "tabel", head: ["Hewan", "Umur minimal", "Untuk berapa orang"], rows: [
          ["Unta", "5 tahun", "1 orang atau patungan 7 orang"],
          ["Sapi dan kerbau", "2 tahun", "1 orang atau patungan 7 orang"],
          ["Kambing", "2 tahun", "1 orang"],
          ["Domba (biri-biri)", "1 tahun (atau sudah tanggal gigi serinya)", "1 orang"]
        ] },
        { t: "p", x: "Hewan jantan maupun betina sah. Yang paling utama adalah yang paling gemuk, sehat, dan mahal harganya. Satu kambing hanya untuk satu orang, tetapi pahalanya boleh diniatkan untuk keluarga." },
        { t: "dalil", ar: "أَرْبَعٌ لَا تَجُوزُ فِي الْأَضَاحِي: الْعَوْرَاءُ الْبَيِّنُ عَوَرُهَا، وَالْمَرِيضَةُ الْبَيِّنُ مَرَضُهَا، وَالْعَرْجَاءُ الْبَيِّنُ ظَلْعُهَا، وَالْكَسِيرُ الَّتِي لَا تُنْقِي", arti: "Ada empat (cacat) yang tidak sah pada hewan kurban: buta sebelah yang jelas, sakit yang jelas, pincang yang jelas, dan sangat kurus hingga tidak bersumsum.", sumber: "HR. Abu Dawud, At-Tirmidzi, dan An-Nasa'i, dari Al-Bara' bin Azib RA" },
        { t: "h", x: "Cacat yang membuat kurban tidak sah" },
        { t: "ul", items: ["Buta sebelah atau buta total yang jelas.", "Sakit berat yang jelas terlihat.", "Pincang yang jelas.", "Sangat kurus.", "Terpotong sebagian besar telinga atau ekornya."] },
        { t: "h", x: "Cacat ringan (sah, tetapi kurang utama)" },
        { t: "ul", items: ["Tanduk patah atau tidak bertanduk.", "Telinga sedikit sobek atau berlubang kecil.", "Kurang gemuk, tetapi masih sehat."] },
        { t: "box", judul: "Yang perlu diingat", items: ["Umur: unta 5 tahun, sapi 2 tahun, kambing 2 tahun, domba 1 tahun.", "Unta dan sapi boleh untuk 7 orang; kambing dan domba untuk 1 orang.", "Tidak sah: buta, sakit, pincang, dan sangat kurus yang jelas."] }
      ]
    },
    /* ------------------------------------------------ WAKTU */
    {
      id: "waktu-kurban",
      judul: "Waktu Penyembelihan Kurban",
      intinya: "Penyembelihan dimulai setelah salat Iduladha dan khutbah, sampai terbenamnya matahari pada 13 Zulhijah.",
      isi: [
        { t: "ol", items: [
          "**Hari Iduladha (10 Zulhijah):** mulai setelah matahari naik dan lewat waktu kira-kira cukup untuk salat Id dua rakaat dan dua khutbah. Paling utama sesudah salat Id.",
          "**Hari tasyrik (11, 12, 13 Zulhijah):** boleh disembelih siang maupun malam.",
          "**Berakhir** ketika matahari terbenam pada 13 Zulhijah."
        ] },
        { t: "dalil", ar: "مَنْ ذَبَحَ قَبْلَ الصَّلَاةِ فَإِنَّمَا ذَبَحَ لِنَفْسِهِ، وَمَنْ ذَبَحَ بَعْدَ الصَّلَاةِ فَقَدْ تَمَّ نُسُكُهُ وَأَصَابَ سُنَّةَ الْمُسْلِمِينَ", arti: "Barang siapa menyembelih sebelum salat (Id), sesungguhnya ia menyembelih untuk dirinya sendiri. Dan barang siapa menyembelih setelah salat, maka sempurnalah ibadahnya dan ia telah mengikuti sunnah kaum muslimin.", sumber: "HR. Bukhari dan Muslim, dari Al-Bara' bin Azib RA" },
        { t: "p", x: "Sembelihan di luar waktu itu hanya dihitung sebagai sedekah daging biasa, bukan kurban." },
        { t: "h", x: "Larangan bagi yang berniat berkurban" },
        { t: "dalil", ar: "إِذَا رَأَيْتُمْ هِلَالَ ذِي الْحِجَّةِ وَأَرَادَ أَحَدُكُمْ أَنْ يُضَحِّيَ فَلْيُمْسِكْ عَنْ شَعْرِهِ وَأَظْفَارِهِ", arti: "Apabila kalian melihat hilal Zulhijah dan salah seorang dari kalian hendak berkurban, maka hendaklah ia tidak memotong rambut dan kukunya.", sumber: "HR. Muslim, dari Ummu Salamah RA" },
        { t: "catatan", x: "Menurut mazhab Syafi'i, tidak memotong rambut dan kuku sejak 1 Zulhijah sampai kurban disembelih hukumnya sunnah (memotongnya makruh). Mazhab Hanbali menghukuminya haram." },
        { t: "box", judul: "Yang perlu diingat", items: ["Waktu kurban: setelah salat Id 10 Zulhijah sampai terbenam matahari 13 Zulhijah.", "Sunnah tidak memotong rambut dan kuku sejak 1 Zulhijah bagi yang berniat berkurban."] }
      ]
    },
    /* ------------------------------------------------ TATA CARA */
    {
      id: "tata-cara-kurban",
      judul: "Tata Cara Penyembelihan",
      intinya: "Hewan disembelih dengan pisau yang tajam, dengan menyebut nama Allah dan memutus saluran napas dan saluran makan.",
      isi: [
        { t: "h", x: "Rukun dan syarat sembelihan" },
        { t: "ol", items: [
          "**Penyembelih** muslim (atau ahli kitab), berakal, dan mampu menyembelih.",
          "**Memutus hulqum** (saluran napas) **dan mari'** (saluran makan) hewan, dengan alat tajam yang tidak berupa kuku atau gigi.",
          "**Niat berkurban** di dalam hati, pada saat menyembelih atau saat menentukan hewannya."
        ] },
        { t: "h", x: "Sunnah-sunnah menyembelih" },
        { t: "ul", items: [
          "Membaca basmalah dan takbir, lalu salawat dan doa.",
          "Menghadapkan hewan ke kiblat dengan posisi rebah ke sisi kiri, kaki kanan diikat bila perlu.",
          "Memutus juga kedua urat leher (wadajain) agar darah cepat keluar.",
          "Menyembelih sendiri bila mampu, atau menyaksikannya.",
          "Menajamkan pisau terlebih dahulu dan tidak menajamkannya di depan hewan.",
          "Tidak menyembelih di depan hewan lain, dan tidak menyiksa hewan."
        ] },
        { t: "dalil", ar: "إِنَّ اللهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ، فَإِذَا قَتَلْتُمْ فَأَحْسِنُوا الْقِتْلَةَ، وَإِذَا ذَبَحْتُمْ فَأَحْسِنُوا الذَّبْحَ، وَلْيُحِدَّ أَحَدُكُمْ شَفْرَتَهُ وَلْيُرِحْ ذَبِيحَتَهُ", arti: "Sesungguhnya Allah mewajibkan berbuat baik terhadap segala sesuatu. Maka apabila kalian membunuh, bunuhlah dengan cara yang baik; dan apabila kalian menyembelih, sembelihlah dengan cara yang baik. Hendaklah salah seorang dari kalian menajamkan pisaunya dan menenangkan hewan sembelihannya.", sumber: "HR. Muslim, dari Syaddad bin Aus RA" },
        { t: "read", label: "Bacaan saat menyembelih", ar: "بِسْمِ اللهِ وَاللهُ أَكْبَرُ، اللَّهُمَّ هَذَا مِنْكَ وَإِلَيْكَ فَتَقَبَّلْ مِنِّي", latin: "Bismillāhi wallāhu akbar. Allāhumma hādzā minka wa ilaika, fataqabbal minnī.", arti: "Dengan nama Allah, Allah Maha Besar. Ya Allah, ini dari-Mu dan untuk-Mu, maka terimalah dariku.", sumber: "Bacaan yang masyhur; basmalah dan takbir bersumber dari HR. Abu Dawud" },
        { t: "p", x: "Untuk kurban yang disembelihkan orang lain (panitia atau tukang jagal), shohibul kurban sebaiknya menyaksikan dan menyerahkan niat kepada penyembelih." },
        { t: "box", judul: "Yang perlu diingat", items: ["Wajib: penyembelih muslim, memutus hulqum dan mari', dan niat kurban.", "Sunnah: basmalah, takbir, menghadap kiblat, pisau tajam."] }
      ]
    },
    /* ------------------------------------------------ PEMBAGIAN */
    {
      id: "pembagian-daging-kurban",
      judul: "Pembagian Daging Kurban",
      intinya: "Daging kurban sunnah dimakan sebagian oleh yang berkurban dan sebagian besar disedekahkan, termasuk kepada fakir miskin.",
      isi: [
        { t: "dalil", ar: "فَكُلُوا مِنْهَا وَأَطْعِمُوا الْبَائِسَ الْفَقِيرَ", arti: "Maka makanlah sebagiannya dan (sebagian lagi) berikanlah untuk dimakan orang yang sengsara dan fakir.", sumber: "QS. Al-Hajj: 28" },
        { t: "ul", items: [
          "**Kurban sunnah:** shohibul kurban sunnah memakan sebagian, dan wajib menyedekahkan sebagian (minimal sedikit) kepada fakir miskin. Cara yang masyhur: sepertiga dimakan sendiri, sepertiga dihadiahkan kepada kerabat dan tetangga, dan sepertiga disedekahkan kepada fakir miskin.",
          "**Kurban nazar:** seluruhnya disedekahkan, dan yang berkurban tidak boleh memakannya.",
          "Daging yang disedekahkan sebaiknya **mentah** supaya penerima bebas mengolahnya, dan sah juga bila diberikan matang.",
          "**Tidak boleh** memberi upah penyembelih (jagal) dengan daging, kulit, atau bagian hewan kurban. Upah dibayar dari uang sendiri.",
          "**Tidak boleh menjual** daging, kulit, tanduk, atau bagian hewan kurban sunnah."
        ] },
        { t: "dalil", ar: "أَمَرَنِي رَسُولُ اللهِ صلى الله عليه وسلم أَنْ أَقُومَ عَلَى بُدْنِهِ، وَأَنْ أَتَصَدَّقَ بِلَحْمِهَا وَجُلُودِهَا وَجِلَالِهَا، وَأَنْ لَا أُعْطِيَ الْجَزَّارَ مِنْهَا", arti: "Rasulullah SAW memerintahkan aku mengurus unta-untanya, menyedekahkan dagingnya, kulitnya, dan pelananya, serta tidak memberikan sesuatu pun darinya kepada penyembelih.", sumber: "HR. Bukhari dan Muslim, dari Ali bin Abi Thalib RA" },
        { t: "catatan", x: "Panitia kurban di Indonesia biasanya menyerahkan hewan kurban dan menyembelih atas nama shohibul kurban. Upah panitia dan jagal diambil dari dana operasional atau dari uang pribadi shohibul kurban, bukan dari daging kurban." },
        { t: "box", judul: "Yang perlu diingat", items: ["Daging kurban sunnah: boleh dimakan sebagian, wajib disedekahkan sebagian.", "Jagal tidak boleh diberi upah dari bagian hewan kurban.", "Kulit dan tanduk tidak dijual."] }
      ]
    },
    /* ------------------------------------------------ AKIKAH */
    {
      id: "akikah",
      judul: "Akikah",
      intinya: "Akikah adalah menyembelih kambing atas kelahiran anak, sunnah muakkad, dikerjakan pada hari ketujuh kelahiran.",
      isi: [
        { t: "p", x: "**Akikah** adalah sembelihan sebagai tanda syukur atas kelahiran anak. Orang yang wajib menafkahi anak itu (ayah) yang dianjurkan mengerjakannya." },
        { t: "dalil", ar: "كُلُّ غُلَامٍ مُرْتَهَنٌ بِعَقِيقَتِهِ، تُذْبَحُ عَنْهُ يَوْمَ سَابِعِهِ وَيُحْلَقُ وَيُسَمَّى", arti: "Setiap anak tergadai dengan akikahnya, disembelihkan untuknya pada hari ketujuh, dicukur rambutnya, dan diberi nama.", sumber: "HR. Abu Dawud, At-Tirmidzi, dan An-Nasa'i, dari Samurah bin Jundub RA" },
        { t: "tabel", head: ["", "Ketentuan"], rows: [
          ["Hukum", "Sunnah muakkad bagi ayah yang mampu."],
          ["Jumlah hewan", "Anak laki-laki dua ekor kambing, anak perempuan satu ekor kambing."],
          ["Hewan", "Kambing atau domba, dengan syarat umur dan kesehatan seperti hewan kurban."],
          ["Waktu", "Hari ketujuh kelahiran (paling utama). Boleh sesudahnya; bila terlewat sampai baligh, tidak lagi dibebankan kepada ayah."],
          ["Sunnah lain pada hari ketujuh", "Memberi nama yang baik, mencukur rambut bayi, dan bersedekah perak (atau senilai) seberat rambut itu."]
        ] },
        { t: "dalil", ar: "عَنِ الْغُلَامِ شَاتَانِ مُكَافِئَتَانِ، وَعَنِ الْجَارِيَةِ شَاةٌ", arti: "Untuk anak laki-laki dua ekor kambing yang sepadan, dan untuk anak perempuan satu ekor kambing.", sumber: "HR. At-Tirmidzi dan Ibnu Majah, dari Aisyah RA" },
        { t: "h", x: "Tata cara dan pembagian" },
        { t: "ul", items: [
          "Cara penyembelihan sama seperti kurban, dengan niat akikah.",
          "Daging disunnahkan **dimasak** terlebih dahulu lalu dibagikan kepada tetangga, kerabat, dan fakir miskin, dan boleh diadakan jamuan makan.",
          "Disunnahkan tidak mematahkan tulangnya (sebagai harapan keselamatan anak), menurut sebagian ulama Syafi'iyah.",
          "Orang tua yang belum sempat mengakikahkan anaknya boleh mengakikahkan setelah anak dewasa; bila ayah tidak mengerjakannya, anak itu boleh mengakikahkan dirinya sendiri."
        ] },
        { t: "h", x: "Perbedaan kurban dan akikah" },
        { t: "tabel", head: ["", "Kurban", "Akikah"], rows: [
          ["Sebab", "Ibadah di bulan Zulhijah", "Syukur atas kelahiran anak"],
          ["Waktu", "10–13 Zulhijah", "Hari ke-7 kelahiran (boleh sesudahnya)"],
          ["Hewan", "Unta, sapi, kambing, domba", "Kambing atau domba"],
          ["Patungan", "Unta dan sapi boleh 7 orang", "Tidak berpatungan; sapi tidak dianjurkan"],
          ["Daging", "Dibagikan; sedikit wajib disedekahkan", "Disunnahkan dimasak lalu dibagikan"]
        ] },
        { t: "catatan", x: "Mazhab Maliki berpendapat satu kambing cukup untuk anak laki-laki. Mazhab Hanafi berpendapat akikah hukumnya mubah (bukan sunnah). Di sini diikuti pendapat mazhab Syafi'i dan Hanbali." },
        { t: "box", judul: "Yang perlu diingat", items: ["Akikah: laki-laki 2 kambing, perempuan 1 kambing, pada hari ke-7.", "Sunnah hari ke-7: memberi nama, mencukur rambut, dan bersedekah seberat rambut."] }
      ]
    }
  ]
};
