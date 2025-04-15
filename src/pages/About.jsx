import PageWrapper from '../components/PageWrapper'
import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    document.title = "Aman | About"
  }, [])

  return (
    <PageWrapper>
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg">Coming soon...</p>
    </PageWrapper>
  )
}