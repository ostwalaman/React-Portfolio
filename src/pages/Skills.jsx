import PageWrapper from '../components/PageWrapper'
import { useEffect } from 'react'

export default function Skillst() {
  useEffect(() => {
    document.title = "Aman | Skills"
  }, [])
  return (
    <PageWrapper>
      <h1 className="text-4xl font-bold mb-4">Skills</h1>
      <p className="text-lg">Coming soon...</p>
    </PageWrapper>
  )
}
