import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Vision from '@/components/Vision'
import Milestones from '@/components/Milestones'
import Events from '@/components/Events'
import TEC from '@/components/TEC'
import Team from '@/components/Team'
import Leadership from '@/components/Leadership'
import DigitalPresence from '@/components/DigitalPresence'
import StartupRegistration from '@/components/StartupRegistration'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Navbar />
      <Hero />
      <Vision />
      <Milestones />
      <Events />
      <TEC />
      <Team />
      <Leadership />
      <DigitalPresence />
      <StartupRegistration />
      <Footer />
    </main>
  )
}
