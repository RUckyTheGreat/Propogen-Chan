import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProposal } from '../context/ProposalContext'
import AnimatedPage from '../components/AnimatedPage'

function IntroFormPage() {
  const navigate = useNavigate()
  const { updateSection } = useProposal()

  const [intro, setIntro] = useState({
    kataPengantar: '',
    tempatTanggal: '',
    penulis: ''
  })

  const handleChange = (e) => {
    setIntro({ ...intro, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateSection('intro', intro)
    console.log('Data kata pengantar:', intro)
    alert('Kata pengantar disimpan!')
    navigate('/toc')
  }

  return (
    <AnimatedPage>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto mt-8 mb-32 p-6 bg-[#282a36] text-[#f8f8f2] rounded-2xl shadow-xl border border-[#44475a]"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-[#bd93f9]">📜 Kata Pengantar</h2>

        <textarea
          name="kataPengantar"
          placeholder="Tulis kata pengantar proposal di sini..."
          value={intro.kataPengantar}
          onChange={handleChange}
          rows={8}
          required
          className="w-full mb-5 p-4 bg-[#44475a] border border-[#6272a4] text-[#f8f8f2] rounded placeholder-gray-300"
        />

        <input
          type="text"
          name="tempatTanggal"
          placeholder="Tempat, Tanggal (cth: Bandung, 12 Februari 2025)"
          value={intro.tempatTanggal}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 bg-[#44475a] border border-[#6272a4] text-[#f8f8f2] rounded placeholder-gray-300"
        />

        <input
          type="text"
          name="penulis"
          placeholder="Nama penulis akhir"
          value={intro.penulis}
          onChange={handleChange}
          required
          className="w-full mb-6 p-3 bg-[#44475a] border border-[#6272a4] text-[#f8f8f2] rounded placeholder-gray-300"
        />

        <button
          type="submit"
          className="w-full bg-[#ff79c6] hover:bg-[#ff92d0] text-black font-semibold px-5 py-3 rounded-lg transition"
        >
          💾 Simpan & Lanjut ke Daftar Isi →
        </button>
      </form>
    </AnimatedPage>
  )
}

export default IntroFormPage
