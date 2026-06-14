import { Mail } from 'lucide-react'

import GlassCard from '../GlassCard'
import AboutSectionTitle from './AboutSectionTitle'
import { leaders } from './aboutData'

function LeaderCard({ leader }) {
  return (
    <GlassCard className="p-4 text-center">
      <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border border-cyan-300/30 bg-[#070b20] shadow-[0_0_30px_rgba(47,128,255,0.25)]">
        <div
          className={`mx-auto mt-4 h-24 w-20 rounded-[50%_50%_42%_42%] bg-gradient-to-br ${leader.tone} opacity-95 shadow-[0_0_34px_rgba(0,229,255,0.35)] [clip-path:polygon(50%_0,75%_11%,86%_38%,72%_74%,94%_100%,6%_100%,28%_74%,14%_38%,25%_11%)]`}
        />
      </div>
      <h3 className="mt-4 text-sm font-black text-white">{leader.name}</h3>
      <p className="text-xs text-[#AAB2C8]">{leader.role}</p>
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
  return (
    <GlassCard className="grid gap-5 p-5 lg:grid-cols-[0.9fr_4.1fr]">
      <AboutSectionTitle
        eyebrow="Our Leadership"
        title="The Minds Behind Your Success"
        text="A passionate team of strategists, creatives, and technologists committed to your growth."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {leaders.map((leader) => (
          <LeaderCard key={leader.name} leader={leader} />
        ))}
      </div>
    </GlassCard>
  )
}

export default AboutLeadership
