# Laporan Tugas 2 Praktikum Web - Aplikasi Pendataan Mahasiswa

**Nama:** Abdee Alamsyah Noer Siyam 
**NIM:** 2311102247 
**Mata Kuliah:** Praktikum Analisis Berbasis Pemrograman 

---

## 1. Status Eksekusi Program (Output)
Aplikasi web sederhana ini telah berhasil dibangun dan berjalan dengan baik sesuai dengan spesifikasi tugas. Seluruh halaman fungsional dapat diakses tanpa *error*, dan fungsionalitas CRUD (Create, Read, Update, Delete) beroperasi secara normal menggunakan *in-memory data* JSON pada backend NodeJS.

## 2. Alur Fungsionalitas Aplikasi

Aplikasi ini mengusung arsitektur *Client-Server* sederhana dimana Frontend (HTML, jQuery) berkomunikasi dengan Backend (NodeJS, Express) melalui REST API. Berikut adalah rincian alurnya:

### A. Halaman Beranda (`index.html`)
- **Fungsi:** Bertindak sebagai *landing page* atau halaman utama.
- **Alur:** Saat aplikasi dibuka pada `http://localhost:3000`, pengguna disambut dengan antarmuka berbasis Bootstrap. Terdapat navigasi Navbar untuk berpindah ke halaman Tabel Data atau Form.

### B. Halaman Tampil Data & DataTables (`data.html` - READ & DELETE)
- **Fungsi:** Menampilkan seluruh data mahasiswa menggunakan plugin jQuery DataTables.
- **Alur READ (Tampil Data):** 1. Halaman dimuat.
  2. jQuery DataTables melakukan *AJAX Request* (metode `GET`) ke endpoint `/api/mahasiswa`.
  3. Server mengirimkan respons berupa *array of objects* dalam format **JSON**.
  4. DataTables menangkap JSON tersebut dan merendernya secara otomatis ke dalam bentuk tabel interaktif yang sudah dilengkapi dengan fitur *Search* dan *Pagination*.
- **Alur DELETE (Hapus Data):**
  1. Pengguna menekan tombol "Hapus" pada salah satu baris data.
  2. Muncul dialog konfirmasi bawaan browser.
  3. Jika dikonfirmasi, jQuery mengirimkan *AJAX Request* (metode `DELETE`) ke `/api/mahasiswa/:id`.
  4. Server menghapus data dari memori dan mengirim pesan sukses. Tabel kemudian di-*reload* (diperbarui) secara otomatis untuk menampilkan data terbaru.

### C. Halaman Form (`form.html` - CREATE & UPDATE)
- **Fungsi:** Halaman dinamis yang berfungsi ganda, yaitu untuk menambah data baru atau mengedit data yang sudah ada.
- **Alur CREATE (Tambah Data):**
  1. Pengguna masuk melalui menu "Tambah Data" (URL bersih: `form.html`).
  2. Pengguna mengisi form NIM, Nama, dan Jurusan, lalu menekan "Simpan".
  3. jQuery membungkus inputan form menjadi objek JSON dan mengirimkan *AJAX Request* (metode `POST`) ke `/api/mahasiswa`.
  4. Server menambahkan data tersebut ke *array*, mengembalikan status sukses, dan mengarahkan (*redirect*) pengguna kembali ke halaman `data.html`.
- **Alur UPDATE (Edit Data):**
  1. Pengguna menekan tombol "Edit" pada tabel, yang akan mengarahkan mereka ke halaman form dengan membawa parameter ID (contoh: `form.html?id=1`).
  2. jQuery mendeteksi parameter `id` di URL, lalu melakukan *Request* `GET` ke `/api/mahasiswa/1` untuk mengambil data lama.
  3. Form terisi otomatis dengan data lama tersebut.
  4. Pengguna mengubah data dan menekan "Simpan".
  5. jQuery mengirimkan *AJAX Request* (metode `PUT`) berisi JSON data yang baru ke endpoint `/api/mahasiswa/:id`.
  6. Setelah sukses, pengguna diarahkan kembali ke `data.html`.

## 3. Spesifikasi Teknis yang Digunakan
- **Backend:** NodeJS & Framework Express (Menyediakan API JSON).
- **Frontend / UI:** Framework CSS Bootstrap 5 (Sesuai Syarat Wajib).
- **Logika Frontend:** jQuery.
- **Manajemen Tabel:** Plugin jQuery DataTables (Mengonsumsi format JSON).

## 4. Link Presentasi & Lampiran
- **Video Presentasi (Demo & Penjelasan Kode):**  https://drive.google.com/file/d/1Jle9gw2swwEgcsDLvJPS9CPqPzAlwo73/view?usp=sharing
- **Slide Presentasi (PPT):** https://drive.google.com/file/d/1SEosgLfBodhoTKCfbekrKA_FvHzLDK1E/view?usp=sharing