import GlassCard from '../GlassCard'
import AboutIconPanel from './AboutIconPanel'
import AboutSectionTitle from './AboutSectionTitle'
import { differentiators } from './aboutData'

function AboutDifferentiators() {
  return (
    <GlassCard className="mt-5 grid gap-5 p-5 lg:grid-cols-[0.92fr_4fr]">
      <AboutSectionTitle
        eyebrow="Why Choose Novara"
        title="What Makes Us Different"
        text="We go beyond services. We become your growth partner."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {differentiators.map((item) => (
          <AboutIconPanel key={item.title} {...item} />
        ))}
      </div>
    </GlassCard>
  )
}

export default AboutDifferentiators
