import CoreServices from './CoreServices'
import ServiceBreakdown from './ServiceBreakdown'
import ServiceResultsPackages from './ServiceResultsPackages'
import ServicesCTA from './ServicesCTA'
import ServicesFAQ from './ServicesFAQ'
import ServicesHero from './ServicesHero'

function ServicesPageContent() {
  return (
    <div className="relative z-10 mx-auto max-w-[1280px] px-5 pb-8 pt-32 lg:px-8">
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
