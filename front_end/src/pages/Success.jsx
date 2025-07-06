import { Link } from 'react-router-dom'

function Success() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Proposal berhasil dibuat!</h1>
      <p className="text-gray-700 mb-6">File PDF akan segera diunduh atau dikirimkan sesuai konfigurasi.</p>
      <Link
        to="/"
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
      >
        Kembali ke Beranda
      </Link>
    </div>
  )
}

export default Success
