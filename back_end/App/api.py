from fastapi import APIRouter, UploadFile, File
from fastapi.responses import JSONResponse
from datetime import datetime
from pathlib import Path
from jinja2 import Environment, FileSystemLoader
import shutil
import os

from .models.proposal import ProposalData
from .pdf.generator import generate_pdf_from_html
from .utils.cleanup import cleanup_uploads  # ✅ Auto hapus file lama

router = APIRouter()

# Setup Jinja2
env = Environment(loader=FileSystemLoader("App/templates"))

UPLOAD_DIR = "App/uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

# === [1] Endpoint Upload Logo ===
@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    extension = file.filename.split('.')[-1]
    safe_filename = f"logo_{datetime.now().timestamp()}.{extension}"
    file_path = os.path.join(UPLOAD_DIR, safe_filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        "url": f"/uploads/{safe_filename}",  # Untuk preview di React
        "path": os.path.abspath(file_path)   # Untuk PDF engine wkhtmltopdf
    }

# === [2] Endpoint Generate Proposal PDF ===
@router.post("/generate")
async def generate_proposal(data: ProposalData):
    try:
        cleanup_uploads()  # ✅ Auto-clean file >1 hari
        print("🟢 Data diterima:", data.dict())

        data_dict = data.dict()

        # Ubah logo path jadi URI agar bisa dipakai wkhtmltopdf
        if data.cover.logo_path:
            try:
                uri = Path(data.cover.logo_path).as_uri()
                data_dict["cover"]["logo_path"] = uri
                print("🔗 Logo URI:", uri)
            except Exception as e:
                print("⚠️ Error convert logo_path:", e)

        # Render template HTML proposal
        template = env.get_template("proposal_template.html")
        html = template.render(data=data_dict)

        filename = f"{data.cover.judul.replace(' ', '_')}_{datetime.now().timestamp()}.pdf"
        output_path = os.path.join(UPLOAD_DIR, filename)

        generate_pdf_from_html(html, output_path)
        print("✅ PDF berhasil dibuat:", output_path)

        return {"message": "Proposal berhasil dibuat", "url": f"/uploads/{filename}"}

    except Exception as e:
        print("❌ Error generate:", e)
        return JSONResponse(status_code=500, content={"error": str(e)})
