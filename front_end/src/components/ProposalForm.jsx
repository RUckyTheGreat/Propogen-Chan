import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ProposalForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    judul: '',
    isi: '',
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
  e.preventDefault()
  console.log("API URL dari ENV:", import.meta.env.VITE_API_URL)
  console.log("Mulai handleSubmit")
  console.log("Data yang dikirim ke backend:", formData)

    
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    console.log("Status response:", response.status)

    if (!response.ok) {
      throw new Error('Gagal mengirim proposal')
    }

    const result = await response.json()
    console.log("Hasil dari backend:", result)

    navigate('/success')
  } catch (error) {
  console.error('Terjadi kesalahan saat mengirim proposal:', error)
  alert('Gagal kirim: ' + error.message)
}

}



  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Form Proposal</h2>

      <input
        type="text"
        name="nama"
        placeholder="Nama"
        value={formData.nama}
        onChange={handleChange}
        className="w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="text"
        name="judul"
        placeholder="Judul Proposal"
        value={formData.judul}
        onChange={handleChange}
        className="w-full mb-2 p-2 border rounded"
        required
      />
      <textarea
        name="isi"
        placeholder="Isi Proposal"
        value={formData.isi}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
        rows={4}
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Kirim Proposal
      </button>
    </form>
  )
}

export default ProposalForm
