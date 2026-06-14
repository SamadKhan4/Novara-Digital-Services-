import TestimonialsSection from '../Common/TestimonialsSection'
import PortfolioCTA from './PortfolioCTA'
import PortfolioGrid from './PortfolioGrid'
import PortfolioHero from './PortfolioHero'

function PortfolioPageContent() {
  return (
    <div className="relative z-10 mx-auto max-w-[1280px] px-5 pb-8 pt-32 lg:px-8">
      <PortfolioHero />
      <PortfolioGrid />
      <TestimonialsSection />
      <PortfolioCTA />
    </div>
  )
}

export default PortfolioPageContent
