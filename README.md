# Aplikasi Mobile To Do List (Planner)
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

## 5. Kesimpulan
Aplikasi Agenda menyediakan cara sederhana namun efektif untuk mengelola aktivitas sehari-hari. Ini menunjukkan penggunaan teknologi pengembangan web dasar untuk menciptakan pengalaman pengguna yang interaktif.
Aplikasi ini dapat diperluas lebih lanjut dengan fitur tambahan seperti persistensi data menggunakan local Storage, penyortiran item agenda, dan pemberitahuan untuk kegiatan mendatang.





