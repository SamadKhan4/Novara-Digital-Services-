import Hero from '../components/Home/Hero'
import IntroSection from '../components/Home/IntroSection'
import ServicesSection from '../components/Home/ServicesSection'
import ProcessSection from '../components/Home/ProcessSection'
import PortfolioSection from '../components/Home/PortfolioSection'
import StatsSection from '../components/Home/StatsSection'
import TestimonialsSection from '../components/Common/TestimonialsSection'
import CTASection from '../components/Home/CTASection'

function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}

export default Home
