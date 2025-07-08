from pydantic import BaseModel
from typing import List, Dict, Optional

# Data untuk halaman cover
class Cover(BaseModel):
    judul: str
    subjudul: str
    pembimbing: str
    penyusun: List[str]
    sekolah: str
    alamat: str
    logo_path: Optional[str] = None  # Boleh kosong (opsional)

# Data untuk kata pengantar
class Intro(BaseModel):
    kataPengantar: str
    tempatTanggal: str
    penulis: str

# Struktur lengkap proposal
class ProposalData(BaseModel):
    cover: Cover
    intro: Intro
    toc: List[str]
    content: Dict[str, str]
    references: List[str]
