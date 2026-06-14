import { ArrowRight, BadgeCheck } from 'lucide-react'

import GlassCard from '../GlassCard'
import ServicesSectionTitle from './ServicesSectionTitle'
import { packages, resultCards } from './servicesData'

function ResultCard({ card }) {
  const Icon = card.icon

  return (
    <GlassCard className="h-full p-5 text-center">
      <Icon className="mx-auto h-10 w-10 text-cyan-300 drop-shadow-[0_0_15px_rgba(0,229,255,0.85)]" />
      <h3 className="mt-4 text-sm font-black leading-tight text-white">{card.title}</h3>
      <p className="mt-3 text-xs leading-5 text-[#B9C2DA]">{card.text}</p>
    </GlassCard>
  )
}

function PackageCard({ pack }) {
  const Icon = pack.icon

  return (
    <GlassCard
      className={`relative h-full p-6 ${pack.popular ? 'border-violet-400/70 shadow-[0_0_38px_rgba(124,58,237,0.42)]' : ''}`}
      glow={pack.popular}
    >
      {pack.popular && (
        <span className="absolute right-4 top-3 rounded-full bg-gradient-to-r from-cyan-300 to-violet-500 px-3 py-1 text-[10px] font-black text-white">
          Most Popular
        </span>
      )}
      <Icon className="h-10 w-10 text-cyan-300 drop-shadow-[0_0_15px_rgba(0,229,255,0.85)]" />
      <h3 className="mt-4 text-xl font-black text-white">{pack.name}</h3>
      <p className="mt-2 min-h-[40px] text-xs leading-5 text-[#B9C2DA]">{pack.text}</p>
      <ul className="mt-5 grid gap-2 text-xs text-[#C1C9DD]">
        {pack.items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <BadgeCheck className="h-3.5 w-3.5 text-violet-300" />
            {item}
          </li>
        ))}
      </ul>
      <a href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#8EA2FF]">
        Get Started <ArrowRight className="h-4 w-4" />
      </a>
    </GlassCard>
  )
}

function ServiceResultsPackages() {
  return (
    <section className="mt-6 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
      <div>
        <ServicesSectionTitle>Why Our Services Deliver Results</ServicesSectionTitle>
        <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {resultCards.map((card) => (
            <ResultCard key={card.title} card={card} />
          ))}
        </div>
      </div>
      <div>
        <ServicesSectionTitle>Our Packages</ServicesSectionTitle>
        <div className="mt-3 grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {packages.map((pack) => (
            <PackageCard key={pack.name} pack={pack} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceResultsPackages
