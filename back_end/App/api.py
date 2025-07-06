from fastapi import APIRouter
from .models.proposal import ProposalInput
from .pdf.generator import generate_pdf_from_html
from fastapi.responses import JSONResponse
from jinja2 import Environment, FileSystemLoader
import os

router = APIRouter()

# Setup Jinja2
env = Environment(loader=FileSystemLoader("app/templates"))

@router.post("/generate")
async def generate_proposal(data: ProposalInput):
    print("🟢 Endpoint /generate dipanggil dengan:", data.dict())

    template = env.get_template("proposal_template.html")
    html = template.render(data=data.dict())
    
    output_path = f"app/uploads/{data.nama.replace(' ', '_')}_proposal.pdf"
    generate_pdf_from_html(html, output_path)

    print("✅ PDF dibuat di:", output_path)
    return {"message": "Proposal generated", "file_path": output_path}

