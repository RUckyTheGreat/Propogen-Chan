from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from App.api import router as api_router

app = FastAPI()

# ✅ Serve uploaded files
app.mount("/uploads", StaticFiles(directory="App/uploads"), name="uploads")

# ✅ CORS: Izinkan akses frontend Vite
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

# ✅ Import router API
app.include_router(api_router)

# ✅ Root test API
@app.get("/")
def root():
    return {"status": "Backend is running 🚀"}
