/* =====================================================================
   KUMPULAN QUOTE ISLAMI — tampil di bagian "Daily reminder" beranda.
   =====================================================================
   CARA MENAMBAH QUOTE
   Salin satu baris { ... }, tempel di dalam daftar, lalu ubah isinya:

     { type: "hadits", text: "Isi quote...", source: "HR. Bukhari" },

   - type   : "quran" (ayat), "hadits", atau "tokoh" (ulama / tokoh).
   - text   : isi quote (tanpa tanda kutip di awal-akhir, sudah otomatis).
              Jika ada tanda petik di dalamnya, pakai petik tunggal '...'.
   - source : sumber. Contoh: "QS. Al-Baqarah: 286", "HR. Muslim", "Imam Asy-Syafi'i".

   Penting: pastikan quote dan sumbernya benar sebelum ditambahkan.
   Untuk hadits, sebaiknya cantumkan perawi (HR. ...). Ayat Al-Qur'an
   mengikuti terjemahan makna (Kemenag RI).
   ===================================================================== */

window.GRADIEND_QUOTES = [

  /* ===== AL-QUR'AN ===== */
  { type: "quran", text: "Maka ingatlah kepada-Ku, niscaya Aku ingat kepadamu.", source: "QS. Al-Baqarah: 152" },
  { type: "quran", text: "Sesungguhnya bersama kesulitan ada kemudahan.", source: "QS. Al-Insyirah: 6" },
  { type: "quran", text: "Allah tidak membebani seseorang melainkan sesuai kesanggupannya.", source: "QS. Al-Baqarah: 286" },
  { type: "quran", text: "Dan barang siapa bertakwa kepada Allah, niscaya Dia akan mengadakan baginya jalan keluar.", source: "QS. At-Talaq: 2" },
  { type: "quran", text: "Dan berbuat baiklah, sungguh Allah menyukai orang-orang yang berbuat baik.", source: "QS. Al-Baqarah: 195" },
  { type: "quran", text: "Sesungguhnya Allah tidak mengubah keadaan suatu kaum sebelum mereka mengubah apa yang ada pada diri mereka.", source: "QS. Ar-Ra'd: 11" },
  { type: "quran", text: "Ingatlah, hanya dengan mengingat Allah hati menjadi tenteram.", source: "QS. Ar-Ra'd: 28" },
  { type: "quran", text: "Allah niscaya akan mengangkat orang-orang yang beriman di antaramu dan orang-orang yang diberi ilmu beberapa derajat.", source: "QS. Al-Mujadilah: 11" },
  { type: "quran", text: "Katakanlah, 'Apakah sama orang-orang yang mengetahui dengan orang-orang yang tidak mengetahui?'", source: "QS. Az-Zumar: 9" },
  { type: "quran", text: "Janganlah kamu (merasa) lemah dan jangan (pula) bersedih hati, padahal kamulah orang-orang yang paling tinggi (derajatnya), jika kamu orang-orang mukmin.", source: "QS. Ali 'Imran: 139" },
  { type: "quran", text: "Mohonlah pertolongan (kepada Allah) dengan sabar dan salat. Sungguh, Allah beserta orang-orang yang sabar.", source: "QS. Al-Baqarah: 153" },
  { type: "quran", text: "Berdoalah kepada-Ku, niscaya akan Aku perkenankan bagimu.", source: "QS. Gafir: 60" },
  { type: "quran", text: "Sesungguhnya yang paling mulia di antara kamu di sisi Allah ialah orang yang paling bertakwa.", source: "QS. Al-Hujurat: 13" },
  { type: "quran", text: "Dan berpegangteguhlah kamu semuanya pada tali (agama) Allah, dan janganlah kamu bercerai berai.", source: "QS. Ali 'Imran: 103" },
  { type: "quran", text: "Dan tolong-menolonglah kamu dalam (mengerjakan) kebajikan dan takwa.", source: "QS. Al-Ma'idah: 2" },
  { type: "quran", text: "Ya Tuhanku, tambahkanlah ilmu kepadaku.", source: "QS. Taha: 114" },
  { type: "quran", text: "Sesungguhnya Allah tidak menyia-nyiakan pahala orang-orang yang berbuat baik.", source: "QS. At-Taubah: 120" },

  /* ===== HADITS ===== */
  { type: "hadits", text: "Sesungguhnya setiap amal tergantung pada niatnya, dan setiap orang akan mendapatkan sesuai apa yang ia niatkan.", source: "HR. Bukhari dan Muslim" },
  { type: "hadits", text: "Sebaik-baik kalian adalah orang yang belajar Al-Qur'an dan mengajarkannya.", source: "HR. Bukhari" },
  { type: "hadits", text: "Manusia yang paling dicintai Allah adalah yang paling bermanfaat bagi manusia lainnya.", source: "HR. Ath-Thabrani" },
  { type: "hadits", text: "Barang siapa menempuh suatu jalan untuk mencari ilmu, Allah akan memudahkan baginya jalan menuju surga.", source: "HR. Muslim" },
  { type: "hadits", text: "Senyummu di hadapan saudaramu adalah sedekah.", source: "HR. At-Tirmidzi" },
  { type: "hadits", text: "Tidak sempurna iman seseorang di antara kalian hingga ia mencintai untuk saudaranya apa yang ia cintai untuk dirinya sendiri.", source: "HR. Bukhari dan Muslim" },
  { type: "hadits", text: "Barang siapa beriman kepada Allah dan hari akhir, hendaklah ia berkata baik atau diam.", source: "HR. Bukhari dan Muslim" },
  { type: "hadits", text: "Orang kuat bukanlah yang menang dalam bergulat, tetapi yang mampu menahan dirinya ketika marah.", source: "HR. Bukhari dan Muslim" },
  { type: "hadits", text: "Amal yang paling dicintai Allah adalah yang paling konsisten, walaupun sedikit.", source: "HR. Bukhari dan Muslim" },
  { type: "hadits", text: "Ada dua nikmat yang sering membuat manusia tertipu: kesehatan dan waktu luang.", source: "HR. Bukhari" },
  { type: "hadits", text: "Manfaatkanlah lima perkara sebelum datang lima perkara: masa mudamu sebelum masa tuamu, sehatmu sebelum sakitmu, kayamu sebelum miskinmu, luangmu sebelum sibukmu, dan hidupmu sebelum matimu.", source: "HR. Al-Hakim" },
  { type: "hadits", text: "Sesungguhnya Allah tidak melihat rupa dan harta kalian, tetapi Dia melihat hati dan amal kalian.", source: "HR. Muslim" },
  { type: "hadits", text: "Jagalah (perintah) Allah, niscaya Allah menjagamu.", source: "HR. At-Tirmidzi" },
  { type: "hadits", text: "Di antara tanda baiknya keislaman seseorang adalah meninggalkan hal yang tidak bermanfaat baginya.", source: "HR. At-Tirmidzi" },
  { type: "hadits", text: "Permudahlah dan jangan mempersulit. Berilah kabar gembira dan jangan membuat orang lari.", source: "HR. Bukhari dan Muslim" },
  { type: "hadits", text: "Di antara tujuh golongan yang dinaungi Allah pada hari tiada naungan selain naungan-Nya adalah pemuda yang tumbuh dalam ibadah kepada Tuhannya.", source: "HR. Bukhari dan Muslim" },
  { type: "hadits", text: "Sesungguhnya Allah itu indah dan menyukai keindahan.", source: "HR. Muslim" },
  { type: "hadits", text: "Bersuci adalah separuh dari iman.", source: "HR. Muslim" },
  { type: "hadits", text: "Barang siapa tidak berterima kasih kepada manusia, berarti ia belum bersyukur kepada Allah.", source: "HR. Abu Dawud dan At-Tirmidzi" },
  { type: "hadits", text: "Allah senantiasa menolong hamba-Nya selama hamba itu menolong saudaranya.", source: "HR. Muslim" },
  { type: "hadits", text: "Hendaklah kalian berlaku jujur, karena kejujuran membawa kepada kebaikan, dan kebaikan membawa ke surga.", source: "HR. Bukhari dan Muslim" },
  { type: "hadits", text: "Bertakwalah kepada Allah di mana pun engkau berada, iringilah keburukan dengan kebaikan niscaya ia menghapusnya, dan pergaulilah manusia dengan akhlak yang baik.", source: "HR. At-Tirmidzi" },
  { type: "hadits", text: "Mukmin yang kuat lebih baik dan lebih dicintai Allah daripada mukmin yang lemah, dan pada keduanya ada kebaikan.", source: "HR. Muslim" },

  /* ===== TOKOH & ULAMA ===== */
  { type: "tokoh", text: "Hisablah dirimu sebelum kamu dihisab, dan timbanglah amalmu sebelum amalmu ditimbang.", source: "Umar bin Khattab r.a." },
  { type: "tokoh", text: "Ilmu lebih baik daripada harta. Ilmu menjagamu, sedangkan hartalah yang harus kamu jaga.", source: "Ali bin Abi Thalib r.a." },
  { type: "tokoh", text: "Nilai seseorang terletak pada apa yang ia kuasai dengan baik.", source: "Ali bin Abi Thalib r.a." },
  { type: "tokoh", text: "Wahai anak Adam, engkau hanyalah kumpulan hari-hari. Setiap satu hari berlalu, hilanglah sebagian dari dirimu.", source: "Hasan Al-Bashri" },
  { type: "tokoh", text: "Barang siapa tidak merasakan pahitnya belajar sesaat, ia akan merasakan hinanya kebodohan sepanjang hidupnya.", source: "Imam Asy-Syafi'i" },
  { type: "tokoh", text: "Jika engkau tidak menyibukkan dirimu dengan kebaikan, dirimu akan menyibukkanmu dengan keburukan.", source: "Imam Asy-Syafi'i" },
  { type: "tokoh", text: "Kewajiban kita lebih banyak daripada waktu yang kita miliki.", source: "Hasan Al-Banna" },
  { type: "tokoh", text: "Kalau hidup sekadar hidup, babi di hutan pun hidup. Kalau bekerja sekadar bekerja, kera juga bekerja.", source: "Buya Hamka" }

];
