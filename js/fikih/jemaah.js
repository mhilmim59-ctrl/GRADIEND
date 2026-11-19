/* Bab 4 — Salat Jemaah dan Salat Khusus
   Jenis blok isi: p, h, ol, ul, tabel, dalil, box, catatan, read, link, ib (jumat) */
window.GRADIEND_FIKIH.jemaah = {
  rujukan: ["Safinatun Najah (Syekh Salim bin Sumair Al-Hadhrami)", "Fathul Qarib (Ibnu Qasim Al-Ghazi)", "Al-Fiqh al-Manhaji (Mustafa Al-Khin dkk.)"],
  topik: [
    /* ------------------------------------------------ SYARAT JEMAAH */
    {
      id: "syarat-salat-berjemaah",
      judul: "Syarat Salat Berjemaah",
      intinya: "Salat berjemaah sah bila ada imam dan makmum yang memenuhi syarat, berada di tempat yang menyatu, dan sesuai tata cara salatnya.",
      isi: [
        { t: "p", x: "Salat berjemaah dilakukan oleh dua orang atau lebih, satu menjadi imam dan yang lain makmum. Rasulullah SAW bersabda:" },
        { t: "dalil", ar: "صَلَاةُ الْجَمَاعَةِ أَفْضَلُ مِنْ صَلَاةِ الْفَذِّ بِسَبْعٍ وَعِشْرِينَ دَرَجَةً", arti: "Salat berjemaah lebih utama daripada salat sendirian dengan 27 derajat.", sumber: "HR. Bukhari dan Muslim, dari Ibnu Umar RA" },
        { t: "h", x: "Hukum salat berjemaah" },
        { t: "p", x: "Menurut pendapat yang kuat dalam mazhab Syafi'i, salat berjemaah untuk salat fardu hukumnya fardu kifayah bagi laki-laki di suatu tempat, dan sunnah muakkad bagi tiap orangnya. Mazhab Hanbali berpendapat hukumnya fardu 'ain. Salat Jumat wajib dikerjakan berjemaah." },
        { t: "h", x: "Syarat sah salat berjemaah" },
        { t: "ol", items: [
          "**Imam sah salatnya** dan tidak diketahui batal (berhadas atau bernajis).",
          "**Imam bukan makmum** pada orang lain.",
          "**Imam bukan ummi** (tidak lancar Al-Fatihah) bila makmumnya qari (lancar bacaannya).",
          "**Imam laki-laki** bila di antara makmum ada laki-laki. Perempuan boleh menjadi imam bagi sesama perempuan.",
          "**Berkumpul di satu tempat**: di dalam satu masjid, atau bila di luar masjid jaraknya tidak lebih dari kira-kira 300 hasta (±150 meter) dan tidak ada penghalang yang menghalangi.",
          "**Makmum mengetahui gerakan imam**, dengan melihat, mendengar suaranya, atau dengan bantuan muballigh.",
          "**Tata cara salat sesuai**, sehingga tidak berbeda gerakan lahiriah yang mencolok (misalnya salat gerhana tidak boleh bermakmum pada salat biasa)."
        ] },
        { t: "h", x: "Aturan barisan (shaf)" },
        { t: "ul", items: [
          "Satu makmum laki-laki berdiri di samping kanan imam, sedikit lebih mundur.",
          "Barisan diluruskan dan dirapatkan. Rasulullah SAW bersabda bahwa meluruskan shaf termasuk kesempurnaan salat (HR. Bukhari dan Muslim).",
          "Urutan dari depan: laki-laki dewasa, anak laki-laki, kemudian perempuan.",
          "Makmum perempuan sendirian berdiri di belakang shaf laki-laki."
        ] },
        { t: "box", judul: "Yang perlu diingat", items: ["Berjemaah bernilai 27 derajat.", "Syarat jemaah: imam sah dan bukan makmum, satu tempat (masjid atau ±300 hasta), tahu gerakan imam, tata cara salat sesuai."] }
      ]
    },
    /* ------------------------------------------------------ NIAT IMAM */
    {
      id: "niat-imam",
      judul: "Kapan Niat Menjadi Imam Wajib",
      intinya: "Niat menjadi imam wajib pada empat keadaan. Pada salat lain hukumnya sunnah, dan salat imam tetap sah tanpa niat itu.",
      isi: [
        { t: "p", x: "Pada umumnya, imam yang tidak berniat menjadi imam tetap sah salatnya, tetapi ia tidak mendapat pahala berjemaah. Karena itu niat menjadi imam sunnah dilakukan. Niat menjadi imam **wajib** pada:" },
        { t: "tabel", head: ["No", "Keadaan", "Keterangan"], rows: [
          ["1", "Salat Jumat", "Jemaah adalah syarat sahnya salat Jumat, maka imam wajib berniat menjadi imam."],
          ["2", "Salat yang diulang berjemaah (mu'adah)", "Salat yang sudah dikerjakan sendirian lalu diulang berjemaah untuk mendapat pahala jemaah."],
          ["3", "Salat nazar yang dikerjakan berjemaah", "Salat yang menjadi nazar dan dikerjakan bersama jemaah."],
          ["4", "Salat jamak taqdim karena hujan", "Imam yang menjamak dua salat dengan jamak taqdim karena hujan."]
        ] },
        { t: "h", x: "Niat makmum" },
        { t: "p", x: "Makmum wajib berniat mengikuti imam (berjemaah), dan sebaiknya diniatkan bersamaan dengan takbiratul ihram. Makmum masbuq (terlambat) yang datang ketika imam sudah dalam salat berniat menjadi makmum saat takbiratul ihram." },
        { t: "read", label: "Contoh niat sebagai imam (Zuhur)", ar: "أُصَلِّي فَرْضَ الظُّهْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ إِمَامًا لِلَّهِ تَعَالَى", latin: "Uṣallī fardhaẓ-ẓuhri arba'a raka'ātin mustaqbilal-qiblati imāman lillāhi ta'ālā.", arti: "Aku berniat salat fardu Zuhur empat rakaat menghadap kiblat sebagai imam karena Allah Ta'ala." },
        { t: "read", label: "Contoh niat sebagai makmum (Zuhur)", ar: "أُصَلِّي فَرْضَ الظُّهْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ مَأْمُومًا لِلَّهِ تَعَالَى", latin: "Uṣallī fardhaẓ-ẓuhri arba'a raka'ātin mustaqbilal-qiblati ma'mūman lillāhi ta'ālā.", arti: "Aku berniat salat fardu Zuhur empat rakaat menghadap kiblat sebagai makmum karena Allah Ta'ala." },
        { t: "h", x: "Siapa yang lebih berhak menjadi imam" },
        { t: "dalil", ar: "يَؤُمُّ الْقَوْمَ أَقْرَؤُهُمْ لِكِتَابِ اللهِ", arti: "Yang menjadi imam suatu kaum adalah yang paling baik bacaannya terhadap Kitabullah.", sumber: "HR. Muslim, dari Abu Mas'ud Al-Anshari RA" },
        { t: "p", x: "Dalam mazhab Syafi'i, urutan yang paling berhak menjadi imam adalah yang paling paham fikih salat dan bacaannya, kemudian yang paling baik bacaannya, yang paling wara', yang paling dahulu berhijrah atau lebih tua, dan seterusnya." },
        { t: "box", judul: "Yang perlu diingat", items: ["Niat imam wajib pada: salat Jumat, salat mu'adah, salat nazar berjemaah, dan salat jamak taqdim karena hujan.", "Pada salat lain niat imam sunnah; makmum wajib berniat mengikuti imam."] }
      ]
    },
    /* ---------------------------------------------------- SYARAT MAKMUM */
    {
      id: "syarat-makmum",
      judul: "Syarat Menjadi Makmum",
      intinya: "Makmum harus berniat mengikuti imam, tidak mendahuluinya, mengetahui gerakannya, dan mengikutinya dengan benar.",
      isi: [
        { t: "ol", items: [
          "**Berniat mengikuti imam** (berjemaah).",
          "**Tidak berdiri lebih depan daripada imam** dalam tempat berdirinya.",
          "**Mengetahui perpindahan gerakan imam.**",
          "**Tidak mengetahui batalnya salat imam** dan tidak meyakini imamnya wajib mengulang salat.",
          "**Satu tempat dengan imam**: dalam satu masjid, atau bila di luar masjid tidak lebih dari ±300 hasta dan tidak terhalang.",
          "**Tata cara salatnya sesuai** dengan salat imam.",
          "**Tidak berbeda dengan imam dalam sunnah yang mencolok**, misalnya imam tidak tasyahud awal sedangkan makmum duduk lama.",
          "**Mengikuti imam (mutaba'ah)**: takbiratul ihram makmum dilakukan setelah imam menyelesaikan takbirnya, dan setiap gerakan dimulai setelah imam mulai bergerak.",
          "**Imam bukan makmum** pada orang lain."
        ] },
        { t: "dalil", ar: "إِنَّمَا جُعِلَ الْإِمَامُ لِيُؤْتَمَّ بِهِ، فَإِذَا كَبَّرَ فَكَبِّرُوا، وَإِذَا رَكَعَ فَارْكَعُوا، وَإِذَا قَالَ سَمِعَ اللهُ لِمَنْ حَمِدَهُ فَقُولُوا رَبَّنَا وَلَكَ الْحَمْدُ", arti: "Imam itu dijadikan untuk diikuti. Apabila ia bertakbir maka bertakbirlah kalian, apabila ia rukuk maka rukuklah, dan apabila ia mengucapkan \"sami'allāhu liman ḥamidah\" maka ucapkanlah \"rabbanā wa lakal-ḥamd\".", sumber: "HR. Bukhari dan Muslim, dari Abu Hurairah RA" },
        { t: "h", x: "Makmum masbuq (terlambat)" },
        { t: "ul", items: [
          "Ikuti imam dalam keadaan apa pun ia ditemui, lalu takbiratul ihram sambil berdiri.",
          "Siapa yang mendapati imam sedang rukuk dan ia sempat rukuk dengan tuma'ninah bersama imam, ia dihitung mendapat rakaat itu.",
          "Bila tidak sempat rukuk bersama imam, rakaat itu tidak dihitung dan ia menambahnya setelah imam salam.",
          "Setelah imam salam, makmum masbuq berdiri menyempurnakan rakaat yang tertinggal."
        ] },
        { t: "box", judul: "Yang perlu diingat", items: ["Makmum harus niat, tidak mendahului imam, tahu gerakan imam, satu tempat, dan mengikuti imam.", "Dapat rukuk bersama imam berarti dapat rakaat itu."] }
      ]
    },
    /* ---------------------------------------------------- JAMAK QASAR */
    {
      id: "jamak-qasar",
      judul: "Salat Jamak dan Qasar",
      intinya: "Qasar memendekkan salat empat rakaat menjadi dua rakaat; jamak menggabungkan dua salat dalam satu waktu. Keduanya keringanan bagi musafir.",
      isi: [
        { t: "p", x: "Allah berfirman tentang qasar:" },
        { t: "dalil", ar: "وَإِذَا ضَرَبْتُمْ فِي الْأَرْضِ فَلَيْسَ عَلَيْكُمْ جُنَاحٌ أَنْ تَقْصُرُوا مِنَ الصَّلَاةِ", arti: "Dan apabila kamu bepergian di bumi, maka tidak mengapa kamu mengqasar salat.", sumber: "QS. An-Nisa': 101" },
        { t: "h", x: "Syarat qasar" },
        { t: "ol", items: [
          "Perjalanan sejauh dua marhalah, kira-kira 81 km.",
          "Perjalanannya mubah (bukan perjalanan maksiat).",
          "Mengetahui bahwa qasar diperbolehkan.",
          "Berniat qasar ketika takbiratul ihram.",
          "Salatnya empat rakaat (Zuhur, Asar, Isya), baik tepat waktu maupun qadha salat yang tertinggal dalam safar.",
          "Perjalanan masih berlangsung sampai salat selesai.",
          "Tidak bermakmum pada orang yang menyempurnakan salat (mukim) pada sebagian salatnya."
        ] },
        { t: "p", x: "Salat Subuh dan Magrib tidak diqasar. Musafir boleh mulai mengqasar setelah melewati batas daerah tempat tinggalnya." },
        { t: "h", x: "Jamak" },
        { t: "p", x: "Jamak dilakukan antara Zuhur dengan Asar, dan antara Magrib dengan Isya. Mazhab Syafi'i membolehkan jamak bagi musafir dalam perjalanan jauh, dan jamak taqdim karena hujan." },
        { t: "tabel", head: ["", "Jamak taqdim", "Jamak ta'khir"], rows: [
          ["Artinya", "Salat kedua dikerjakan di waktu salat pertama.", "Salat pertama dikerjakan di waktu salat kedua."],
          ["Contoh", "Zuhur dan Asar dikerjakan pada waktu Zuhur.", "Zuhur dan Asar dikerjakan pada waktu Asar."],
          ["Syarat", "Niat jamak pada salat pertama; berurutan (salat pertama dahulu); langsung tanpa jeda yang lama; masih musafir saat takbiratul ihram salat kedua.", "Niat menunda salat pertama (ta'khir) di dalam waktu salat pertama; masih musafir hingga selesai salat kedua."]
        ] },
        { t: "read", label: "Niat qasar Zuhur", ar: "أُصَلِّي فَرْضَ الظُّهْرِ رَكْعَتَيْنِ قَصْرًا مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى", latin: "Uṣallī fardhaẓ-ẓuhri rak'ataini qaṣran mustaqbilal-qiblati adā'an lillāhi ta'ālā.", arti: "Aku berniat salat fardu Zuhur dua rakaat qasar, menghadap kiblat, tepat pada waktunya, karena Allah Ta'ala." },
        { t: "read", label: "Niat jamak taqdim sekaligus qasar: salat pertama (Zuhur)", ar: "أُصَلِّي فَرْضَ الظُّهْرِ رَكْعَتَيْنِ قَصْرًا مَجْمُوعًا إِلَيْهِ الْعَصْرُ جَمْعَ تَقْدِيمٍ لِلَّهِ تَعَالَى", latin: "Uṣallī fardhaẓ-ẓuhri rak'ataini qaṣran majmū'an ilaihil-'aṣru jam'a taqdīmin lillāhi ta'ālā.", arti: "Aku berniat salat fardu Zuhur dua rakaat qasar, dijamak dengan Asar secara jamak taqdim, karena Allah Ta'ala." },
        { t: "read", label: "Niat jamak taqdim sekaligus qasar: salat kedua (Asar)", ar: "أُصَلِّي فَرْضَ الْعَصْرِ رَكْعَتَيْنِ قَصْرًا مَجْمُوعًا إِلَى الظُّهْرِ جَمْعَ تَقْدِيمٍ لِلَّهِ تَعَالَى", latin: "Uṣallī fardhal-'aṣri rak'ataini qaṣran majmū'an ilaẓ-ẓuhri jam'a taqdīmin lillāhi ta'ālā.", arti: "Aku berniat salat fardu Asar dua rakaat qasar, dijamak dengan Zuhur secara jamak taqdim, karena Allah Ta'ala." },
        { t: "p", x: "Untuk jamak Magrib dan Isya, niatnya serupa. Magrib tetap tiga rakaat, sedangkan Isya boleh diqasar dua rakaat. Untuk jamak ta'khir, niat menunda salat dilakukan di dalam waktu salat pertama." },
        { t: "catatan", x: "Sebagian ulama (misalnya Imam Nawawi dari kalangan Syafi'iyah, dan mazhab Hanbali) juga membolehkan jamak karena sakit atau keperluan mendesak selama tidak dijadikan kebiasaan. Mazhab Hanafi hanya membolehkan jamak di Arafah dan Muzdalifah. Pada masalah jarak, ulama berbeda antara 81 km hingga lebih jauh." },
        { t: "box", judul: "Yang perlu diingat", items: ["Qasar: salat 4 rakaat menjadi 2, jarak minimal ±81 km, niat qasar saat takbiratul ihram.", "Jamak: Zuhur dengan Asar, Magrib dengan Isya; taqdim atau ta'khir."] }
      ]
    },
    /* ---------------------------------------------------- SALAT JUMAT */
    {
      id: "syarat-salat-jumat",
      judul: "Syarat Salat Jumat",
      intinya: "Salat Jumat fardu 'ain bagi laki-laki muslim yang baligh, berakal, merdeka, mukim, dan sehat. Syarat sahnya enam perkara.",
      isi: [
        { t: "dalil", ar: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا نُودِيَ لِلصَّلَاةِ مِنْ يَوْمِ الْجُمُعَةِ فَاسْعَوْا إِلَى ذِكْرِ اللهِ وَذَرُوا الْبَيْعَ", arti: "Wahai orang-orang yang beriman! Apabila telah diseru untuk melaksanakan salat pada hari Jumat, maka segeralah mengingat Allah dan tinggalkanlah jual beli.", sumber: "QS. Al-Jumu'ah: 9" },
        { t: "h", x: "Syarat wajib Jumat" },
        { t: "ol", items: ["Beragama Islam.", "Baligh.", "Berakal.", "Laki-laki.", "Merdeka.", "Mukim (menetap) di tempat salat Jumat didirikan atau di sekitarnya.", "Sehat dan tidak ada uzur (sakit, hujan lebat, takut bahaya)."] },
        { t: "p", x: "Perempuan, musafir, anak kecil, dan orang yang sakit tidak wajib Jumat. Tetapi bila mereka ikut salat Jumat, salatnya sah dan menggugurkan kewajiban Zuhur." },
        { t: "h", x: "Syarat sah Jumat" },
        { t: "ol", items: [
          "Dikerjakan di wilayah pemukiman (kota atau desa), bukan di tempat yang tidak berpenghuni.",
          "Dikerjakan berjemaah, dengan jumlah **40 orang** laki-laki muslim, baligh, berakal, merdeka, dan penduduk tetap, sejak khutbah hingga salat selesai.",
          "Dikerjakan pada **waktu Zuhur**.",
          "Didahului **dua khutbah**.",
          "Tidak didahului atau bersamaan dengan Jumat lain di tempat yang sama, bila masih mungkin menyatukan jemaah.",
          "Dua rakaat dikerjakan berjemaah setelah khutbah."
        ] },
        { t: "catatan", x: "Jumlah minimal jemaah berbeda antar mazhab: Syafi'i dan Hanbali 40 orang, Maliki 12 orang, Hanafi imam ditambah tiga orang. Bila sulit mengumpulkan jemaah, tanyakan kepada guru atau pembina." },
        { t: "h", x: "Sunnah-sunnah Jumat" },
        { t: "ul", items: ["Mandi sebelum berangkat Jumat.", "Memakai pakaian bersih dan terbaik serta wangi-wangian.", "Memotong kuku dan merapikan diri.", "Bersegera berangkat ke masjid.", "Memperbanyak salawat kepada Nabi SAW.", "Membaca surat Al-Kahfi pada hari atau malam Jumat; sebagian ulama menilai hadisnya sahih."] },
        { t: "h", x: "Niat dan bacaan salat Jumat" },
        { t: "ib", k: "jumat" },
        { t: "link", href: "quran.html?s=18", x: "Buka surat Al-Kahfi" },
        { t: "box", judul: "Yang perlu diingat", items: ["Syarat wajib: Islam, baligh, berakal, laki-laki, merdeka, mukim, sehat.", "Syarat sah: di wilayah pemukiman, 40 orang jemaah, waktu Zuhur, didahului dua khutbah, tidak ada Jumat lain yang mendahului di tempat yang sama."] }
      ]
    },
    /* ------------------------------------------------------ KHUTBAH */
    {
      id: "khutbah-jumat",
      judul: "Rukun dan Syarat Khutbah Jumat",
      intinya: "Khutbah Jumat ada dua kali dan memiliki lima rukun serta beberapa syarat.",
      isi: [
        { t: "h", x: "Rukun khutbah" },
        { t: "ol", items: [
          "**Memuji Allah** (hamdalah) pada kedua khutbah.",
          "**Bersalawat kepada Nabi SAW** pada kedua khutbah.",
          "**Berwasiat takwa** pada kedua khutbah.",
          "**Membaca satu ayat Al-Qur'an** pada salah satu dari dua khutbah (lebih utama pada khutbah pertama).",
          "**Mendoakan kaum mukminin dan mukminat** pada khutbah kedua."
        ] },
        { t: "p", x: "Tiga rukun pertama harus ada pada kedua khutbah, rukun keempat pada salah satunya, dan rukun kelima pada khutbah kedua." },
        { t: "h", x: "Syarat khutbah" },
        { t: "ol", items: [
          "Khatib suci dari hadas kecil dan besar.",
          "Khatib suci dari najis pada badan, pakaian, dan tempatnya.",
          "Khatib menutup aurat.",
          "Khatib berdiri bagi yang mampu.",
          "Duduk di antara dua khutbah dengan tuma'ninah.",
          "Berkesinambungan (muwalat) antara kedua khutbah dan antara rukun-rukunnya.",
          "Rukun khutbah diucapkan dalam bahasa Arab.",
          "Dilakukan setelah masuk waktu Zuhur.",
          "Rukun khutbah terdengar oleh 40 orang jemaah yang memenuhi syarat."
        ] },
        { t: "h", x: "Sunnah khutbah" },
        { t: "ul", items: ["Khatib berkhutbah di atas mimbar atau tempat yang tinggi.", "Mengucapkan salam setelah naik mimbar dan duduk sebelum khutbah.", "Memegang tongkat atau semacamnya.", "Suara jelas, ringkas, dan tidak terlalu panjang.", "Membaca surat pendek atau ayat tertentu di akhir khutbah kedua."] },
        { t: "h", x: "Adab jemaah saat khutbah" },
        { t: "dalil", ar: "إِذَا قُلْتَ لِصَاحِبِكَ أَنْصِتْ يَوْمَ الْجُمُعَةِ وَالْإِمَامُ يَخْطُبُ فَقَدْ لَغَوْتَ", arti: "Apabila engkau berkata kepada temanmu \"diamlah\" pada hari Jumat padahal imam sedang berkhutbah, maka engkau telah berbuat sia-sia.", sumber: "HR. Bukhari dan Muslim, dari Abu Hurairah RA" },
        { t: "p", x: "Jemaah mendengarkan khutbah dengan tenang, tidak berbicara, tidak bermain gawai, dan tidak memainkan benda hingga lalai dari khutbah." },
        { t: "catatan", x: "Syarat bahasa Arab untuk rukun khutbah adalah pendapat mazhab Syafi'i. Mazhab Hanafi membolehkan khutbah dengan bahasa selain Arab. Di Indonesia, banyak khatib mengucapkan rukun dalam bahasa Arab lalu menyampaikan nasihat dengan bahasa setempat." },
        { t: "box", judul: "Yang perlu diingat", items: ["Rukun khutbah 5: hamdalah, salawat, wasiat takwa, membaca ayat, doa untuk mukminin dan mukminat (pada khutbah kedua).", "Dua khutbah dipisah duduk sebentar."] }
      ]
    },
    /* ------------------------------------------------------- GERHANA */
    {
      id: "salat-gerhana",
      judul: "Salat Gerhana",
      intinya: "Salat gerhana (kusuf untuk matahari, khusuf untuk bulan) sunnah muakkad, dua rakaat dengan dua kali rukuk di setiap rakaat.",
      isi: [
        { t: "dalil", ar: "إِنَّ الشَّمْسَ وَالْقَمَرَ آيَتَانِ مِنْ آيَاتِ اللهِ لَا يَخْسِفَانِ لِمَوْتِ أَحَدٍ وَلَا لِحَيَاتِهِ، فَإِذَا رَأَيْتُمْ ذَلِكَ فَادْعُوا اللهَ وَكَبِّرُوا وَصَلُّوا وَتَصَدَّقُوا", arti: "Sesungguhnya matahari dan bulan adalah dua tanda dari tanda-tanda kebesaran Allah. Keduanya tidak gerhana karena kematian atau kelahiran seseorang. Apabila kalian melihatnya, maka berdoalah kepada Allah, bertakbirlah, salatlah, dan bersedekahlah.", sumber: "HR. Bukhari dan Muslim, dari Aisyah RA" },
        { t: "read", label: "Niat salat gerhana matahari", ar: "أُصَلِّي سُنَّةَ الْكُسُوفِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى", latin: "Uṣallī sunnatal-kusūfi rak'ataini lillāhi ta'ālā.", arti: "Aku berniat salat sunnah gerhana matahari dua rakaat karena Allah Ta'ala." },
        { t: "read", label: "Niat salat gerhana bulan", ar: "أُصَلِّي سُنَّةَ الْخُسُوفِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى", latin: "Uṣallī sunnatal-khusūfi rak'ataini lillāhi ta'ālā.", arti: "Aku berniat salat sunnah gerhana bulan dua rakaat karena Allah Ta'ala." },
        { t: "h", x: "Tata cara" },
        { t: "ol", items: [
          "Tidak ada azan dan ikamah. Jemaah dipanggil dengan seruan \"Aṣ-ṣalātu jāmi'ah\".",
          "**Rakaat pertama:** takbiratul ihram, doa iftitah, ta'awudz, lalu Al-Fatihah dan surat yang panjang (setara surat Al-Baqarah). Rukuk yang panjang. I'tidal, lalu membaca Al-Fatihah lagi dan surat yang lebih pendek dari yang pertama. Rukuk kedua yang lebih pendek dari rukuk pertama. I'tidal. Kemudian sujud dua kali yang panjang.",
          "**Rakaat kedua:** sama seperti rakaat pertama (dua kali berdiri dan dua kali rukuk), dengan bacaan dan gerakan yang lebih pendek daripada rakaat pertama.",
          "Setelah tasyahud akhir dan salawat, salam.",
          "Setelah salat, imam menyampaikan dua khutbah yang berisi nasihat, ajakan bertobat, dan bersedekah."
        ] },
        { t: "ul", items: ["Pada gerhana matahari, bacaan dibaca pelan (sirr). Pada gerhana bulan, bacaan dibaca keras (jahr).", "Dianjurkan memperbanyak takbir, dzikir, doa, istighfar, dan sedekah selama gerhana berlangsung.", "Dikerjakan secara berjemaah di masjid, tetapi sah bila sendirian."] },
        { t: "box", judul: "Yang perlu diingat", items: ["Dua rakaat, tiap rakaat dua kali berdiri dan dua kali rukuk, satu kali sujud (dua sujud).", "Setelah salat ada dua khutbah."] }
      ]
    },
    /* ------------------------------------------------------- ISTISQA */
    {
      id: "salat-istisqa",
      judul: "Salat Minta Hujan (Istisqa')",
      intinya: "Salat istisqa' sunnah muakkad ketika terjadi kemarau dan sulit air, dikerjakan dua rakaat berjemaah di lapangan, lalu dua khutbah.",
      isi: [
        { t: "p", x: "**Istisqa'** berarti memohon hujan. Dalam mazhab Syafi'i, tata caranya meliputi:" },
        { t: "ol", items: [
          "Imam mengajak masyarakat bertobat, berpuasa tiga hari sebelumnya, bersedekah, dan memperbaiki hubungan dengan sesama.",
          "Masyarakat keluar ke lapangan dengan pakaian sederhana dan sikap rendah hati, termasuk anak-anak dan orang tua.",
          "Salat dua rakaat berjemaah seperti salat Id (dengan takbir tambahan), tanpa azan dan ikamah.",
          "Imam menyampaikan dua khutbah dengan banyak istighfar (tidak diawali takbir).",
          "Imam menghadap kiblat, mengangkat tangan, berdoa dengan sungguh-sungguh, dan membalik selendangnya sebagai tanda harapan perubahan keadaan.",
          "Jemaah ikut berdoa dan mengaminkan."
        ] },
        { t: "read", label: "Niat salat istisqa'", ar: "أُصَلِّي سُنَّةَ الِاسْتِسْقَاءِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى", latin: "Uṣallī sunnatal-istisqā'i rak'ataini lillāhi ta'ālā.", arti: "Aku berniat salat sunnah istisqa' (minta hujan) dua rakaat karena Allah Ta'ala." },
        { t: "read", label: "Doa minta hujan", ar: "اللَّهُمَّ اسْقِنَا غَيْثًا مُغِيثًا مَرِيئًا مَرِيعًا نَافِعًا غَيْرَ ضَارٍّ عَاجِلًا غَيْرَ آجِلٍ", latin: "Allāhummasqinā gaitsan mugītsan marī'an marī'an nāfi'an gaira ḍārrin 'ājilan gaira ājil.", arti: "Ya Allah, turunkanlah kepada kami hujan yang menolong, menyegarkan, menyuburkan, bermanfaat, tidak membahayakan, segera, dan tidak tertunda.", sumber: "HR. Abu Dawud" },
        { t: "read", label: "Doa ketika turun hujan", ar: "اللَّهُمَّ صَيِّبًا نَافِعًا", latin: "Allāhumma ṣayyiban nāfi'ā.", arti: "Ya Allah, jadikanlah hujan ini hujan yang bermanfaat.", sumber: "HR. Bukhari" },
        { t: "box", judul: "Yang perlu diingat", items: ["Istisqa': dua rakaat berjemaah di lapangan, dua khutbah dengan banyak istighfar, doa sambil menghadap kiblat dan membalik selendang.", "Sebelumnya imam mengajak bertobat dan bersedekah."] }
      ]
    }
  ]
};
