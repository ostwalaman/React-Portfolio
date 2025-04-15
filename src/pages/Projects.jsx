import { useEffect } from 'react'
import PageWrapper from '../components/PageWrapper'

export default function Projects() {
  useEffect(() => {
    document.title = "Aman | Projects"
  }, [])
  return (
    <PageWrapper>
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <p className="text-lg">Coming soon...</p>
    </PageWrapper>
  )
}