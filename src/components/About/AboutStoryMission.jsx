import { Eye, Target } from 'lucide-react'

import GlassCard from '../GlassCard'
import AboutSectionTitle from './AboutSectionTitle'

function CityIllustration() {
  const towers = [
    'h-[112px]',
    'h-[170px]',
    'h-[84px]',
    'h-[142px]',
    'h-[102px]',
    'h-[128px]',
  ]

  return (
    <div className="relative min-h-[215px] overflow-hidden rounded-[18px] border border-cyan-300/18 bg-[radial-gradient(circle_at_50%_75%,rgba(0,229,255,0.24),transparent_35%),linear-gradient(180deg,rgba(47,128,255,0.13),rgba(2,5,18,0.6))] p-5">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.1)_1px,transparent_1px)] bg-[length:34px_34px] [mask-image:linear-gradient(to_top,black,transparent_80%)]" />
      <div className="absolute bottom-8 left-8 right-8 flex items-end justify-center gap-3">
        {towers.map((height, index) => (
          <div
            key={height + index}
            className={`${height} w-8 rounded-t-[18px] border border-cyan-300/35 bg-gradient-to-b from-cyan-300/25 to-blue-950/70 shadow-[0_0_24px_rgba(0,229,255,0.28)]`}
          />
        ))}
      </div>
      <div className="absolute bottom-7 left-6 right-6 h-px bg-cyan-300/55 shadow-[0_0_22px_rgba(0,229,255,0.8)]" />
    </div>
  )
}

function AboutStoryMission() {
  return (
    <section className="grid gap-5 lg:grid-cols-[1.08fr_1fr]">
      <GlassCard className="grid gap-6 p-5 md:grid-cols-[0.74fr_1fr]">
        <CityIllustration />
        <div className="self-center">
          <AboutSectionTitle
            eyebrow="Our Story"
            title="Driven by Passion. Focused on Your Growth."
          />
          <div className="mt-4 space-y-3 text-sm leading-6 text-[#B8C1D8]">
            <p>
              Novara Digital Services was founded with a simple belief: great
              digital experiences can transform businesses.
            </p>
            <p>
              From day one, we have partnered with startups, SMBs, and
              enterprises to turn ideas into powerful brands and scalable
              digital solutions.
            </p>
            <p>
              Today, we continue to innovate, adapt, and deliver measurable
              results in a digital world that never stands still.
            </p>
          </div>
        </div>
      </GlassCard>

      <GlassCard className="p-5">
        <AboutSectionTitle eyebrow="Mission & Vision" />
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <GlassCard className="p-7">
            <Target className="h-11 w-11 text-cyan-300 drop-shadow-[0_0_16px_rgba(0,229,255,0.8)]" />
            <h3 className="mt-5 text-xl font-black text-white">Our Mission</h3>
            <p className="mt-5 text-sm leading-7 text-[#C1C9DD]">
              To empower businesses with innovative digital solutions that
              drive growth, efficiency, and meaningful impact.
            </p>
          </GlassCard>
          <GlassCard className="p-7">
            <Eye className="h-11 w-11 text-cyan-300 drop-shadow-[0_0_16px_rgba(0,229,255,0.8)]" />
            <h3 className="mt-5 text-xl font-black text-white">Our Vision</h3>
            <p className="mt-5 text-sm leading-7 text-[#C1C9DD]">
              To be the most trusted digital partner for modern brands,
              recognized for creativity, technology, and results.
            </p>
          </GlassCard>
        </div>
      </GlassCard>
    </section>
  )
}

export default AboutStoryMission
