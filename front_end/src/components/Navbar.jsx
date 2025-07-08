import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const location = useLocation()

  const linkClass = (path) =>
    `px-4 py-2 font-medium transition-colors duration-200 ${
      location.pathname === path
        ? 'text-[#ff79c6] border-b-2 border-[#ff79c6]'
        : 'text-gray-300 hover:text-[#f1fa8c]'
    }`

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`bg-[#1e1f29] shadow-lg fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-6">
          <Link to="/" className={linkClass('/')}>🏠 Home</Link>
          <Link to="/about" className={linkClass('/about')}>🌐 About Website</Link>
        </div>

        <div>
          <Link to="/about-owner" className={linkClass('/about-owner')}>🙋 About Owner</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
