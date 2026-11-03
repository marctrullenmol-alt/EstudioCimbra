import { Contact } from './components/Contact'
import { Design } from './components/Design'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Speed } from './components/Speed'
import { Workflow } from './components/Workflow'
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion'
import { useReveal } from './hooks/useReveal'
import { useSectionTracking } from './hooks/useSectionTracking'
import { Experience } from './three/Experience'

export default function App() {
  const reducedMotion = usePrefersReducedMotion()
  useSectionTracking()
  useReveal(reducedMotion)

  return (
    <>
      <Experience reducedMotion={reducedMotion} />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Design />
        <Speed />
        <Workflow />
        <Contact />
      </main>
    </>
  )
}
