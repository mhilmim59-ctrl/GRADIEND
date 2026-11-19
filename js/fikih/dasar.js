/* Bab 1 — Dasar Islam
   Jenis blok isi: p, h, ol, ul, tabel, dalil, box, catatan, read, link
   Topik berstatus draf: tambahkan  draf: true  agar tidak terbit.
   Gunakan **teks** untuk menebalkan. */
window.GRADIEND_FIKIH.dasar = {
  rujukan: ["Safinatun Najah (Syekh Salim bin Sumair Al-Hadhrami)", "Fathul Qarib (Ibnu Qasim Al-Ghazi)", "Matan Arba'in An-Nawawi (hadis Jibril dan hadis Ibnu Umar)"],
  topik: [
    {
      id: "rukun-islam",
      judul: "Rukun Islam",
      intinya: "Rukun Islam ada lima: syahadat, salat, zakat, puasa Ramadan, dan haji bagi yang mampu.",
      isi: [
        { t: "p", x: "Rukun Islam adalah lima perkara pokok yang menjadi fondasi keislaman seseorang. Rasulullah SAW bersabda:" },
        { t: "dalil", ar: "بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لَا إِلَهَ إِلَّا اللهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللهِ، وَإِقَامِ الصَّلَاةِ، وَإِيتَاءِ الزَّكَاةِ، وَحَجِّ الْبَيْتِ، وَصَوْمِ رَمَضَانَ",
          arti: "Islam dibangun di atas lima perkara: bersaksi bahwa tiada tuhan selain Allah dan Muhammad adalah utusan Allah, mendirikan salat, menunaikan zakat, haji ke Baitullah, dan puasa Ramadan.", sumber: "HR. Bukhari dan Muslim, dari Ibnu Umar RA" },
        { t: "tabel", head: ["No", "Rukun", "Ketentuan pokok"], rows: [
          ["1", "Syahadat", "Mengucapkan dua kalimat syahadat dengan yakin. Inilah pintu masuk Islam."],
          ["2", "Salat", "Salat lima waktu sehari semalam, wajib bagi muslim yang baligh dan berakal (kecuali wanita yang sedang haid atau nifas)."],
          ["3", "Zakat", "Mengeluarkan sebagian harta yang telah mencapai nisab dan haul untuk golongan yang berhak menerimanya."],
          ["4", "Puasa Ramadan", "Berpuasa sebulan penuh di bulan Ramadan bagi yang wajib berpuasa."],
          ["5", "Haji", "Berhaji ke Baitullah sekali seumur hidup bagi yang mampu (istitha'ah)."]
        ] },
        { t: "p", x: "Syahadat adalah rukun yang menjadikan seseorang muslim, sedangkan empat rukun lainnya adalah amal yang wajib dikerjakan. Orang yang mengingkari kewajiban salat, zakat, puasa, atau haji dihukumi keluar dari Islam. Orang yang meninggalkannya karena malas tidak keluar dari Islam menurut jumhur ulama, tetapi ia berdosa besar." },
        { t: "box", judul: "Yang perlu diingat", items: ["Rukun Islam: Syahadat, Salat, Zakat, Puasa Ramadan, Haji.", "Jumlahnya lima."] },
        { t: "link", href: "fikih/thaharah.html#praktik-wudhu", x: "Lihat tata cara wudhu" },
        { t: "link", href: "fikih/salat.html#tata-cara-salat", x: "Lihat tata cara salat langkah demi langkah" }
      ]
    },
    {
      id: "rukun-iman",
      judul: "Rukun Iman",
      intinya: "Rukun Iman ada enam: iman kepada Allah, malaikat, kitab, rasul, hari akhir, dan qadha serta qadar.",
      isi: [
        { t: "p", x: "Iman adalah keyakinan yang kokoh di dalam hati, diikrarkan dengan lisan, dan dibuktikan dengan amal. Pokok-pokok keyakinan itu dijelaskan dalam hadis Jibril ketika Rasulullah SAW ditanya tentang iman:" },
        { t: "dalil", ar: "أَنْ تُؤْمِنَ بِاللهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ وَالْيَوْمِ الْآخِرِ، وَتُؤْمِنَ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ",
          arti: "Engkau beriman kepada Allah, para malaikat-Nya, kitab-kitab-Nya, para rasul-Nya, hari akhir, dan engkau beriman kepada takdir, yang baik maupun yang buruk.", sumber: "HR. Muslim, hadis Jibril dari Umar bin Khattab RA" },
        { t: "tabel", head: ["No", "Rukun Iman", "Pokok keyakinan"], rows: [
          ["1", "Iman kepada Allah", "Meyakini Allah itu ada, Maha Esa, Maha Pencipta, memiliki sifat-sifat kesempurnaan, dan hanya Dia yang berhak disembah."],
          ["2", "Iman kepada malaikat", "Makhluk Allah yang diciptakan dari cahaya dan selalu taat. Di antaranya: Jibril (menyampaikan wahyu), Mikail (mengatur hujan dan rezeki), Israfil (meniup sangkakala), Izrail (mencabut nyawa), Munkar dan Nakir (menanyai di kubur), Raqib dan Atid (mencatat amal), Malik (penjaga neraka), dan Ridwan (penjaga surga)."],
          ["3", "Iman kepada kitab-kitab Allah", "Taurat (kepada Nabi Musa), Zabur (Nabi Daud), Injil (Nabi Isa), dan Al-Qur'an (Nabi Muhammad SAW), serta suhuf Nabi Ibrahim dan Nabi Musa."],
          ["4", "Iman kepada rasul-rasul Allah", "Meyakini para rasul diutus untuk menyampaikan tauhid. Wajib mengetahui 25 rasul. Rasul Ulul Azmi: Nuh, Ibrahim, Musa, Isa, dan Muhammad SAW. Nabi Muhammad SAW adalah penutup para nabi."],
          ["5", "Iman kepada hari akhir", "Meyakini adanya kematian, kehidupan di alam kubur, kiamat, kebangkitan, hisab, timbangan amal, surga, dan neraka."],
          ["6", "Iman kepada qadha dan qadar", "Meyakini segala sesuatu terjadi atas ilmu, kehendak, dan ciptaan Allah. Manusia tetap wajib berikhtiar dan bertanggung jawab atas pilihannya."]
        ] },
        { t: "box", judul: "Yang perlu diingat", items: ["Urutan: Allah, malaikat, kitab, rasul, hari akhir, qadha dan qadar.", "Empat kitab: Taurat, Zabur, Injil, Al-Qur'an.", "Ulul Azmi: Nuh, Ibrahim, Musa, Isa, Muhammad SAW."] }
      ]
    },
    {
      id: "tanda-baligh",
      judul: "Tanda-tanda Baligh",
      intinya: "Seseorang disebut baligh bila muncul salah satu dari tiga tanda: genap 15 tahun hijriah, ihtilam, atau haid bagi perempuan.",
      isi: [
        { t: "p", x: "**Baligh** adalah masa ketika seseorang mulai terkena kewajiban syariat (mukallaf). Sejak itu salat, puasa, dan kewajiban lain wajib ia kerjakan, serta dosa dan pahalanya dicatat. Rasulullah SAW bersabda:" },
        { t: "dalil", ar: "رُفِعَ الْقَلَمُ عَنْ ثَلَاثَةٍ: عَنِ النَّائِمِ حَتَّى يَسْتَيْقِظَ، وَعَنِ الصَّبِيِّ حَتَّى يَحْتَلِمَ، وَعَنِ الْمَجْنُونِ حَتَّى يَعْقِلَ",
          arti: "Pena (pencatat amal) diangkat dari tiga golongan: orang yang tidur sampai ia bangun, anak kecil sampai ia ihtilam (baligh), dan orang gila sampai ia berakal.", sumber: "HR. Abu Dawud dan An-Nasa'i" },
        { t: "tabel", head: ["No", "Tanda baligh", "Laki-laki", "Perempuan"], rows: [
          ["1", "Genap berusia 15 tahun (hijriah)", "Ya", "Ya"],
          ["2", "Ihtilam, yaitu keluar mani (baik karena mimpi maupun sebab lain), paling awal pada usia genap 9 tahun hijriah", "Ya", "Ya"],
          ["3", "Haid, paling awal pada usia genap 9 tahun hijriah", "Tidak ada", "Ya"]
        ] },
        { t: "p", x: "Usia dihitung dengan tahun hijriah (kira-kira 354 hari), sehingga 15 tahun hijriah sedikit lebih singkat daripada 15 tahun masehi. Dalam kitab-kitab Syafi'iyah, tumbuhnya rambut kemaluan dijadikan tanda baligh bagi anak non-muslim, sedangkan bagi anak muslim cukup tiga tanda di atas." },
        { t: "h", x: "Sebelum baligh" },
        { t: "p", x: "Anak yang belum baligh belum terkena kewajiban, tetapi orang tua wajib mendidiknya. Rasulullah SAW menyuruh agar anak diperintah salat pada usia tujuh tahun dan dididik (dengan cara yang mendidik) bila meninggalkannya pada usia sepuluh tahun (HR. Abu Dawud)." },
        { t: "box", judul: "Yang perlu diingat", items: ["Tiga tanda baligh: genap 15 tahun hijriah, ihtilam, dan haid (khusus perempuan).", "Ihtilam dan haid paling awal pada usia 9 tahun hijriah."] },
        { t: "catatan", x: "Usia baligh dalam mazhab lain dapat berbeda, misalnya mazhab Hanafi menetapkan 18 tahun untuk laki-laki dan 17 tahun untuk perempuan bila tanda-tanda alami belum muncul. Di sini diikuti pendapat mazhab Syafi'i." }
      ]
    }
  ]
};
