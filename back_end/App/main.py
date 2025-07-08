from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from App.api import router as api_router

app = FastAPI()

# Mount folder uploads ke route /uploads (buat akses file PDF dan logo)
app.mount("/uploads", StaticFiles(directory="app/uploads"), name="uploads")

# Middleware untuk izinkan akses dari frontend React (Vite)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# Tambahkan semua route dari router
app.include_router(api_router)
