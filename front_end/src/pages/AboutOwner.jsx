import AnimatedPage from '../components/AnimatedPage'
import Navbar from '../components/Navbar'
import { FaReact, FaPython, FaCss3Alt, FaHtml5, FaCode, FaMagic, FaGithub } from 'react-icons/fa'
import { SiFastapi, SiTailwindcss, SiJinja, SiBlender } from 'react-icons/si'

function AboutOwner() {
  return (
    <>
      <Navbar />
      <AnimatedPage>
        <div className="bg-gradient-to-b from-[#282a36] via-[#44475a] to-[#282a36] min-h-screen text-[#f8f8f2] py-40 px-6 font-sans">
          {/* Hero Section */}
          <section className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-extrabold text-[#bd93f9] mb-4">🎓 Tentang Pembuat Website</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Hai! Aku <strong className="text-[#ff79c6]">Rucky</strong>, kreator dari <span className="text-[#50fa7b] font-semibold">Proposal Generator</span>. Website ini dibuat untuk bantu pelajar nyusun proposal dengan cepat, otomatis, dan tetap keren. Semua dimulai dari keresahan kecil dan rasa ingin bantu teman-teman untuk terus scroll fesnuk.
            </p>
            <img src="https://media.tenor.com/SDkS_6QSzjgAAAAd/tenor.gif" alt="dev gif" className="mx-auto mt-8 w-40 rounded shadow-lg" />
          </section>

          {/* Visi & Misi */}
          <section className="text-center mb-20 animate-slide-up">
            <h2 className="text-3xl font-semibold mb-4 text-[#ffb86c]">🎯 Visi & Misi Saya</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Aku percaya teknologi memudahkan kita untuk terus scroll fesnuk. Visi ku adalah bikin tools yang ramah, efisien, dan bermanfaat langsung buat pengguna — terutama pelajar dan para scroll fesnuk.
            </p>
          </section>

          {/* Kenapa Dibuat */}
          <section className="text-center mb-20 animate-slide-up">
            <h2 className="text-3xl font-semibold mb-4 text-[#ff5555]">🔥 Kenapa Saya Buat Ini?</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Dulu bikin proposal tuh ribet banget dan menyita waktu aku scrll fesnuk. Format, layout, ngetik ulang. Sekarang semua bisa otomatis. Gak perlu jadi desainer buat bikin proposal yang proper dan siap ceta. <i>*terutama untuk kepentingan pribadi saya membuat proposal yang enggak lama karena saya ingin scrol fesnuk :V</i>
            </p>
          </section>

          {/* Stack */}
          <section className="text-center mb-24 animate-fade-in">
            <h2 className="text-3xl font-semibold mb-6 text-[#8be9fd]">🛠 Teknologi yang Digunakan</h2>
            <div className="flex flex-wrap justify-center gap-6 text-5xl text-[#f1fa8c]">
              <FaReact title="React" />
              <SiFastapi title="FastAPI" />
              <SiTailwindcss title="Tailwind CSS" />
              <FaPython title="Python" />
              <FaHtml5 title="HTML5" />
              <FaCss3Alt title="CSS3" />
              <SiJinja title="Jinja2" />
              <SiBlender title="Blender" />
              <FaCode title="wkhtmltopdf" />
            </div>
            <p className="text-[#bd93f9] mt-4">Fullstack dev mode: ON 🧠</p>
          </section>

          {/* Open Source */}
          <section className="text-center mb-24 animate-slide-up">
            <h2 className="text-3xl font-semibold mb-4 text-[#50fa7b]">🌍 Open Source & Kontribusi</h2>
            <p className="max-w-2xl mx-auto text-lg mb-4">
              Kamu bisa cek dan ikut kontribusi di repositori resmi project ini. Yuk bantu bikin alat ini makin powerful!
            </p>
            <a href="https://github.com/RUckyTheGreat/Propogen-Chan" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#6272a4] hover:bg-[#44475a] text-white px-6 py-3 rounded-full text-lg transition">
              <FaGithub /> GitHub Repo
            </a>
          </section>

          {/* Ajakan */}
          <section className="text-center mb-24 animate-slide-up">
            <h2 className="text-3xl font-semibold mb-4 text-[#bd93f9]">💡 Pesan dari Saya</h2>
            <p className="max-w-2xl mx-auto text-lg mb-6">
              Kalau kamu merasa website ini bermanfaat, silakan share ke teman atau komunitasmu. Kalo ada ide fitur baru, mention aja di sosmed atau GitHub ya!
            </p>
            <img src="https://media.tenor.com/piOupYyLux0AAAAi/anime-kitty.gif" alt="cute gif" className="mx-auto w-32 rounded" />
          </section>

          {/* Kontak */}
          <section className="text-center mb-20 animate-fade-in">
            <h2 className="text-3xl font-semibold mb-6 text-[#f8f8f2]">📬 Hubungi Saya</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.tiktok.com/@naptuneeel" target="_blank" rel="noreferrer">
                <img src="https://img.shields.io/badge/TikTok-%23000000.svg?style=for-the-badge&logo=tiktok&logoColor=white" alt="TikTok" />
              </a>
              <a href="https://www.instagram.com/vyu_tune" target="_blank" rel="noreferrer">
                <img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" />
              </a>
              <a href="https://twitter.com/ruckishuman" target="_blank" rel="noreferrer">
                <img src="https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" />
              </a>
              <a href="https://discord.gg/2zwUr3jaHx" target="_blank" rel="noreferrer">
                <img src="https://img.shields.io/badge/Discord-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" />
              </a>
              <a href="https://github.com/RUckyTheGreat" target="_blank" rel="noreferrer">
                <img src="https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
              </a>
            </div>
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

export default AboutOwner