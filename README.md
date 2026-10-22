# Form Pendaftaran dengan Validasi

Proyek front-end sederhana menggunakan HTML, CSS, dan JavaScript untuk latihan validasi form.

## Menjalankan proyek
1. Ekstrak folder proyek.
2. Buka `index.html` di browser, atau jalankan dengan ekstensi Live Server di VS Code.
3. Isi form dan klik **Daftar sekarang** untuk menguji validasi.

## Aturan validasi
- **Nama:** wajib diisi setelah spasi di awal/akhir dihapus, minimal 3 karakter.
- **Email:** harus mengikuti format email dasar, misalnya `nama@email.com`.
- **Nomor HP:** menerima format Indonesia `08...` atau `628...` dengan panjang yang ditentukan pada kode.
- **Tanggal:** wajib diisi dan tidak boleh sebelum hari ini.
- Jika semua field kosong, seluruh pesan error muncul dan fokus diarahkan ke field nama.
- Jika semua data valid, pesan sukses muncul. Ini masih demo front-end; belum mengirim data ke server/database.

## Checklist pengujian sesuai instruksi

- [ ] Semua kosong, klik Daftar: semua pesan muncul; fokus ke Nama.
- [ ] Nama hanya spasi: “Nama wajib diisi.”
- [ ] Nama 2 huruf: “Nama minimal 3 huruf.”
- [ ] Email tidak valid: pesan format email.
- [ ] Nomor HP `0812345`: pesan format nomor.
- [ ] Nomor HP `1234567890`: pesan format nomor.
- [ ] Tanggal kemarin: “Tanggal paling cepat hari ini.”
- [ ] Semua data valid: pesan sukses.

## Menyimpan ke Git

Jalankan perintah berikut dari terminal di folder proyek:

```bash
git init
git add index.html style.css script.js README.md
git commit -m "Buat form pendaftaran dengan validasi"
```

Jika Git meminta identitas, atur nama dan email Git terlebih dahulu:

```bash
git config --global user.name "Nama Kamu"
git config --global user.email "email-kamu@example.com"
```

Untuk mengunggah ke repository GitHub yang sudah dibuat, tambahkan URL repository milikmu:

```bash
git branch -M main
git remote add origin URL_REPOSITORY_GITHUB_KAMU
git push -u origin main
```

Ganti URL contoh dengan URL repository milikmu. Jangan masukkan password atau token ke dalam source code.
