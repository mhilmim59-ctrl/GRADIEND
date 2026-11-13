/* =====================================================================
   Panduan bersuci & salat (wudhu, tayammum, salat wajib, salat sunnah)
   Dipakai oleh scripts/build-seo.js untuk membuat bagian "Tata cara" di jadwal-salat.html.
   Mengubah isi berkas ini lalu commit = halaman ikut diperbarui otomatis saat deploy.

   Disusun mengikuti mazhab Syafi'i (yang umum di Indonesia). Bila mengubah isi,
   mintalah pembina Rohis / guru agama memeriksanya terlebih dahulu.
   Format bacaan: { label, ar, latin, arti, sumber }
   ===================================================================== */
window.GRADIEND_IBADAH = {

  catatan: "Panduan ini disusun mengikuti mazhab Syafi'i yang umum di Indonesia. Pada sebagian hal para ulama berbeda pendapat, dan perbedaan itu dimaklumi. Bila ragu, tanyakan kepada guru atau pembina Rohis. Tata cara salat paling baik dipelajari langsung dari guru (talaqqi) lalu dipraktikkan bersama.",

  /* ---------------------------------------------------------------- WUDHU */
  wudhu: {
    intro: "Wudhu adalah bersuci dari hadas kecil dengan air suci yang menyucikan, dan menjadi syarat sah salat. Allah berfirman dalam QS. Al-Ma'idah ayat 6: apabila hendak salat, basuhlah wajahmu dan kedua tanganmu sampai siku, usaplah kepalamu, dan (basuhlah) kedua kakimu sampai mata kaki. Rasulullah SAW juga bersabda bahwa salat tidak diterima tanpa bersuci (HR. Muslim).",
    langkah: [
      { judul: "Niat dan membaca basmalah", jenis: "Rukun", isi: "Niatkan dalam hati untuk menghilangkan hadas kecil, lalu ucapkan basmalah. Niat adalah rukun wudhu dan dilakukan ketika mulai membasuh wajah; melafalkannya hukumnya sunnah menurut mazhab Syafi'i.",
        bacaan: [
          { label: "Niat wudhu", ar: "نَوَيْتُ الْوُضُوءَ لِرَفْعِ الْحَدَثِ الْأَصْغَرِ فَرْضًا لِلَّهِ تَعَالَى", latin: "Nawaitul wudhū'a liraf'il ḥadatsil aṣghari fardhan lillāhi ta'ālā.", arti: "Aku berniat berwudhu untuk menghilangkan hadas kecil, fardu karena Allah Ta'ala." },
          { label: "Basmalah", ar: "بِسْمِ اللَّهِ", latin: "Bismillāh.", arti: "Dengan nama Allah." }
        ] },
      { judul: "Membasuh kedua telapak tangan", jenis: "Sunnah", isi: "Basuh kedua telapak tangan sampai pergelangan sebanyak tiga kali, termasuk sela-sela jari." },
      { judul: "Berkumur", jenis: "Sunnah", isi: "Berkumur sebanyak tiga kali, bisa sambil memasukkan air ke mulut dengan tangan kanan." },
      { judul: "Membersihkan hidung", jenis: "Sunnah", isi: "Hirup air ke dalam hidung dengan tangan kanan (istinsyaq), lalu keluarkan dengan bantuan tangan kiri (istintsar), tiga kali. Orang yang berpuasa tidak berlebihan menghirup air." },
      { judul: "Membasuh wajah", jenis: "Rukun", isi: "Basuh seluruh wajah tiga kali. Batasnya: dari tempat tumbuh rambut kepala bagian atas sampai bawah dagu, dan dari telinga kanan sampai telinga kiri. Sela-sela jenggot yang tipis ikut dibasuh." },
      { judul: "Membasuh kedua tangan sampai siku", jenis: "Rukun", isi: "Basuh tangan kanan dahulu, lalu tangan kiri, masing-masing sampai siku (siku ikut dibasuh) tiga kali. Pastikan air mengenai sela-sela jari dan bagian cincin atau jam tangan." },
      { judul: "Mengusap kepala", jenis: "Rukun", isi: "Usap kepala dengan tangan yang basah. Yang wajib cukup sebagian kepala, tetapi yang utama seluruh kepala: dari depan ke belakang, lalu kembali ke depan." },
      { judul: "Mengusap kedua telinga", jenis: "Sunnah", isi: "Usap bagian dalam telinga dengan jari telunjuk dan bagian luarnya dengan ibu jari, menggunakan sisa air usapan kepala." },
      { judul: "Membasuh kedua kaki sampai mata kaki", jenis: "Rukun", isi: "Basuh kaki kanan dahulu, lalu kaki kiri, masing-masing sampai mata kaki (mata kaki ikut dibasuh) tiga kali. Sela-sela jari kaki disela dengan jari kelingking tangan kiri." },
      { judul: "Tertib dan berdoa", jenis: "Rukun", isi: "Semua anggota dibasuh berurutan seperti di atas (tertib itu rukun). Setelah selesai, menghadap kiblat dan membaca doa setelah wudhu.",
        bacaan: [
          { label: "Doa setelah wudhu", ar: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ. اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
            latin: "Asyhadu an lā ilāha illallāhu waḥdahū lā syarīka lah, wa asyhadu anna Muḥammadan 'abduhū wa rasūluh. Allāhummaj'alnī minat-tawwābīna waj'alnī minal-mutaṭahhirīn.",
            arti: "Aku bersaksi bahwa tiada tuhan selain Allah semata, tiada sekutu bagi-Nya, dan aku bersaksi bahwa Muhammad adalah hamba dan utusan-Nya. Ya Allah, jadikanlah aku termasuk orang-orang yang bertobat dan jadikanlah aku termasuk orang-orang yang bersuci.",
            sumber: "HR. Muslim dan HR. At-Tirmidzi" }
        ] }
    ],
    rukun: ["Niat", "Membasuh wajah", "Membasuh kedua tangan sampai siku", "Mengusap sebagian kepala", "Membasuh kedua kaki sampai mata kaki", "Tertib (berurutan)"],
    sunnah: ["Membaca basmalah di awal", "Bersiwak (menggosok gigi)", "Membasuh telapak tangan, berkumur, dan membersihkan hidung", "Mendahulukan anggota kanan sebelum kiri", "Mengulang basuhan sampai tiga kali", "Menyela-nyela jari tangan dan kaki", "Berkesinambungan, tidak menunda sampai anggota sebelumnya kering", "Hemat air dan tidak berlebihan", "Membaca doa setelah wudhu dan salat sunnah wudhu dua rakaat"],
    pembatal: ["Keluarnya sesuatu dari qubul atau dubur (buang air kecil, buang air besar, kentut, dan sebagainya).", "Hilang akal: tidur nyenyak (kecuali duduk dengan pantat menempel mantap), pingsan, mabuk, atau gila.", "Bersentuhan kulit laki-laki dan perempuan yang bukan mahram, menurut mazhab Syafi'i. Sebagian ulama lain berpendapat hal ini tidak membatalkan kecuali disertai syahwat.", "Menyentuh kemaluan (qubul atau dubur) manusia dengan telapak tangan atau bagian dalam jari tanpa penghalang."]
  },

  /* ------------------------------------------------------------ TAYAMMUM */
  tayammum: {
    intro: "Tayammum adalah pengganti wudhu atau mandi wajib dengan debu yang suci, bila tidak ada air setelah dicari, atau bila memakai air membahayakan karena sakit (QS. An-Nisa' ayat 43 dan QS. Al-Ma'idah ayat 6). Debu bisa berasal dari tanah, dinding, atau batu yang berdebu dan suci.",
    langkah: [
      { judul: "Niat", jenis: "Rukun", isi: "Niatkan dalam hati agar diperbolehkan salat.",
        bacaan: [{ label: "Niat tayammum", ar: "نَوَيْتُ التَّيَمُّمَ لِاسْتِبَاحَةِ الصَّلَاةِ فَرْضًا لِلَّهِ تَعَالَى", latin: "Nawaitut-tayammuma li-istibāḥatiṣ-ṣalāti fardhan lillāhi ta'ālā.", arti: "Aku berniat tayammum agar diperbolehkan salat, fardu karena Allah Ta'ala." }] },
      { judul: "Menepuk debu lalu mengusap wajah", jenis: "Rukun", isi: "Tepukkan kedua telapak tangan ke debu suci, tiup debu berlebih, lalu usapkan ke seluruh wajah." },
      { judul: "Menepuk debu lagi lalu mengusap tangan", jenis: "Rukun", isi: "Tepukkan kedua telapak tangan sekali lagi, lalu usap kedua tangan sampai siku menurut mazhab Syafi'i (sebagian ulama cukup sampai pergelangan)." },
      { judul: "Tertib", jenis: "Rukun", isi: "Lakukan berurutan: wajah dahulu, baru kedua tangan. Satu kali tayammum dipakai untuk satu salat fardu." }
    ]
  },

  /* --------------------------------------------------------- SALAT WAJIB */
  fardu: [
    { nama: "Subuh", rakaat: 2, waktu: "Terbit fajar shadiq sampai terbit matahari", bacaan: "Dua rakaat dibaca keras (jahr)",
      niat: { ar: "أُصَلِّي فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى", latin: "Uṣallī fardhaṣ-ṣubḥi rak'ataini mustaqbilal-qiblati adā'an lillāhi ta'ālā.", arti: "Aku berniat salat fardu Subuh dua rakaat menghadap kiblat, tepat pada waktunya, karena Allah Ta'ala." } },
    { nama: "Zuhur", rakaat: 4, waktu: "Matahari tergelincir ke barat sampai bayangan benda sama panjang dengan bendanya", bacaan: "Semua rakaat dibaca pelan (sirr)",
      niat: { ar: "أُصَلِّي فَرْضَ الظُّهْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى", latin: "Uṣallī fardhaẓ-ẓuhri arba'a raka'ātin mustaqbilal-qiblati adā'an lillāhi ta'ālā.", arti: "Aku berniat salat fardu Zuhur empat rakaat menghadap kiblat, tepat pada waktunya, karena Allah Ta'ala." } },
    { nama: "Asar", rakaat: 4, waktu: "Bayangan benda lebih panjang dari bendanya sampai matahari terbenam", bacaan: "Semua rakaat dibaca pelan (sirr)",
      niat: { ar: "أُصَلِّي فَرْضَ الْعَصْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى", latin: "Uṣallī fardhal-'aṣri arba'a raka'ātin mustaqbilal-qiblati adā'an lillāhi ta'ālā.", arti: "Aku berniat salat fardu Asar empat rakaat menghadap kiblat, tepat pada waktunya, karena Allah Ta'ala." } },
    { nama: "Magrib", rakaat: 3, waktu: "Matahari terbenam sampai hilangnya mega merah", bacaan: "Dua rakaat pertama dibaca keras, rakaat ketiga pelan",
      niat: { ar: "أُصَلِّي فَرْضَ الْمَغْرِبِ ثَلَاثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى", latin: "Uṣallī fardhal-maghribi tsalātsa raka'ātin mustaqbilal-qiblati adā'an lillāhi ta'ālā.", arti: "Aku berniat salat fardu Magrib tiga rakaat menghadap kiblat, tepat pada waktunya, karena Allah Ta'ala." } },
    { nama: "Isya", rakaat: 4, waktu: "Hilangnya mega merah sampai terbit fajar (waktu utama sampai kira-kira tengah malam)", bacaan: "Dua rakaat pertama dibaca keras, dua rakaat terakhir pelan",
      niat: { ar: "أُصَلِّي فَرْضَ الْعِشَاءِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى", latin: "Uṣallī fardhal-'isyā'i arba'a raka'ātin mustaqbilal-qiblati adā'an lillāhi ta'ālā.", arti: "Aku berniat salat fardu Isya empat rakaat menghadap kiblat, tepat pada waktunya, karena Allah Ta'ala." } }
  ],
  keteranganNiat: "Niat tempatnya di hati dan dilakukan bersamaan dengan takbiratul ihram. Melafalkan niat hukumnya sunnah menurut mazhab Syafi'i, sedangkan sebagian ulama lain berpendapat tidak perlu dilafalkan. Bila salat berjemaah, tambahkan kata \"imāman\" (sebagai imam) atau \"ma'mūman\" (sebagai makmum) sebelum \"lillāhi ta'ālā\". Contoh makmum Subuh: Uṣallī fardhaṣ-ṣubḥi rak'ataini mustaqbilal-qiblati adā'an ma'mūman lillāhi ta'ālā. Bila salat dikerjakan di luar waktunya (qadha), kata \"adā'an\" diganti \"qaḍā'an\".",

  syarat: ["Beragama Islam, berakal, dan sudah tamyiz (mampu membedakan baik dan buruk).", "Suci dari hadas kecil dan hadas besar (wudhu atau mandi wajib).", "Suci badan, pakaian, dan tempat salat dari najis.", "Menutup aurat: laki-laki dari pusar sampai lutut, perempuan seluruh tubuh kecuali wajah dan telapak tangan.", "Menghadap kiblat.", "Sudah masuk waktu salat.", "Mengetahui tata cara salat yang sah."],

  rukunSalat: ["Niat", "Takbiratul ihram", "Berdiri bagi yang mampu pada salat fardu", "Membaca Al-Fatihah pada setiap rakaat", "Rukuk dengan tuma'ninah", "I'tidal dengan tuma'ninah", "Sujud dua kali dengan tuma'ninah", "Duduk di antara dua sujud dengan tuma'ninah", "Duduk tasyahud akhir", "Membaca tasyahud akhir", "Membaca salawat kepada Nabi SAW pada tasyahud akhir", "Salam yang pertama", "Tertib (berurutan)"],
  tuma: "Tuma'ninah adalah diam sejenak (kira-kira selama membaca \"subhanallah\") di setiap rukuk, i'tidal, sujud, dan duduk. Rasulullah SAW menyuruh seseorang mengulang salatnya karena tidak tuma'ninah (HR. Bukhari dan Muslim).",

  gerakan: [
    { judul: "Berdiri tegak dan berniat", jenis: "Rukun", isi: "Berdiri tegak menghadap kiblat dengan pandangan ke tempat sujud, lalu berniat di dalam hati sesuai salat yang dikerjakan (lihat tabel niat di atas)." },
    { judul: "Takbiratul ihram", jenis: "Rukun", isi: "Angkat kedua tangan sejajar bahu atau telinga sambil mengucapkan takbir, lalu letakkan tangan kanan di atas tangan kiri di bawah dada dan di atas pusar. Dengan takbir ini kita masuk salat dan terlarang dari perkataan serta gerakan di luar salat.",
      bacaan: [{ label: "Takbir", ar: "اللهُ أَكْبَرُ", latin: "Allāhu akbar.", arti: "Allah Maha Besar." }] },
    { judul: "Doa iftitah", jenis: "Sunnah", isi: "Dibaca pelan setelah takbiratul ihram, hanya pada rakaat pertama.",
      bacaan: [{ label: "Doa iftitah", ar: "اللهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللهِ بُكْرَةً وَأَصِيلًا. إِنِّي وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَاوَاتِ وَالْأَرْضَ حَنِيفًا مُسْلِمًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ. إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ. لَا شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا مِنَ الْمُسْلِمِينَ",
        latin: "Allāhu akbaru kabīrā, wal-ḥamdu lillāhi katsīrā, wa subḥānallāhi bukrataw wa aṣīlā. Innī wajjahtu wajhiya lilladzī faṭaras-samāwāti wal-arḍa ḥanīfam muslimaw wa mā ana minal-musyrikīn. Inna ṣalātī wa nusukī wa maḥyāya wa mamātī lillāhi rabbil-'ālamīn. Lā syarīka lahū wa bidzālika umirtu wa ana minal-muslimīn.",
        arti: "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak, dan Maha Suci Allah pada waktu pagi dan petang. Aku hadapkan wajahku kepada Tuhan yang menciptakan langit dan bumi dengan lurus dan berserah diri, dan aku bukan termasuk orang-orang musyrik. Sesungguhnya salatku, ibadahku, hidupku, dan matiku hanyalah untuk Allah, Tuhan semesta alam. Tiada sekutu bagi-Nya, dan demikianlah yang diperintahkan kepadaku, dan aku termasuk orang-orang yang berserah diri.",
        sumber: "Sebagian lafal dari HR. Muslim" }] },
    { judul: "Ta'awudz dan Al-Fatihah", jenis: "Rukun", isi: "Baca ta'awudz (sunnah) lalu Al-Fatihah beserta basmalah di setiap rakaat. Al-Fatihah wajib dibaca dengan benar makhraj dan tajwidnya; ayat terakhir diakhiri dengan \"Āmīn\". Teks lengkap dengan tajwid berwarna ada di halaman Al-Qur'an (surat Al-Fatihah).",
      bacaan: [
        { label: "Ta'awudz", ar: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ", latin: "A'ūdzu billāhi minasy-syaiṭānir-rajīm.", arti: "Aku berlindung kepada Allah dari godaan setan yang terkutuk." },
        { label: "Al-Fatihah", ar: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ. الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ. الرَّحْمَٰنِ الرَّحِيمِ. مَالِكِ يَوْمِ الدِّينِ. إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ. اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ. صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
          latin: "Bismillāhir-raḥmānir-raḥīm. Al-ḥamdu lillāhi rabbil-'ālamīn. Ar-raḥmānir-raḥīm. Māliki yawmid-dīn. Iyyāka na'budu wa iyyāka nasta'īn. Ihdinaṣ-ṣirāṭal-mustaqīm. Ṣirāṭal-ladzīna an'amta 'alaihim, gairil-magḍūbi 'alaihim wa laḍ-ḍāllīn. Āmīn.",
          arti: "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang. Segala puji bagi Allah, Tuhan seluruh alam, Yang Maha Pengasih, Maha Penyayang, Pemilik hari pembalasan. Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami mohon pertolongan. Tunjukilah kami jalan yang lurus, (yaitu) jalan orang-orang yang telah Engkau beri nikmat kepada mereka, bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat.",
          sumber: "QS. Al-Fatihah: 1–7" }
      ] },
    { judul: "Membaca surat atau ayat Al-Qur'an", jenis: "Sunnah", isi: "Setelah Al-Fatihah, disunnahkan membaca surat atau beberapa ayat Al-Qur'an pada dua rakaat pertama (rakaat pertama dan kedua). Pada rakaat ketiga dan keempat cukup Al-Fatihah. Contoh surat pendek yang mudah:",
      bacaan: [{ label: "Surat Al-Ikhlas", ar: "قُلْ هُوَ اللَّهُ أَحَدٌ. اللَّهُ الصَّمَدُ. لَمْ يَلِدْ وَلَمْ يُولَدْ. وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ", latin: "Qul huwallāhu aḥad. Allāhuṣ-ṣamad. Lam yalid wa lam yūlad. Wa lam yakul lahū kufuwan aḥad.", arti: "Katakanlah (Muhammad), \"Dialah Allah, Yang Maha Esa. Allah tempat meminta segala sesuatu. (Allah) tidak beranak dan tidak pula diperanakkan. Dan tidak ada sesuatu yang setara dengan Dia.\"", sumber: "QS. Al-Ikhlas: 1–4" }] },
    { judul: "Rukuk", jenis: "Rukun", isi: "Bertakbir sambil membungkuk, kedua telapak tangan memegang lutut dengan jari terbuka, punggung dan kepala rata, lalu tuma'ninah sambil membaca tasbih (minimal sekali, utamanya tiga kali).",
      bacaan: [{ label: "Tasbih rukuk", ar: "سُبْحَانَ رَبِّيَ الْعَظِيمِ وَبِحَمْدِهِ", latin: "Subḥāna rabbiyal-'aẓīmi wa bi-ḥamdih.", arti: "Maha Suci Tuhanku Yang Maha Agung dan dengan memuji-Nya.", sumber: "HR. Abu Dawud" }] },
    { judul: "I'tidal", jenis: "Rukun", isi: "Bangkit dari rukuk sambil mengangkat kedua tangan dan membaca tasmi', lalu berdiri tegak dengan tuma'ninah sambil membaca tahmid. Pada rakaat kedua salat Subuh, mazhab Syafi'i menyunnahkan membaca doa qunut di sini, sedangkan sebagian ulama lain tidak melakukannya.",
      bacaan: [
        { label: "Saat bangkit (tasmi')", ar: "سَمِعَ اللهُ لِمَنْ حَمِدَهُ", latin: "Sami'allāhu liman ḥamidah.", arti: "Allah mendengar orang yang memuji-Nya." },
        { label: "Saat berdiri (tahmid)", ar: "رَبَّنَا لَكَ الْحَمْدُ مِلْءَ السَّمَاوَاتِ وَمِلْءَ الْأَرْضِ وَمِلْءَ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ", latin: "Rabbanā lakal-ḥamdu mil'as-samāwāti wa mil'al-arḍi wa mil'a mā syi'ta min syai'in ba'du.", arti: "Wahai Tuhan kami, bagi-Mu segala puji, sepenuh langit, sepenuh bumi, dan sepenuh apa yang Engkau kehendaki setelah itu.", sumber: "HR. Muslim" },
        { label: "Doa qunut (Subuh, rakaat kedua)", ar: "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ، وَقِنِي شَرَّ مَا قَضَيْتَ، فَإِنَّكَ تَقْضِي وَلَا يُقْضَى عَلَيْكَ، وَإِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ، وَلَا يَعِزُّ مَنْ عَادَيْتَ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ، فَلَكَ الْحَمْدُ عَلَى مَا قَضَيْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ، وَصَلَّى اللهُ عَلَى سَيِّدِنَا مُحَمَّدٍ النَّبِيِّ الْأُمِّيِّ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ",
          latin: "Allāhummah-dinī fīman hadait, wa 'āfinī fīman 'āfait, wa tawallanī fīman tawallait, wa bārik lī fīmā a'ṭait, wa qinī syarra mā qaḍait, fa innaka taqḍī wa lā yuqḍā 'alaik, wa innahū lā yadzillu man wālait, wa lā ya'izzu man 'ādait, tabārakta rabbanā wa ta'ālait, falakal-ḥamdu 'alā mā qaḍait, astagfiruka wa atūbu ilaik, wa ṣallallāhu 'alā sayyidinā Muḥammadin-nabiyyil-ummiyyi wa 'alā ālihī wa ṣaḥbihī wa sallam.",
          arti: "Ya Allah, berilah aku petunjuk bersama orang-orang yang telah Engkau beri petunjuk, berilah aku kesehatan bersama orang-orang yang telah Engkau beri kesehatan, pimpinlah aku bersama orang-orang yang telah Engkau pimpin, berkahilah apa yang telah Engkau berikan kepadaku, dan lindungilah aku dari keburukan yang Engkau tetapkan. Sesungguhnya Engkaulah yang menetapkan dan tidak ada yang menetapkan atas-Mu. Sesungguhnya tidak akan hina orang yang Engkau pimpin dan tidak akan mulia orang yang Engkau musuhi. Maha Suci Engkau wahai Tuhan kami dan Maha Tinggi. Bagi-Mu segala puji atas apa yang Engkau tetapkan. Aku memohon ampun dan bertobat kepada-Mu. Semoga Allah melimpahkan rahmat dan salam kepada Nabi Muhammad, nabi yang ummi, beserta keluarga dan sahabatnya.",
          sumber: "Bagian awal HR. Abu Dawud dan At-Tirmidzi" }
      ] },
    { judul: "Sujud pertama", jenis: "Rukun", isi: "Bertakbir sambil turun sujud. Tujuh anggota tubuh menempel di lantai: dahi (bersama hidung), kedua telapak tangan, kedua lutut, dan ujung jari kedua kaki (HR. Bukhari dan Muslim). Siku diangkat dari lantai dan tidak menempel pada lambung. Tuma'ninah sambil membaca tasbih (utamanya tiga kali).",
      bacaan: [{ label: "Tasbih sujud", ar: "سُبْحَانَ رَبِّيَ الْأَعْلَى وَبِحَمْدِهِ", latin: "Subḥāna rabbiyal-a'lā wa bi-ḥamdih.", arti: "Maha Suci Tuhanku Yang Maha Tinggi dan dengan memuji-Nya.", sumber: "HR. Abu Dawud" }] },
    { judul: "Duduk di antara dua sujud", jenis: "Rukun", isi: "Bertakbir sambil bangkit, lalu duduk iftirasy (duduk di atas telapak kaki kiri, telapak kaki kanan ditegakkan, jari-jarinya menghadap kiblat) dengan tuma'ninah dan kedua tangan di atas paha.",
      bacaan: [{ label: "Doa duduk di antara dua sujud", ar: "رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاجْبُرْنِي وَارْفَعْنِي وَارْزُقْنِي وَاهْدِنِي وَعَافِنِي وَاعْفُ عَنِّي", latin: "Rabbigfir lī warḥamnī wajburnī warfa'nī warzuqnī wahdinī wa 'āfinī wa'fu 'annī.", arti: "Ya Tuhanku, ampunilah aku, rahmatilah aku, cukupkanlah kekuranganku, angkatlah derajatku, berilah aku rezeki, berilah aku petunjuk, berilah aku kesehatan, dan maafkanlah aku.", sumber: "HR. Abu Dawud dan At-Tirmidzi" }] },
    { judul: "Sujud kedua", jenis: "Rukun", isi: "Bertakbir lalu sujud lagi seperti sujud pertama, dengan bacaan yang sama." },
    { judul: "Rakaat berikutnya", jenis: "Rukun", isi: "Bangkit berdiri sambil bertakbir (sambil duduk sebentar sebelum berdiri adalah sunnah). Rakaat kedua dikerjakan sama seperti rakaat pertama, hanya tanpa doa iftitah dan tanpa niat. Setelah sujud kedua di rakaat kedua, lanjut ke tasyahud." },
    { judul: "Tasyahud awal", jenis: "Sunnah", isi: "Dilakukan setelah rakaat kedua pada salat tiga atau empat rakaat (Magrib, Zuhur, Asar, Isya). Duduk iftirasy, lalu baca tasyahud dan salawat kepada Nabi SAW, kemudian bertakbir bangkit ke rakaat ketiga. Pada rakaat ketiga dan keempat cukup membaca Al-Fatihah.",
      bacaan: [{ label: "Tasyahud", ar: "التَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ لِلَّهِ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللهِ",
        latin: "At-taḥiyyātul-mubārakātuṣ-ṣalawātuṭ-ṭayyibātu lillāh. As-salāmu 'alaika ayyuhan-nabiyyu wa raḥmatullāhi wa barakātuh. As-salāmu 'alainā wa 'alā 'ibādillāhiṣ-ṣāliḥīn. Asyhadu an lā ilāha illallāh, wa asyhadu anna Muḥammadar-rasūlullāh.",
        arti: "Segala penghormatan, keberkahan, salawat, dan kebaikan hanya milik Allah. Semoga keselamatan, rahmat Allah, dan berkah-Nya tercurah kepadamu wahai Nabi. Semoga keselamatan tercurah kepada kami dan kepada hamba-hamba Allah yang saleh. Aku bersaksi bahwa tiada tuhan selain Allah, dan aku bersaksi bahwa Muhammad adalah utusan Allah.",
        sumber: "HR. Muslim" },
        { label: "Salawat (tasyahud awal)", ar: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ", latin: "Allāhumma ṣalli 'alā Muḥammad.", arti: "Ya Allah, limpahkanlah rahmat kepada Muhammad." }] },
    { judul: "Tasyahud akhir", jenis: "Rukun", isi: "Dilakukan pada rakaat terakhir setiap salat. Duduk tawarruk (pantat menyentuh lantai, kaki kiri dikeluarkan di bawah kaki kanan, telapak kaki kanan tetap tegak). Baca tasyahud seperti di atas, angkat telunjuk kanan ketika mengucap \"illallāh\", lalu baca salawat Ibrahimiyah dan doa sebelum salam.",
      bacaan: [
        { label: "Salawat Ibrahimiyah", ar: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، وَبَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، فِي الْعَالَمِينَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
          latin: "Allāhumma ṣalli 'alā Muḥammad wa 'alā āli Muḥammad, kamā ṣallaita 'alā Ibrāhīma wa 'alā āli Ibrāhīm, wa bārik 'alā Muḥammad wa 'alā āli Muḥammad, kamā bārakta 'alā Ibrāhīma wa 'alā āli Ibrāhīm, fil-'ālamīna innaka ḥamīdum majīd.",
          arti: "Ya Allah, limpahkanlah rahmat kepada Muhammad dan keluarga Muhammad, sebagaimana Engkau melimpahkan rahmat kepada Ibrahim dan keluarga Ibrahim, dan berkahilah Muhammad dan keluarga Muhammad, sebagaimana Engkau memberkahi Ibrahim dan keluarga Ibrahim, di seluruh alam. Sesungguhnya Engkau Maha Terpuji lagi Maha Mulia.",
          sumber: "HR. Bukhari dan Muslim" },
        { label: "Doa sebelum salam (sunnah)", ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ، وَمِنْ عَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ",
          latin: "Allāhumma innī a'ūdzu bika min 'adzābi jahannam, wa min 'adzābil-qabri, wa min fitnatil-maḥyā wal-mamāt, wa min syarri fitnatil-masīḥid-dajjāl.",
          arti: "Ya Allah, aku berlindung kepada-Mu dari azab Jahanam, dari azab kubur, dari fitnah kehidupan dan kematian, dan dari keburukan fitnah Al-Masih Ad-Dajjal.", sumber: "HR. Muslim" }
      ] },
    { judul: "Salam", jenis: "Rukun", isi: "Menoleh ke kanan sambil mengucapkan salam hingga pipi kanan terlihat dari belakang, lalu menoleh ke kiri dengan salam yang sama. Salam pertama adalah rukun, salam kedua adalah sunnah.",
      bacaan: [{ label: "Salam", ar: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ", latin: "As-salāmu 'alaikum wa raḥmatullāh.", arti: "Semoga keselamatan dan rahmat Allah tercurah kepada kalian.", sumber: "HR. Abu Dawud dan At-Tirmidzi" }] }
  ],

  susunan: [
    { judul: "Salat 2 rakaat (Subuh)", isi: "Rakaat 1 lengkap: niat, takbiratul ihram, iftitah, Al-Fatihah, surat, rukuk, i'tidal, dua sujud. Rakaat 2: Al-Fatihah, surat, rukuk, i'tidal (qunut), dua sujud, lalu tasyahud akhir, salawat, dan salam." },
    { judul: "Salat 3 rakaat (Magrib)", isi: "Rakaat 1 dan 2 seperti di atas, kemudian tasyahud awal. Bangkit ke rakaat 3: hanya Al-Fatihah, rukuk, i'tidal, dua sujud. Lalu tasyahud akhir, salawat, dan salam." },
    { judul: "Salat 4 rakaat (Zuhur, Asar, Isya)", isi: "Rakaat 1 dan 2 seperti di atas, kemudian tasyahud awal. Rakaat 3 dan 4: hanya Al-Fatihah, rukuk, i'tidal, dua sujud. Setelah rakaat 4, tasyahud akhir, salawat, dan salam." }
  ],

  dzikir: {
    intro: "Setelah salam, disunnahkan berdzikir dan berdoa. Berikut dzikir ringkas yang masyhur setelah salat fardu:",
    bacaan: [
      { label: "Istighfar (3 kali)", ar: "أَسْتَغْفِرُ اللهَ", latin: "Astagfirullāh.", arti: "Aku memohon ampun kepada Allah.", sumber: "HR. Muslim" },
      { label: "Pujian kepada Allah", ar: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ", latin: "Allāhumma antas-salām wa minkas-salām, tabārakta yā dzal-jalāli wal-ikrām.", arti: "Ya Allah, Engkau Maha Sejahtera, dari-Mu datang keselamatan, Maha Suci Engkau wahai Pemilik keagungan dan kemuliaan.", sumber: "HR. Muslim" },
      { label: "Tasbih (33 kali)", ar: "سُبْحَانَ اللهِ", latin: "Subḥānallāh.", arti: "Maha Suci Allah." },
      { label: "Tahmid (33 kali)", ar: "الْحَمْدُ لِلَّهِ", latin: "Alḥamdulillāh.", arti: "Segala puji bagi Allah." },
      { label: "Takbir (33 kali)", ar: "اللهُ أَكْبَرُ", latin: "Allāhu akbar.", arti: "Allah Maha Besar." },
      { label: "Penggenap seratus", ar: "لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", latin: "Lā ilāha illallāhu waḥdahū lā syarīka lah, lahul-mulku wa lahul-ḥamdu wa huwa 'alā kulli syai'in qadīr.", arti: "Tiada tuhan selain Allah semata, tiada sekutu bagi-Nya. Milik-Nya kerajaan dan segala puji, dan Dia Maha Kuasa atas segala sesuatu.", sumber: "HR. Muslim (tasbih, tahmid, takbir masing-masing 33 kali, digenapkan 100 dengan bacaan ini)" }
    ],
    catatan: "Dianjurkan pula membaca Ayat Kursi (QS. Al-Baqarah: 255) setelah salat fardu. Teksnya ada di halaman Al-Qur'an, surat Al-Baqarah."
  },

  jumat: {
    judul: "Salat Jumat",
    isi: "Salat Jumat adalah fardu 'ain bagi laki-laki muslim yang baligh, berakal, sehat, dan mukim (QS. Al-Jumu'ah: 9). Dikerjakan dua rakaat berjemaah pada waktu Zuhur di hari Jumat, didahului dua khutbah, dan menggantikan salat Zuhur. Disunnahkan mandi, memakai pakaian terbaik dan wangi-wangian, serta bersegera ke masjid. Saat khutbah, jemaah mendengarkan dengan tenang. Bacaan salat sama seperti salat fardu dua rakaat (dibaca keras oleh imam).",
    niat: [{ label: "Niat salat Jumat", ar: "أُصَلِّي فَرْضَ الْجُمُعَةِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى", latin: "Uṣallī fardhal-jumu'ati rak'ataini mustaqbilal-qiblati adā'an lillāhi ta'ālā.", arti: "Aku berniat salat fardu Jumat dua rakaat menghadap kiblat, tepat pada waktunya, karena Allah Ta'ala." }],
    surat: [{ r: "Yang dianjurkan (HR. Muslim)", nama: "Al-Jumu'ah", n: 62 }, { r: "dan", nama: "Al-Munafiqun", n: 63 }, { r: "atau", nama: "Al-A'la", n: 87 }, { r: "dan", nama: "Al-Gasyiyah", n: 88 }]
  },
  jenazah: {
    judul: "Salat Jenazah (fardu kifayah)",
    isi: "Hukumnya fardu kifayah: jika sebagian muslim sudah mengerjakannya, gugurlah kewajiban yang lain. Dikerjakan berdiri dengan empat takbir, tanpa rukuk dan sujud, tanpa doa iftitah, dan bacaannya pelan. Setelah takbiratul ihram (takbir pertama) sampai takbir keempat, bacaannya berbeda pada tiap takbir seperti di bawah, kemudian ditutup dengan salam.",
    niat: [
      { label: "Niat untuk jenazah laki-laki (sebagai makmum)", ar: "أُصَلِّي عَلَى هَذَا الْمَيِّتِ أَرْبَعَ تَكْبِيرَاتٍ فَرْضَ كِفَايَةٍ مَأْمُومًا لِلَّهِ تَعَالَى", latin: "Uṣallī 'alā hādzal-mayyiti arba'a takbīrātin fardha kifāyatin ma'mūman lillāhi ta'ālā.", arti: "Aku berniat menyalatkan jenazah ini empat takbir, fardu kifayah, sebagai makmum, karena Allah Ta'ala." },
      { label: "Niat untuk jenazah perempuan (sebagai makmum)", ar: "أُصَلِّي عَلَى هَذِهِ الْمَيِّتَةِ أَرْبَعَ تَكْبِيرَاتٍ فَرْضَ كِفَايَةٍ مَأْمُومًا لِلَّهِ تَعَالَى", latin: "Uṣallī 'alā hādzihil-mayyitati arba'a takbīrātin fardha kifāyatin ma'mūman lillāhi ta'ālā.", arti: "Aku berniat menyalatkan jenazah (perempuan) ini empat takbir, fardu kifayah, sebagai makmum, karena Allah Ta'ala." }
    ],
    langkah: [
      { judul: "Takbir pertama", isi: "Takbiratul ihram, lalu membaca Al-Fatihah (teks pada bagian urutan gerakan di bawah)." },
      { judul: "Takbir kedua", isi: "Membaca salawat kepada Nabi SAW, minimal \"Allāhumma ṣalli 'alā Muḥammad\", dan lebih utama salawat Ibrahimiyah seperti pada tasyahud akhir." },
      { judul: "Takbir ketiga", isi: "Mendoakan jenazah.",
        bacaan: [
          { label: "Doa untuk jenazah laki-laki", ar: "اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ", latin: "Allāhummagfir lahū warḥamhu wa 'āfihī wa'fu 'anhu.", arti: "Ya Allah, ampunilah dia, rahmatilah dia, selamatkanlah dia, dan maafkanlah dia.", sumber: "HR. Muslim" },
          { label: "Doa untuk jenazah perempuan", ar: "اللَّهُمَّ اغْفِرْ لَهَا وَارْحَمْهَا وَعَافِهَا وَاعْفُ عَنْهَا", latin: "Allāhummagfir lahā warḥamhā wa 'āfihā wa'fu 'anhā.", arti: "Ya Allah, ampunilah dia, rahmatilah dia, selamatkanlah dia, dan maafkanlah dia.", sumber: "HR. Muslim" }
        ] },
      { judul: "Takbir keempat", isi: "Berdoa, lalu diakhiri salam ke kanan dan ke kiri.",
        bacaan: [{ label: "Doa setelah takbir keempat", ar: "اللَّهُمَّ لَا تَحْرِمْنَا أَجْرَهُ وَلَا تَفْتِنَّا بَعْدَهُ وَاغْفِرْ لَنَا وَلَهُ", latin: "Allāhumma lā taḥrimnā ajrahū wa lā taftinnā ba'dahū wagfir lanā wa lahū.", arti: "Ya Allah, janganlah Engkau halangi kami dari pahalanya, janganlah Engkau uji kami sepeninggalnya, dan ampunilah kami dan dia.", sumber: "HR. Ibnu Majah dan Ahmad" }] }
    ]
  },

  /* -------------------------------------------------------- SALAT SUNNAH */
  sunnahIntro: "Salat sunnah menyempurnakan kekurangan salat fardu dan menambah kedekatan kepada Allah. Salat sunnah muakkad (sangat dianjurkan) hampir tidak pernah ditinggalkan Rasulullah SAW, sedangkan ghairu muakkad dianjurkan namun lebih ringan. Setiap dua rakaat, salat sunnah diakhiri salam.",
  rawatib: [
    { waktu: "Subuh", sebelum: "2 rakaat (muakkad)", sesudah: "—" },
    { waktu: "Zuhur", sebelum: "2 rakaat (muakkad) + 2 rakaat (ghairu muakkad)", sesudah: "2 rakaat (muakkad) + 2 rakaat (ghairu muakkad)" },
    { waktu: "Asar", sebelum: "4 rakaat (ghairu muakkad)", sesudah: "—" },
    { waktu: "Magrib", sebelum: "2 rakaat (ghairu muakkad)", sesudah: "2 rakaat (muakkad)" },
    { waktu: "Isya", sebelum: "2 rakaat (ghairu muakkad)", sesudah: "2 rakaat (muakkad)" }
  ],
  rawatibKet: "Rasulullah SAW menjaga sepuluh rakaat rawatib: dua rakaat sebelum Zuhur, dua sesudah Zuhur, dua sesudah Magrib, dua sesudah Isya, dan dua sebelum Subuh (HR. Bukhari dan Muslim). Beliau juga bersabda bahwa siapa yang menjaga dua belas rakaat sehari semalam, Allah membangunkan baginya rumah di surga (HR. Muslim). Dua rakaat sebelum Subuh disebut lebih baik daripada dunia dan seisinya (HR. Muslim). Salat rawatib dikerjakan dua rakaat-dua rakaat (setiap dua rakaat salam). Salat sunnah qabliyah dikerjakan sebelum salat fardu, ba'diyah sesudahnya. Rawatib sebaiknya dikerjakan sendiri, tidak berjemaah.",
  rawatibSurat: [{ r: "Qabliyah Subuh, rakaat 1 (HR. Muslim)", nama: "Al-Kafirun", n: 109 }, { r: "rakaat 2", nama: "Al-Ikhlas", n: 112 }, { r: "Rawatib lain: setelah Al-Fatihah boleh surat apa saja, misalnya", nama: "Al-Kafirun", n: 109 }, { r: "dan", nama: "Al-Ikhlas", n: 112 }],
  rawatibNiat: [
    { label: "Niat qabliyah Subuh (2 rakaat)", ar: "أُصَلِّي سُنَّةَ الصُّبْحِ رَكْعَتَيْنِ قَبْلِيَّةً لِلَّهِ تَعَالَى", latin: "Uṣallī sunnataṣ-ṣubḥi rak'ataini qabliyyatan lillāhi ta'ālā.", arti: "Aku berniat salat sunnah Subuh dua rakaat sebelum fardu karena Allah Ta'ala." },
    { label: "Niat qabliyah Zuhur (2 rakaat)", ar: "أُصَلِّي سُنَّةَ الظُّهْرِ رَكْعَتَيْنِ قَبْلِيَّةً لِلَّهِ تَعَالَى", latin: "Uṣallī sunnataẓ-ẓuhri rak'ataini qabliyyatan lillāhi ta'ālā.", arti: "Aku berniat salat sunnah Zuhur dua rakaat sebelum fardu karena Allah Ta'ala." },
    { label: "Niat ba'diyah Zuhur (2 rakaat)", ar: "أُصَلِّي سُنَّةَ الظُّهْرِ رَكْعَتَيْنِ بَعْدِيَّةً لِلَّهِ تَعَالَى", latin: "Uṣallī sunnataẓ-ẓuhri rak'ataini ba'diyyatan lillāhi ta'ālā.", arti: "Aku berniat salat sunnah Zuhur dua rakaat sesudah fardu karena Allah Ta'ala." },
    { label: "Niat qabliyah Asar (4 rakaat, dua rakaat-dua rakaat)", ar: "أُصَلِّي سُنَّةَ الْعَصْرِ أَرْبَعَ رَكَعَاتٍ قَبْلِيَّةً لِلَّهِ تَعَالَى", latin: "Uṣallī sunnatal-'aṣri arba'a raka'ātin qabliyyatan lillāhi ta'ālā.", arti: "Aku berniat salat sunnah Asar empat rakaat sebelum fardu karena Allah Ta'ala." },
    { label: "Niat qabliyah Magrib (2 rakaat)", ar: "أُصَلِّي سُنَّةَ الْمَغْرِبِ رَكْعَتَيْنِ قَبْلِيَّةً لِلَّهِ تَعَالَى", latin: "Uṣallī sunnatal-maghribi rak'ataini qabliyyatan lillāhi ta'ālā.", arti: "Aku berniat salat sunnah Magrib dua rakaat sebelum fardu karena Allah Ta'ala." },
    { label: "Niat ba'diyah Magrib (2 rakaat)", ar: "أُصَلِّي سُنَّةَ الْمَغْرِبِ رَكْعَتَيْنِ بَعْدِيَّةً لِلَّهِ تَعَالَى", latin: "Uṣallī sunnatal-maghribi rak'ataini ba'diyyatan lillāhi ta'ālā.", arti: "Aku berniat salat sunnah Magrib dua rakaat sesudah fardu karena Allah Ta'ala." },
    { label: "Niat qabliyah Isya (2 rakaat)", ar: "أُصَلِّي سُنَّةَ الْعِشَاءِ رَكْعَتَيْنِ قَبْلِيَّةً لِلَّهِ تَعَالَى", latin: "Uṣallī sunnatal-'isyā'i rak'ataini qabliyyatan lillāhi ta'ālā.", arti: "Aku berniat salat sunnah Isya dua rakaat sebelum fardu karena Allah Ta'ala." },
    { label: "Niat ba'diyah Isya (2 rakaat)", ar: "أُصَلِّي سُنَّةَ الْعِشَاءِ رَكْعَتَيْنِ بَعْدِيَّةً لِلَّهِ تَعَالَى", latin: "Uṣallī sunnatal-'isyā'i rak'ataini ba'diyyatan lillāhi ta'ālā.", arti: "Aku berniat salat sunnah Isya dua rakaat sesudah fardu karena Allah Ta'ala." }
  ],
  niatCatatan: "Bila salat sunnah dikerjakan berjemaah (misalnya Tarawih, Id, atau Witir bersama), tambahkan \"imāman\" atau \"ma'mūman\" sebelum \"lillāhi ta'ālā\". Semua salat sunnah dikerjakan dengan urutan gerakan yang sama seperti salat fardu (lihat bagian urutan gerakan di atas), kecuali yang disebutkan khusus.",
  sunnah: [
    { nama: "Salat Dhuha", rakaat: "2 sampai 8 rakaat (paling sedikit 2)", waktu: "Sekitar 15–20 menit setelah matahari terbit sampai menjelang Zuhur (lihat waktu Dhuha pada jadwal di atas)", isi: "Dikerjakan dua rakaat-dua rakaat. Rasulullah SAW bersabda bahwa setiap ruas tubuh punya kewajiban sedekah, dan semua itu dicukupi dengan dua rakaat Dhuha.", dalil: "HR. Muslim",
      niat: [{ label: "Niat salat Dhuha (2 rakaat)", ar: "أُصَلِّي سُنَّةَ الضُّحَى رَكْعَتَيْنِ لِلَّهِ تَعَالَى", latin: "Uṣallī sunnatad-ḍuḥā rak'ataini lillāhi ta'ālā.", arti: "Aku berniat salat sunnah Dhuha dua rakaat karena Allah Ta'ala." }],
      surat: [{ r: "Yang lazim dibaca, rakaat 1", nama: "Asy-Syams", n: 91 }, { r: "rakaat 2", nama: "Ad-Duha", n: 93 }, { r: "atau surat apa saja yang dihafal", nama: "Al-Ikhlas", n: 112 }] },
    { nama: "Salat Tahajud", rakaat: "Minimal 2 rakaat, tanpa batas maksimal", waktu: "Setelah bangun dari tidur di malam hari (setelah Isya) sampai sebelum Subuh; paling utama sepertiga malam terakhir", isi: "Dikerjakan dua rakaat-dua rakaat. Salat paling utama setelah salat fardu adalah salat malam. Dianjurkan memanjangkan bacaan, rukuk, dan sujud, serta memperbanyak doa dan istighfar.", dalil: "QS. Al-Isra': 79; HR. Muslim",
      niat: [{ label: "Niat salat Tahajud (2 rakaat)", ar: "أُصَلِّي سُنَّةَ التَّهَجُّدِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى", latin: "Uṣallī sunnatat-tahajjudi rak'ataini lillāhi ta'ālā.", arti: "Aku berniat salat sunnah Tahajud dua rakaat karena Allah Ta'ala." }],
      surat: [{ r: "Setelah Al-Fatihah boleh surat apa saja, misalnya", nama: "Al-Ikhlas", n: 112 }, { r: "atau", nama: "Al-Mulk", n: 67 }] },
    { nama: "Salat Witir", rakaat: "1 sampai 11 rakaat (umumnya 3 rakaat)", waktu: "Setelah salat Isya sampai terbit fajar", isi: "Penutup salat malam; Rasulullah SAW bersabda, \"Jadikanlah akhir salat malam kalian witir\" (HR. Bukhari dan Muslim). Tiga rakaat dapat dikerjakan 2 rakaat salam lalu 1 rakaat. Sesudahnya disunnahkan membaca dzikir berikut.", dalil: "HR. Bukhari, Muslim, Abu Dawud, dan An-Nasa'i",
      niat: [
        { label: "Niat Witir 2 rakaat (bagian dari 3 rakaat)", ar: "أُصَلِّي سُنَّةً مِنَ الْوِتْرِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى", latin: "Uṣallī sunnatan minal-witri rak'ataini lillāhi ta'ālā.", arti: "Aku berniat salat sunnah Witir dua rakaat karena Allah Ta'ala." },
        { label: "Niat Witir 1 rakaat (penutup)", ar: "أُصَلِّي سُنَّةً مِنَ الْوِتْرِ رَكْعَةً لِلَّهِ تَعَالَى", latin: "Uṣallī sunnatan minal-witri rak'atan lillāhi ta'ālā.", arti: "Aku berniat salat sunnah Witir satu rakaat karena Allah Ta'ala." }
      ],
      surat: [{ r: "Rakaat 1 (witir 3 rakaat)", nama: "Al-A'la", n: 87 }, { r: "rakaat 2", nama: "Al-Kafirun", n: 109 }, { r: "rakaat 3", nama: "Al-Ikhlas", n: 112 }, { r: "(boleh ditambah)", nama: "Al-Falaq", n: 113 }, { r: "dan", nama: "An-Nas", n: 114 }],
      bacaan: [{ label: "Dzikir setelah Witir (3 kali; kali ketiga dengan suara lebih keras dan ditambah kalimat terakhir)", ar: "سُبْحَانَ الْمَلِكِ الْقُدُّوسِ، سُبْحَانَ الْمَلِكِ الْقُدُّوسِ، سُبْحَانَ الْمَلِكِ الْقُدُّوسِ، رَبِّ الْمَلَائِكَةِ وَالرُّوحِ", latin: "Subḥānal-malikil-quddūs, subḥānal-malikil-quddūs, subḥānal-malikil-quddūs, rabbil-malā'ikati war-rūḥ.", arti: "Maha Suci Allah, Raja Yang Maha Suci (3 kali), Tuhan para malaikat dan Jibril.", sumber: "HR. An-Nasa'i dan Abu Dawud" }] },
    { nama: "Salat Tarawih", rakaat: "8 atau 20 rakaat, ditutup witir", waktu: "Malam bulan Ramadan, setelah Isya sampai fajar", isi: "Dikerjakan dua rakaat-dua rakaat, dianjurkan berjemaah. Umat Islam mengamalkan 8 rakaat maupun 20 rakaat; keduanya memiliki dasar dan perbedaan ini tidak perlu diperdebatkan. Rasulullah SAW bersabda bahwa siapa yang menghidupkan malam Ramadan dengan iman dan mengharap pahala, diampuni dosanya yang telah lalu.", dalil: "HR. Bukhari dan Muslim",
      niat: [
        { label: "Niat Tarawih (munfarid/sendiri)", ar: "أُصَلِّي سُنَّةَ التَّرَاوِيحِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى", latin: "Uṣallī sunnatat-tarāwīḥi rak'ataini lillāhi ta'ālā.", arti: "Aku berniat salat sunnah Tarawih dua rakaat karena Allah Ta'ala." },
        { label: "Niat Tarawih sebagai makmum", ar: "أُصَلِّي سُنَّةَ التَّرَاوِيحِ رَكْعَتَيْنِ مَأْمُومًا لِلَّهِ تَعَالَى", latin: "Uṣallī sunnatat-tarāwīḥi rak'ataini ma'mūman lillāhi ta'ālā.", arti: "Aku berniat salat sunnah Tarawih dua rakaat sebagai makmum karena Allah Ta'ala." }
      ],
      surat: [{ r: "Setelah Al-Fatihah boleh surat apa saja, misalnya", nama: "Al-Ikhlas", n: 112 }, { r: "atau surat-surat juz 30 seperti", nama: "At-Takasur", n: 102 }] },
    { nama: "Tahiyyatul masjid", rakaat: "2 rakaat", waktu: "Ketika masuk masjid, sebelum duduk", isi: "Penghormatan kepada masjid. Jika masuk saat khutbah Jumat berlangsung, tetap dikerjakan dengan ringkas.", dalil: "HR. Bukhari dan Muslim",
      niat: [{ label: "Niat Tahiyyatul masjid (2 rakaat)", ar: "أُصَلِّي سُنَّةَ تَحِيَّةِ الْمَسْجِدِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى", latin: "Uṣallī sunnata taḥiyyatil-masjidi rak'ataini lillāhi ta'ālā.", arti: "Aku berniat salat sunnah penghormatan masjid dua rakaat karena Allah Ta'ala." }],
      surat: [{ r: "Rakaat 1", nama: "Al-Kafirun", n: 109 }, { r: "rakaat 2", nama: "Al-Ikhlas", n: 112 }] },
    { nama: "Sunnah wudhu", rakaat: "2 rakaat", waktu: "Setelah berwudhu", isi: "Dikerjakan segera setelah wudhu dengan khusyuk. Rasulullah SAW menyampaikan kabar gembira tentang surga bagi yang menjaganya.", dalil: "HR. Bukhari dan Muslim",
      niat: [{ label: "Niat sunnah wudhu (2 rakaat)", ar: "أُصَلِّي سُنَّةَ الْوُضُوءِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى", latin: "Uṣallī sunnatal-wuḍū'i rak'ataini lillāhi ta'ālā.", arti: "Aku berniat salat sunnah wudhu dua rakaat karena Allah Ta'ala." }],
      surat: [{ r: "Rakaat 1", nama: "Al-Kafirun", n: 109 }, { r: "rakaat 2", nama: "Al-Ikhlas", n: 112 }] },
    { nama: "Salat Istikharah", rakaat: "2 rakaat", waktu: "Kapan saja ketika bimbang memilih urusan yang mubah", isi: "Dikerjakan dua rakaat sunnah di luar salat fardu, lalu setelah salam membaca doa istikharah. Sebutkan urusan yang dimaksud pada kata \"hādzal-amra\" (urusan ini). Setelah itu mantapkan pilihan dan lanjutkan dengan berikhtiar serta musyawarah.", dalil: "HR. Bukhari",
      niat: [{ label: "Niat salat Istikharah (2 rakaat)", ar: "أُصَلِّي سُنَّةَ الِاسْتِخَارَةِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى", latin: "Uṣallī sunnatal-istikhārati rak'ataini lillāhi ta'ālā.", arti: "Aku berniat salat sunnah Istikharah dua rakaat karena Allah Ta'ala." }],
      surat: [{ r: "Yang lazim, rakaat 1", nama: "Al-Kafirun", n: 109 }, { r: "rakaat 2", nama: "Al-Ikhlas", n: 112 }],
      bacaan: [{ label: "Doa istikharah (dibaca setelah salam)",
        ar: "اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ. اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي، فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ، وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي، فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ، وَاقْدُرْ لِيَ الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي بِهِ",
        latin: "Allāhumma innī astakhīruka bi'ilmika, wa astaqdiruka biqudratika, wa as'aluka min faḍlikal-'aẓīm, fa innaka taqdiru wa lā aqdir, wa ta'lamu wa lā a'lam, wa anta 'allāmul-ghuyūb. Allāhumma in kunta ta'lamu anna hādzal-amra khairun lī fī dīnī wa ma'āsyī wa 'āqibati amrī, faqdurhu lī wa yassirhu lī tsumma bārik lī fīh. Wa in kunta ta'lamu anna hādzal-amra syarrun lī fī dīnī wa ma'āsyī wa 'āqibati amrī, faṣrifhu 'annī waṣrifnī 'anh, waqdur liyal-khaira ḥaitsu kāna tsumma arḍinī bih.",
        arti: "Ya Allah, aku memohon petunjuk pilihan yang terbaik kepada-Mu dengan ilmu-Mu, aku memohon kekuasaan-Mu, dan aku memohon karunia-Mu yang agung. Sesungguhnya Engkau Maha Kuasa sedangkan aku tidak kuasa, Engkau Maha Mengetahui sedangkan aku tidak mengetahui, dan Engkaulah Maha Mengetahui yang gaib. Ya Allah, jika Engkau mengetahui bahwa urusan ini (sebutkan urusannya) baik bagiku dalam agamaku, kehidupanku, dan akibat urusanku, maka takdirkanlah ia untukku, mudahkanlah, kemudian berkahilah untukku. Dan jika Engkau mengetahui bahwa urusan ini buruk bagiku dalam agamaku, kehidupanku, dan akibat urusanku, maka palingkanlah ia dariku dan palingkanlah aku darinya, takdirkanlah kebaikan untukku di mana pun adanya, kemudian jadikanlah aku ridha dengannya.",
        sumber: "HR. Bukhari (dari Jabir bin Abdillah RA)" }] },
    { nama: "Salat Id (Idulfitri dan Iduladha)", rakaat: "2 rakaat, berjemaah", waktu: "Setelah matahari naik setinggi tombak pada 1 Syawal dan 10 Zulhijah sampai Zuhur", isi: "Tanpa azan dan ikamah. Menurut mazhab Syafi'i, pada rakaat pertama ada tujuh takbir tambahan setelah doa iftitah (sebelum ta'awudz), dan pada rakaat kedua lima takbir tambahan sebelum membaca Al-Fatihah. Di antara tiap takbir tambahan disunnahkan membaca dzikir singkat. Setelah salat ada dua khutbah.", dalil: "HR. Abu Dawud dan Muslim",
      niat: [
        { label: "Niat salat Idulfitri (sebagai makmum)", ar: "أُصَلِّي سُنَّةً لِعِيدِ الْفِطْرِ رَكْعَتَيْنِ مَأْمُومًا لِلَّهِ تَعَالَى", latin: "Uṣallī sunnatan li'īdil-fiṭri rak'ataini ma'mūman lillāhi ta'ālā.", arti: "Aku berniat salat sunnah Idulfitri dua rakaat sebagai makmum karena Allah Ta'ala." },
        { label: "Niat salat Iduladha (sebagai makmum)", ar: "أُصَلِّي سُنَّةً لِعِيدِ الْأَضْحَى رَكْعَتَيْنِ مَأْمُومًا لِلَّهِ تَعَالَى", latin: "Uṣallī sunnatan li'īdil-aḍḥā rak'ataini ma'mūman lillāhi ta'ālā.", arti: "Aku berniat salat sunnah Iduladha dua rakaat sebagai makmum karena Allah Ta'ala." }
      ],
      surat: [{ r: "Yang dianjurkan (HR. Muslim), rakaat 1", nama: "Qaf", n: 50 }, { r: "rakaat 2", nama: "Al-Qamar", n: 54 }, { r: "atau rakaat 1", nama: "Al-A'la", n: 87 }, { r: "rakaat 2", nama: "Al-Gasyiyah", n: 88 }],
      bacaan: [
        { label: "Dzikir di antara takbir-takbir tambahan", ar: "سُبْحَانَ اللهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ", latin: "Subḥānallāhi wal-ḥamdulillāhi wa lā ilāha illallāhu wallāhu akbar.", arti: "Maha Suci Allah, segala puji bagi Allah, tiada tuhan selain Allah, dan Allah Maha Besar." },
        { label: "Takbir Id (dikumandangkan sejak malam hari raya)", ar: "اللهُ أَكْبَرُ اللهُ أَكْبَرُ اللهُ أَكْبَرُ، لَا إِلَهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ، اللهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ", latin: "Allāhu akbar, Allāhu akbar, Allāhu akbar, lā ilāha illallāhu wallāhu akbar, Allāhu akbar wa lillāhil-ḥamd.", arti: "Allah Maha Besar (3 kali), tiada tuhan selain Allah, Allah Maha Besar, Allah Maha Besar dan bagi Allah segala puji." }
      ] }
  ]
};
