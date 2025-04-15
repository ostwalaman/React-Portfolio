import { useEffect } from 'react'
import PageWrapper from '../components/PageWrapper'

export default function Contact() {
  useEffect(() => {
    document.title = "Aman | Contact"
  }, [])

  return (
    <PageWrapper>
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg">Coming soon...</p>
    </PageWrapper>
  )
}