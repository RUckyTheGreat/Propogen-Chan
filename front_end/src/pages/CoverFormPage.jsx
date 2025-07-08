import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProposal } from '../context/ProposalContext'

function CoverFormPage() {
  const navigate = useNavigate()
  const { updateSection } = useProposal()

  const [cover, setCover] = useState({
    judul: '',
    subjudul: '',
    pembimbing: '',
    penyusun: [''],
    sekolah: '',
    alamat: '',
    logo_path: ''
  })

  const handleChange = (e) => {
    setCover({ ...cover, [e.target.name]: e.target.value })
  }

  const updatePenyusun = (index, value) => {
    const newList = [...cover.penyusun]
    newList[index] = value
    setCover({ ...cover, penyusun: newList })
  }

  const addPenyusun = () => {
    setCover({ ...cover, penyusun: [...cover.penyusun, ''] })
  }

  const handleLogoUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/upload`, {
        method: 'POST',
        body: formData
      })

      const result = await res.json()

      if (result.path) {
        const updatedCover = { ...cover, logo_path: result.path }
        setCover(updatedCover)
        updateSection('cover', updatedCover)
      } else {
        alert('Upload logo gagal.')
      }
    } catch (err) {
      alert('Upload logo error.')
      console.error(err)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateSection('cover', cover)
    console.log("✅ DATA COVER:", cover)
    alert('Cover berhasil disimpan!')
    navigate('/intro')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto mt-8 mb-32 p-6 bg-[#282a36] text-[#f8f8f2] rounded-2xl shadow-lg border border-[#44475a]"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-[#bd93f9]">📝 Cover Proposal</h2>

      <input
        type="text"
        name="judul"
        placeholder="Judul Proposal"
        value={cover.judul}
        onChange={handleChange}
        required
        className="w-full mb-4 p-3 bg-[#44475a] text-[#f8f8f2] border border-[#6272a4] rounded"
      />

      <input
        type="text"
        name="subjudul"
        placeholder="Subjudul (opsional)"
        value={cover.subjudul}
        onChange={handleChange}
        className="w-full mb-4 p-3 bg-[#44475a] text-[#f8f8f2] border border-[#6272a4] rounded"
      />

      <input
        type="text"
        name="pembimbing"
        placeholder="Nama Pembimbing"
        value={cover.pembimbing}
        onChange={handleChange}
        required
        className="w-full mb-4 p-3 bg-[#44475a] text-[#f8f8f2] border border-[#6272a4] rounded"
      />

      <label className="block font-semibold mb-2 text-[#8be9fd]">Nama Penyusun:</label>
      {cover.penyusun.map((nama, index) => (
        <input
          key={index}
          type="text"
          value={nama}
          onChange={(e) => updatePenyusun(index, e.target.value)}
          placeholder={`Penyusun ${index + 1}`}
          required
          className="w-full mb-3 p-3 bg-[#44475a] text-[#f8f8f2] border border-[#6272a4] rounded"
        />
      ))}

      <button
        type="button"
        onClick={addPenyusun}
        className="mb-6 text-sm text-[#50fa7b] hover:underline"
      >
        + Tambah Penyusun
      </button>

      <input
        type="text"
        name="sekolah"
        placeholder="Nama Sekolah"
        value={cover.sekolah}
        onChange={handleChange}
        required
        className="w-full mb-4 p-3 bg-[#44475a] text-[#f8f8f2] border border-[#6272a4] rounded"
      />

      <input
        type="text"
        name="alamat"
        placeholder="Alamat Sekolah"
        value={cover.alamat}
        onChange={handleChange}
        required
        className="w-full mb-4 p-3 bg-[#44475a] text-[#f8f8f2] border border-[#6272a4] rounded"
      />

      <label className="block mb-2 font-semibold text-[#ffb86c]">Upload Logo Sekolah:</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleLogoUpload}
        className="mb-6 text-white"
      />

      <button
        type="submit"
        className="bg-[#ff79c6] hover:bg-[#ff92d0] text-black font-semibold px-5 py-3 rounded-lg w-full transition"
      >
        🚀 Simpan & Lanjut
      </button>
    </form>
  )
}

export default CoverFormPage
