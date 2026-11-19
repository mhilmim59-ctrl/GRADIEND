/* Bab 6 — Zakat
   Jenis blok isi: p, h, ol, ul, tabel, dalil, box, catatan, read, link
   Blok { t: "kalkulator", k: "zakat" } menampilkan kalkulator zakat (nilai emas diisi pengguna). */
window.GRADIEND_FIKIH.zakat = {
  rujukan: ["Safinatun Najah (Syekh Salim bin Sumair Al-Hadhrami)", "Fathul Qarib (Ibnu Qasim Al-Ghazi)", "Al-Fiqh al-Manhaji (Mustafa Al-Khin dkk.)", "Pedoman zakat BAZNAS dan fatwa MUI tentang zakat penghasilan"],
  topik: [
    /* ------------------------------------------------ PENGERTIAN SYARAT */
    {
      id: "pengertian-syarat-zakat",
      judul: "Pengertian, Hukum, dan Syarat Wajib Zakat",
      intinya: "Zakat adalah rukun Islam ketiga: mengeluarkan sebagian harta tertentu untuk golongan tertentu bila syarat-syaratnya terpenuhi.",
      isi: [
        { t: "p", x: "**Zakat** menurut bahasa berarti bersih, tumbuh, dan berkah. Menurut syariat, zakat adalah mengeluarkan sebagian harta atau badan dengan syarat tertentu kepada golongan yang berhak. Zakat membersihkan harta dan jiwa pemiliknya serta menolong sesama." },
        { t: "dalil", ar: "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ", arti: "Dan laksanakanlah salat dan tunaikanlah zakat.", sumber: "QS. Al-Baqarah: 43" },
        { t: "dalil", ar: "خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِمْ بِهَا", arti: "Ambillah zakat dari harta mereka, guna membersihkan dan menyucikan mereka.", sumber: "QS. At-Taubah: 103" },
        { t: "tabel", head: ["Jenis zakat", "Dikeluarkan karena", "Waktu"], rows: [
          ["Zakat fitrah (badan)", "Berakhirnya bulan Ramadan, untuk setiap jiwa muslim.", "Akhir Ramadan sampai sebelum salat Idulfitri."],
          ["Zakat mal (harta)", "Kepemilikan harta yang sudah mencapai nisab dan haul.", "Setiap kali sudah mencapai haul (satu tahun hijriah)."]
        ] },
        { t: "h", x: "Syarat wajib zakat mal" },
        { t: "ol", items: [
          "Beragama Islam.",
          "Merdeka.",
          "Memiliki harta secara penuh dan stabil.",
          "Hartanya mencapai **nisab** (batas minimal).",
          "Telah berlalu satu tahun hijriah (**haul**), kecuali zakat pertanian, rikaz, dan hasil sejenisnya yang tidak memakai haul.",
          "Harta tergolong yang wajib dizakati dan dapat berkembang."
        ] },
        { t: "box", judul: "Yang perlu diingat", items: ["Dua jenis zakat: fitrah dan mal.", "Zakat mal wajib bila hartanya mencapai nisab dan sudah genap satu tahun hijriah (haul)."] }
      ]
    },
    /* ---------------------------------------------------------- FITRAH */
    {
      id: "zakat-fitrah",
      judul: "Zakat Fitrah",
      intinya: "Zakat fitrah wajib bagi setiap muslim sebanyak satu sha' (kira-kira 2,5 kg beras), dibayarkan sebelum salat Idulfitri.",
      isi: [
        { t: "dalil", ar: "فَرَضَ رَسُولُ اللهِ صلى الله عليه وسلم زَكَاةَ الْفِطْرِ صَاعًا مِنْ تَمْرٍ أَوْ صَاعًا مِنْ شَعِيرٍ عَلَى الْعَبْدِ وَالْحُرِّ وَالذَّكَرِ وَالْأُنْثَى وَالصَّغِيرِ وَالْكَبِيرِ مِنَ الْمُسْلِمِينَ، وَأَمَرَ بِهَا أَنْ تُؤَدَّى قَبْلَ خُرُوجِ النَّاسِ إِلَى الصَّلَاةِ", arti: "Rasulullah SAW mewajibkan zakat fitrah satu sha' kurma atau satu sha' gandum atas hamba sahaya dan orang merdeka, laki-laki dan perempuan, anak kecil dan dewasa dari kaum muslimin, dan beliau memerintahkan agar ditunaikan sebelum orang-orang keluar menuju salat (Id).", sumber: "HR. Bukhari dan Muslim, dari Ibnu Umar RA" },
        { t: "dalil", ar: "طُهْرَةً لِلصَّائِمِ مِنَ اللَّغْوِ وَالرَّفَثِ وَطُعْمَةً لِلْمَسَاكِينِ", arti: "(Zakat fitrah itu) penyuci bagi orang yang berpuasa dari perbuatan sia-sia dan kata-kata kotor, serta makanan bagi orang-orang miskin.", sumber: "HR. Abu Dawud dan Ibnu Majah, dari Ibnu Abbas RA" },
        { t: "h", x: "Siapa yang wajib" },
        { t: "p", x: "Setiap muslim yang pada malam dan hari Idulfitri memiliki makanan pokok lebih dari kebutuhan dirinya dan orang yang ditanggung nafkahnya. Ia wajib menunaikan zakat fitrah **untuk dirinya** dan **untuk orang yang wajib dinafkahinya** (istri, anak, dan orang tua yang tidak mampu). Bayi yang lahir sebelum matahari terbenam di akhir Ramadan juga wajib dizakati." },
        { t: "h", x: "Kadar" },
        { t: "p", x: "Satu sha' makanan pokok. Di Indonesia, satu sha' beras ditetapkan BAZNAS sekitar **2,5 kg** (atau 3,5 liter). Sebagian ulama memakai takaran lebih besar demi kehati-hatian. Nilai rupiahnya ditetapkan tiap tahun oleh BAZNAS, bergantung pada harga beras setempat." },
        { t: "h", x: "Waktu" },
        { t: "ul", items: [
          "**Wajib** sejak terbenam matahari di akhir Ramadan.",
          "**Boleh** dibayar sejak awal Ramadan (menurut mazhab Syafi'i).",
          "**Paling utama** dibayar setelah salat Subuh hari Id dan sebelum salat Id.",
          "**Haram** menundanya sampai lewat hari Id tanpa uzur, dan tetap wajib dibayar sebagai qadha."
        ] },
        { t: "read", label: "Niat zakat fitrah untuk diri sendiri", ar: "نَوَيْتُ أَنْ أُخْرِجَ زَكَاةَ الْفِطْرِ عَنْ نَفْسِي فَرْضًا لِلَّهِ تَعَالَى", latin: "Nawaitu an ukhrija zakātal-fiṭri 'an nafsī fardhan lillāhi ta'ālā.", arti: "Aku berniat mengeluarkan zakat fitrah untuk diriku, fardu karena Allah Ta'ala." },
        { t: "read", label: "Niat zakat fitrah untuk diri sendiri dan keluarga", ar: "نَوَيْتُ أَنْ أُخْرِجَ زَكَاةَ الْفِطْرِ عَنِّي وَعَنْ جَمِيعِ مَا يَلْزَمُنِي نَفَقَاتُهُمْ شَرْعًا فَرْضًا لِلَّهِ تَعَالَى", latin: "Nawaitu an ukhrija zakātal-fiṭri 'annī wa 'an jamī'i mā yalzamunī nafaqātuhum syar'an fardhan lillāhi ta'ālā.", arti: "Aku berniat mengeluarkan zakat fitrah untuk diriku dan untuk semua orang yang wajib kunafkahi menurut syariat, fardu karena Allah Ta'ala." },
        { t: "catatan", x: "Mazhab Syafi'i mensyaratkan zakat fitrah berupa makanan pokok (beras, kurma, gandum, dan sejenisnya), sedangkan mazhab Hanafi membolehkan dengan uang. Di Indonesia banyak orang menyerahkan uang kepada amil (BAZNAS atau lembaga zakat), yang kemudian membelikan beras bagi penerima, sehingga menjaga kehati-hatian dan kemudahan." },
        { t: "link", href: "fikih/zakat.html#kalkulator-zakat", x: "Hitung zakat fitrah dengan kalkulator" },
        { t: "box", judul: "Yang perlu diingat", items: ["Zakat fitrah: 1 sha' (± 2,5 kg beras) per jiwa.", "Dibayar sebelum salat Id; boleh sejak awal Ramadan."] }
      ]
    },
    /* ------------------------------------------------------------- MAL */
    {
      id: "zakat-mal",
      judul: "Zakat Mal: Jenis Harta, Nisab, dan Kadar",
      intinya: "Zakat mal dikenakan pada emas dan perak, uang, perdagangan, hasil pertanian, peternakan, dan harta terpendam, dengan nisab dan kadar masing-masing.",
      isi: [
        { t: "tabel", head: ["Jenis harta", "Nisab", "Haul", "Kadar zakat"], rows: [
          ["Emas", "85 gram emas murni", "1 tahun", "2,5%"],
          ["Perak", "595 gram perak", "1 tahun", "2,5%"],
          ["Uang, tabungan, dan surat berharga", "Setara nilai 85 gram emas", "1 tahun", "2,5%"],
          ["Barang dagangan", "Setara nilai 85 gram emas", "1 tahun", "2,5% dari modal dan laba"],
          ["Hasil pertanian (padi, jagung, kurma, dsb.)", "5 wasaq (± 653 kg gabah, setara ± 522 kg beras)", "Setiap panen", "10% bila tadah hujan, 5% bila dengan irigasi berbiaya"],
          ["Harta terpendam (rikaz)", "Tidak ada", "Tidak ada", "20%"]
        ] },
        { t: "h", x: "Zakat peternakan" },
        { t: "tabel", head: ["Hewan", "Nisab", "Zakatnya"], rows: [
          ["Unta", "5 ekor", "1 ekor kambing"],
          ["Sapi dan kerbau", "30 ekor", "1 ekor anak sapi berumur 1 tahun"],
          ["Kambing dan domba", "40 ekor", "1 ekor kambing"]
        ] },
        { t: "p", x: "Hewan ternak yang wajib dizakati adalah yang digembalakan dan dipelihara minimal setahun untuk diambil susu atau dikembangbiakkan." },
        { t: "dalil", arti: "Pada setiap dua puluh dinar (emas) zakatnya setengah dinar. Itu setara 2,5%.", sumber: "HR. Abu Dawud, riwayat Ali bin Abi Thalib RA" },
        { t: "p", x: "Contoh: seseorang menyimpan uang Rp 200 juta selama setahun hijriah dan nisab (85 gram emas) saat itu Rp 130 juta. Karena melebihi nisab, zakat yang wajib adalah 2,5% × Rp 200 juta = Rp 5 juta. Angka ini hanya contoh; hitung dengan harga emas hari ini lewat kalkulator." },
        { t: "link", href: "fikih/zakat.html#kalkulator-zakat", x: "Buka kalkulator zakat mal" },
        { t: "catatan", x: "Dalam mazhab Syafi'i (qaul jadid), utang tidak mengurangi harta yang wajib dizakati. Pedoman BAZNAS membolehkan mengurangkan utang jangka pendek yang jatuh tempo. Perbedaan ini ditampilkan sebagai pilihan pada kalkulator." },
        { t: "box", judul: "Yang perlu diingat", items: ["Nisab emas 85 gram, perak 595 gram; kadar 2,5% dengan haul satu tahun.", "Pertanian: nisab ± 653 kg gabah, kadar 5–10% setiap panen. Rikaz 20%."] }
      ]
    },
    /* -------------------------------------------------- PENGHASILAN */
    {
      id: "zakat-penghasilan",
      judul: "Zakat Penghasilan (Profesi)",
      intinya: "Penghasilan dari gaji atau jasa dizakati 2,5% bila dalam setahun mencapai nisab, menurut fatwa MUI dan pedoman BAZNAS.",
      isi: [
        { t: "p", x: "**Zakat penghasilan** (profesi) adalah zakat atas gaji, honor, upah, dan pendapatan sejenis dari pekerjaan. Dasar pengambilannya adalah qiyas (analogi) pada zakat emas dan perak, serta pada zakat pertanian yang dikeluarkan saat memperoleh hasil. Fatwa MUI Nomor 3 Tahun 2003 menetapkan bahwa penghasilan wajib dizakati bila mencapai nisab dalam satu tahun." },
        { t: "ul", items: [
          "**Nisab:** setara 85 gram emas per tahun (dihitung dari penghasilan setahun).",
          "**Kadar:** 2,5%.",
          "**Waktu:** boleh dibayar setiap menerima penghasilan (bulanan) atau di akhir tahun setelah genap penghasilan setahun mencapai nisab.",
          "Pedoman BAZNAS menghitung dari penghasilan bruto (kotor), atau dari penghasilan setelah kebutuhan pokok, dengan keduanya dibolehkan."
        ] },
        { t: "catatan", x: "Kitab-kitab fikih klasik mazhab Syafi'i tidak menyebut zakat profesi sebagai jenis zakat tersendiri, sehingga syarat haul tetap berlaku pada harta yang disimpan. Ulama kontemporer dan lembaga zakat Indonesia membolehkan membayarnya bulanan sebagai langkah kehati-hatian dan kemudahan. Pilihan terbaik adalah mengikuti bimbingan ustaz atau lembaga zakat yang Anda percaya." },
        { t: "link", href: "fikih/zakat.html#kalkulator-zakat", x: "Hitung zakat penghasilan dengan kalkulator" },
        { t: "box", judul: "Yang perlu diingat", items: ["Zakat penghasilan: nisab setara 85 gram emas per tahun, kadar 2,5%, boleh dibayar bulanan."] }
      ]
    },
    /* --------------------------------------------------------- PENERIMA */
    {
      id: "penerima-zakat",
      judul: "Delapan Golongan Penerima Zakat",
      intinya: "Zakat hanya boleh diberikan kepada delapan golongan yang disebut dalam Al-Qur'an.",
      isi: [
        { t: "dalil", ar: "إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ وَالْعَامِلِينَ عَلَيْهَا وَالْمُؤَلَّفَةِ قُلُوبُهُمْ وَفِي الرِّقَابِ وَالْغَارِمِينَ وَفِي سَبِيلِ اللهِ وَابْنِ السَّبِيلِ فَرِيضَةً مِنَ اللهِ وَاللهُ عَلِيمٌ حَكِيمٌ", arti: "Sesungguhnya zakat itu hanyalah untuk orang-orang fakir, orang miskin, amil zakat, yang dilunakkan hatinya (mualaf), untuk (memerdekakan) hamba sahaya, untuk (membebaskan) orang yang berutang, untuk jalan Allah, dan untuk orang yang sedang dalam perjalanan, sebagai kewajiban dari Allah. Allah Maha Mengetahui, Mahabijaksana.", sumber: "QS. At-Taubah: 60" },
        { t: "tabel", head: ["No", "Golongan", "Siapa mereka"], rows: [
          ["1", "Fakir", "Orang yang tidak memiliki harta atau penghasilan yang layak, atau yang kurang dari separuh kebutuhannya."],
          ["2", "Miskin", "Orang yang memiliki penghasilan, tetapi tidak mencukupi kebutuhan hidupnya."],
          ["3", "Amil", "Petugas yang diangkat untuk mengumpulkan dan membagikan zakat."],
          ["4", "Mualaf", "Orang yang baru masuk Islam, atau yang dibujuk hatinya agar imannya menguat."],
          ["5", "Riqab", "Hamba sahaya yang hendak memerdekakan dirinya (dalam konteks kini, membebaskan manusia dari perbudakan)."],
          ["6", "Gharim", "Orang yang berutang untuk kebutuhan yang dibolehkan atau untuk mendamaikan pihak bersengketa dan tidak mampu melunasinya."],
          ["7", "Fi sabilillah", "Orang yang berjuang di jalan Allah (sebagian ulama kontemporer memasukkan dakwah dan pendidikan Islam)."],
          ["8", "Ibnu sabil", "Musafir yang kehabisan bekal dalam perjalanan yang dibolehkan."]
        ] },
        { t: "h", x: "Yang tidak berhak menerima zakat" },
        { t: "ul", items: ["Orang kaya yang berkecukupan.", "Orang yang wajib dinafkahi oleh pemberi zakat (anak, istri, orang tua yang ditanggung).", "Orang non-muslim, kecuali mualaf.", "Keluarga Nabi SAW (bani Hasyim dan bani Muthalib), menurut mazhab Syafi'i."] },
        { t: "p", x: "Menyalurkan zakat lewat lembaga resmi seperti BAZNAS atau LAZ membantu zakat tepat sasaran. Zakat fitrah di Indonesia umumnya diberikan kepada fakir dan miskin." },
        { t: "box", judul: "Yang perlu diingat", items: ["Delapan asnaf: fakir, miskin, amil, mualaf, riqab, gharim, fi sabilillah, ibnu sabil."] }
      ]
    },
    /* ------------------------------------------------------ KALKULATOR */
    {
      id: "kalkulator-zakat",
      judul: "Kalkulator Zakat",
      intinya: "Hitung nisab, zakat mal, zakat penghasilan, dan zakat fitrah dengan memasukkan harga emas dan harga beras hari ini.",
      isi: [
        { t: "p", x: "Kalkulator ini membantu perkiraan. Hasilnya bukan fatwa. Untuk keadaan yang rumit, tanyakan kepada ustaz atau lembaga zakat. Semua angka diisi oleh Anda dan tidak dikirim ke mana pun." },
        { t: "kalkulator", k: "zakat" }
      ]
    }
  ]
};
