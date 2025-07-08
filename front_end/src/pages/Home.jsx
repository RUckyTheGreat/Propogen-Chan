import { Link } from 'react-router-dom'
import AnimatedPage from '../components/AnimatedPage'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
      <Navbar />
      <AnimatedPage>
        <div className="flex flex-col min-h-screen font-sans bg-[#282a36] text-[#f8f8f2] pt-20">
          {/* 🌟 HERO */}
          <section className="bg-gradient-to-br from-[#44475a] via-[#282a36] to-[#44475a] py-20 px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-extrabold mb-6 text-[#bd93f9] drop-shadow-sm">
                📄 Proposal Generator
              </h1>
              <p className="text-xl text-[#f8f8f2] mb-6">
                Website Bikin proposal otomatis. Di sini, cukup isi formulir sederhana —
                dan proposal otomatis jadi dalam bentuk PDF lebih cepat dari pada sinyal rumah kamu :V.
              </p>
              <p className="italic text-[#f1fa8c]">
                Website versi: Beta 0.4
              </p>

              <div className="mt-10">
                <Link to="/cover">
                  <button className="bg-[#ff79c6] text-[#282a36] px-8 py-4 text-lg rounded-full hover:bg-[#bd93f9] transition shadow-md">
                    🚀 Mulai Buat Proposal
                  </button>
                </Link>
              </div>
            </div>
          </section>

          {/* 🧩 KEUNGGULAN */}
          <section className="bg-[#343746] py-20 px-6 text-center">
            <h2 className="text-3xl font-semibold mb-12 text-[#f8f8f2]">
              Apa keunikan Proposal Generator?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-[#f8f8f2]">
              <div className="p-6 border border-[#6272a4] rounded-lg shadow hover:shadow-md transition">
                <h3 className="text-xl font-bold mb-2">⚡ Super Cepat</h3>
                <p>Bikin proposal hanya dalam hitungan menit, tinggal isi dan generate. Bahkan jaringan starlink pun kalah</p>
              </div>
              <div className="p-6 border border-[#6272a4] rounded-lg shadow hover:shadow-md transition">
                <h3 className="text-xl font-bold mb-2">🎯 Rapi & Terstruktur</h3>
                <p>Template sudah sesuai format standar, cocok untuk tugas sekolah atau laporan biasa.  (Insyaallah)</p>
              </div>
              <div className="p-6 border border-[#6272a4] rounded-lg shadow hover:shadow-md transition">
                <h3 className="text-xl font-bold mb-2">🖨️ Siap Cetak</h3>
                <p>Langsung dapat file PDF siap cetak tanpa edit ulang.<i>*kalau mau edit ulang pake website convert atau pake google docs aja mas </i> </p>
              </div>
            </div>
          </section>

          {/* 📘 7 LANGKAH */}
          <section className="bg-[#44475a] py-20 px-6">
            <h2 className="text-3xl font-semibold text-center mb-10">📚 7 Langkah Mudah</h2>
            <ol className="list-decimal list-inside max-w-2xl mx-auto space-y-4 text-lg text-[#f8f8f2]">
              <li>Buka halaman cover dan isi informasi sekolah.</li>
              <li>Upload logo sekolah/madrasah atau lembaga.</li>
              <li>Isi pendahuluan dan tujuan proposal.</li>
              <li>Otomatisasi daftar isi berdasarkan struktur yang kamu buat.</li>
              <li>Masukkan konten utama seperti latar belakang, manfaat, dll.</li>
              <li>Tambahkan referensi atau daftar pustaka yang relevan.</li>
              <li>Klik Generate → PDF jadi!</li>
            </ol>
          </section>

          {/* 🧠 CTA KREATIF */}
          <section className="bg-gradient-to-t from-[#44475a] to-[#282a36] py-20 px-6 text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#f8f8f2]">
              Siap dikejar deadline dari guru kamu ? pakai ini aja
            </h2>
            <p className="text-[#f1fa8c] mb-8">
              Yuk mulai sekarang. Gratis. Tanpa login. Tanpa ribet. perbanyak scroll fesnuk
            </p>
            <Link to="/cover">
              <button className="bg-[#bd93f9] text-[#282a36] px-10 py-4 rounded-full text-lg hover:bg-[#ff79c6] transition shadow-lg">
                ✍️ Mulai Sekarang
              </button>
            </Link>
          </section>

          {/* 👣 FOOTER */}
          <footer className="text-center text-sm text-[#f8f8f2] border-t border-[#6272a4] pt-4">
            <p className="mb-1 italic text-[#ffb86c]">Versi website: 0.3</p>
            © {new Date().getFullYear()} Proposal Generator by <span className="font-semibold text-[#f8f8f2]">Rucky</span> • Built with 💙 using React & FastAPI
          </footer>
        </div>
      </AnimatedPage>
    </>
  )
}
console.log('Home page loaded')

export default Home