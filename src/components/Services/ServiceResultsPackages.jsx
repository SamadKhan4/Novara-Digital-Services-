import { ArrowRight, BadgeCheck } from 'lucide-react'

import GlassCard from '../GlassCard'
import ServicesSectionTitle from './ServicesSectionTitle'
import { packages, resultCards } from './servicesData'

function ResultCard({ card }) {
  const Icon = card.icon

  return (
    <GlassCard className="flex h-full min-h-[190px] flex-col justify-between p-5">
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[14px] border border-cyan-300/25 bg-cyan-300/10">
          <Icon className="h-7 w-7 text-cyan-300 drop-shadow-[0_0_15px_rgba(0,229,255,0.85)]" />
        </div>
        <h3 className="text-sm font-black leading-tight text-white">{card.title}</h3>
      </div>
      <p className="pt-5 text-xs leading-5 text-[#B9C2DA]">{card.text}</p>
    </GlassCard>
  )
}

function PackageCard({ pack }) {
  const Icon = pack.icon

  return (
    <GlassCard
      className={`relative flex h-full min-h-[280px] flex-col justify-between p-6 ${pack.popular ? 'border-violet-400/70 shadow-[0_0_38px_rgba(124,58,237,0.42)]' : ''}`}
      glow={pack.popular}
    >
      {pack.popular && (
        <span className="absolute right-10 -top-4 rounded-full bg-gradient-to-r from-cyan-300 to-violet-500 px-3 py-1 text-[10px] font-black text-white">
          Most Popular
        </span>
      )}
      <div>
        <div className="flex items-center gap-2 pr-20">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[14px] border border-cyan-300/25 bg-cyan-300/10">
            <Icon className="h-7 w-7 text-cyan-300 drop-shadow-[0_0_15px_rgba(0,229,255,0.85)]" />
          </div>
          <h3 className="text-l font-black text-white">{pack.name}</h3>
        </div>
        <p className="mt-4 min-h-[40px] text-xs leading-5 text-[#B9C2DA]">{pack.text}</p>
      </div>
      <div>
        <ul className="mt-5 grid gap-2 text-xs text-[#C1C9DD]">
          {pack.items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-violet-300" />
              {item}
            </li>
          ))}
        </ul>
        <a href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#8EA2FF]">
          Get Started <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </GlassCard>
  )
}

function ServiceResultsPackages() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
      <div>
        <ServicesSectionTitle>Why Our Services Deliver Results</ServicesSectionTitle>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {resultCards.map((card) => (
            <ResultCard key={card.title} card={card} />
          ))}
        </div>
      </div>
      <div>
        <ServicesSectionTitle>Our Packages</ServicesSectionTitle>
        <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {packages.map((pack) => (
            <PackageCard key={pack.name} pack={pack} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceResultsPackages
