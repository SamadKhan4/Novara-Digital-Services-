import { BriefcaseBusiness, Sparkles } from 'lucide-react'

import GlassCard from '../GlassCard'
import SectionBadge from '../SectionBadge'
import { portfolioStats } from './portfolioData'

function PortfolioHero() {
  return (
    <section className="grid min-h-[520px] items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div>
        <SectionBadge className="normal-case tracking-normal">
          <Sparkles className="h-3.5 w-3.5 text-cyan-200" />
          Portfolio
        </SectionBadge>
        <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-[4.8rem]">
          Work That Makes
          <span className="block bg-gradient-to-r from-[#00E5FF] via-[#2F80FF] to-[#8B5CF6] bg-clip-text text-transparent">
            Brands Stand Out
          </span>
        </h1>
        <p className="mt-5 max-w-[610px] text-lg leading-8 text-[#D6DCF1]">
          Explore a selection of digital experiences, brand systems, campaigns,
          and automation concepts crafted for modern business growth.
        </p>
      </div>

      <GlassCard className="relative overflow-hidden p-6" glow>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(0,229,255,0.24),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(124,58,237,0.28),transparent_36%)]" />
        <div className="relative grid gap-4">
          <div className="grid h-24 w-24 place-items-center rounded-[24px] border border-cyan-300/25 bg-cyan-300/10 shadow-[0_0_35px_rgba(0,229,255,0.22)]">
            <BriefcaseBusiness className="h-12 w-12 text-cyan-300 drop-shadow-[0_0_16px_rgba(0,229,255,0.85)]" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {portfolioStats.map((stat) => {
              const Icon = stat.icon

              return (
                <div key={stat.label} className="rounded-[18px] border border-white/10 bg-white/[0.05] p-4">
                  <Icon className="h-8 w-8 text-cyan-300" />
                  <div className="mt-4 text-3xl font-black text-white">{stat.value}</div>
                  <p className="mt-1 text-xs font-semibold text-[#B8C1D8]">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </GlassCard>
    </section>
  )
}

export default PortfolioHero
