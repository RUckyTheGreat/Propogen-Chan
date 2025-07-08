import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProposal } from '../context/ProposalContext'
import AnimatedPage from '../components/AnimatedPage'

function ReferencePage() {
  const navigate = useNavigate()
  const { data, updateSection } = useProposal()

  const [references, setReferences] = useState(
    data.references.length > 0 ? data.references : ['']
  )

  const handleChange = (index, value) => {
    const updated = [...references]
    updated[index] = value
    setReferences(updated)
  }

  const addReference = () => {
    if (references.length >= 15) return alert('⚠️ Maksimal 15 referensi!')
    setReferences([...references, ''])
  }

  const removeReference = (index) => {
    const updated = references.filter((_, i) => i !== index)
    setReferences(updated)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    updateSection('references', references)

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, references })
      })

      if (!response.ok) throw new Error("Gagal membuat PDF")

      const result = await response.json()
      console.log("📄 PDF result:", result)
      localStorage.setItem('latestPdfUrl', result.url)
      navigate('/success', { state: { pdfUrl: result.url } })

    } catch (error) {
      console.error("❌ Gagal kirim data:", error)
      alert("Gagal menyimpan proposal.")
    }
  }

  return (
    <AnimatedPage>
      <form
        onSubmit={handleSubmit}
        className="p-6 mb-32 max-w-xl mx-auto bg-[#282a36] text-white rounded-2xl shadow-xl border border-[#44475a]"
      >
        <h2 className="text-2xl font-bold mb-2 text-center text-[#bd93f9]">📚 Daftar Pustaka</h2>
        <p className="mb-6 text-center text-gray-300">
          Masukkan daftar referensi yang kamu gunakan. Minimal 1, maksimal 15.
        </p>

        {references.map((item, index) => (
          <div key={index} className="flex gap-2 mb-3">
            <input
              type="text"
              value={item}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={`Referensi ${index + 1}`}
              className="flex-1 p-2 bg-[#44475a] border border-[#6272a4] rounded placeholder-gray-400 text-white"
              required
            />
            {references.length > 1 && (
              <button
                type="button"
                onClick={() => removeReference(index)}
                className="text-red-400 hover:text-red-300 font-bold"
              >
                ✕
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={addReference}
          className="mb-4 text-blue-400 hover:underline"
        >
          + Tambah Referensi
        </button>

        <br />

        <button
          type="submit"
          className="w-full mt-2 bg-[#ff79c6] hover:bg-[#ff92d0] text-black font-semibold px-5 py-3 rounded-lg transition"
        >
          ✅ Selesai & Lihat Hasil →
        </button>
      </form>
    </AnimatedPage>
  )
}

export default ReferencePage
