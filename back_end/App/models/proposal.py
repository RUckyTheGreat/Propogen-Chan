from pydantic import BaseModel

class ProposalInput(BaseModel):
    nama: str
    email: str
    judul: str
    isi: str
