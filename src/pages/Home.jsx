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
    <div className="grid gap-12 pb-8 sm:gap-14 lg:gap-16">
      <Hero />
      <IntroSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}

export default Home
