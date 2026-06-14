import { Sparkles, WandSparkles } from 'lucide-react'

import GlassCard from '../GlassCard'
import SectionBadge from '../SectionBadge'
import { heroHighlights, orbitServices } from './servicesData'

function OrbitCard({ icon: Icon, title, className }) {
  return (
    <GlassCard
      className={`absolute z-20 grid h-[108px] w-[118px] place-items-center p-3 text-center max-sm:relative max-sm:left-auto max-sm:top-auto max-sm:h-full max-sm:w-full max-sm:translate-x-0 max-sm:translate-y-0 ${className}`}
      glow
    >
      <Icon className="h-9 w-9 text-cyan-300 drop-shadow-[0_0_15px_rgba(0,229,255,0.9)]" />
      <h3 className="text-xs font-black leading-tight text-white">{title}</h3>
    </GlassCard>
  )
}

function ServicesHeroGraphic() {
  return (
    <div className="relative min-h-[500px] overflow-visible max-sm:grid max-sm:min-h-0 max-sm:grid-cols-2 max-sm:gap-3">
      <div className="pointer-events-none absolute -right-28 top-10 h-[430px] w-[430px] rounded-[45%] bg-[radial-gradient(circle,rgba(100,80,255,0.9)_1px,transparent_1.6px)] bg-[length:13px_13px] opacity-45 [animation:waveDrift_10s_ease-in-out_infinite_alternate] [mask-image:radial-gradient(circle,black_0_54%,transparent_74%)] max-sm:hidden" />
      <div className="absolute left-1/2 top-[43%] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/35 shadow-[inset_0_0_38px_rgba(47,128,255,0.2),0_0_46px_rgba(47,128,255,0.24)] max-sm:hidden" />
      <div className="absolute left-1/2 top-[43%] h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/55 shadow-[inset_0_0_35px_rgba(124,58,237,0.25),0_0_60px_rgba(124,58,237,0.3)] max-sm:hidden" />
      <div className="absolute left-1/2 top-[43%] h-[145px] w-[145px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.28),transparent_65%)] blur-xl max-sm:hidden" />
      <div className="absolute left-1/2 top-[43%] grid h-[132px] w-[132px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[34px] border border-white/20 bg-[radial-gradient(circle_at_28%_20%,rgba(0,229,255,0.42),transparent_30%),radial-gradient(circle_at_75%_70%,rgba(139,92,246,0.55),transparent_34%),linear-gradient(135deg,rgba(47,128,255,0.75),rgba(124,58,237,0.72))] shadow-[0_0_42px_rgba(0,229,255,0.35),0_0_90px_rgba(124,58,237,0.48),inset_0_0_30px_rgba(255,255,255,0.12)] max-sm:hidden">
        <span className="font-['Sora'] text-[6.5rem] font-black leading-none tracking-[-0.13em] text-white drop-shadow-[0_0_22px_rgba(0,229,255,0.8)]">
          N
        </span>
      </div>
      <div className="pointer-events-none absolute inset-x-[10%] top-[43%] hidden h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent shadow-[0_0_18px_rgba(0,229,255,0.8)] lg:block" />
      <div className="pointer-events-none absolute left-1/2 top-[43%] hidden h-[410px] w-px -translate-x-1/2 -translate-y-1/2 rotate-90 bg-gradient-to-b from-transparent via-violet-400/45 to-transparent lg:block" />

      {orbitServices.map((service) => (
        <OrbitCard key={service.title} {...service} />
      ))}
    </div>
  )
}

function ServicesHero() {
  return (
    <section className="grid min-h-[610px] items-center gap-8 lg:grid-cols-[0.88fr_1.12fr]">
      <div>
        <SectionBadge className="normal-case tracking-normal">
          <Sparkles className="h-3.5 w-3.5 text-cyan-200" />
          Services
        </SectionBadge>
        <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-[4.6rem]">
          Our Services
          <span className="block bg-gradient-to-r from-[#00E5FF] via-[#2F80FF] to-[#8B5CF6] bg-clip-text text-transparent">
            Premium Digital Solutions
          </span>
          for Ambitious Brands
        </h1>
        <p className="mt-5 max-w-[575px] text-lg leading-8 text-[#D6DCF1]">
          End-to-end digital services designed to elevate your brand, drive
          growth, and deliver measurable results in the new era of digital
          excellence.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          {heroHighlights.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 shadow-[0_0_16px_rgba(0,229,255,0.26)]">
                <WandSparkles className="h-4 w-4" />
              </span>
              <span className="text-sm font-bold text-white/82">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <ServicesHeroGraphic />
    </section>
  )
}

export default ServicesHero
