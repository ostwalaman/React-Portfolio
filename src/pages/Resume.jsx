import PageWrapper from '../components/PageWrapper'
import { useEffect } from 'react'

export default function Resume() {
  useEffect(() => {
    document.title = "Aman | Resume"
  }, [])
  return (
    <PageWrapper>
      <h1 className="text-4xl font-bold mb-4">Resume / CV</h1>
      <p className="text-lg">Coming soon...</p>
    </PageWrapper>
  )
}