import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IntroSection from './components/IntroSection'
import ServicesSection from './components/ServicesSection'
import ProcessSection from './components/ProcessSection'
import PortfolioSection from './components/PortfolioSection'
import StatsSection from './components/StatsSection'
import TestimonialsSection from './components/TestimonialsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="site-ambient" />
      <div className="stars-layer" />
      <Navbar />
      <Hero />
      <IntroSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}

export default App
