import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProposal } from '../context/ProposalContext'
import AnimatedPage from '../components/AnimatedPage'

function ContentPage() {
  const navigate = useNavigate()
  const { data, updateSection } = useProposal()

  const tocList = data.toc || []
  const [contents, setContents] = useState({})

  // Inisialisasi konten awal per bab
  useEffect(() => {
    const initial = {}
    tocList.forEach((bab) => {
      initial[bab] = ''
    })
    setContents(initial)
  }, [tocList])

  const handleChange = (bab, value) => {
    setContents({ ...contents, [bab]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateSection('content', contents)
    console.log("Isi Proposal:", contents)
    alert("✅ Isi bab berhasil disimpan!")
    navigate('/reference')
  }

  return (
    <AnimatedPage>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto mt-8 mb-32 p-6 bg-[#282a36] text-[#f8f8f2] rounded-2xl shadow-xl border border-[#44475a]"
      >
        <h2 className="text-3xl font-bold mb-2 text-center text-[#bd93f9]">📝 Isi Proposal</h2>
        <p className="mb-6 text-center text-gray-300">
          Tulis isi untuk setiap bab sesuai daftar isi yang kamu buat sebelumnya.
        </p>

        {tocList.length === 0 && (
          <p className="text-red-400 font-semibold text-center mb-4">
            ⚠️ Daftar isi kosong. Silakan isi terlebih dahulu di halaman sebelumnya.
          </p>
        )}

        {tocList.map((bab, index) => (
          <div key={index} className="mb-6">
            <label className="block font-semibold mb-2 text-pink-300">{bab}</label>
            <textarea
              rows={6}
              placeholder={`✍️ Tulis isi untuk ${bab} di sini...`}
              value={contents[bab] || ''}
              onChange={(e) => handleChange(bab, e.target.value)}
              required
              className="w-full p-3 bg-[#44475a] border border-[#6272a4] text-white rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffb86c]"
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={tocList.length === 0}
          className="w-full mt-4 bg-[#ff79c6] hover:bg-[#ff92d0] text-black font-semibold px-5 py-3 rounded-lg transition disabled:opacity-50"
        >
          💾 Simpan & Lanjut ke Daftar Pustaka →
        </button>
      </form>
    </AnimatedPage>
  )
}

export default ContentPage
