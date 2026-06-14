import { BadgeCheck, Mail } from 'lucide-react'

import GlassCard from '../GlassCard'
import AboutSectionTitle from './AboutSectionTitle'
import { leaders } from './aboutData'

function LeaderProfile({ leader }) {
  return (
    <GlassCard className="p-5 text-center">
      <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border border-cyan-300/30 bg-[#070b20] shadow-[0_0_34px_rgba(47,128,255,0.28)]">
        <div
          className={`mx-auto mt-5 h-28 w-24 rounded-[50%_50%_42%_42%] bg-gradient-to-br ${leader.tone} opacity-95 shadow-[0_0_34px_rgba(0,229,255,0.35)] [clip-path:polygon(50%_0,75%_11%,86%_38%,72%_74%,94%_100%,6%_100%,28%_74%,14%_38%,25%_11%)]`}
        />
      </div>
      <h3 className="mt-5 text-xl font-black text-white">{leader.name}</h3>
      <p className="text-sm font-bold text-cyan-200">{leader.role}</p>
      <div className="mt-3 flex justify-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-lg border border-white/12 bg-white/[0.05] text-[10px] font-bold text-cyan-200">
          in
        </span>
        <span className="grid h-7 w-7 place-items-center rounded-lg border border-white/12 bg-white/[0.05] text-cyan-200">
          <Mail className="h-3.5 w-3.5" />
        </span>
      </div>
    </GlassCard>
  )
}

function AboutLeadership() {
  const leader = leaders[0]

  return (
    <GlassCard className="grid gap-5 p-5 lg:grid-cols-[0.9fr_4.1fr]">
      <AboutSectionTitle
        eyebrow="Founder"
        title="Meet the Mind Behind Novara"
        text="A focused developer-led digital studio built around quality, clarity, and dependable execution."
      />
      <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
        <LeaderProfile leader={leader} />
        <GlassCard className="p-6">
          <p className="text-lg font-semibold leading-8 text-[#D6DCF1]">
            {leader.bio}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {leader.highlights.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-[16px] border border-white/10 bg-white/[0.05] p-4">
                <BadgeCheck className="h-5 w-5 shrink-0 text-violet-300" />
                <span className="text-sm font-bold text-white/86">{item}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </GlassCard>
  )
}

export default AboutLeadership
