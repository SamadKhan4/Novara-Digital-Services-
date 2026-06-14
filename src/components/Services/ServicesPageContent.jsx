import CoreServices from './CoreServices'
import ServiceBreakdown from './ServiceBreakdown'
import ServiceResultsPackages from './ServiceResultsPackages'
import ServicesCTA from './ServicesCTA'
import ServicesFAQ from './ServicesFAQ'
import ServicesHero from './ServicesHero'

function ServicesPageContent() {
  return (
    <div className="relative z-10 mx-auto grid max-w-[1280px] gap-10 px-5 pb-12 pt-32 sm:gap-12 lg:gap-14 lg:px-8">
      <ServicesHero />
      <CoreServices />
      <ServiceBreakdown />
      <ServiceResultsPackages />
      <ServicesFAQ />
      <ServicesCTA />
    </div>
  )
}

export default ServicesPageContent
