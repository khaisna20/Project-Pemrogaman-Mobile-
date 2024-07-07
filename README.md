# Aplikasi Mobile Prayer Time & To Do List (Agenda's)
Tujuan: Aplikasi Agenda dirancang untuk membantu pengguna melacak aktivitas mereka dengan mudah. Ini memungkinkan pengguna untuk menambah, mengedit, dan menghapus item agenda yang mencakup tanggal, waktu, dan deskripsi aktivitas.
Teknologi yang Digunakan: Aplikasi ini dibangun menggunakan HTML untuk struktur, CSS untuk styling, dan JavaScript untuk interaktivitas.

## 1. Struktur Aplikasi
HTML (index.html): Mendefinisikan struktur aplikasi. CSS (styles.css): Menyediakan gaya untuk membuat aplikasi menarik secara visual. JavaScript (script.js): Menerapkan fungsionalitas untuk menambah, mengedit, dan menghapus item agenda.

## 2. Fitur Utama
Tambahkan Agenda: Pengguna dapat menambahkan item agenda baru dengan mengisi kolom tanggal, waktu, dan aktivitas di formulir dan mengklik tombol "Tambah Agenda".
Edit Agenda: Pengguna dapat mengedit item agenda yang ada dengan mengklik tombol "Edit" di sebelah item. Formulir akan diisi dengan detail saat ini, memungkinkan pengguna untuk membuat perubahan dan menyimpannya.
Hapus Agenda: Pengguna dapat menghapus item agenda yang ada dengan mengklik tombol "Hapus" di sebelah item.

## 3. Penjelasan Detil
Struktur HTML:
Formulir disediakan untuk memasukkan tanggal, waktu, dan aktivitas. Daftar tidak berurutan (<ul>) digunakan untuk menampilkan daftar item agenda. Setiap item agenda ditampilkan sebagai item daftar (<li>) dengan tombol edit dan hapus terkait.
CSS Styling:
Gaya untuk kontainer, elemen formulir, tombol, dan daftar item agenda untuk memastikan antarmuka yang bersih dan ramah pengguna. Arahkan efek pada tombol untuk meningkatkan interaksi pengguna.

Fungsi JavaScript:
addEventListener untuk pengiriman formulir untuk menambahkan item agenda baru. Berfungsi untuk menangani pengeditan dan penghapusan item agenda. 
Fungsi editAgenda mengisi formulir dengan data item yang dipilih untuk diedit dan mengalihkan tombol formulir ke "Perbarui Agenda".
Fungsi deleteAgenda menghapus item agenda yang dipilih dari daftar.

## 4. Demo
Menambahkan Item Agenda:
Isi formulir dengan tanggal, waktu, dan aktivitas.
Klik "Tambahkan Agenda".
Item agenda baru muncul dalam daftar.
Mengedit Item Agenda:
Klik tombol "Edit" di sebelah item agenda.
Formulir terisi dengan detail item saat ini.
Buat perubahan yang diperlukan dan klik "Perbarui Agenda".
Item diperbarui dengan detail baru.
Menghapus Item Agenda
Klik tombol "Hapus" di sebelah item agenda.
Item dihapus dari daftar.

## 5. RESTful API (Representational State Transfer) 
adalah standar desain arsitektur yang sering digunakan dalam pengembangan layanan web. Dalam konteks aplikasi jadwal sholat, RESTful API memungkinkan aplikasi untuk mengakses dan memanipulasi data melalui permintaan HTTP.

### Cara Kerja RESTful API dalam Aplikasi Jadwal Sholat:

1. *Endpoint API*:
   - URL yang digunakan untuk mengakses data jadwal sholat adalah https://muslimsalat.com/jakarta.json.
   - Endpoint ini akan memberikan respons dalam format JSON yang berisi informasi tentang jadwal sholat di Jakarta.

2. *HTTP Method*:
   - GET: Digunakan untuk mengambil data dari server. Dalam contoh ini, kita menggunakan GET untuk mengambil jadwal sholat.

3. *Respons JSON*:
   - Respons dari API https://muslimsalat.com/jakarta.json berisi informasi jadwal sholat dalam format JSON. Berikut adalah struktur data yang direspons:
     
4. *Parsing Respons JSON*
   - Setelah menerima respons JSON, data diparsing (diurai) untuk menampilkan informasi yang dibutuhkan. Berikut adalah bagian kode JavaScript yang bertanggung jawab untuk memparsing dan menampilkan data

6. *Periodic Update*:
   - Fungsi setInterval digunakan untuk memperbarui data setiap menit:
     javascript
     setInterval(fetchPrayerTimes, 60000); // Update every minute

## 6. Tampilan Layar Prayer Time
![prayer time](https://github.com/khaisna20/Project-Pemrogaman-Mobile-/assets/169865008/eb2f1c06-2589-49e7-ae97-9b550539d1aa)

## 7. Tampilan Layar To Do List (Agenda's)
![tampilan to do list](https://github.com/khaisna20/Project-Pemrogaman-Mobile-/assets/169865008/40e77833-c7cf-496a-91e6-a297bfde60ec)

## 8. Tampilan To Do List (Agenda's) fitur CRUD
![tampilan crud](https://github.com/khaisna20/Project-Pemrogaman-Mobile-/assets/169865008/454deeb0-e6b8-4285-b948-389f93a68164)

Berikut tampilan mobile to do list yang mempunyai fitur CRUD (Create, Read, Update, dan Delete)

## 9. Kesimpulan
Dengan penjelasan di atas, kita bisa memahami bagaimana RESTful API digunakan untuk mengambil dan menampilkan jadwal sholat secara dinamis. Kode ini memungkinkan aplikasi untuk selalu menampilkan informasi waktu sholat yang terkini sesuai dengan data yang diambil dari API
Aplikasi Agenda menyediakan cara sederhana namun efektif untuk mengelola aktivitas sehari-hari. Ini menunjukkan penggunaan teknologi pengembangan web dasar untuk menciptakan pengalaman pengguna yang interaktif.
Aplikasi ini dapat diperluas lebih lanjut dengan fitur tambahan seperti persistensi data menggunakan local Storage, penyortiran item agenda, dan pemberitahuan untuk kegiatan mendatang.





