import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Add or remove the 'menu-open' class on the <body> element
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [isOpen])

  return (
    <nav className="fixed top-0 bg-white shadow-lg w-full z-50">
      {/* Navbar content */}
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center">
        {/* Logo */}
        <div className="w-1/4">
          <Link to="/" className="text-xl font-bold text-gray-900">
            Aman
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="w-2/4 flex justify-center">
          <div className="desktop-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/skills" className="nav-link">Skills</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/resume" className="nav-link">Resume</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>

        {/* Mobile hamburger button */}
        <div className="w-1/4 flex justify-end">
          <button
            className="mobile-hamburger focus:outline-none p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div className="mobile-menu md:hidden">
        <Link to="/" className="block nav-link py-3 text-center" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" className="block nav-link py-3 text-center" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/skills" className="block nav-link py-3 text-center" onClick={() => setIsOpen(false)}>Skills</Link>
        <Link to="/projects" className="block nav-link py-3 text-center" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/resume" className="block nav-link py-3 text-center" onClick={() => setIsOpen(false)}>Resume</Link>
        <Link to="/contact" className="block nav-link py-3 text-center" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </nav>
  )
}