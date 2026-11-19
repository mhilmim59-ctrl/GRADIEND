/* Bab 2 — Thaharah (Bersuci)
   Jenis blok isi: p, h, ol, ul, tabel, dalil, box, catatan, read, link */
window.GRADIEND_FIKIH.thaharah = {
  rujukan: ["Safinatun Najah (Syekh Salim bin Sumair Al-Hadhrami)", "Fathul Qarib (Ibnu Qasim Al-Ghazi)", "Al-Fiqh al-Manhaji (Mustafa Al-Khin dkk.)"],
  topik: [
    /* ------------------------------------------------------------ AIR */
    {
      id: "air",
      judul: "Macam-macam Air",
      intinya: "Air untuk bersuci terbagi empat macam, dan hanya air suci yang menyucikan yang sah dipakai untuk wudhu dan mandi.",
      isi: [
        { t: "p", x: "**Air mutlak** adalah air yang masih disebut \"air\" tanpa tambahan nama lain, seperti air hujan, sungai, laut, sumur, mata air, salju yang mencair, dan embun. Air jenis inilah yang sah untuk bersuci." },
        { t: "dalil", ar: "وَيُنَزِّلُ عَلَيْكُمْ مِنَ السَّمَاءِ مَاءً لِيُطَهِّرَكُمْ بِهِ", arti: "Dan Dia menurunkan air (hujan) dari langit kepadamu untuk menyucikan kamu dengan (hujan) itu.", sumber: "QS. Al-Anfal: 11" },
        { t: "dalil", ar: "هُوَ الطَّهُورُ مَاؤُهُ الْحِلُّ مَيْتَتُهُ", arti: "(Laut) itu suci airnya dan halal bangkainya.", sumber: "HR. Abu Dawud dan At-Tirmidzi" },
        { t: "tabel", head: ["Macam air", "Contoh dan keterangan", "Sah untuk bersuci?"], rows: [
          ["1. Suci dan menyucikan", "Air hujan, sungai, laut, sumur, mata air, salju, dan embun.", "Sah"],
          ["2. Suci dan menyucikan, tetapi makruh dipakai", "Air yang terjemur terik matahari dalam wadah logam (selain emas dan perak) di daerah yang sangat panas; air yang terlalu panas atau terlalu dingin sehingga menghalangi kesempurnaan bersuci.", "Sah, tetapi makruh dipakai pada badan"],
          ["3. Suci tetapi tidak menyucikan", "Air musta'mal (bekas dipakai bersuci wajib, volumenya kurang dari dua qullah) dan air yang tercampur benda suci sehingga tidak lagi disebut air mutlak, misalnya air teh, kopi, atau sirup.", "Tidak sah (boleh diminum atau dipakai selain bersuci)"],
          ["4. Air mutanajjis", "Air kurang dari dua qullah yang kemasukan najis (walau tidak berubah), atau air dua qullah atau lebih yang berubah rasa, warna, atau baunya karena najis.", "Tidak sah"]
        ] },
        { t: "h", x: "Batas dua qullah" },
        { t: "dalil", ar: "إِذَا كَانَ الْمَاءُ قُلَّتَيْنِ لَمْ يَحْمِلِ الْخَبَثَ", arti: "Apabila air telah mencapai dua qullah, ia tidak membawa kotoran (tidak menjadi najis).", sumber: "HR. Abu Dawud, At-Tirmidzi, dan Ibnu Majah" },
        { t: "p", x: "Dua qullah kira-kira **216 liter**, atau setara bak berukuran sekitar 60 × 60 × 60 cm. Air yang mencapai dua qullah tidak menjadi najis karena kemasukan najis selama rasa, warna, dan baunya tidak berubah." },
        { t: "catatan", x: "Sebagian ulama (misalnya mazhab Maliki) berpendapat air sedikit pun tidak menjadi najis selama sifatnya tidak berubah. Mazhab Syafi'i memakai batas dua qullah berdasarkan hadis di atas." },
        { t: "box", judul: "Yang perlu diingat", items: ["Air ada 4 macam: suci menyucikan, suci menyucikan tetapi makruh, suci tidak menyucikan, dan mutanajjis.", "Dua qullah kira-kira 216 liter."] }
      ]
    },
    /* ---------------------------------------------------------- HADAS */
    {
      id: "hadas",
      judul: "Hadas",
      intinya: "Hadas adalah keadaan tidak suci pada badan yang menghalangi sahnya ibadah tertentu. Hadas kecil diangkat dengan wudhu, hadas besar dengan mandi.",
      isi: [
        { t: "p", x: "Hadas berbeda dengan najis. **Hadas** adalah keadaan pada tubuh yang tidak kasat mata, sedangkan **najis** adalah benda kotor yang bisa dilihat atau dicium. Orang yang berhadas tidak sah salat sampai ia bersuci." },
        { t: "tabel", head: ["Jenis hadas", "Penyebab", "Cara mengangkat"], rows: [
          ["Hadas kecil", "Keluar sesuatu dari qubul atau dubur, tidur nyenyak tanpa duduk mantap, hilang akal, bersentuhan kulit dengan lawan jenis yang bukan mahram, menyentuh kemaluan.", "Wudhu (atau tayamum bila ada uzur)"],
          ["Hadas besar", "Jima' (masuknya kepala kemaluan ke dalam kemaluan), keluar mani, haid, nifas, dan melahirkan.", "Mandi wajib (atau tayamum bila ada uzur)"]
        ] },
        { t: "p", x: "Kematian juga mewajibkan mandi, tetapi kewajibannya ada pada orang yang masih hidup untuk memandikan jenazah (fardu kifayah). Hal ini dibahas pada bab Mengurus Jenazah." },
        { t: "dalil", ar: "لَا يَقْبَلُ اللهُ صَلَاةَ أَحَدِكُمْ إِذَا أَحْدَثَ حَتَّى يَتَوَضَّأَ", arti: "Allah tidak menerima salat salah seorang di antara kalian apabila ia berhadas, sampai ia berwudhu.", sumber: "HR. Bukhari dan Muslim" },
        { t: "box", judul: "Yang perlu diingat", items: ["Hadas kecil diangkat dengan wudhu; hadas besar dengan mandi.", "Penyebab hadas besar: jima', keluar mani, haid, nifas, dan melahirkan."] }
      ]
    },
    /* ---------------------------------------------------------- NAJIS */
    {
      id: "najis",
      judul: "Macam-macam Najis",
      intinya: "Najis dibagi tiga tingkat: berat (mughallazhah), ringan (mukhaffafah), dan sedang (mutawassithah).",
      isi: [
        { t: "p", x: "**Najis** adalah benda kotor menurut syariat yang menghalangi sahnya salat bila mengenai badan, pakaian, atau tempat salat. Najis dibagi dua menurut wujudnya: **najis 'ainiyyah** (berwujud, tampak warna, bau, atau rasanya) dan **najis hukmiyyah** (tidak tampak lagi, misalnya bekas kencing yang sudah kering)." },
        { t: "tabel", head: ["Tingkat", "Najisnya"], rows: [
          ["Mughallazhah (berat)", "Anjing dan babi, serta keturunan dan turunan dari keduanya."],
          ["Mukhaffafah (ringan)", "Air kencing bayi laki-laki yang berusia kurang dari dua tahun dan hanya meminum ASI (belum mengonsumsi makanan atau minuman lain sebagai asupan)."],
          ["Mutawassithah (sedang)", "Najis selain dua jenis di atas."]
        ] },
        { t: "h", x: "Daftar najis mutawassithah" },
        { t: "ol", items: [
          "Kencing.",
          "Tinja (kotoran).",
          "Madzi: cairan bening dan lengket yang keluar karena syahwat ringan tanpa memancar.",
          "Wadi: cairan putih keruh dan kental yang keluar setelah kencing atau karena kelelahan.",
          "Darah.",
          "Nanah.",
          "Muntah.",
          "Khamr dan cairan memabukkan lainnya.",
          "Bangkai, kecuali bangkai manusia, ikan, dan belalang.",
          "Susu hewan yang tidak halal dimakan (selain ASI manusia).",
          "Anggota tubuh hewan yang terpisah ketika hewan itu masih hidup."
        ] },
        { t: "dalil", arti: "Dihalalkan bagi kita dua bangkai dan dua darah: bangkai ikan dan belalang, serta hati dan limpa.", sumber: "HR. Ahmad dan Ibnu Majah" },
        { t: "h", x: "Yang suci" },
        { t: "p", x: "Mani manusia suci menurut mazhab Syafi'i (walau mewajibkan mandi), demikian pula mani hewan selain anjing dan babi. Bangkai manusia, ikan, dan belalang suci. Bulu dan rambut hewan yang halal dimakan juga suci." },
        { t: "h", x: "Bedakan mani, madzi, dan wadi" },
        { t: "tabel", head: ["Cairan", "Ciri", "Hukum"], rows: [
          ["Mani", "Keluar memancar disertai rasa nikmat, lalu syahwat mereda; baunya seperti adonan atau putih telur.", "Suci, mewajibkan mandi."],
          ["Madzi", "Bening, lengket, keluar karena syahwat ringan tanpa memancar dan tanpa lemas.", "Najis, tidak mewajibkan mandi, membatalkan wudhu."],
          ["Wadi", "Putih keruh dan kental, keluar setelah kencing atau karena kelelahan.", "Najis, tidak mewajibkan mandi, membatalkan wudhu."]
        ] },
        { t: "box", judul: "Yang perlu diingat", items: ["Tiga tingkat najis: mughallazhah, mukhaffafah, mutawassithah.", "Mughallazhah: anjing dan babi.", "Mukhaffafah: kencing bayi laki-laki di bawah 2 tahun yang hanya minum ASI."] }
      ]
    },
    /* ------------------------------------------------- CARA MENYUCIKAN NAJIS */
    {
      id: "cara-membasuh-najis",
      judul: "Cara Membasuh Najis",
      intinya: "Langkah pertama selalu menghilangkan wujud najisnya, lalu dibasuh menurut tingkat najisnya.",
      isi: [
        { t: "p", x: "Sebelum membasuh, hilangkan dahulu zat najisnya sampai tidak tersisa rasa, warna, dan baunya. Warna atau bau yang sangat sulit hilang setelah berusaha dimaafkan. Setelah itu, caranya mengikuti jenis najis:" },
        { t: "tabel", head: ["Jenis najis", "Cara menyucikan"], rows: [
          ["Mutawassithah 'ainiyyah (tampak wujudnya)", "Hilangkan zatnya, lalu basuh dengan air mutlak sampai hilang rasa, warna, dan baunya."],
          ["Hukmiyyah (tidak tampak)", "Cukup mengalirkan air di atas tempat najis satu kali."],
          ["Mughallazhah (anjing dan babi)", "Basuh tujuh kali, salah satunya dicampur dengan tanah (debu)."],
          ["Mukhaffafah (kencing bayi laki-laki)", "Percikkan air ke seluruh tempat yang terkena sampai merata dan basah, dengan air lebih banyak daripada kencingnya, setelah zat najisnya hilang. Tidak harus dikucek atau diperas."]
        ] },
        { t: "dalil", ar: "طَهُورُ إِنَاءِ أَحَدِكُمْ إِذَا وَلَغَ فِيهِ الْكَلْبُ أَنْ يَغْسِلَهُ سَبْعَ مَرَّاتٍ أُولَاهُنَّ بِالتُّرَابِ", arti: "Cara menyucikan bejana salah seorang di antara kalian bila dijilat anjing adalah dengan mencucinya tujuh kali, yang pertama dengan tanah.", sumber: "HR. Muslim" },
        { t: "dalil", ar: "يُغْسَلُ مِنْ بَوْلِ الْجَارِيَةِ وَيُرَشُّ مِنْ بَوْلِ الْغُلَامِ", arti: "Kencing bayi perempuan dibasuh, sedangkan kencing bayi laki-laki dipercikkan.", sumber: "HR. Abu Dawud, At-Tirmidzi, dan Ibnu Majah" },
        { t: "h", x: "Contoh kasus" },
        { t: "ul", items: [
          "Lantai terkena kencing: siram dengan air sampai zat, warna, dan baunya hilang.",
          "Pakaian terkena darah: kucek dan bilas dengan air sampai warnanya hilang; bila bekasnya sedikit dan tidak hilang setelah berusaha, dimaafkan.",
          "Pakaian terkena kencing bayi laki-laki (di bawah 2 tahun, hanya ASI): percikkan air sampai seluruh bagian basah.",
          "Terkena jilatan anjing: basuh tujuh kali, satu di antaranya memakai tanah yang dicampur air."
        ] },
        { t: "p", x: "Kulit bangkai (selain anjing dan babi) menjadi suci dengan disamak. Khamr yang berubah sendiri menjadi cuka juga suci, selama tidak ada benda lain yang dimasukkan." },
        { t: "box", judul: "Yang perlu diingat", items: ["Mughallazhah: 7 kali, satu dengan tanah.", "Mukhaffafah: dipercikkan sampai merata.", "Mutawassithah: dibasuh sampai hilang zat, warna, bau, dan rasanya."] }
      ]
    },
    /* --------------------------------------------------------------- WUDHU */
    {
      id: "wudhu",
      judul: "Wudhu: Fardu dan Syarat",
      intinya: "Fardu (rukun) wudhu ada enam. Wudhu sah bila fardunya lengkap dan syarat-syaratnya terpenuhi.",
      isi: [
        { t: "p", x: "**Wudhu** adalah bersuci dari hadas kecil dengan membasuh dan mengusap anggota tubuh tertentu menggunakan air suci yang menyucikan. Allah berfirman:" },
        { t: "dalil", ar: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ وَأَيْدِيَكُمْ إِلَى الْمَرَافِقِ وَامْسَحُوا بِرُءُوسِكُمْ وَأَرْجُلَكُمْ إِلَى الْكَعْبَيْنِ", arti: "Wahai orang-orang yang beriman! Apabila kamu hendak melaksanakan salat, maka basuhlah wajahmu dan tanganmu sampai ke siku, dan sapulah kepalamu, dan (basuh) kedua kakimu sampai ke kedua mata kaki.", sumber: "QS. Al-Ma'idah: 6" },
        { t: "h", x: "Fardu (rukun) wudhu" },
        { t: "ol", items: [
          "**Niat** di dalam hati, dilakukan bersamaan dengan awal membasuh wajah.",
          "**Membasuh seluruh wajah**: dari tempat tumbuhnya rambut kepala bagian atas sampai bawah dagu, dan dari telinga kanan sampai telinga kiri.",
          "**Membasuh kedua tangan sampai siku**, termasuk sikunya.",
          "**Mengusap sebagian kepala**: cukup sebagian saja, walau sedikit.",
          "**Membasuh kedua kaki sampai mata kaki**, termasuk mata kakinya.",
          "**Tertib**, yaitu berurutan sesuai nomor di atas."
        ] },
        { t: "h", x: "Syarat wudhu" },
        { t: "ol", items: [
          "Beragama Islam.",
          "Tamyiz (mampu membedakan baik dan buruk).",
          "Suci dari haid dan nifas.",
          "Tidak ada penghalang yang menghalangi sampainya air ke kulit, misalnya cat atau lilin.",
          "Tidak ada sesuatu pada anggota wudhu yang mengubah sifat air.",
          "Mengetahui bahwa wudhu itu fardu.",
          "Tidak meyakini salah satu fardu wudhu sebagai sunnah.",
          "Memakai air suci yang menyucikan.",
          "Telah masuk waktu salat (khusus bagi orang yang hadasnya terus-menerus, seperti penderita beser).",
          "Berkesinambungan (muwalat), khusus bagi orang yang hadasnya terus-menerus."
        ] },
        { t: "p", x: "Sunnah-sunnah wudhu (seperti berkumur, menghirup air ke hidung, dan mengusap telinga) serta doa setelah wudhu dijelaskan pada topik tata cara wudhu di bawah." },
        { t: "link", href: "fikih/thaharah.html#praktik-wudhu", x: "Lihat tata cara wudhu langkah demi langkah" },
        { t: "catatan", x: "Mazhab Syafi'i mewajibkan niat dan tertib dalam wudhu, serta cukup mengusap sebagian kepala. Mazhab Hanafi tidak mewajibkan niat dan tertib, sedangkan mazhab Maliki dan Hanbali mewajibkan mengusap seluruh atau sebagian besar kepala." },
        { t: "box", judul: "Yang perlu diingat", items: ["Fardu wudhu 6: niat, basuh wajah, basuh tangan sampai siku, usap sebagian kepala, basuh kaki sampai mata kaki, tertib."] }
      ]
    },
    /* ------------------------------------------------ PRAKTIK WUDHU */
    {
      id: "praktik-wudhu",
      judul: "Tata Cara Wudhu Langkah demi Langkah",
      intinya: "Urutan wudhu dari niat sampai doa, beserta sunnah-sunnahnya.",
      isi: [
        { t: "p", x: "Rasulullah SAW bersabda bahwa salat tidak diterima tanpa bersuci (HR. Muslim). Berikut urutan wudhu. Label **Rukun** berarti wajib agar wudhu sah, sedangkan **Sunnah** menyempurnakan wudhu." },
        { t: "ib", k: "wudhu" }
      ]
    },
    /* ------------------------------------------------------ PEMBATAL WUDHU */
    {
      id: "pembatal-wudhu",
      judul: "Perkara yang Membatalkan Wudhu",
      intinya: "Wudhu batal oleh empat perkara: keluar sesuatu dari qubul atau dubur, hilang akal, bersentuhan kulit dengan lawan jenis bukan mahram, dan menyentuh kemaluan.",
      isi: [
        { t: "ol", items: [
          "**Keluarnya sesuatu dari qubul atau dubur**, berupa apa saja (kencing, tinja, kentut, madzi, wadi), kecuali mani (mani mewajibkan mandi).",
          "**Hilang akal**: tidur nyenyak dengan posisi pantat tidak menempel mantap di lantai, pingsan, mabuk, atau gila. Tidur sambil duduk dengan pantat menempel mantap tidak membatalkan.",
          "**Bersentuhan kulit laki-laki dan perempuan yang bukan mahram** tanpa penghalang, yang keduanya sudah sampai usia menimbulkan syahwat.",
          "**Menyentuh kemaluan manusia** (qubul atau dubur, milik sendiri atau orang lain) dengan telapak tangan atau bagian dalam jari-jari, tanpa penghalang."
        ] },
        { t: "dalil", ar: "لَا يَنْصَرِفْ حَتَّى يَسْمَعَ صَوْتًا أَوْ يَجِدَ رِيحًا", arti: "(Janganlah ia membatalkan salatnya) sampai ia mendengar suara atau mencium bau (yakin telah berhadas).", sumber: "HR. Bukhari dan Muslim" },
        { t: "p", x: "Hadis di atas mengajarkan kaidah: **keyakinan tidak hilang oleh keraguan**. Bila seseorang yakin sudah berwudhu lalu ragu apakah ia batal, ia tetap dianggap suci. Sebaliknya, bila yakin sudah batal lalu ragu apakah sudah berwudhu lagi, ia dianggap belum berwudhu." },
        { t: "h", x: "Yang tidak membatalkan wudhu menurut mazhab Syafi'i" },
        { t: "ul", items: ["Keluar darah dari luka, mimisan, atau berbekam.", "Muntah.", "Makan daging unta.", "Menyentuh mahram, anak kecil yang belum menimbulkan syahwat, atau menyentuh rambut, kuku, dan gigi lawan jenis.", "Tertawa di luar salat."] },
        { t: "catatan", x: "Beberapa hal diperselisihkan ulama. Menyentuh lawan jenis tidak membatalkan wudhu menurut mazhab Hanafi, dan menurut Maliki dan Hanbali hanya batal bila disertai syahwat. Makan daging unta membatalkan wudhu menurut mazhab Hanbali. Dalam keadaan sulit, misalnya di tengah kerumunan saat tawaf, sebagian ulama memberi keringanan; tanyakan kepada guru." },
        { t: "box", judul: "Yang perlu diingat", items: ["Pembatal wudhu 4: keluar dari qubul atau dubur, hilang akal, bersentuhan kulit lawan jenis bukan mahram, menyentuh kemaluan."] }
      ]
    },
    /* ----------------------------------------------- LARANGAN HADAS KECIL */
    {
      id: "larangan-hadas-kecil",
      judul: "Larangan bagi Orang yang Batal Wudhu",
      intinya: "Orang yang berhadas kecil dilarang salat, tawaf, menyentuh mushaf, dan membawa mushaf.",
      isi: [
        { t: "ol", items: [
          "**Salat** (termasuk sujud tilawah dan sujud syukur).",
          "**Tawaf** di Baitullah.",
          "**Menyentuh mushaf** Al-Qur'an.",
          "**Membawa mushaf** Al-Qur'an."
        ] },
        { t: "dalil", ar: "لَا يَمَسُّهُ إِلَّا الْمُطَهَّرُونَ", arti: "Tidak ada yang menyentuhnya selain hamba-hamba yang disucikan.", sumber: "QS. Al-Waqi'ah: 79" },
        { t: "h", x: "Yang diperbolehkan" },
        { t: "ul", items: ["Membaca Al-Qur'an dengan hafalan tanpa menyentuh mushaf.", "Menyentuh buku terjemahan atau tafsir yang tulisan tafsirnya lebih banyak daripada ayat Al-Qur'annya, menurut sebagian ulama Syafi'iyah.", "Dzikir, berdoa, dan membaca buku agama biasa."] },
        { t: "catatan", x: "Membaca Al-Qur'an lewat layar gawai (HP atau tablet): banyak ulama kontemporer membolehkan menyentuh layarnya tanpa wudhu karena layar bukan mushaf, sedangkan sebagian lain lebih berhati-hati. Yang paling aman dan paling beradab tetap berwudhu terlebih dahulu." },
        { t: "box", judul: "Yang perlu diingat", items: ["Larangan bagi yang berhadas kecil: salat, tawaf, menyentuh mushaf, membawa mushaf."] }
      ]
    },
    /* ---------------------------------------------------------- MANDI WAJIB */
    {
      id: "mandi-wajib",
      judul: "Mandi Wajib",
      intinya: "Mandi wajib diwajibkan oleh enam sebab. Fardunya dua: niat dan meratakan air ke seluruh tubuh.",
      isi: [
        { t: "h", x: "Sebab-sebab mandi wajib" },
        { t: "ol", items: [
          "Jima', yaitu masuknya kepala kemaluan ke dalam kemaluan (walau tidak keluar mani).",
          "Keluar mani.",
          "Haid.",
          "Nifas.",
          "Melahirkan (wiladah).",
          "Meninggal dunia (fardu kifayah bagi yang hidup untuk memandikannya)."
        ] },
        { t: "h", x: "Fardu mandi wajib" },
        { t: "ol", items: [
          "**Niat** menghilangkan hadas besar, dilakukan saat air mulai mengenai bagian tubuh yang pertama.",
          "**Meratakan air** ke seluruh rambut dan kulit, termasuk bagian yang tersembunyi seperti sela jari, pusar, dan lipatan tubuh."
        ] },
        { t: "read", label: "Niat mandi wajib (junub)", ar: "نَوَيْتُ الْغُسْلَ لِرَفْعِ الْحَدَثِ الْأَكْبَرِ فَرْضًا لِلَّهِ تَعَالَى", latin: "Nawaitul gusla liraf'il ḥadatsil akbari fardhan lillāhi ta'ālā.", arti: "Aku berniat mandi untuk menghilangkan hadas besar, fardu karena Allah Ta'ala." },
        { t: "read", label: "Niat mandi setelah haid", ar: "نَوَيْتُ الْغُسْلَ لِرَفْعِ حَدَثِ الْحَيْضِ فَرْضًا لِلَّهِ تَعَالَى", latin: "Nawaitul gusla liraf'i ḥadatsil-ḥaiḍi fardhan lillāhi ta'ālā.", arti: "Aku berniat mandi untuk menghilangkan hadas haid, fardu karena Allah Ta'ala." },
        { t: "read", label: "Niat mandi setelah nifas", ar: "نَوَيْتُ الْغُسْلَ لِرَفْعِ حَدَثِ النِّفَاسِ فَرْضًا لِلَّهِ تَعَالَى", latin: "Nawaitul gusla liraf'i ḥadatsin-nifāsi fardhan lillāhi ta'ālā.", arti: "Aku berniat mandi untuk menghilangkan hadas nifas, fardu karena Allah Ta'ala." },
        { t: "h", x: "Cara mandi yang sempurna (sunnah)" },
        { t: "ol", items: [
          "Membaca basmalah dan berniat.",
          "Mencuci kedua telapak tangan, lalu membersihkan kemaluan dan kotoran yang menempel.",
          "Berwudhu seperti wudhu untuk salat.",
          "Menyiramkan air ke kepala tiga kali sambil menyela-nyela pangkal rambut.",
          "Menyiram seluruh tubuh, dimulai dari sisi kanan, lalu sisi kiri, dan menggosok bagian lipatan."
        ] },
        { t: "p", x: "Perempuan tidak wajib mengurai kepangan rambutnya selama air dapat sampai ke pangkal rambut. Rasulullah SAW mengajarkan hal ini kepada Ummu Salamah RA (HR. Muslim)." },
        { t: "box", judul: "Yang perlu diingat", items: ["Sebab mandi wajib 6: jima', keluar mani, haid, nifas, melahirkan, meninggal.", "Fardu mandi 2: niat dan meratakan air ke seluruh tubuh."] }
      ]
    },
    /* ---------------------------------------------------------- JUNUB */
    {
      id: "larangan-junub",
      judul: "Larangan bagi Orang yang Junub",
      intinya: "Orang yang junub dilarang salat, tawaf, menyentuh dan membawa mushaf, berdiam di masjid, dan membaca Al-Qur'an.",
      isi: [
        { t: "p", x: "**Junub** adalah keadaan seseorang yang berhadas besar karena jima' atau keluar mani. Selama belum mandi, ia dilarang:" },
        { t: "ol", items: [
          "Salat.",
          "Tawaf.",
          "Menyentuh mushaf Al-Qur'an.",
          "Membawa mushaf Al-Qur'an.",
          "Berdiam (menetap) di dalam masjid. Lewat sekadar melintas diperbolehkan.",
          "Membaca Al-Qur'an dengan niat membaca Al-Qur'an."
        ] },
        { t: "dalil", ar: "وَلَا جُنُبًا إِلَّا عَابِرِي سَبِيلٍ حَتَّى تَغْتَسِلُوا", arti: "(Jangan pula menghampiri masjid) ketika kamu dalam keadaan junub, kecuali sekadar melewati jalan saja, sebelum kamu mandi.", sumber: "QS. An-Nisa': 43" },
        { t: "h", x: "Yang diperbolehkan" },
        { t: "ul", items: ["Makan, minum, tidur, dan beraktivitas biasa. Disunnahkan berwudhu dahulu sebelum tidur atau makan.", "Membaca dzikir dan doa, termasuk kalimat seperti basmalah atau hamdalah dengan niat dzikir.", "Mendengarkan bacaan Al-Qur'an."] },
        { t: "box", judul: "Yang perlu diingat", items: ["Larangan bagi yang junub: salat, tawaf, menyentuh mushaf, membawa mushaf, berdiam di masjid, membaca Al-Qur'an."] }
      ]
    },
    /* ----------------------------------------------------- HAID NIFAS */
    {
      id: "haid-nifas",
      judul: "Haid, Nifas, dan Istihadhah",
      intinya: "Haid paling sedikit sehari semalam dan paling lama 15 hari; nifas paling lama 60 hari.",
      isi: [
        { t: "p", x: "**Haid** adalah darah yang keluar dari rahim wanita yang sehat, pada waktu tertentu, bukan karena melahirkan atau penyakit. **Nifas** adalah darah yang keluar setelah melahirkan (setelah kosongnya rahim) dan sebelum 15 hari dari persalinan. Allah berfirman:" },
        { t: "dalil", ar: "وَيَسْأَلُونَكَ عَنِ الْمَحِيضِ قُلْ هُوَ أَذًى فَاعْتَزِلُوا النِّسَاءَ فِي الْمَحِيضِ وَلَا تَقْرَبُوهُنَّ حَتَّى يَطْهُرْنَ", arti: "Dan mereka bertanya kepadamu (Muhammad) tentang haid. Katakanlah, \"Itu adalah sesuatu yang kotor.\" Maka jauhilah istri (dari melakukan hubungan intim) pada waktu haid; dan jangan kamu dekati mereka sebelum mereka suci.", sumber: "QS. Al-Baqarah: 222" },
        { t: "tabel", head: ["Ketentuan", "Haid", "Nifas"], rows: [
          ["Usia paling awal", "Genap 9 tahun hijriah", "Setelah melahirkan"],
          ["Paling sedikit", "Sehari semalam (24 jam, boleh terputus-putus dalam rentang 15 hari)", "Sebentar (satu tetes)"],
          ["Umumnya", "6 atau 7 hari", "40 hari"],
          ["Paling lama", "15 hari 15 malam", "60 hari"],
          ["Masa suci paling sedikit antara dua haid", "15 hari", "-"]
        ] },
        { t: "h", x: "Istihadhah" },
        { t: "p", x: "**Istihadhah** adalah darah penyakit, yaitu darah yang keluar di luar ketentuan haid dan nifas (misalnya haid yang lebih dari 15 hari atau kurang dari sehari semalam). Wanita yang istihadhah tetap wajib salat dan puasa. Ia membersihkan dan membalut tempat keluarnya darah, berwudhu setiap akan salat fardu setelah masuk waktu, dan segera salat setelah berwudhu (HR. Bukhari dari Fatimah binti Abi Hubaisy)." },
        { t: "p", x: "Wanita yang mengalami keadaan yang rumit atau haidnya tidak teratur sebaiknya bertanya kepada ustazah atau guru agama, karena masalah ini memiliki banyak rincian." },
        { t: "box", judul: "Yang perlu diingat", items: ["Haid: minimal sehari semalam, umumnya 6–7 hari, maksimal 15 hari.", "Nifas: umumnya 40 hari, maksimal 60 hari.", "Masa suci minimal antara dua haid: 15 hari."] }
      ]
    },
    /* ----------------------------------------------- LARANGAN HAID */
    {
      id: "larangan-haid",
      judul: "Larangan bagi Wanita Haid",
      intinya: "Wanita haid dan nifas dilarang salat, puasa, tawaf, menyentuh mushaf, berdiam di masjid, dan berhubungan suami istri.",
      isi: [
        { t: "ol", items: [
          "Salat (tidak wajib mengqadhanya).",
          "Puasa (wajib mengqadhanya setelah suci).",
          "Membaca Al-Qur'an dengan niat membaca Al-Qur'an.",
          "Menyentuh mushaf.",
          "Membawa mushaf.",
          "Berdiam di masjid (melintas diperbolehkan bila aman dari menetesnya darah).",
          "Tawaf.",
          "Jima' (hubungan suami istri).",
          "Istimta' (bercumbu) pada bagian tubuh antara pusar dan lutut.",
          "Talak (suami haram menceraikan istri yang sedang haid)."
        ] },
        { t: "dalil", ar: "كَانَ يُصِيبُنَا ذَلِكَ فَنُؤْمَرُ بِقَضَاءِ الصَّوْمِ وَلَا نُؤْمَرُ بِقَضَاءِ الصَّلَاةِ", arti: "Kami dahulu mengalami haid, lalu kami diperintahkan mengqadha puasa dan tidak diperintahkan mengqadha salat.", sumber: "HR. Muslim, dari Aisyah RA" },
        { t: "p", x: "Setelah suci dan mandi, semua larangan itu berakhir. Selama haid, wanita tetap boleh berdzikir, berdoa, mendengarkan Al-Qur'an, dan beraktivitas biasa. Ketika berhaji, ia melakukan semua amalan kecuali tawaf (HR. Bukhari dan Muslim)." },
        { t: "catatan", x: "Tentang membaca Al-Qur'an saat haid, Imam Malik dan satu pendapat lama (qaul qadim) Imam Syafi'i membolehkannya, terutama bagi pelajar atau penghafal yang khawatir lupa. Pendapat yang kuat dalam mazhab Syafi'i melarangnya bila dengan niat membaca Al-Qur'an." },
        { t: "box", judul: "Yang perlu diingat", items: ["Salat tidak diqadha, puasa wajib diqadha.", "Larangan utama: salat, puasa, tawaf, menyentuh mushaf, berdiam di masjid, jima'."] }
      ]
    },
    /* ------------------------------------------------------- TAYAMUM */
    {
      id: "tayamum",
      judul: "Tayamum: Sebab, Syarat, Rukun, dan Pembatal",
      intinya: "Tayamum adalah pengganti wudhu atau mandi dengan debu yang suci ketika air tidak ada atau tidak bisa dipakai.",
      isi: [
        { t: "p", x: "**Tayamum** adalah menyampaikan debu suci ke wajah dan kedua tangan dengan cara tertentu, sebagai pengganti wudhu atau mandi wajib. Allah berfirman:" },
        { t: "dalil", ar: "فَلَمْ تَجِدُوا مَاءً فَتَيَمَّمُوا صَعِيدًا طَيِّبًا فَامْسَحُوا بِوُجُوهِكُمْ وَأَيْدِيكُمْ", arti: "Lalu kamu tidak memperoleh air, maka bertayamumlah kamu dengan tanah yang baik (suci); usaplah wajahmu dan tanganmu dengan (tanah) itu.", sumber: "QS. An-Nisa': 43 dan QS. Al-Ma'idah: 6" },
        { t: "h", x: "Sebab tayamum" },
        { t: "ol", items: [
          "**Tidak ada air** setelah berusaha mencarinya, termasuk meminta kepada orang di sekitar.",
          "**Sakit** atau khawatir timbul bahaya bila menggunakan air.",
          "**Air dibutuhkan untuk minum**, baik untuk diri sendiri maupun hewan yang dihormati."
        ] },
        { t: "h", x: "Syarat tayamum" },
        { t: "ol", items: [
          "Memakai tanah atau debu.",
          "Debunya suci.",
          "Debunya belum pernah dipakai (bukan musta'mal).",
          "Debunya tidak tercampur tepung atau sejenisnya.",
          "Menyengaja memindahkan debu ke anggota tayamum.",
          "Mengusap wajah dan kedua tangan dengan dua kali tepukan.",
          "Menghilangkan najis di badan terlebih dahulu.",
          "Berijtihad menentukan arah kiblat sebelum tayamum.",
          "Dilakukan setelah masuk waktu salat.",
          "Satu tayamum untuk satu salat fardu (boleh ditambah salat sunnah)."
        ] },
        { t: "h", x: "Rukun tayamum" },
        { t: "ol", items: ["Memindahkan debu ke telapak tangan.", "Niat.", "Mengusap wajah.", "Mengusap kedua tangan sampai siku.", "Tertib antara dua usapan itu."] },
        { t: "h", x: "Pembatal tayamum" },
        { t: "ol", items: ["Semua yang membatalkan wudhu.", "Melihat air (atau menyangka ada air) bagi orang yang bertayamum karena tidak ada air, sebelum ia memulai salat.", "Murtad (keluar dari Islam)."] },
        { t: "link", href: "fikih/thaharah.html#praktik-tayamum", x: "Lihat niat dan langkah tayamum" },
        { t: "catatan", x: "Sebagian ulama membolehkan mengusap tangan cukup sampai pergelangan saja dengan satu tepukan berdasarkan hadis Ammar bin Yasir. Mazhab Syafi'i mewajibkan dua tepukan dan mengusap sampai siku." },
        { t: "box", judul: "Yang perlu diingat", items: ["Rukun tayamum 5: memindahkan debu, niat, usap wajah, usap tangan sampai siku, tertib.", "Pembatal tayamum 3: pembatal wudhu, melihat air, murtad."] }
      ]
    }    ,
    {
      id: "praktik-tayamum",
      judul: "Tata Cara Tayamum Langkah demi Langkah",
      intinya: "Niat dan urutan tayamum ketika air tidak ada atau tidak bisa dipakai.",
      isi: [
        { t: "ib", k: "tayammum" }
      ]
    }
  ]
};
