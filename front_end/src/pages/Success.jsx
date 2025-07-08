import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AnimatedPage from '../components/AnimatedPage'

// Gambar GIF online & dekorasi lainnya
const animeThanksGif = "https://c.tenor.com/2itayEGOpLIAAAAC/tenor.gif"
const confettiGif = "https://c.tenor.com/eFlrIieCmvUAAAAd/tenor.gif"

function Success() {
  const location = useLocation()
  const navigate = useNavigate()

  const [pdfUrl, setPdfUrl] = useState(() => {
    const fromState = location.state?.pdfUrl
    return fromState || localStorage.getItem('latestPdfUrl') || null
  })

  const handleDownload = () => {
    window.open(`${import.meta.env.VITE_API_URL}${pdfUrl}`, '_blank')
    setTimeout(() => {
      navigate('/')
    }, 3000)
  }

  useEffect(() => {
    if (pdfUrl) {
      localStorage.setItem('latestPdfUrl', pdfUrl)
    } else {
      navigate('/')
    }
  }, [pdfUrl, navigate])

  return (
    <AnimatedPage>
      <div className="min-h-[80vh] flex flex-col justify-center items-center p-6 bg-[#282a36] text-white rounded-xl shadow-xl max-w-2xl mx-auto mt-12 relative overflow-hidden">

        {/* Confetti background (positioned absolute) */}
        <img
          src={confettiGif}
          alt="Confetti"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />

        <h1 className="text-3xl font-bold text-green-400 mb-4 text-center z-10">
          🎉 Proposal Berhasil Dibuat!
        </h1>

        <p className="mb-6 text-gray-300 text-center max-w-md z-10">
          File proposal kamu sudah siap. Klik tombol di bawah untuk mengunduh.
        </p>

        {pdfUrl ? (
          <button
            onClick={handleDownload}
            className="z-10 bg-[#50fa7b] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#69ff94] transition shadow-lg"
          >
            📄 Download Proposal
          </button>
        ) : (
          <p className="z-10 text-red-400">❌ Gagal menampilkan file PDF.</p>
        )}

        {/* GIF ucapan terima kasih anime */}
        <img
          src={animeThanksGif}
          alt="Arigato Anime"
          className="w-70 mt-10 rounded-xl z-10 shadow-lg border-2 border-[#bd93f9]"
        />

        {/* Balon efek tambahan */}
        <div className="absolute top-4 right-4 text-pink-400 text-2xl animate-bounce">
          💖
        </div>
        <div className="absolute bottom-4 left-4 text-yellow-300 text-2xl animate-spin-slow">
          🌟
        </div>
      </div>
    </AnimatedPage>
  )
}

export default Success
