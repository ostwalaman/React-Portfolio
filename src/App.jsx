import { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'

function App() {
  useEffect(() => {
    document.title = "Aman | Home"
  }, [])

  return (
    <>
      <Navbar />

      <main className="main-content pt-36 min-h-screen bg-gradient-to-tr from-sky-600 to-emerald-500 text-white flex items-center justify-center px-4">
        <div className="max-w-2xl text-center">
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="custom-profile-img rounded-full mx-auto mb-6 shadow-lg border-4 border-white object-cover"
          />

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm Aman 👋
          </h1>
          <p className="text-lg md:text-xl mb-6 font-medium tracking-wide">
            A Data Scientist & Software Engineer building intelligent, impactful tools.
          </p>
          <div className="btn-group mt-10 mb-6">
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>
            <a href="/resume.pdf" download className="btn btn-outline">
              Download Resume
            </a>
          </div>

        </div>
      </main>
    </>
  )
}

export default App;