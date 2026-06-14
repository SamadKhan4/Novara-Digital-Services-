import AboutCTA from './AboutCTA'
import AboutDifferentiators from './AboutDifferentiators'
import AboutHero from './AboutHero'
import AboutLeadership from './AboutLeadership'
import AboutProcess from './AboutProcess'
import AboutStats from './AboutStats'
import AboutStoryMission from './AboutStoryMission'
import AboutValues from './AboutValues'

function AboutPageContent() {
  return (
    <div className="relative z-10 mx-auto max-w-[1280px] px-5 pb-8 pt-32 lg:px-8">
      <AboutHero />
      <AboutStoryMission />
      <AboutValues />
      <AboutDifferentiators />
      <AboutProcess />
      <AboutStats />
      <AboutLeadership />
      <AboutCTA />
    </div>
  )
}

export default AboutPageContent
