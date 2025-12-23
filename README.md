
# 📄 Propogen-Chan — Proposal Generator Web App

Propogen-Chan adalah aplikasi pembuat proposal otomatis berbasis web.  
User hanya isi form — hasilnya langsung jadi **PDF profesional** berisi:

✔ Cover proposal  
✔ Kata pengantar  
✔ Daftar isi  
✔ Isi proposal (section dinamis)  
✔ Daftar pustaka

> ✨ Developer: **RuckyTheGreat**  
> 🏫 SMKN 2 Bandung — PPLG  
> 💻 Teknologi: FastAPI + React + Tailwind + wkhtmltopdf

---
## Preview

![Preview](Animation3.gif)

---

## ⭐ Fitur Utama

| Fitur | Status |
|------|--------|
| Upload logo untuk cover | ✅ |
| Progress bar dengan karakter imut | ✅ |
| Export PDF dengan template rapi | ✅ |
| Cleanup otomatis file PDF lama | ✅ |
| UI React + Tailwind (Vite) | ✅ |
| Backend modular dengan FastAPI | ✅ |

---

## 📦 Teknologi

| Stack | Detail |
|-------|-------|
| **Frontend** | React + Vite + TailwindCSS |
| **Backend** | FastAPI |
| **PDF Engine** | pdfkit + wkhtmltopdf |
| **Templating** | Jinja2 |
| **Python** | 3.10+ |

---

## 📂 Struktur Proyek

```
Propogen-Chan/
│
├── front_end/       # React + Vite (UI)
│   ├── src/
│   ├── public/
│   └── .env         # Wajib dibuat manual
│
└── back_end/
    ├── App/
    │   ├── main.py      # Entry FastAPI
    │   ├── api.py
    │   ├── templates/   # Template HTML ke PDF
    │   ├── uploads/     # Logo & PDF output
    │   └── utils/cleanup.py
```

---

## 🧰 📌 Prasyarat (Install Dulu)

| Item | Link Download |
|------|---------------|
| Python 3.10+ | https://www.python.org/downloads/ |
| Node.js LTS | https://nodejs.org/en/download |
| wkhtmltopdf | https://wkhtmltopdf.org/downloads.html |
| Git (Opsional) | https://git-scm.com/downloads |

Setelah install wkhtmltopdf, cek versi:

```powershell
& "C:\Program Files\wkhtmltopdfin\wkhtmltopdf.exe" --version
```

Jika muncul versi ➜ ✅ sukses

---

## ⚙️ Instalasi & Setup Project

### ✅ 1️⃣ Setup Backend

Masuk folder backend:

```bash
cd back_end
pip install -r requirements.txt
```

Edit path wkhtmltopdf di:

📌 `App/pdf/generator.py`

```py
wkhtml_path = r"C:\Program Files\wkhtmltopdfin\wkhtmltopdf.exe"
```

🛠 Jalankan Backend:

```bash
uvicorn App.main:app --reload
```

Jika sukses ➜ buka:
👉 http://127.0.0.1:8000

---

### ✅ 2️⃣ Setup Frontend

Masuk folder:

```bash
cd front_end
npm install
```

Buat file baru `.env` di **front_end**:

```
VITE_API_URL=http://127.0.0.1:8000
```

Jalankan frontend:

```bash
npm run dev
```

Jika sukses ➜ buka:
👉 http://127.0.0.1:5173

---

## 🚀 Cara Pakai

1️⃣ Isi form step-by-step  
2️⃣ Upload logo cover  
3️⃣ Submit di halaman **Daftar Pustaka**  
4️⃣ Download PDF yang sudah jadi otomatis ✅

---

## 🔌 API Endpoint

| Method | Route | Fungsi |
|--------|-------|--------|
| POST | /upload | Upload logo |
| POST | /generate | Generate PDF proposal |
| GET | / | Test backend |

---

### Contoh Request ke `/generate`

```json
{
  "cover": {...},
  "intro": {...},
  "toc": [...],
  "content": {...},
  "references": [...]
}
```

Return:

```json
{
  "message": "Proposal berhasil dibuat",
  "url": "/uploads/NamaProposal_12345.pdf"
}
```

---

## 🧹 Auto Cleanup

File PDF lama > 24 jam otomatis terhapus setiap kali generate PDF.

```py
EXPIRY_SECONDS = 60 * 60 * 24
```

---

## 🎴 Cute Progress UI

✔ 0% — Cover  
✔ 30% — Kata Pengantar  
✔ 55% — Daftar Isi  
✔ 75% — Isi Proposal  
✔ 100% — Daftar Pustaka

---

## 👨‍💻 Author

| Info | Detail |
|------|--------|
| Developer | **RuckyTheGreat** |
| Sekolah | SMKN 2 Bandung — PPLG |
| GitHub | https://github.com/RuckIs |

---

## 📜 Lisensi

MIT License — Bebas digunakan untuk tugas sekolah & edukasi ✅

---

