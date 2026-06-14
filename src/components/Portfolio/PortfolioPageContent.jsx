import TestimonialsSection from '../Common/TestimonialsSection'
import PortfolioCTA from './PortfolioCTA'
import PortfolioGrid from './PortfolioGrid'
import PortfolioHero from './PortfolioHero'

function PortfolioPageContent() {
  return (
    <div className="relative z-10 mx-auto grid max-w-[1280px] gap-10 px-5 pb-12 pt-32 sm:gap-12 lg:gap-14 lg:px-8">
      <PortfolioHero />
      <PortfolioGrid />
      <TestimonialsSection />
      <PortfolioCTA />
    </div>
  )
}

export default PortfolioPageContent
