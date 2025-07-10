
# 📄 Propogen-Chan - Proposal Generator Web App

Propogen-Chan adalah aplikasi pembuat **proposal otomatis berbasis web**, dibuat menggunakan **React (Vite)** di frontend dan **FastAPI** di backend. Aplikasi ini memungkinkan pengguna mengisi form interaktif dan mendapatkan hasil proposal dalam bentuk **PDF profesional**, lengkap dengan cover, kata pengantar, daftar isi, isi proposal, hingga daftar pustaka.

> Dibuat oleh: **RuckyTheGreat** 🚀  
> 🌐 Live Preview: [propogen-chan.vercel.app](https://propogen-chan-qk1e.vercel.app/) <br>
> 🤑 Software propogen-chan khusus windows: [propogen-chan-win32-x64](https://www.mediafire.com/file/41ifbilgvdj9frk/propogen-chan-1.0.0_Setup.exe/file)
---

## 🛠️ Fitur Utama

- ✅ Upload logo sekolah/organisasi
- ✅ Isi form step-by-step untuk semua bagian proposal
- ✅ Progress bar interaktif dengan karakter emote lucu (anime vibes 🥺)
- ✅ Preview dan download hasil proposal dalam format PDF
- ✅ UI modern dan animatif dengan React + Tailwind
- ✅ Server backend dengan FastAPI (struktur modular)
- ✅ PDF dibuat dari HTML menggunakan pdfkit + wkhtmltopdf
- ✅ Otomatis hapus file lama (lebih dari 1 hari)
- ✅ Berjalan di OS sendiri tanpa butuh server berbayar

---

## 📦 Teknologi yang Digunakan

| Teknologi     | Keterangan                         |
|---------------|-------------------------------------|
| React (Vite)  | Frontend SPA                        |
| TailwindCSS   | Styling responsif & animatif        |
| FastAPI       | Backend & API RESTful              |
| Python 3.11+  | Bahasa backend                      |
| pdfkit + wkhtmltopdf | Konversi HTML ke PDF        |
| Jinja2        | Template engine untuk isi proposal  |

---

## 📁 Struktur Proyek

```bash
Propogen-Chan/
├── front_end/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── assets/
│   │   └── main.jsx
│   └── public/
│       └── index.html
│
├── back_end/
│   └── App/
│       ├── api.py
│       ├── main.py
│       ├── models/
│       │   └── proposal.py
│       ├── pdf/
│       │   └── generator.py
│       ├── utils/
│       │   └── cleanup.py
│       ├── templates/
│       │   └── proposal_template.html
│       └── uploads/
```

---

## 🚀 Cara Penggunaan

### 1. Masuk ke halaman utama

📍 [https://propogen-chan-qk1e-cm1lac37h-ruckynothumans-projects.vercel.app/](https://propogen-chan-qk1e.vercel.app/)

### 2. Isi form per langkah:

- 📄 **Cover Proposal**: Judul, subjudul, pembimbing, penyusun, alamat, logo
- ✍️ **Kata Pengantar**: Isi teks, tempat dan tanggal, penulis
- 📚 **Daftar Isi**: List (array string)
- 📑 **Isi Proposal**: Berisi section (key = judul, value = isi)
- 📎 **Daftar Pustaka**: List referensi (array string)

### 3. Submit

- Data dikirim ke backend FastAPI
- Render ke HTML (pakai Jinja2)
- HTML diubah ke PDF pakai pdfkit + wkhtmltopdf
- PDF disimpan di `/uploads` dan dikembalikan URL-nya

### 4. Download PDF

- Di halaman success, klik tombol "Download Proposal"
- Akan diarahkan ke file PDF
- Setelah 3 detik otomatis kembali ke halaman awal

---

## 🧹 Pembersihan File Otomatis

File lama (lebih dari 1 hari) akan dihapus otomatis setiap kali backend `/generate` dipanggil.

```py
# utils/cleanup.py
EXPIRY_SECONDS = 60 * 60 * 24  # 1 hari
```

---

## 🧠 API Endpoint

### `POST /upload`

Upload logo (tipe form-data, key = `file`)

Response:
```json
{
  "url": "/uploads/logo_1720432400.98899.png",
  "path": "C:/Users/u/Documents/Propogen-Chan/back_end/app/uploads/logo_1720432400.98899.png"
}
```

### `POST /generate`

Kirim seluruh data proposal:

```json
{
  "cover": {
    "judul": "Judul Proposal",
    "subjudul": "Subjudul",
    "pembimbing": "Ibu Guru Pembimbing",
    "penyusun": ["Nama Siswa A", "Nama Siswa B"],
    "sekolah": "SMKN 2 Bandung",
    "alamat": "Jl. Buah Batu",
    "logo_path": "C:/.../logo.png"
  },
  "intro": {
    "kataPengantar": "Puji syukur...",
    "tempatTanggal": "Bandung, 8 Juli 2025",
    "penulis": "Rucky"
  },
  "toc": ["Cover", "Kata Pengantar", "Daftar Isi", "Isi Proposal", "Daftar Pustaka"],
  "content": {
    "Pendahuluan": "Ini adalah pendahuluan...",
    "Tujuan": "Untuk mengikuti lomba",
    "Penutup": "Semoga disetujui"
  },
  "references": ["Buku Proposal Hebat 2022", "Internet, Wikipedia"]
}
```

Response:
```json
{
  "message": "Proposal berhasil dibuat",
  "url": "/uploads/Judul_Proposal_1720432512.2383.pdf"
}
```

---

## 🎨 Waifu Progress Tracker

| Halaman           | Rating |
|-------------------|--------|
| Cover             | 0%     |
| Kata Pengantar    | 30%    |
| Daftar Isi        | 55%    |
| Isi Proposal      | 75%    |
| Daftar Pustaka    | 100%   |

---

## 📁 Upload & PDF Path

- File logo dan PDF disimpan di `app/uploads/`
- Bisa diakses via URL: `https://your-backend-domain/uploads/...`

---

## 👨‍💻 Developer

**Nama:** RuckyTheGreat  
**Sekolah:** SMKN 2 - PPLG X  
**Github:** [@RuckIs](https://github.com/RuckIs)

---

## 📃 License

MIT License — Bebas digunakan dan dimodifikasi untuk pendidikan atau proyek pribadi.

---

## 🙌 Terima Kasih

Kalau suka proyek ini:
- ⭐ Kasih bintang di GitHub
- 💬 Gunakan untuk lomba / tugas sekolah
- 🎓 Jangan lupa belajar juga backend-nya ya!
