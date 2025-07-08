import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProposal } from '../context/ProposalContext'
import AnimatedPage from '../components/AnimatedPage'

function TableOfContentPage() {
  const navigate = useNavigate()
  const { updateSection } = useProposal()

  const [tocList, setTocList] = useState([
    'BAB I Pendahuluan',
    'BAB II Kajian Teori'
  ])

  const handleChange = (index, value) => {
    const updated = [...tocList]
    updated[index] = value
    setTocList(updated)
  }

  const addTocItem = () => {
    if (tocList.length >= 10) return alert('Maksimal 10 bab daftar isi')
    setTocList([...tocList, ''])
  }

  const removeTocItem = (index) => {
    const updated = tocList.filter((_, i) => i !== index)
    setTocList(updated)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateSection('toc', tocList)
    console.log("Daftar Isi:", tocList)
    alert('Daftar isi disimpan!')
    navigate('/content')
  }

  return (
    <AnimatedPage>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto mt-8 mb-32 p-6 bg-[#282a36] text-[#f8f8f2] rounded-2xl shadow-xl border border-[#44475a]"
      >
        <h2 className="text-3xl font-bold mb-2 text-center text-[#bd93f9]">📑 Daftar Isi</h2>
        <p className="mb-6 text-center text-gray-300">Masukkan judul bab atau subbab proposal kamu. Maksimal 10 item.</p>

        {tocList.map((item, index) => (
          <div key={index} className="flex gap-2 mb-3">
            <input
              type="text"
              value={item}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={`Daftar Isi ${index + 1}`}
              className="flex-1 p-3 bg-[#44475a] border border-[#6272a4] text-[#f8f8f2] rounded placeholder-gray-400"
              required
            />
            {tocList.length > 1 && (
              <button
                type="button"
                onClick={() => removeTocItem(index)}
                className="text-red-400 hover:text-red-300 text-lg font-bold"
              >
                ✕
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={addTocItem}
          className="mb-6 text-[#8be9fd] hover:text-white hover:underline transition"
        >
          + Tambah Daftar Isi
        </button>

        <button
          type="submit"
          className="w-full bg-[#ff79c6] hover:bg-[#ff92d0] text-black font-semibold px-5 py-3 rounded-lg transition"
        >
          💾 Simpan & Lanjut ke Isi Proposal →
        </button>
      </form>
    </AnimatedPage>
  )
}

export default TableOfContentPage
