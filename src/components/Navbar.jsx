import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg px-10 py-5 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-center">
        <ul className="flex flex-wrap items-center text-lg font-medium list-none m-0 p-0">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/skills" className="nav-link">Skills</Link></li>
          <li><Link to="/projects" className="nav-link">Projects</Link></li>
          <li><Link to="/resume" className="nav-link">Resume</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}