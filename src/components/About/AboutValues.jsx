import GlassCard from '../GlassCard'
import AboutIconPanel from './AboutIconPanel'
import AboutSectionTitle from './AboutSectionTitle'
import { values } from './aboutData'

function AboutValues() {
  return (
    <GlassCard className="p-5">
      <AboutSectionTitle eyebrow="Core Values" />
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {values.map((value) => (
          <AboutIconPanel key={value.title} {...value} />
        ))}
      </div>
    </GlassCard>
  )
}

export default AboutValues
