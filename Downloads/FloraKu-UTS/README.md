# Pengumpulan UTS Pemrograman Web Dasar

## Identitas Mahasiswa

- Nama: Nizar Ilham P.F.
- NIM: 2405101089
- Kelas: 5E
- Program Studi: [ISI PROGRAM STUDI]
- Mata Kuliah: Pemrograman Web Dasar
- Tahun Akademik: 2026/2027

## Deskripsi

Repository ini berisi source code, dokumentasi hasil pengerjaan Ujian Tengah Semester (UTS)
mata kuliah Pemrograman Web Dasar.

## Deskripsi Pengerjaan UTS

**FloraKu** adalah website jual beli tanaman hias. Aplikasi ini menjawab masalah penjualan tanaman hias yang masih manual
(pesanan lewat chat, stok tidak pasti, verifikasi pembayaran manual, belum ada riwayat dan rekap penjualan).
UTS mencakup bagian **frontend** (HTML, CSS, JavaScript) sesuai dokumen perancangan. Data contoh dan data hasil
interaksi disimpan di `localStorage` browser karena backend dan database (PHP dan MySQL) dikerjakan pada UAS.

## Fitur yang Diimplementasikan

1. Registrasi dan login dengan pembedaan peran (pelanggan dan admin), disertai validasi form.
2. Katalog tanaman dengan pencarian, filter (kategori, perawatan, cahaya), dan pengurutan harga.
3. Detail tanaman: nama latin, ukuran, stok, tingkat perawatan, kebutuhan cahaya, dan ulasan.
4. Keranjang belanja (tambah, ubah jumlah, hapus) dengan total otomatis dan batas stok.
5. Alamat pengiriman, checkout dengan pilihan kurir, ongkir otomatis, dan konfirmasi pesanan.
6. Pembayaran dengan unggah bukti (validasi tipe dan ukuran berkas), riwayat dan detail transaksi, pembatalan, konfirmasi diterima, serta ulasan.
7. Stok berkurang otomatis saat pesanan dibuat dan kembali saat batal (termasuk batal otomatis lewat batas bayar).
8. Halaman admin: dashboard, kelola kategori dan produk, kelola stok, verifikasi pembayaran dan pengiriman (input resi), kelola pengguna, pengaturan pembayaran dan kurir, laporan penjualan per periode.

## Struktur Folder

Semua file berada dalam satu folder:

- `index.html`: kerangka halaman (seluruh halaman dimuat lewat rute `#/nama-halaman`).
- `style.css`: tampilan.
- `script.js`: data contoh, tampilan tiap halaman, dan logika aplikasi.
- `README.md`: dokumentasi.
- Screenshot hasil implementasi disimpan di folder ini (misalnya `screenshot-katalog.png`).

## Cara Menjalankan Aplikasi

1. Unduh atau clone repository ini.
2. Buka `index.html` di browser (tanpa server tambahan).
3. Akun demo: pelanggan `nizar@mail.com` / `user123`, admin `admin@floraku.id` / `admin123`.
4. Untuk mengembalikan data awal, hapus data situs (localStorage) di browser.

## Referensi

- Dokumen Perancangan Aplikasi FloraKu (Bab I sampai Bab III).
