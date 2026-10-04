/* =====================================================================
   DATA HALAMAN TAJWID — tampil di tajwid.html
   =====================================================================
   Struktur: bagian -> hukum -> contoh.
   Untuk menambah hukum atau contoh, salin satu blok lalu isi datanya.
   warna: nama kelas warna tajwid (lihat variabel --tj-... di css/style.css).
   Kosongkan warna ("") bila hukum itu tidak diberi warna khusus di mushaf tajwid.
   ===================================================================== */

window.GRADIEND_TAJWID = [

  { id: "nun-tanwin", judul: "Hukum Nun Mati dan Tanwin", ikon: "fa-n",
    intro: "Berlaku jika nun mati (نْ) atau tanwin (ـً ـٍ ـٌ) bertemu salah satu huruf hijaiyah. Ada lima hukum, tergantung huruf yang datang sesudahnya.",
    hukum: [
      { nama: "Idzhar Halqi", warna: "", arab: "إظهار حلقي",
        def: "Dibaca jelas tanpa dengung, karena nun mati atau tanwin bertemu huruf tenggorokan.",
        huruf: "ء هـ ع ح غ خ",
        cara: "Ucapkan nun dengan jelas, langsung sambung ke huruf berikutnya tanpa ditahan.",
        contoh: [
          { ar: "مَنْ آمَنَ", ket: "nun mati bertemu alif (hamzah)", ref: "QS. Al-Baqarah: 62" },
          { ar: "أَنْعَمْتَ", ket: "nun mati bertemu ‘ain", ref: "QS. Al-Fatihah: 7" },
          { ar: "مِنْ خَيْرٍ", ket: "nun mati bertemu kha'", ref: "QS. Al-Baqarah: 197" }
        ] },
      { nama: "Idgham Bighunnah", warna: "idgham-bighunnah", arab: "إدغام بغنة",
        def: "Nun mati atau tanwin dilebur ke huruf sesudahnya disertai dengung.",
        huruf: "ي ن م و",
        cara: "Nun atau tanwin tidak dibaca sendiri, langsung melebur ke huruf berikutnya dengan dengung sekitar 2 harakat.",
        contoh: [
          { ar: "مَنْ يَقُولُ", ket: "nun mati bertemu ya'", ref: "QS. Al-Baqarah: 8" },
          { ar: "خَيْرًا يَرَهُ", ket: "tanwin bertemu ya'", ref: "QS. Az-Zalzalah: 7" },
          { ar: "مِنْ مَالٍ", ket: "nun mati bertemu mim", ref: "" }
        ],
        catatan: "Jika nun mati dan huruf idgham berada dalam satu kata (seperti دُنْيَا dan صِنْوَانٌ), hukumnya idzhar mutlak, jadi dibaca jelas." },
      { nama: "Idgham Bilaghunnah", warna: "idgham-bilaghunnah", arab: "إدغام بلا غنة",
        def: "Nun mati atau tanwin dilebur ke huruf sesudahnya tanpa dengung.",
        huruf: "ل ر",
        cara: "Nun atau tanwin lebur sepenuhnya ke lam atau ra', tanpa dengung.",
        contoh: [
          { ar: "مِنْ رَبِّهِمْ", ket: "nun mati bertemu ra'", ref: "QS. Al-Baqarah: 5" },
          { ar: "هُدًى لِلْمُتَّقِينَ", ket: "tanwin bertemu lam", ref: "QS. Al-Baqarah: 2" }
        ] },
      { nama: "Iqlab", warna: "iqlab", arab: "إقلاب",
        def: "Nun mati atau tanwin diganti bunyinya menjadi mim samar ketika bertemu huruf ba'.",
        huruf: "ب",
        cara: "Ubah nun atau tanwin menjadi bunyi mim, rapatkan dua bibir, tahan dengung sekitar 2 harakat, lalu baca ba'.",
        contoh: [
          { ar: "مِنْ بَعْدِ", ket: "nun mati bertemu ba'", ref: "QS. Al-Baqarah: 27" },
          { ar: "سَمِيعٌ بَصِيرٌ", ket: "tanwin bertemu ba'", ref: "QS. An-Nisa': 58" }
        ] },
      { nama: "Ikhfa Haqiqi", warna: "ikhfa", arab: "إخفاء حقيقي",
        def: "Nun mati atau tanwin dibaca samar, antara idzhar dan idgham, disertai dengung.",
        huruf: "ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك",
        cara: "Dengungkan nun sekitar 2 harakat dengan lidah tidak menyentuh langit-langit, lalu bersiap membaca huruf berikutnya.",
        contoh: [
          { ar: "مِنْ قَبْلِكَ", ket: "nun mati bertemu qaf", ref: "QS. Al-Baqarah: 4" },
          { ar: "أَنْتُمْ", ket: "nun mati bertemu ta'", ref: "" },
          { ar: "كُنْتُمْ", ket: "nun mati bertemu ta'", ref: "" }
        ] }
    ] },

  { id: "mim-mati", judul: "Hukum Mim Mati", ikon: "fa-m",
    intro: "Berlaku jika mim mati (مْ) bertemu huruf hijaiyah sesudahnya. Ada tiga hukum.",
    hukum: [
      { nama: "Ikhfa Syafawi", warna: "ikhfa-syafawi", arab: "إخفاء شفوي",
        def: "Mim mati bertemu ba', dibaca samar dengan dengung.",
        huruf: "ب",
        cara: "Rapatkan bibir tanpa ditekan, dengungkan sekitar 2 harakat, lalu baca ba'.",
        contoh: [ { ar: "تَرْمِيهِمْ بِحِجَارَةٍ", ket: "mim mati bertemu ba'", ref: "QS. Al-Fil: 4" } ] },
      { nama: "Idgham Mimi (Mitsli Shaghir)", warna: "idgham-mimi", arab: "إدغام مثلين صغير",
        def: "Mim mati bertemu mim, dilebur dengan dengung.",
        huruf: "م",
        cara: "Dua mim dibaca sebagai satu mim bertasydid dengan dengung sekitar 2 harakat.",
        contoh: [ { ar: "كَمْ مِنْ فِئَةٍ", ket: "mim mati bertemu mim", ref: "QS. Al-Baqarah: 249" } ] },
      { nama: "Idzhar Syafawi", warna: "", arab: "إظهار شفوي",
        def: "Mim mati dibaca jelas jika bertemu selain mim dan ba'.",
        huruf: "semua huruf selain م dan ب",
        cara: "Ucapkan mim dengan jelas tanpa dengung. Hati-hati pada fa' dan wau, agar mim tidak ikut samar.",
        contoh: [
          { ar: "هُمْ فِيهَا", ket: "mim mati bertemu fa'", ref: "QS. Al-Baqarah: 25" },
          { ar: "عَلَيْهِمْ وَلَا", ket: "mim mati bertemu wau", ref: "QS. Al-Fatihah: 7" }
        ] }
    ] },

  { id: "ghunnah", judul: "Ghunnah (Dengung)", ikon: "fa-wave-square",
    intro: "Ghunnah adalah suara dengung yang keluar dari rongga hidung.",
    hukum: [
      { nama: "Nun dan Mim Tasydid", warna: "ghunnah", arab: "نون وميم مشددتان",
        def: "Setiap nun atau mim yang bertasydid wajib didengungkan.",
        huruf: "نّ مّ",
        cara: "Dengungkan sekitar 2 harakat (selama kira-kira dua ketukan), lalu lanjutkan bacaan.",
        contoh: [
          { ar: "إِنَّ", ket: "nun bertasydid", ref: "" },
          { ar: "ثُمَّ", ket: "mim bertasydid", ref: "" },
          { ar: "النَّاسِ", ket: "nun bertasydid", ref: "QS. An-Nas: 1" }
        ] }
    ] },

  { id: "qalqalah", judul: "Qalqalah", ikon: "fa-bolt",
    intro: "Qalqalah adalah pantulan bunyi ringan saat membaca huruf sukun dari lima huruf ini: ق ط ب ج د (dihafal dengan “qutbu jadin”).",
    hukum: [
      { nama: "Qalqalah Sughra (Kecil)", warna: "qalqalah", arab: "قلقلة صغرى",
        def: "Huruf qalqalah yang sukun asli di tengah kata atau kalimat.",
        huruf: "ق ط ب ج د",
        cara: "Pantulkan bunyi dengan ringan.",
        contoh: [ { ar: "يَقْطَعُونَ", ket: "qaf sukun di tengah kata", ref: "QS. Al-Baqarah: 27" } ] },
      { nama: "Qalqalah Kubra (Besar)", warna: "qalqalah", arab: "قلقلة كبرى",
        def: "Huruf qalqalah yang sukun karena berhenti (waqaf) di akhir ayat atau kata.",
        huruf: "ق ط ب ج د",
        cara: "Pantulkan bunyi lebih jelas dan kuat daripada qalqalah sughra.",
        contoh: [
          { ar: "الْفَلَقِ", ket: "dibaca waqaf pada qaf", ref: "QS. Al-Falaq: 1" },
          { ar: "أَحَدٌ", ket: "dibaca waqaf pada dal", ref: "QS. Al-Ikhlas: 1" }
        ] }
    ] },

  { id: "mad", judul: "Hukum Mad (Bacaan Panjang)", ikon: "fa-arrows-left-right",
    intro: "Mad berarti memanjangkan bacaan. Satu harakat kira-kira satu ketukan atau selama menggerakkan satu jari. Huruf mad ada tiga: alif setelah fathah, ya' sukun setelah kasrah, dan wau sukun setelah dhammah.",
    hukum: [
      { nama: "Mad Thabi'i (Asli)", warna: "mad-asli", arab: "مد طبيعي",
        def: "Mad dasar yang tidak bertemu hamzah atau sukun sesudah huruf mad.",
        huruf: "ا و ي",
        cara: "Dibaca 2 harakat.",
        contoh: [
          { ar: "قَالَ", ket: "alif setelah fathah", ref: "" },
          { ar: "يَقُولُ", ket: "wau sukun setelah dhammah", ref: "" },
          { ar: "قِيلَ", ket: "ya' sukun setelah kasrah", ref: "" }
        ] },
      { nama: "Mad Wajib Muttashil", warna: "mad-wajib", arab: "مد واجب متصل",
        def: "Huruf mad bertemu hamzah dalam satu kata.",
        huruf: "mad + ء dalam satu kata",
        cara: "Dibaca 4 sampai 5 harakat.",
        contoh: [
          { ar: "جَاءَ", ket: "alif bertemu hamzah dalam satu kata", ref: "QS. An-Nasr: 1" },
          { ar: "السَّمَاءِ", ket: "alif bertemu hamzah dalam satu kata", ref: "" }
        ] },
      { nama: "Mad Jaiz Munfashil", warna: "mad-jaiz", arab: "مد جائز منفصل",
        def: "Huruf mad bertemu hamzah di awal kata berikutnya.",
        huruf: "mad + ء di kata berikutnya",
        cara: "Dibaca 2, 4, atau 5 harakat (boleh), dan konsisten dengan riwayat yang dipakai.",
        contoh: [
          { ar: "إِنَّا أَعْطَيْنَاكَ", ket: "alif bertemu hamzah di kata berikutnya", ref: "QS. Al-Kautsar: 1" },
          { ar: "بِمَا أُنْزِلَ", ket: "alif bertemu hamzah di kata berikutnya", ref: "QS. Al-Baqarah: 4" }
        ] },
      { nama: "Mad Lazim", warna: "mad-lazim", arab: "مد لازم",
        def: "Huruf mad bertemu sukun asli atau tasydid dalam satu kata.",
        huruf: "mad + sukun/tasydid asli",
        cara: "Wajib dibaca 6 harakat.",
        contoh: [
          { ar: "الضَّالِّينَ", ket: "alif bertemu lam bertasydid", ref: "QS. Al-Fatihah: 7" },
          { ar: "الْحَاقَّةُ", ket: "alif bertemu qaf bertasydid", ref: "QS. Al-Haqqah: 1" }
        ] },
      { nama: "Mad 'Aridh Lissukun", warna: "mad-jaiz", arab: "مد عارض للسكون",
        def: "Huruf mad bertemu sukun karena berhenti (waqaf).",
        huruf: "mad + huruf akhir yang diwaqafkan",
        cara: "Dibaca 2, 4, atau 6 harakat ketika berhenti.",
        contoh: [
          { ar: "نَسْتَعِينُ", ket: "dibaca waqaf pada nun", ref: "QS. Al-Fatihah: 5" },
          { ar: "الْعَالَمِينَ", ket: "dibaca waqaf pada nun", ref: "QS. Al-Fatihah: 2" }
        ] },
      { nama: "Mad Layyin", warna: "", arab: "مد لين",
        def: "Wau atau ya' sukun setelah fathah, lalu berhenti di huruf sesudahnya.",
        huruf: "وْ يْ setelah fathah",
        cara: "Dibaca 2, 4, atau 6 harakat ketika waqaf, dengan lembut.",
        contoh: [
          { ar: "قُرَيْشٍ", ket: "ya' sukun setelah fathah", ref: "QS. Quraisy: 1" },
          { ar: "خَوْفٍ", ket: "wau sukun setelah fathah", ref: "QS. Quraisy: 4" }
        ] },
      { nama: "Mad Shilah (Ha' Dhamir)", warna: "", arab: "مد صلة",
        def: "Ha' dhamir (kata ganti “nya”) di antara dua huruf hidup.",
        huruf: "هُ هِ",
        cara: "Jika sesudahnya bukan hamzah, dibaca 2 harakat (shilah qashirah). Jika sesudahnya hamzah, dibaca 4 sampai 5 harakat (shilah thawilah).",
        contoh: [
          { ar: "لَهُ مَا فِي السَّمَاوَاتِ", ket: "ha' dhamir bertemu mim (shilah qashirah)", ref: "QS. Al-Baqarah: 255" },
          { ar: "إِنَّهُ أَنَا", ket: "ha' dhamir bertemu hamzah (shilah thawilah)", ref: "QS. An-Naml: 9" }
        ] }
    ] },

  { id: "alif-lam", judul: "Alif Lam (ال)", ikon: "fa-font",
    intro: "Alif lam (ال) pada awal kata dibaca berbeda tergantung huruf sesudahnya. Hafalkan 14 huruf pada masing-masing kelompok.",
    hukum: [
      { nama: "Alif Lam Qamariyah", warna: "", arab: "ال قمرية",
        def: "Lam dibaca jelas jika bertemu 14 huruf qamariyah.",
        huruf: "ا ب ج ح خ ع غ ف ق ك م و هـ ي",
        cara: "Ucapkan “al” dengan jelas, kemudian huruf berikutnya.",
        contoh: [ { ar: "الْقَمَرِ", ket: "lam bertemu qaf", ref: "" }, { ar: "الْحَمْدُ", ket: "lam bertemu ha'", ref: "QS. Al-Fatihah: 2" } ] },
      { nama: "Alif Lam Syamsiyah", warna: "slnt", arab: "ال شمسية",
        def: "Lam tidak dibaca (dilebur) jika bertemu 14 huruf syamsiyah, dan huruf sesudahnya bertasydid.",
        huruf: "ت ث د ذ ر ز س ش ص ض ط ظ ل ن",
        cara: "Lam tidak dibaca, langsung membaca huruf sesudahnya dengan tasydid.",
        contoh: [ { ar: "الشَّمْسِ", ket: "lam bertemu syin", ref: "" }, { ar: "الرَّحْمَٰنِ", ket: "lam bertemu ra'", ref: "QS. Al-Fatihah: 3" } ] }
    ] },

  { id: "lam-ra", judul: "Lam Jalalah dan Ra'", ikon: "fa-r",
    intro: "Tebal (tafkhim) dan tipis (tarqiq) dalam pengucapan lam pada lafaz Allah dan huruf ra'.",
    hukum: [
      { nama: "Lam Jalalah (لله)", warna: "", arab: "لام الجلالة",
        def: "Lam pada lafaz Allah dibaca tebal (tafkhim) jika didahului fathah atau dhammah, dan tipis (tarqiq) jika didahului kasrah.",
        huruf: "ل pada lafaz الله",
        cara: "Tebal setelah fathah atau dhammah, tipis setelah kasrah.",
        contoh: [
          { ar: "قَالَ اللَّهُ", ket: "setelah fathah: tebal", ref: "" },
          { ar: "رَسُولُ اللَّهِ", ket: "setelah dhammah: tebal", ref: "" },
          { ar: "بِسْمِ اللَّهِ", ket: "setelah kasrah: tipis", ref: "" }
        ] },
      { nama: "Ra' Tafkhim (Tebal)", warna: "", arab: "تفخيم الراء",
        def: "Ra' dibaca tebal jika berharakat fathah atau dhammah, atau sukun setelah fathah atau dhammah.",
        huruf: "رَ رُ",
        cara: "Ucapkan dengan mulut agak membulat dan suara berat.",
        contoh: [
          { ar: "رَبِّ", ket: "ra' berfathah", ref: "" },
          { ar: "الرُّسُلُ", ket: "ra' berdhammah", ref: "" },
          { ar: "قُرْآنٌ", ket: "ra' sukun setelah dhammah", ref: "" }
        ] },
      { nama: "Ra' Tarqiq (Tipis)", warna: "", arab: "ترقيق الراء",
        def: "Ra' dibaca tipis jika berharakat kasrah, atau sukun setelah kasrah asli (tidak bertemu huruf isti'la).",
        huruf: "رِ",
        cara: "Ucapkan dengan ringan, mulut agak melebar.",
        contoh: [
          { ar: "رِزْقًا", ket: "ra' berkasrah", ref: "" },
          { ar: "فِرْعَوْنَ", ket: "ra' sukun setelah kasrah", ref: "" }
        ] }
    ] },

  { id: "makharij", judul: "Makharijul Huruf", ikon: "fa-comment-dots",
    intro: "Makharijul huruf adalah tempat keluarnya huruf. Secara umum ada lima daerah utama.",
    hukum: [
      { nama: "Al-Jauf (Rongga Mulut)", warna: "", arab: "الجوف",
        def: "Tempat keluar huruf mad.", huruf: "ا و ي (huruf mad)", cara: "Suara mengalir dari rongga mulut dan tenggorokan tanpa menyentuh titik tertentu.",
        contoh: [ { ar: "قُولُوا", ket: "mengandung huruf mad", ref: "QS. Al-Baqarah: 136" } ] },
      { nama: "Al-Halq (Tenggorokan)", warna: "", arab: "الحلق",
        def: "Tiga tempat: pangkal (ء هـ), tengah (ع ح), ujung (غ خ).", huruf: "ء هـ ع ح غ خ", cara: "Tekan sedikit pada bagian tenggorokan yang sesuai.",
        contoh: [ { ar: "أَحَدٌ", ket: "hamzah dan ha'", ref: "" } ] },
      { nama: "Al-Lisan (Lidah)", warna: "", arab: "اللسان",
        def: "Daerah paling banyak, 18 huruf, dari pangkal hingga ujung lidah.", huruf: "ق ك ج ش ي ض ل ن ر ت د ط ث ذ ظ س ز ص", cara: "Perhatikan bagian lidah yang menyentuh langit-langit atau gigi.",
        contoh: [ { ar: "قُلْ", ket: "qaf dan lam", ref: "" } ] },
      { nama: "Asy-Syafatain (Dua Bibir)", warna: "", arab: "الشفتان",
        def: "Huruf ba', mim, dan wau dari dua bibir, serta fa' dari bibir bawah dengan ujung gigi seri atas.", huruf: "ب م و ف", cara: "Rapatkan bibir untuk ba' dan mim. Untuk wau, bibir membulat. Untuk fa', gigi atas menyentuh bibir bawah.",
        contoh: [ { ar: "بِسْمِ", ket: "ba' dan mim", ref: "" } ] },
      { nama: "Al-Khaisyum (Rongga Hidung)", warna: "", arab: "الخيشوم",
        def: "Tempat keluar dengung (ghunnah).", huruf: "ghunnah", cara: "Suara dengung diteruskan melalui hidung.",
        contoh: [ { ar: "إِنَّ", ket: "nun bertasydid", ref: "" } ] }
    ] },

  { id: "waqaf", judul: "Tanda Waqaf", ikon: "fa-circle-pause",
    intro: "Tanda waqaf (berhenti) menunjukkan boleh atau tidaknya berhenti dan melanjutkan bacaan. Tanda-tanda ini dijumpai di mushaf standar Indonesia.",
    hukum: [
      { nama: "م (Waqaf Lazim)", warna: "", arab: "وقف لازم", def: "Harus berhenti karena jika disambung bisa mengubah makna.", huruf: "م", cara: "Berhenti, lalu lanjutkan dari ayat berikutnya.", contoh: [] },
      { nama: "لا (Dilarang Waqaf)", warna: "", arab: "لا", def: "Tidak boleh berhenti di sini. Jika terpaksa berhenti, ulangi dari kata sebelumnya.", huruf: "لا", cara: "Teruskan bacaan tanpa berhenti.", contoh: [] },
      { nama: "ج (Jaiz)", warna: "", arab: "وقف جائز", def: "Boleh berhenti atau melanjutkan, sama baiknya.", huruf: "ج", cara: "Pilih berhenti atau lanjut sesuai napas.", contoh: [] },
      { nama: "قلى (Waqaf Lebih Utama)", warna: "", arab: "الوقف أولى", def: "Boleh berhenti atau lanjut, tetapi berhenti lebih utama.", huruf: "قلى", cara: "Sebaiknya berhenti.", contoh: [] },
      { nama: "صلى (Washal Lebih Utama)", warna: "", arab: "الوصل أولى", def: "Boleh berhenti atau lanjut, tetapi melanjutkan lebih utama.", huruf: "صلى", cara: "Sebaiknya lanjutkan bacaan.", contoh: [] },
      { nama: "∴ ∴ (Mu'anaqah)", warna: "", arab: "معانقة", def: "Tanda tiga titik berpasangan: berhenti di salah satu titik, tidak boleh di keduanya.", huruf: "۝ ∴ ∴", cara: "Berhenti di salah satu tempat saja.", contoh: [] }
    ] }
];
