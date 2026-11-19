/* Bab 9 — Hukum Waris (Faraid)
   Jenis blok isi: p, h, ol, ul, tabel, dalil, box, catatan, read, link
   Blok { t: "kalkulator", k: "waris" } menampilkan kalkulator waris sederhana. */
window.GRADIEND_FIKIH.waris = {
  rujukan: ["Safinatun Najah (Syekh Salim bin Sumair Al-Hadhrami)", "Fathul Qarib (Ibnu Qasim Al-Ghazi)", "Al-Fiqh al-Manhaji (Mustafa Al-Khin dkk.)", "Kompilasi Hukum Islam (KHI) Indonesia, Buku II tentang Kewarisan"],
  topik: [
    /* ------------------------------------------------ DASAR */
    {
      id: "pengertian-dasar-waris",
      judul: "Pengertian dan Dasar Hukum Waris",
      intinya: "Waris (faraid) adalah aturan pembagian harta peninggalan orang yang meninggal kepada ahli warisnya, dengan bagian yang telah ditetapkan Allah.",
      isi: [
        { t: "p", x: "**Faraid** adalah ilmu tentang pembagian harta warisan, yaitu bagian-bagian yang telah ditentukan (fard) bagi tiap ahli waris. Ilmu ini sangat penting. Rasulullah SAW menyebutnya sebagai separuh ilmu dan memerintahkan agar dipelajari dan diajarkan (HR. Ibnu Majah dan Al-Hakim)." },
        { t: "dalil", ar: "يُوصِيكُمُ اللَّهُ فِي أَوْلَادِكُمْ لِلذَّكَرِ مِثْلُ حَظِّ الْأُنْثَيَيْنِ", arti: "Allah mensyariatkan (mewajibkan) kepadamu tentang (pembagian warisan untuk) anak-anakmu, (yaitu) bagian seorang anak laki-laki sama dengan bagian dua orang anak perempuan.", sumber: "QS. An-Nisa': 11" },
        { t: "dalil", ar: "أَلْحِقُوا الْفَرَائِضَ بِأَهْلِهَا، فَمَا بَقِيَ فَهُوَ لِأَوْلَى رَجُلٍ ذَكَرٍ", arti: "Berikanlah bagian-bagian yang telah ditetapkan kepada pemiliknya, dan sisanya adalah untuk laki-laki yang paling dekat (kekerabatannya).", sumber: "HR. Bukhari dan Muslim, dari Ibnu Abbas RA" },
        { t: "p", x: "Ayat-ayat pokok waris adalah QS. An-Nisa' ayat 11, 12, dan 176. Allah menutup ayat itu dengan pernyataan bahwa pembagian ini adalah ketentuan dari-Nya. Karena itu pembagian waris tidak boleh diubah-ubah menurut kehendak sendiri." },
        { t: "box", judul: "Yang perlu diingat", items: ["Waris = faraid: pembagian harta peninggalan dengan bagian yang ditetapkan Allah.", "Dasar utama: QS. An-Nisa' ayat 11, 12, dan 176."] }
      ]
    },
    /* ------------------------------------------------ HAK SEBELUM WARIS */
    {
      id: "hak-sebelum-waris",
      judul: "Hak yang Didahulukan sebelum Waris",
      intinya: "Sebelum dibagikan, harta peninggalan dipakai dahulu untuk biaya perawatan jenazah, pelunasan utang, dan wasiat (paling banyak sepertiga).",
      isi: [
        { t: "ol", items: [
          "**Biaya perawatan jenazah** (memandikan, mengkafani, dan menguburkan) secara wajar.",
          "**Pelunasan utang** pewaris, termasuk utang kepada Allah (misalnya zakat atau nazar yang belum ditunaikan) dan utang kepada sesama.",
          "**Wasiat**, paling banyak sepertiga dari harta bersih, dan tidak diberikan kepada ahli waris.",
          "**Pembagian waris** kepada ahli waris dari sisa harta."
        ] },
        { t: "dalil", ar: "مِنْ بَعْدِ وَصِيَّةٍ يُوصَى بِهَا أَوْ دَيْنٍ", arti: "(Pembagian-pembagian tersebut) sesudah (dipenuhi) wasiat yang dibuatnya atau (dan setelah dibayar) utangnya.", sumber: "QS. An-Nisa': 11" },
        { t: "dalil", ar: "إِنَّ اللهَ قَدْ أَعْطَى كُلَّ ذِي حَقٍّ حَقَّهُ، فَلَا وَصِيَّةَ لِوَارِثٍ", arti: "Sesungguhnya Allah telah memberikan kepada setiap yang berhak haknya, maka tidak ada wasiat bagi ahli waris.", sumber: "HR. Abu Dawud dan At-Tirmidzi" },
        { t: "dalil", ar: "الثُّلُثُ، وَالثُّلُثُ كَثِيرٌ", arti: "(Wasiat itu) sepertiga, dan sepertiga itu sudah banyak.", sumber: "HR. Bukhari dan Muslim, dari Sa'd bin Abi Waqqash RA" },
        { t: "p", x: "Harta yang dibagikan adalah **harta bersih** yang tersisa setelah tiga hak pertama dipenuhi. Harta bersama suami istri (gono-gini) dipisahkan terlebih dahulu: separuh menjadi hak pasangan yang hidup, dan separuh lainnya adalah harta peninggalan yang diwariskan, menurut Kompilasi Hukum Islam di Indonesia." },
        { t: "catatan", x: "Dalam Kompilasi Hukum Islam (KHI) dikenal juga **wasiat wajibah** bagi anak angkat dan orang tua angkat, paling banyak sepertiga, walau bukan ahli waris. Ini ketentuan hukum positif Indonesia dan bukan bagian pembahasan fikih klasik." },
        { t: "box", judul: "Yang perlu diingat", items: ["Urutan: biaya jenazah, utang, wasiat (maks. 1/3 dan bukan untuk ahli waris), lalu waris.", "Wasiat kepada ahli waris tidak berlaku."] }
      ]
    },
    /* ------------------------------------------------ RUKUN PENGHALANG */
    {
      id: "rukun-syarat-penghalang-waris",
      judul: "Rukun, Sebab, dan Penghalang Waris",
      intinya: "Waris berlaku bila ada pewaris yang meninggal, ahli waris yang hidup, dan harta peninggalan. Sebabnya kekerabatan atau pernikahan; penghalangnya pembunuhan dan perbedaan agama.",
      isi: [
        { t: "h", x: "Rukun waris" },
        { t: "ol", items: ["**Pewaris (muwarrits):** orang yang meninggal dan meninggalkan harta.", "**Ahli waris (warits):** orang yang berhak menerima harta karena sebab tertentu.", "**Harta warisan (maurus):** harta peninggalan yang akan dibagikan."] },
        { t: "h", x: "Syarat waris" },
        { t: "ul", items: ["Pewaris benar-benar meninggal (secara nyata atau ditetapkan hakim).", "Ahli waris hidup pada saat pewaris meninggal (termasuk janin dalam kandungan yang lahir hidup).", "Jelas sebab hubungan yang membuatnya berhak."] },
        { t: "h", x: "Sebab menerima waris" },
        { t: "ul", items: ["**Nasab (kekerabatan):** anak, orang tua, saudara, dan seterusnya.", "**Pernikahan yang sah:** suami dan istri.", "**Wala' (pembebasan budak):** hampir tidak ada di zaman kini."] },
        { t: "h", x: "Penghalang waris" },
        { t: "ol", items: [
          "**Pembunuhan:** ahli waris yang membunuh pewaris tidak mewarisi.",
          "**Perbedaan agama:** muslim tidak mewarisi non-muslim, dan sebaliknya.",
          "**Perbudakan** (tidak lagi dijumpai)."
        ] },
        { t: "dalil", ar: "لَا يَرِثُ الْمُسْلِمُ الْكَافِرَ وَلَا الْكَافِرُ الْمُسْلِمَ", arti: "Orang muslim tidak mewarisi orang kafir, dan orang kafir tidak mewarisi orang muslim.", sumber: "HR. Bukhari dan Muslim, dari Usamah bin Zaid RA" },
        { t: "box", judul: "Yang perlu diingat", items: ["Rukun waris 3: pewaris, ahli waris, harta warisan.", "Sebab waris: nasab dan pernikahan.", "Penghalang waris: pembunuhan dan beda agama."] }
      ]
    },
    /* ------------------------------------------------ AHLI WARIS */
    {
      id: "daftar-ahli-waris",
      judul: "Daftar Ahli Waris",
      intinya: "Ahli waris dalam fikih klasik berjumlah 25 orang: 15 laki-laki dan 10 perempuan.",
      isi: [
        { t: "tabel", head: ["No", "Ahli waris laki-laki (15)"], rows: [
          ["1", "Anak laki-laki"],
          ["2", "Cucu laki-laki dari anak laki-laki (dan seterusnya ke bawah)"],
          ["3", "Ayah"],
          ["4", "Kakek (ayah dari ayah, dan seterusnya ke atas)"],
          ["5", "Saudara laki-laki kandung"],
          ["6", "Saudara laki-laki seayah"],
          ["7", "Saudara laki-laki seibu"],
          ["8", "Anak laki-laki dari saudara laki-laki kandung"],
          ["9", "Anak laki-laki dari saudara laki-laki seayah"],
          ["10", "Paman (saudara kandung ayah)"],
          ["11", "Paman (saudara seayah dengan ayah)"],
          ["12", "Anak laki-laki dari paman kandung"],
          ["13", "Anak laki-laki dari paman seayah"],
          ["14", "Suami"],
          ["15", "Laki-laki yang memerdekakan budak"]
        ] },
        { t: "tabel", head: ["No", "Ahli waris perempuan (10)"], rows: [
          ["1", "Anak perempuan"],
          ["2", "Cucu perempuan dari anak laki-laki (dan seterusnya ke bawah)"],
          ["3", "Ibu"],
          ["4", "Nenek dari pihak ibu"],
          ["5", "Nenek dari pihak ayah"],
          ["6", "Saudara perempuan kandung"],
          ["7", "Saudara perempuan seayah"],
          ["8", "Saudara perempuan seibu"],
          ["9", "Istri"],
          ["10", "Perempuan yang memerdekakan budak"]
        ] },
        { t: "p", x: "Bila seluruh ahli waris itu ada, yang tetap mewarisi adalah **lima orang**: suami atau istri, ayah, ibu, anak laki-laki, dan anak perempuan. Ahli waris lain bisa terhalang (hijab) oleh yang lebih dekat." },
        { t: "box", judul: "Yang perlu diingat", items: ["25 ahli waris: 15 laki-laki dan 10 perempuan.", "Selalu mewarisi (tidak terhalang): suami atau istri, ayah, ibu, anak laki-laki, anak perempuan."] }
      ]
    },
    /* ------------------------------------------------ BAGIAN */
    {
      id: "bagian-ahli-waris",
      judul: "Bagian Ahli Waris (Ashabul Furudh)",
      intinya: "Ada enam bagian pasti dalam Al-Qur'an: 1/2, 1/4, 1/8, 2/3, 1/3, dan 1/6.",
      isi: [
        { t: "dalil", ar: "وَلَكُمْ نِصْفُ مَا تَرَكَ أَزْوَاجُكُمْ إِنْ لَمْ يَكُنْ لَهُنَّ وَلَدٌ، فَإِنْ كَانَ لَهُنَّ وَلَدٌ فَلَكُمُ الرُّبُعُ مِمَّا تَرَكْنَ", arti: "Dan bagianmu (suami-suami) adalah seperdua dari harta yang ditinggalkan oleh istri-istrimu, jika mereka tidak mempunyai anak. Jika mereka (istri-istrimu) itu mempunyai anak, maka kamu mendapat seperempat dari harta yang ditinggalkannya.", sumber: "QS. An-Nisa': 12" },
        { t: "tabel", head: ["Bagian", "Siapa dan dalam keadaan apa"], rows: [
          ["1/2", "Suami (bila pewaris tidak punya anak atau cucu); anak perempuan tunggal (tanpa anak laki-laki); cucu perempuan tunggal bila tidak ada anak; saudara perempuan kandung tunggal (dalam keadaan tertentu)."],
          ["1/4", "Suami (bila pewaris punya anak atau cucu); istri (bila pewaris tidak punya anak atau cucu)."],
          ["1/8", "Istri (bila pewaris punya anak atau cucu)."],
          ["2/3", "Dua anak perempuan atau lebih (tanpa anak laki-laki); dua saudara perempuan kandung atau lebih (dalam keadaan tertentu)."],
          ["1/3", "Ibu (bila pewaris tidak punya anak atau cucu dan tidak ada dua saudara atau lebih); dua saudara atau lebih yang seibu (dibagi sama rata)."],
          ["1/6", "Ayah (bila ada anak laki-laki atau cucu laki-laki); ibu (bila ada anak, cucu, atau dua saudara atau lebih); kakek; nenek; saudara seibu tunggal; cucu perempuan bersama satu anak perempuan."]
        ] },
        { t: "h", x: "Contoh ringkas" },
        { t: "ul", items: [
          "Seseorang meninggal meninggalkan **istri, satu anak laki-laki, dan satu anak perempuan**. Istri mendapat 1/8 (karena ada anak). Sisanya 7/8 dibagi anak: laki-laki dua bagian, perempuan satu bagian, sehingga anak laki-laki 7/12 dan anak perempuan 7/24 dari seluruh harta.",
          "Seseorang meninggal meninggalkan **suami, ayah, dan ibu** (tanpa anak). Suami 1/2, ibu 1/3 dari sisa (yaitu 1/6 dari seluruh), dan ayah mendapat sisanya (1/3)."
        ] },
        { t: "p", x: "Contoh pertama dihitung lengkap: harta dibagi 24 bagian. Istri 3 bagian (1/8), sisa 21 bagian dibagi tiga satuan (anak laki-laki 2 satuan, anak perempuan 1 satuan): anak laki-laki 14 bagian (14/24) dan anak perempuan 7 bagian (7/24). Jumlahnya 3 + 14 + 7 = 24." },
        { t: "link", href: "fikih/waris.html#kalkulator-waris", x: "Coba hitung dengan kalkulator waris" },
        { t: "box", judul: "Yang perlu diingat", items: ["Enam bagian: 1/2, 1/4, 1/8, 2/3, 1/3, 1/6.", "Suami 1/2 atau 1/4; istri 1/4 atau 1/8; ibu 1/3 atau 1/6; ayah 1/6 ditambah sisa bila tidak ada anak laki-laki."] }
      ]
    },
    /* ------------------------------------------------ ASHABAH HIJAB */
    {
      id: "ashabah-hijab",
      judul: "Ashabah dan Hijab",
      intinya: "Ashabah adalah ahli waris penerima sisa harta setelah bagian pasti dibagikan; hijab adalah terhalangnya ahli waris oleh yang lebih dekat.",
      isi: [
        { t: "h", x: "Ashabah" },
        { t: "p", x: "**Ashabah** adalah kerabat laki-laki (dan sebagian perempuan) dari pihak ayah yang menerima **sisa** harta setelah ashabul furudh mengambil bagiannya. Bila tidak ada sisa, ashabah tidak mendapat apa-apa. Bila tidak ada ashabul furudh, ashabah menerima seluruh harta." },
        { t: "tabel", head: ["Jenis", "Contoh", "Cara pembagian"], rows: [
          ["Ashabah bin nafsi (karena dirinya sendiri)", "Anak laki-laki, cucu laki-laki, ayah, kakek, saudara laki-laki, paman", "Menerima sisa menurut urutan kedekatan."],
          ["Ashabah bil ghair (karena bersama yang lain)", "Anak perempuan bersama anak laki-laki; saudara perempuan bersama saudara laki-lakinya", "Bagian laki-laki dua kali bagian perempuan."],
          ["Ashabah ma'al ghair (bersama yang lain)", "Saudara perempuan kandung atau seayah bersama anak perempuan atau cucu perempuan", "Saudara perempuan mendapat sisa setelah bagian anak perempuan."]
        ] },
        { t: "h", x: "Urutan ashabah bin nafsi" },
        { t: "ol", items: ["Anak laki-laki, lalu cucu laki-laki.", "Ayah, lalu kakek.", "Saudara laki-laki kandung, lalu seayah.", "Anak laki-laki dari saudara kandung, lalu seayah.", "Paman kandung, lalu paman seayah.", "Anak laki-laki dari paman kandung, lalu seayah."] },
        { t: "h", x: "Hijab (penghalang karena kedekatan)" },
        { t: "ul", items: [
          "**Hijab hirman:** ahli waris terhalang sama sekali dari menerima waris. Contoh: anak laki-laki menghalangi cucu dan saudara; ayah menghalangi kakek dan saudara.",
          "**Hijab nuqshan:** bagian ahli waris berkurang karena kehadiran ahli waris lain. Contoh: suami dari 1/2 menjadi 1/4 bila ada anak; ibu dari 1/3 menjadi 1/6 bila ada anak."
        ] },
        { t: "box", judul: "Yang perlu diingat", items: ["Ashabah menerima sisa setelah bagian pasti dibagikan.", "Ashabah bil ghair: anak laki-laki 2 bagian, anak perempuan 1 bagian.", "Hijab: terhalang total (hirman) atau berkurang (nuqshan)."] }
      ]
    },
    /* ------------------------------------------------ AUL RADD */
    {
      id: "aul-radd",
      judul: "Aul dan Radd",
      intinya: "Aul terjadi bila jumlah bagian melebihi satu; radd bila bagian kurang dari satu dan tidak ada ashabah.",
      isi: [
        { t: "h", x: "Aul (penyusutan bagian)" },
        { t: "p", x: "Kadang jumlah bagian pasti melebihi seluruh harta. Maka penyebut dinaikkan sehingga setiap ahli waris menanggung kekurangan secara adil. Contoh: pewaris meninggalkan **suami, ibu, ayah, dan dua anak perempuan**. Bagiannya: suami 1/4, ibu 1/6, ayah 1/6, dua anak perempuan 2/3. Jumlahnya 3/12 + 2/12 + 2/12 + 8/12 = 15/12. Penyebut dijadikan 15, sehingga suami 3/15, ibu 2/15, ayah 2/15, dan dua anak perempuan 8/15." },
        { t: "h", x: "Radd (pengembalian sisa)" },
        { t: "p", x: "Bila bagian pasti kurang dari seluruh harta dan tidak ada ashabah, terdapat sisa. Contoh: seorang anak perempuan dan ibu, bagiannya 1/2 dan 1/6, sisa 1/3." },
        { t: "tabel", head: ["Pendapat", "Keterangan"], rows: [
          ["Mazhab Syafi'i (klasik)", "Sisa diserahkan ke baitulmal (kas umat Islam)."],
          ["Mazhab Syafi'i kontemporer, Hanafi, dan Hanbali", "Sisa dikembalikan (radd) kepada ahli waris pemilik bagian pasti, kecuali suami dan istri."],
          ["Kompilasi Hukum Islam (KHI)", "Pasal 193: sisa dikembalikan kepada ahli waris (radd)."]
        ] },
        { t: "catatan", x: "Karena baitulmal yang dimaksud fikih klasik tidak berfungsi seperti dahulu, para ulama Syafi'iyah belakangan dan KHI memberlakukan radd. Bila menghadapi kasus nyata, tanyakan kepada ahli faraid atau Pengadilan Agama." },
        { t: "box", judul: "Yang perlu diingat", items: ["Aul: jumlah bagian lebih dari satu, penyebut dinaikkan.", "Radd: bagian kurang dari satu tanpa ashabah, sisa dikembalikan."] }
      ]
    },
    /* ------------------------------------------------ KALKULATOR */
    {
      id: "kalkulator-waris",
      judul: "Kalkulator Waris Sederhana",
      intinya: "Hitung pembagian harta untuk kasus sederhana: pasangan, ayah, ibu, anak laki-laki, dan anak perempuan.",
      isi: [
        { t: "p", x: "Kalkulator ini **hanya membantu kasus sederhana**. Ia tidak mencakup cucu, saudara, kakek, nenek, dan ahli waris lain, serta tidak menghitung kasus radd. Anggap tidak ada saudara pewaris. Hasilnya bukan fatwa. Untuk pembagian nyata, konsultasikan kepada ahli faraid, ulama, atau Pengadilan Agama." },
        { t: "kalkulator", k: "waris" }
      ]
    }
  ]
};
