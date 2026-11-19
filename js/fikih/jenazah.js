/* Bab 5 — Mengurus Jenazah
   Jenis blok isi: p, h, ol, ul, tabel, dalil, box, catatan, read, link, ib (jenazah) */
window.GRADIEND_FIKIH.jenazah = {
  rujukan: ["Safinatun Najah (Syekh Salim bin Sumair Al-Hadhrami)", "Fathul Qarib (Ibnu Qasim Al-Ghazi)", "Al-Fiqh al-Manhaji (Mustafa Al-Khin dkk.)"],
  topik: [
    /* ----------------------------------------------- KEWAJIBAN */
    {
      id: "kewajiban-terhadap-jenazah",
      judul: "Kewajiban terhadap Jenazah",
      intinya: "Mengurus jenazah muslim terdiri atas empat kewajiban fardu kifayah: memandikan, mengkafani, menyalatkan, dan menguburkan.",
      isi: [
        { t: "p", x: "Kewajiban ini disebut **fardu kifayah**: bila sebagian kaum muslimin di suatu tempat sudah mengerjakannya, gugurlah kewajiban yang lain. Bila tidak ada yang mengerjakannya, semua yang mengetahui menanggung dosa." },
        { t: "tabel", head: ["No", "Kewajiban", "Ringkasan"], rows: [
          ["1", "Memandikan", "Membersihkan jenazah dengan air."],
          ["2", "Mengkafani", "Membungkus jenazah dengan kain penutup."],
          ["3", "Menyalatkan", "Salat jenazah dengan empat takbir."],
          ["4", "Menguburkan", "Memakamkan jenazah dalam liang yang menutup bau dan melindunginya."]
        ] },
        { t: "h", x: "Saat seseorang menjelang wafat" },
        { t: "ul", items: ["Menuntun mengucapkan kalimat tauhid dengan lembut, tanpa memaksa.", "Membaringkan dengan menghadap kiblat bila mudah, tanpa menyulitkan.", "Keluarga bersabar, berbaik sangka kepada Allah, dan mendoakan."] },
        { t: "dalil", ar: "لَقِّنُوا مَوْتَاكُمْ لَا إِلَهَ إِلَّا اللهُ", arti: "Tuntunlah orang yang hendak meninggal di antara kalian dengan ucapan \"lā ilāha illallāh\".", sumber: "HR. Muslim, dari Abu Said Al-Khudri RA" },
        { t: "h", x: "Setelah wafat" },
        { t: "ol", items: [
          "Mengucapkan istirja' dan mendoakan jenazah.",
          "Memejamkan kedua mata dan merapatkan rahang, lalu menutup seluruh tubuh dengan kain.",
          "Meluruskan tubuh dan memindahkannya ke tempat yang layak.",
          "Memberi tahu keluarga dan menyegerakan pengurusan, kecuali bila ada keraguan tentang kematiannya.",
          "Melunasi utang jenazah dan menunaikan wasiatnya sebisa mungkin."
        ] },
        { t: "read", label: "Istirja' (ketika mendapat musibah)", ar: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ", latin: "Innā lillāhi wa innā ilaihi rāji'ūn.", arti: "Sesungguhnya kami milik Allah dan kepada-Nya kami kembali.", sumber: "QS. Al-Baqarah: 156" },
        { t: "box", judul: "Yang perlu diingat", items: ["Empat kewajiban jenazah: memandikan, mengkafani, menyalatkan, menguburkan (fardu kifayah).", "Segerakan pengurusan jenazah."] }
      ]
    },
    /* ----------------------------------------------- MEMANDIKAN */
    {
      id: "memandikan-jenazah",
      judul: "Cara Memandikan Jenazah",
      intinya: "Jenazah dimandikan oleh sesama jenis dengan air bersih, minimal meratakan air ke seluruh badan setelah najisnya dihilangkan.",
      isi: [
        { t: "h", x: "Siapa yang dimandikan" },
        { t: "p", x: "Setiap jenazah muslim wajib dimandikan, kecuali orang yang mati syahid di medan perang (syahid dunia dan akhirat), karena Rasulullah SAW tidak memandikan para syuhada Uhud. Bayi yang lahir dan menunjukkan tanda kehidupan diurus seperti jenazah dewasa. Bila janin gugur tanpa tanda kehidupan, tanyakan perinciannya kepada guru." },
        { t: "h", x: "Siapa yang memandikan" },
        { t: "ul", items: [
          "Jenazah laki-laki dimandikan oleh laki-laki, jenazah perempuan oleh perempuan.",
          "Suami boleh memandikan istrinya, dan istri boleh memandikan suaminya.",
          "Anak kecil boleh dimandikan oleh laki-laki maupun perempuan.",
          "Yang memandikan sebaiknya orang yang amanah dan paham tata caranya, serta **menutup aib** jenazah yang terlihat."
        ] },
        { t: "h", x: "Fardu memandikan" },
        { t: "p", x: "Yang wajib minimal hanya dua: **menghilangkan najis** pada tubuh jenazah, lalu **meratakan air** ke seluruh tubuh, termasuk rambut dan kulit, satu kali. Niat tidak menjadi syarat sah menurut pendapat yang kuat, tetapi sebaiknya memandikan dengan niat ikhlas karena Allah." },
        { t: "dalil", ar: "اغْسِلْنَهَا ثَلَاثًا أَوْ خَمْسًا أَوْ أَكْثَرَ مِنْ ذَلِكَ إِنْ رَأَيْتُنَّ ذَلِكَ بِمَاءٍ وَسِدْرٍ، وَاجْعَلْنَ فِي الْآخِرَةِ كَافُورًا", arti: "Mandikanlah ia tiga kali, lima kali, atau lebih dari itu bila kalian memandangnya perlu, dengan air dan daun bidara. Pada basuhan terakhir campurkan kapur barus.", sumber: "HR. Bukhari dan Muslim, dari Ummu Athiyyah RA" },
        { t: "h", x: "Tata cara yang sempurna" },
        { t: "ol", items: [
          "Siapkan tempat yang tertutup dan tinggi (misalnya dipan), air bersih, sabun atau daun bidara, kapur barus, sarung tangan, dan kain.",
          "Letakkan jenazah dengan aurat tertutup. Lepas pakaian sambil menutup auratnya.",
          "Tekan perutnya perlahan agar kotoran keluar, lalu bersihkan kemaluan dan dubur dengan sarung tangan atau kain.",
          "Wudhukan jenazah seperti wudhu salat, dengan mengusap gigi dan lubang hidung memakai kain basah (tanpa memasukkan air ke mulut dan hidung).",
          "Basuh kepala dan jenggot dengan air dan sabun atau bidara, lalu sisir rambut dengan lembut.",
          "Siram bagian **kanan** tubuh terlebih dahulu dari bahu sampai kaki, lalu bagian kiri. Miringkan jenazah untuk membersihkan bagian belakang.",
          "Ulangi sampai **tiga kali** atau lima kali (ganjil). Pada basuhan terakhir campurkan kapur barus.",
          "Keringkan tubuh dengan kain bersih, lalu serahkan untuk dikafani."
        ] },
        { t: "ul", items: [
          "Kuku dan rambut jenazah tidak dipotong.",
          "Bila air tidak ada atau tubuh jenazah tidak mungkin disentuh air (misalnya korban kebakaran parah), jenazah ditayamumkan. Bila itu pun tidak mungkin, jenazah dikafani dan disalatkan apa adanya."
        ] },
        { t: "box", judul: "Yang perlu diingat", items: ["Fardu memandikan: menghilangkan najis dan meratakan air ke seluruh tubuh.", "Sunnah: dimulai dari kanan, 3 atau 5 kali, bilasan terakhir dengan kapur barus.", "Laki-laki dimandikan laki-laki, perempuan oleh perempuan; suami-istri boleh saling memandikan."] }
      ]
    },
    /* ----------------------------------------------- MENGKAFANI */
    {
      id: "mengkafani-jenazah",
      judul: "Cara Mengkafani Jenazah",
      intinya: "Kafan minimal satu lapis kain yang menutup seluruh tubuh. Yang disunnahkan, laki-laki tiga lapis dan perempuan lima lapis.",
      isi: [
        { t: "h", x: "Ketentuan kain kafan" },
        { t: "tabel", head: ["", "Laki-laki", "Perempuan"], rows: [
          ["Yang wajib (minimal)", "Satu lapis kain yang menutup seluruh tubuh.", "Satu lapis kain yang menutup seluruh tubuh."],
          ["Yang disunnahkan", "Tiga lapis kain putih, tanpa baju dan serban.", "Lima lapis: sarung, baju kurung, kerudung, dan dua lapis kain penutup (menurut mazhab Syafi'i)."]
        ] },
        { t: "dalil", ar: "كُفِّنَ رَسُولُ اللهِ صلى الله عليه وسلم فِي ثَلَاثَةِ أَثْوَابٍ بِيضٍ سَحُولِيَّةٍ لَيْسَ فِيهَا قَمِيصٌ وَلَا عِمَامَةٌ", arti: "Rasulullah SAW dikafani dengan tiga lapis kain putih buatan Sahul (Yaman), tidak ada baju dan tidak ada serban di dalamnya.", sumber: "HR. Bukhari dan Muslim, dari Aisyah RA" },
        { t: "ul", items: [
          "Kain berwarna putih, bersih, dan sederhana.",
          "Kain diberi wewangian seperti kapur barus dan minyak harum.",
          "Biaya kafan diambil dari harta jenazah. Bila tidak ada, ditanggung orang yang wajib menafkahinya. Bila tidak ada, ditanggung kaum muslimin atau baitulmal.",
          "Orang yang wafat dalam keadaan berihram tidak diberi wewangian dan kepalanya tidak ditutup (HR. Bukhari dan Muslim).",
          "Syahid di medan perang dikafani dengan pakaian yang ia kenakan."
        ] },
        { t: "h", x: "Cara mengkafani (laki-laki, tiga lapis)" },
        { t: "ol", items: [
          "Bentangkan tiga lapis kain secara bertumpuk. Kain yang terbaik di lapisan paling atas. Taburkan wewangian di antara lapisan.",
          "Letakkan jenazah yang sudah dimandikan dan dikeringkan di atas kain dalam posisi telentang.",
          "Taruh kapas yang diberi wewangian pada lubang-lubang tubuh (mata, hidung, mulut, telinga) dan anggota sujud.",
          "Sedekapkan kedua tangan di atas dada, tangan kanan di atas tangan kiri.",
          "Lipat lapisan kain pertama dari sisi kiri ke kanan, lalu dari sisi kanan ke kiri. Ulangi untuk lapisan kedua dan ketiga.",
          "Ikat dengan tali di bagian kepala, pinggang, dan kaki. Tali dilepas saat jenazah diletakkan di liang lahat."
        ] },
        { t: "p", x: "Untuk perempuan, pakaikan sarung, baju kurung, dan kerudung terlebih dahulu, lalu bungkus dengan dua lapis kain di luarnya." },
        { t: "box", judul: "Yang perlu diingat", items: ["Wajib: satu lapis yang menutup seluruh tubuh.", "Sunnah: laki-laki 3 lapis, perempuan 5 lapis, berwarna putih.", "Tali kafan dilepas ketika dikubur."] }
      ]
    },
    /* ----------------------------------------------- MENYALATKAN */
    {
      id: "menyalatkan-jenazah",
      judul: "Menyalatkan Jenazah",
      intinya: "Salat jenazah fardu kifayah, dikerjakan berdiri dengan empat takbir tanpa rukuk dan sujud.",
      isi: [
        { t: "dalil", arti: "Barang siapa menyaksikan jenazah sampai ia disalatkan, baginya satu qirat. Dan barang siapa menyaksikannya sampai dikuburkan, baginya dua qirat, yaitu seperti dua gunung yang besar.", sumber: "HR. Bukhari dan Muslim, dari Abu Hurairah RA" },
        { t: "h", x: "Syarat salat jenazah" },
        { t: "ul", items: [
          "Semua syarat sah salat (suci dari hadas dan najis, menutup aurat, menghadap kiblat).",
          "Jenazah sudah dimandikan dan dikafani.",
          "Jenazah berada di depan orang yang menyalatkan (kecuali salat gaib).",
          "Jenazah seorang muslim."
        ] },
        { t: "h", x: "Rukun salat jenazah" },
        { t: "ol", items: ["Niat.", "Empat kali takbir.", "Berdiri bagi yang mampu.", "Membaca Al-Fatihah.", "Membaca salawat kepada Nabi SAW setelah takbir kedua.", "Mendoakan jenazah setelah takbir ketiga.", "Salam."] },
        { t: "h", x: "Tata cara dan bacaan" },
        { t: "ib", k: "jenazah" },
        { t: "p", x: "Jenazah laki-laki diposisikan dengan kepala di sebelah kanan imam dan jenazah perempuan dengan bagian tengah tubuh sejajar imam. Jemaah salat membentuk shaf (sebaiknya tiga shaf atau lebih)." },
        { t: "p", x: "**Salat gaib** adalah salat jenazah atas jenazah yang tidak hadir (misalnya meninggal di tempat yang jauh). Mazhab Syafi'i membolehkannya, sedangkan mazhab Hanafi dan Maliki tidak membolehkannya kecuali dalam keadaan tertentu." },
        { t: "box", judul: "Yang perlu diingat", items: ["Rukun salat jenazah 7: niat, empat takbir, berdiri, Al-Fatihah, salawat, doa untuk jenazah, salam.", "Tanpa rukuk, sujud, dan duduk."] }
      ]
    },
    /* ----------------------------------------------- MENGUBURKAN */
    {
      id: "menguburkan-jenazah",
      judul: "Cara Menguburkan Jenazah",
      intinya: "Jenazah dikuburkan dalam liang yang menutup bau dan melindunginya dari binatang, dimiringkan ke kanan menghadap kiblat.",
      isi: [
        { t: "h", x: "Ketentuan liang kubur" },
        { t: "ul", items: [
          "**Wajib minimal:** liang yang menutup bau jenazah dan mencegah binatang buas menggalinya, serta jenazah dihadapkan ke kiblat.",
          "**Disunnahkan** liang cukup dalam (kira-kira setinggi orang berdiri sambil mengangkat tangan) dan cukup luas.",
          "**Liang lahad** (menggali lubang menyamping di dasar sisi kiblat) lebih utama daripada liang syaq (lubang lurus di dasar)."
        ] },
        { t: "dalil", ar: "اللَّحْدُ لَنَا وَالشَّقُّ لِغَيْرِنَا", arti: "Liang lahad adalah untuk kita dan liang syaq untuk selain kita.", sumber: "HR. Abu Dawud, At-Tirmidzi, dan An-Nasa'i" },
        { t: "h", x: "Tata cara penguburan" },
        { t: "ol", items: [
          "Jenazah diantar ke pemakaman. Pengantar berjalan cepat tetapi tidak berlebihan dan tidak bersuara keras.",
          "Beberapa orang laki-laki turun ke liang untuk menerima jenazah dan meletakkannya.",
          "Jenazah diletakkan di liang lahad pada sisi kanan, **menghadap kiblat**. Pipi kanan ditempelkan ke tanah dan tali kafan dilepas.",
          "Saat meletakkan, membaca doa di bawah.",
          "Liang lahad ditutup dengan papan, bambu, atau batu bata agar tanah tidak langsung menimpa jenazah.",
          "Liang diuruk dengan tanah. Yang hadir disunnahkan menaburkan tiga genggam tanah dari arah kepala.",
          "Gundukan tanah ditinggikan kira-kira sejengkal, diberi tanda (nisan) sederhana, lalu disiram air.",
          "Setelah selesai, berdiri sejenak di sisi kubur untuk memohonkan ampunan dan keteguhan bagi jenazah."
        ] },
        { t: "read", label: "Doa ketika meletakkan jenazah di liang", ar: "بِسْمِ اللهِ وَعَلَى مِلَّةِ رَسُولِ اللهِ", latin: "Bismillāhi wa 'alā millati rasūlillāh.", arti: "Dengan nama Allah dan atas agama Rasulullah.", sumber: "HR. Abu Dawud dan At-Tirmidzi" },
        { t: "dalil", ar: "اسْتَغْفِرُوا لِأَخِيكُمْ وَسَلُوا لَهُ التَّثْبِيتَ فَإِنَّهُ الْآنَ يُسْأَلُ", arti: "Mohonkanlah ampunan untuk saudara kalian dan mintakanlah keteguhan baginya, karena sekarang ia sedang ditanya.", sumber: "HR. Abu Dawud, dari Utsman bin Affan RA" },
        { t: "h", x: "Yang dilarang atau dimakruhkan" },
        { t: "dalil", ar: "نَهَى رَسُولُ اللهِ صلى الله عليه وسلم أَنْ يُجَصَّصَ الْقَبْرُ وَأَنْ يُقْعَدَ عَلَيْهِ وَأَنْ يُبْنَى عَلَيْهِ", arti: "Rasulullah SAW melarang kuburan dikapur (dipermanenkan), diduduki, dan dibangun di atasnya.", sumber: "HR. Muslim, dari Jabir RA" },
        { t: "ul", items: [
          "Membangun kubur secara mewah atau meninggikannya secara berlebihan, serta duduk dan menginjak kuburan.",
          "Menguburkan dalam peti, kecuali bila keadaan tanah mengharuskannya.",
          "Menguburkan pada tiga waktu terlarang (saat matahari terbit sampai naik, tepat di tengah hari, dan menjelang terbenam) tanpa kebutuhan mendesak.",
          "Perempuan tidak dianjurkan ikut mengantar jenazah sampai ke pemakaman (HR. Bukhari dan Muslim)."
        ] },
        { t: "h", x: "Ziarah kubur" },
        { t: "p", x: "Ziarah kubur disunnahkan untuk mengingat kematian dan mendoakan penghuninya, dan dilakukan tanpa meminta kepada selain Allah, tanpa ratapan, dan tanpa perbuatan syirik (HR. Muslim)." },
        { t: "catatan", x: "Beberapa tradisi setempat seputar penguburan (misalnya jenis batu nisan dan kebiasaan setelah pemakaman) berbeda-beda. Yang terpenting adalah sesuai ketentuan syariat di atas. Bila ragu, tanyakan kepada guru atau tokoh agama setempat." },
        { t: "box", judul: "Yang perlu diingat", items: ["Dikubur miring ke kanan menghadap kiblat; tali kafan dilepas.", "Doa meletakkan: Bismillāhi wa 'alā millati rasūlillāh.", "Dilarang membangun mewah, duduk, dan menginjak kuburan."] }
      ]
    },
    /* ----------------------------------------------- TAKZIAH */
    {
      id: "takziah-adab",
      judul: "Takziah dan Adab terhadap Keluarga yang Berduka",
      intinya: "Takziah adalah menghibur dan menguatkan keluarga yang ditinggalkan, serta membantu meringankan beban mereka.",
      isi: [
        { t: "read", label: "Ucapan takziah", ar: "إِنَّ لِلَّهِ مَا أَخَذَ وَلَهُ مَا أَعْطَى وَكُلُّ شَيْءٍ عِنْدَهُ بِأَجَلٍ مُسَمًّى", latin: "Inna lillāhi mā akhadza wa lahū mā a'ṭā wa kullu syai'in 'indahū bi-ajalin musammā.", arti: "Sesungguhnya milik Allah apa yang Dia ambil dan milik-Nya apa yang Dia berikan. Segala sesuatu di sisi-Nya memiliki batas waktu yang telah ditentukan.", sumber: "HR. Bukhari dan Muslim, dari Usamah bin Zaid RA" },
        { t: "ul", items: [
          "Menyampaikan ucapan takziah, mendoakan jenazah, dan menguatkan kesabaran keluarga.",
          "**Membuatkan makanan untuk keluarga yang berduka**, karena mereka sedang sibuk dengan urusan musibah.",
          "Membantu mengurus keperluan jenazah dan keluarga.",
          "Menangis dengan wajar karena sedih diperbolehkan. Meratap, memukul pipi, merobek pakaian, dan berkata-kata yang menyalahkan takdir dilarang.",
          "Berkabung bagi keluarga selama tiga hari; bagi istri yang ditinggal suami selama empat bulan sepuluh hari (masa iddah)."
        ] },
        { t: "dalil", ar: "اصْنَعُوا لِآلِ جَعْفَرٍ طَعَامًا فَقَدْ جَاءَهُمْ مَا يَشْغَلُهُمْ", arti: "Buatkanlah makanan untuk keluarga Ja'far, karena telah datang kepada mereka sesuatu yang menyibukkan mereka.", sumber: "HR. Abu Dawud dan At-Tirmidzi, dari Abdullah bin Ja'far RA" },
        { t: "dalil", ar: "لَيْسَ مِنَّا مَنْ ضَرَبَ الْخُدُودَ وَشَقَّ الْجُيُوبَ وَدَعَا بِدَعْوَى الْجَاهِلِيَّةِ", arti: "Bukan golongan kami orang yang memukul-mukul pipi, merobek-robek pakaian, dan menyeru dengan seruan jahiliah.", sumber: "HR. Bukhari dan Muslim, dari Abdullah bin Mas'ud RA" },
        { t: "box", judul: "Yang perlu diingat", items: ["Takziah: ucapkan kalimat penguat, bantu keluarga, dan buatkan makanan untuk mereka.", "Dilarang meratap dan memukul-mukul diri."] }
      ]
    }
  ]
};
