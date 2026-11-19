/* Bab 8 — Haji dan Umrah
   Jenis blok isi: p, h, ol, ul, tabel, dalil, box, catatan, read, link */
window.GRADIEND_FIKIH.haji = {
  rujukan: ["Safinatun Najah (Syekh Salim bin Sumair Al-Hadhrami)", "Fathul Qarib (Ibnu Qasim Al-Ghazi)", "Al-Fiqh al-Manhaji (Mustafa Al-Khin dkk.)", "Panduan manasik Kementerian Agama RI"],
  topik: [
    /* ------------------------------------------------ PENGERTIAN SYARAT */
    {
      id: "pengertian-syarat-haji",
      judul: "Pengertian, Hukum, dan Syarat Wajib Haji",
      intinya: "Haji adalah rukun Islam kelima, wajib sekali seumur hidup bagi muslim yang mampu. Umrah juga wajib sekali seumur hidup menurut mazhab Syafi'i.",
      isi: [
        { t: "p", x: "**Haji** adalah menuju Baitullah di Makkah untuk mengerjakan rangkaian ibadah tertentu (wukuf di Arafah, tawaf, sai, dan lainnya) pada waktu tertentu dengan niat ibadah. **Umrah** adalah ibadah serupa yang lebih ringkas dan dapat dikerjakan kapan saja sepanjang tahun." },
        { t: "dalil", ar: "وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا", arti: "Dan (di antara kewajiban manusia terhadap Allah adalah) melaksanakan ibadah haji ke Baitullah, yaitu bagi orang yang mampu mengadakan perjalanan ke sana.", sumber: "QS. Ali 'Imran: 97" },
        { t: "h", x: "Syarat wajib haji" },
        { t: "ol", items: [
          "Beragama Islam.",
          "Baligh.",
          "Berakal.",
          "Merdeka.",
          "**Mampu (istitha'ah):** memiliki bekal dan biaya perjalanan pergi pulang serta nafkah keluarga yang ditinggalkan, kendaraan, kesehatan yang memadai, dan perjalanan yang aman. Bagi perempuan, bepergian bersama suami, mahram, atau rombongan perempuan yang tepercaya (menurut mazhab Syafi'i)."
        ] },
        { t: "p", x: "Anak yang belum baligh tetap sah hajinya, tetapi belum menggugurkan kewajiban haji Islam; setelah baligh, ia wajib berhaji lagi bila mampu. Di Indonesia, pendaftaran haji reguler dilakukan melalui Kementerian Agama dengan masa tunggu yang bisa bertahun-tahun, bergantung daerah. Informasi terbaru dapat dilihat dari sumber resmi Kementerian Agama." },
        { t: "box", judul: "Yang perlu diingat", items: ["Haji wajib sekali seumur hidup bagi yang mampu.", "Syarat wajib: Islam, baligh, berakal, merdeka, dan mampu."] }
      ]
    },
    /* ------------------------------------------------ MIQAT IHRAM */
    {
      id: "miqat-ihram",
      judul: "Miqat dan Ihram",
      intinya: "Ihram adalah niat memasuki ibadah haji atau umrah, dimulai dari batas tempat (miqat makani) yang tidak boleh dilewati tanpa berihram.",
      isi: [
        { t: "h", x: "Miqat zamani (waktu haji)" },
        { t: "p", x: "Waktu ihram haji adalah bulan Syawal, Zulkaidah, dan sepuluh hari pertama Zulhijah. Umrah dapat dikerjakan sepanjang tahun." },
        { t: "h", x: "Miqat makani (tempat)" },
        { t: "tabel", head: ["Miqat", "Untuk jamaah dari arah"], rows: [
          ["Dzulhulaifah (Bir Ali)", "Madinah dan sekitarnya"],
          ["Al-Juhfah (dekat Rabigh)", "Syam, Mesir, dan Maghrib"],
          ["Qarnul Manazil (As-Sailul Kabir)", "Najd dan Thaif"],
          ["Yalamlam (As-Sa'diyah)", "Yaman dan arah selatan, termasuk jalur pesawat dari Indonesia"],
          ["Dzatu 'Irq", "Irak dan arah timur"]
        ] },
        { t: "p", x: "Jamaah Indonesia gelombang pertama umumnya ke Madinah dahulu lalu berihram dari Bir Ali menuju Makkah. Jamaah gelombang kedua langsung ke Jeddah dan berihram sejajar dengan Yalamlam (biasanya diniatkan dari asrama atau di pesawat menurut arahan petugas)." },
        { t: "h", x: "Tata cara ihram" },
        { t: "ol", items: [
          "Mandi sunnah ihram, memotong kuku, dan merapikan diri.",
          "Laki-laki memakai dua helai kain putih tanpa jahitan (izar dan rida'), perempuan memakai pakaian biasa yang menutup aurat dan tidak menutup wajah dan telapak tangan.",
          "Salat sunnah ihram dua rakaat.",
          "Berniat ihram dan membaca talbiyah."
        ] },
        { t: "read", label: "Niat ihram umrah", ar: "نَوَيْتُ الْعُمْرَةَ وَأَحْرَمْتُ بِهَا لِلَّهِ تَعَالَى", latin: "Nawaitul 'umrata wa aḥramtu bihā lillāhi ta'ālā.", arti: "Aku berniat umrah dan berihram dengannya karena Allah Ta'ala." },
        { t: "read", label: "Niat ihram haji", ar: "نَوَيْتُ الْحَجَّ وَأَحْرَمْتُ بِهِ لِلَّهِ تَعَالَى", latin: "Nawaitul ḥajja wa aḥramtu bihī lillāhi ta'ālā.", arti: "Aku berniat haji dan berihram dengannya karena Allah Ta'ala." },
        { t: "read", label: "Talbiyah", ar: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ", latin: "Labbaikallāhumma labbaik, labbaika lā syarīka laka labbaik, innal-ḥamda wan-ni'mata laka wal-mulk, lā syarīka lak.", arti: "Aku penuhi panggilan-Mu ya Allah, aku penuhi panggilan-Mu. Aku penuhi panggilan-Mu, tiada sekutu bagi-Mu, aku penuhi panggilan-Mu. Sesungguhnya segala puji, nikmat, dan kerajaan adalah milik-Mu, tiada sekutu bagi-Mu.", sumber: "HR. Bukhari dan Muslim" },
        { t: "p", x: "Laki-laki membaca talbiyah dengan suara keras, perempuan dengan suara pelan. Talbiyah terus dibaca sampai mulai melempar jumrah Aqabah (haji) atau mulai tawaf (umrah)." },
        { t: "box", judul: "Yang perlu diingat", items: ["Lima miqat: Dzulhulaifah, Al-Juhfah, Qarnul Manazil, Yalamlam, Dzatu 'Irq.", "Ihram: mandi, berpakaian ihram, salat dua rakaat, niat, dan talbiyah."] }
      ]
    },
    /* ------------------------------------------------ RUKUN WAJIB */
    {
      id: "rukun-wajib-haji",
      judul: "Rukun dan Wajib Haji",
      intinya: "Rukun haji ada enam dan tidak bisa diganti dengan denda; wajib haji bila ditinggalkan diganti dengan dam.",
      isi: [
        { t: "dalil", ar: "الْحَجُّ عَرَفَةُ", arti: "Haji itu (intinya) adalah wukuf di Arafah.", sumber: "HR. Abu Dawud, At-Tirmidzi, An-Nasa'i, dan Ibnu Majah" },
        { t: "h", x: "Rukun haji" },
        { t: "ol", items: [
          "**Ihram**, yaitu niat memulai ibadah haji.",
          "**Wukuf di Arafah** pada 9 Zulhijah, dari tergelincirnya matahari sampai terbit fajar 10 Zulhijah (sesaat saja dalam waktu itu sudah mencukupi).",
          "**Tawaf ifadhah**, yaitu tawaf tujuh putaran mengelilingi Kakbah.",
          "**Sai**, yaitu berjalan tujuh kali antara bukit Safa dan Marwah.",
          "**Tahallul (halq atau taqshir)**, yaitu mencukur atau memotong sebagian rambut kepala.",
          "**Tertib**, yaitu mengerjakan rukun secara berurutan."
        ] },
        { t: "h", x: "Wajib haji" },
        { t: "ol", items: [
          "Berihram dari miqat.",
          "Bermalam (mabit) di Muzdalifah pada malam 10 Zulhijah.",
          "Melempar jumrah Aqabah pada 10 Zulhijah.",
          "Melempar tiga jumrah (Ula, Wustha, Aqabah) pada hari tasyrik.",
          "Bermalam (mabit) di Mina pada malam hari tasyrik.",
          "Tawaf wada' (perpisahan) bagi yang hendak meninggalkan Makkah.",
          "Menjauhi larangan-larangan ihram."
        ] },
        { t: "h", x: "Umrah" },
        { t: "p", x: "Rukun umrah ada lima: ihram, tawaf, sai, tahallul (mencukur atau memotong rambut), dan tertib. Wajib umrah: berihram dari miqat dan menjauhi larangan ihram." },
        { t: "tabel", head: ["Jika ditinggalkan", "Akibatnya"], rows: [
          ["Rukun", "Haji atau umrah tidak sah dan harus diulang."],
          ["Wajib", "Sah, tetapi wajib membayar dam (menyembelih seekor kambing)."],
          ["Sunnah", "Sah dan tidak ada denda."]
        ] },
        { t: "box", judul: "Yang perlu diingat", items: ["Rukun haji 6: ihram, wukuf, tawaf ifadhah, sai, tahallul, tertib.", "Rukun umrah 5: ihram, tawaf, sai, tahallul, tertib.", "Meninggalkan wajib haji diganti dam."] }
      ]
    },
    /* ------------------------------------------------ TATA CARA UMRAH */
    {
      id: "tata-cara-umrah",
      judul: "Tata Cara Umrah",
      intinya: "Umrah terdiri atas ihram dari miqat, tawaf tujuh putaran, sai tujuh kali, lalu tahallul dengan mencukur atau memotong rambut.",
      isi: [
        { t: "ol", items: [
          "**Ihram** dari miqat dengan niat umrah dan membaca talbiyah.",
          "**Memasuki Masjidil Haram** dengan kaki kanan sambil berdoa, lalu menuju Kakbah.",
          "**Tawaf** tujuh putaran mengelilingi Kakbah dengan Kakbah di sebelah kiri, dimulai dan diakhiri di garis sejajar Hajar Aswad. Menyentuh atau mencium Hajar Aswad sunnah bila memungkinkan; bila tidak, cukup memberi isyarat dengan tangan.",
          "**Salat sunnah tawaf** dua rakaat di belakang Maqam Ibrahim (atau di tempat lain di Masjidil Haram bila ramai).",
          "**Minum air zamzam** dan berdoa.",
          "**Sai** tujuh kali antara Safa dan Marwah, dimulai dari Safa dan berakhir di Marwah (Safa ke Marwah dihitung satu).",
          "**Tahallul**: mencukur habis atau memotong sebagian rambut. Laki-laki lebih utama mencukur habis, sedangkan perempuan memotong sedikit ujung rambutnya (sekitar satu ruas jari)."
        ] },
        { t: "p", x: "Dengan tahallul, umrah selesai dan larangan ihram berakhir. Seluruh rangkaian umrah biasanya selesai dalam beberapa jam." },
        { t: "h", x: "Syarat tawaf" },
        { t: "ul", items: ["Suci dari hadas dan najis.", "Menutup aurat.", "Tawaf di dalam Masjidil Haram dan di luar Hijr Ismail.", "Memulai dari garis Hajar Aswad dan Kakbah di sebelah kiri.", "Tujuh putaran penuh."] },
        { t: "dalil", ar: "خُذُوا عَنِّي مَنَاسِكَكُمْ", arti: "Ambillah (contohlah) dariku tata cara manasik kalian.", sumber: "HR. Muslim, dari Jabir RA" },
        { t: "box", judul: "Yang perlu diingat", items: ["Urutan umrah: ihram, tawaf 7 putaran, salat 2 rakaat, sai 7 kali, tahallul.", "Perempuan memotong sedikit rambut; laki-laki lebih utama mencukur habis."] }
      ]
    },
    /* ------------------------------------------------ TATA CARA HAJI */
    {
      id: "tata-cara-haji",
      judul: "Tata Cara Haji: Urutan Hari demi Hari",
      intinya: "Puncak haji adalah wukuf di Arafah pada 9 Zulhijah, kemudian Muzdalifah, Mina, dan tawaf ifadhah.",
      isi: [
        { t: "tabel", head: ["Tanggal", "Tempat", "Yang dikerjakan"], rows: [
          ["8 Zulhijah (Tarwiyah)", "Makkah menuju Mina", "Berihram haji (bagi yang tamattu'), lalu menuju Mina dan bermalam. Salat Zuhur, Asar, Magrib, Isya, dan Subuh di Mina."],
          ["9 Zulhijah (Arafah)", "Arafah", "**Wukuf** dari tergelincirnya matahari sampai magrib: berdzikir, berdoa, dan membaca Al-Qur'an. Salat Zuhur dan Asar dijamak qasar. Setelah magrib berangkat ke Muzdalifah."],
          ["Malam 10 Zulhijah", "Muzdalifah", "Salat Magrib dan Isya dijamak, **bermalam**, dan mengumpulkan kerikil. Setelah lewat tengah malam boleh menuju Mina bagi yang uzur."],
          ["10 Zulhijah (Nahar)", "Mina dan Makkah", "**Melempar jumrah Aqabah** 7 kerikil, **menyembelih dam** (bagi tamattu' dan qiran), **tahallul awal** (mencukur atau memotong rambut), lalu **tawaf ifadhah dan sai** di Makkah (boleh ditunda sampai hari tasyrik)."],
          ["11 dan 12 Zulhijah (Tasyrik)", "Mina", "**Melempar tiga jumrah** (Ula, Wustha, Aqabah) masing-masing 7 kerikil sesudah zawal, dan bermalam di Mina. Jamaah yang ingin mempercepat (nafar awal) meninggalkan Mina setelah melempar pada 12 Zulhijah sebelum magrib."],
          ["13 Zulhijah (nafar tsani)", "Mina", "Bagi yang menunda, melempar tiga jumrah sekali lagi, lalu meninggalkan Mina."],
          ["Sebelum pulang", "Makkah", "**Tawaf wada'** (perpisahan)."]
        ] },
        { t: "h", x: "Tiga jenis haji" },
        { t: "tabel", head: ["Jenis", "Pengertian", "Dam"], rows: [
          ["Ifrad", "Berihram haji saja, tanpa umrah.", "Tidak wajib dam."],
          ["Tamattu'", "Berumrah dahulu pada bulan haji, bertahallul, lalu berihram haji pada 8 Zulhijah. Cara yang paling umum di Indonesia.", "Wajib dam (seekor kambing). Bila tidak mampu, puasa 3 hari saat haji dan 7 hari setelah pulang."],
          ["Qiran", "Berihram haji dan umrah sekaligus.", "Wajib dam (seekor kambing)."]
        ] },
        { t: "dalil", ar: "فَمَنْ تَمَتَّعَ بِالْعُمْرَةِ إِلَى الْحَجِّ فَمَا اسْتَيْسَرَ مِنَ الْهَدْيِ فَمَنْ لَمْ يَجِدْ فَصِيَامُ ثَلَاثَةِ أَيَّامٍ فِي الْحَجِّ وَسَبْعَةٍ إِذَا رَجَعْتُمْ", arti: "Maka barang siapa mengerjakan umrah sebelum haji (tamattu'), (wajiblah ia menyembelih) hadyu yang mudah didapat. Tetapi jika ia tidak menemukan (hewan), maka ia (wajib) berpuasa tiga hari dalam masa haji dan tujuh hari setelah kamu kembali.", sumber: "QS. Al-Baqarah: 196" },
        { t: "p", x: "Jadwal dan teknis pelaksanaan (kloter, maktab, transportasi, murur di Muzdalifah, dan lainnya) mengikuti arahan resmi Kementerian Agama dan pembimbing ibadah. Di sini hanya dijelaskan hukum fikihnya." },
        { t: "catatan", x: "Ada perbedaan antar-mazhab dalam rincian rukun dan wajib. Misalnya mazhab Hanafi tidak menjadikan sai sebagai rukun, dan mazhab Maliki menjadikan mabit di Muzdalifah sebagai wajib dengan perincian lain. Jamaah dianjurkan mengikuti bimbingan pembimbing resmi." },
        { t: "box", judul: "Yang perlu diingat", items: ["Urutan: 8 Zulhijah ke Mina, 9 wukuf di Arafah, malam 10 Muzdalifah, 10 jumrah Aqabah dan tawaf ifadhah, 11–13 melempar tiga jumrah, lalu tawaf wada'.", "Tiga jenis haji: ifrad, tamattu', qiran."] }
      ]
    },
    /* ------------------------------------------------ LARANGAN IHRAM */
    {
      id: "larangan-ihram-dam",
      judul: "Larangan Ihram dan Dam (Denda)",
      intinya: "Selama berihram ada hal-hal yang dilarang; pelanggarannya diganti dengan denda (dam atau fidyah) menurut jenisnya.",
      isi: [
        { t: "dalil", ar: "فَمَنْ فَرَضَ فِيهِنَّ الْحَجَّ فَلَا رَفَثَ وَلَا فُسُوقَ وَلَا جِدَالَ فِي الْحَجِّ", arti: "Barang siapa mengerjakan (ibadah) haji dalam (bulan-bulan) itu, maka janganlah ia berkata kotor (rafats), berbuat maksiat, dan berbantah-bantahan selama (mengerjakan) haji.", sumber: "QS. Al-Baqarah: 197" },
        { t: "tabel", head: ["Larangan", "Berlaku untuk", "Keterangan"], rows: [
          ["Memakai pakaian berjahit (yang membentuk badan) dan penutup kepala", "Laki-laki", "Kain ihram tanpa jahitan, kepala terbuka."],
          ["Menutup wajah (cadar) dan memakai sarung tangan", "Perempuan", "Wajah dan telapak tangan terbuka."],
          ["Memakai wewangian di badan dan pakaian", "Laki-laki dan perempuan", "Termasuk sabun dan minyak rambut yang harum."],
          ["Memotong atau mencabut rambut dan kuku", "Laki-laki dan perempuan", "Kecuali saat tahallul."],
          ["Berburu atau membunuh hewan buruan darat, atau memotong pohon di tanah haram", "Laki-laki dan perempuan", "Diganti hewan sepadan atau sedekah."],
          ["Akad nikah dan meminang", "Laki-laki dan perempuan", "Akad nikah tidak sah selama ihram."],
          ["Jima' dan mubasyarah (bercumbu)", "Laki-laki dan perempuan", "Jima' sebelum tahallul awal membatalkan haji."]
        ] },
        { t: "h", x: "Macam-macam denda" },
        { t: "ul", items: [
          "**Dam:** menyembelih kambing, untuk meninggalkan wajib haji (mabit, jumrah, ihram dari miqat) dan untuk haji tamattu' dan qiran.",
          "**Fidyah:** untuk pelanggaran seperti memakai pakaian terlarang, wewangian, atau memotong rambut karena uzur. Pilihannya: menyembelih kambing, atau bersedekah makanan kepada enam orang miskin (masing-masing setengah sha'), atau berpuasa tiga hari.",
          "**Hewan buruan:** diganti hewan sepadan atau sedekah makanan atau puasa.",
          "**Jima' sebelum tahallul awal:** membatalkan haji, wajib menyembelih unta atau sapi dan melanjutkan serta mengulang haji pada tahun berikutnya."
        ] },
        { t: "p", x: "Rincian denda sangat bergantung pada keadaan. Bila terjadi pelanggaran, segera tanyakan kepada pembimbing ibadah dan petugas haji resmi." },
        { t: "box", judul: "Yang perlu diingat", items: ["Larangan ihram: pakaian berjahit dan penutup kepala (laki-laki), cadar dan sarung tangan (perempuan), wewangian, memotong rambut dan kuku, berburu, akad nikah, dan jima'.", "Pelanggaran diganti dam atau fidyah."] }
      ]
    }
  ]
};
