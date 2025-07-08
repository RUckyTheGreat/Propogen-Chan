import AnimatedPage from '../components/AnimatedPage'
import Navbar from '../components/Navbar'

function AboutWebsite() {
  return (
    <>
      <Navbar />
      <AnimatedPage>
        <div className="bg-gradient-to-b from-[#282a36] via-[#44475a] to-[#282a36] min-h-screen text-[#f8f8f2] py-40 px-6 font-sans">
          {/* Header Section */}
          <section className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-extrabold text-[#bd93f9] mb-4">🌐 Tentang Website Ini</h1>
            <p className="text-lg text-[#f8f8f2] max-w-3xl mx-auto">
              <span className="text-[#ff79c6] font-semibold">Proposal Generator</span> adalah platform modern yang membantu kamu menyusun dokumen proposal secara otomatis dan 
              terstruktur — 
              dari halaman sampul hingga daftar pustaka. Dibuat untuk pelajar, mahasiswa, dan siapa pun yang ingin lebih banyak scroll fesnuk dan tidur.
            </p>
            <img src="https://c.tenor.com/PORlinUAPhwAAAAC/tenor.gif" alt="code gif" className="mx-auto mt-8 w-60 rounded shadow-lg border border-[#ffb86c]" />
          </section>

          {/* Fitur Unggulan */}
          <section className="mb-20 animate-slide-up">
            <h2 className="text-3xl font-semibold text-center text-[#ffb86c] mb-6">✨ Fitur Utama</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-[#44475a] p-6 shadow-md rounded-lg border border-[#6272a4]">
                <h3 className="text-xl font-bold mb-2 text-[#50fa7b]">🔖 Cover Otomatis</h3>
                <p className="text-[#f8f8f2]">Masukkan nama sekolah, logo, dan detail lainnya — halaman sampul langsung dibuat dengan layout rapi.</p>
              </div>
              <div className="bg-[#44475a] p-6 shadow-md rounded-lg border border-[#6272a4]">
                <h3 className="text-xl font-bold mb-2 text-[#50fa7b]">📘 Daftar Isi Dinamis</h3>
                <p className="text-[#f8f8f2]">Daftar isi akan dibuat otomatis berdasarkan konten yang kamu isi di halaman-halaman sebelumnya.</p>
              </div>
              <div className="bg-[#44475a] p-6 shadow-md rounded-lg border border-[#6272a4]">
                <h3 className="text-xl font-bold mb-2 text-[#50fa7b]">📝 Editor Interaktif</h3>
                <p className="text-[#f8f8f2]">Form input yang ramah pengguna memudahkan pengisian konten proposal seperti latar belakang, tujuan, dll.</p>
              </div>
              <div className="bg-[#44475a] p-6 shadow-md rounded-lg border border-[#6272a4]">
                <h3 className="text-xl font-bold mb-2 text-[#50fa7b]">📄 Ekspor ke PDF</h3>
                <p className="text-[#f8f8f2]">Setelah semua data diisi, kamu bisa langsung generate dokumen proposal dalam bentuk PDF siap cetak.</p>
              </div>
            </div>
          </section>

          {/* Teknologi */}
          <section className="text-center mb-20 animate-fade-in">
            <h2 className="text-3xl font-semibold text-[#8be9fd] mb-4">🔧 Teknologi yang Digunakan</h2>
            <p className="text-[#f1fa8c] max-w-2xl mx-auto mb-6">
              Website ini dibangun dengan stack modern untuk memastikan performa, tampilan, dan kemudahan penggunaan:
            </p>
            <ul className="flex flex-wrap justify-center gap-4 text-sm">
              <li className="bg-[#bd93f9] text-[#282a36] px-4 py-2 rounded">React</li>
              <li className="bg-[#50fa7b] text-[#282a36] px-4 py-2 rounded">Tailwind CSS</li>
              <li className="bg-[#ffb86c] text-[#282a36] px-4 py-2 rounded">FastAPI</li>
              <li className="bg-[#ff5555] text-[#282a36] px-4 py-2 rounded">wkhtmltopdf</li>
              <li className="bg-[#8be9fd] text-[#282a36] px-4 py-2 rounded">Jinja2</li>
            </ul>
          </section>

          {/* Tambahan Info */}
          <section className="text-center mb-20 animate-slide-up">
            <h2 className="text-3xl font-semibold text-[#ff5555] mb-4">📈 Roadmap Pengembangan</h2>
            <ul className="list-disc list-inside text-[#f8f8f2] max-w-2xl mx-auto text-left">
              <li>Integrasi login pengguna & penyimpanan cloud</li>
              <li>Template proposal untuk berbagai jenis kegiatan</li>
              <li>Fitur kolaborasi: kerjakan proposal bareng teman</li>
              <li>Dark/light mode otomatis</li>
            </ul>
          </section>

          {/* Ajakan */}
          <section className="text-center mb-20 animate-fade-in">
            <h2 className="text-3xl font-semibold text-[#f1fa8c] mb-4">🤝 Dukung dan Kembangkan</h2>
            <p className="text-[#f8f8f2] max-w-xl mx-auto text-lg">
              Proposal Generator terus dikembangkan. Dukung kami dengan membagikan ke temanmu, memberi feedback di github pemilik website, atau melanjutkan kemalasan kalian dan bergantung pada website ini
            </p>
            <img src="https://media.tenor.com/1cIigwthwRIAAAAC/tenor.gif" alt="thanks gif" className="mx-auto mt-8 w-65 rounded shadow-lg border border-[#ffb86c]" />
          </section>

          {/* Footer */}
          <footer className="text-center text-sm text-[#f8f8f2] border-t border-[#6272a4] pt-4">
            <p className="mb-1 italic text-[#ffb86c]">Versi website: 0.3</p>
            © {new Date().getFullYear()} Proposal Generator by <span className="font-semibold text-[#f8f8f2]">Rucky</span> • Built with 💙 using React & FastAPI
          </footer>
        </div>
      </AnimatedPage>
    </>
  )
}

export default AboutWebsite