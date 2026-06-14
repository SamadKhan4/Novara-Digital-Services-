import { Sparkles, WandSparkles } from 'lucide-react'

import GlassCard from '../GlassCard'
import SectionBadge from '../SectionBadge'
import { heroHighlights, orbitServices } from './servicesData'

function OrbitCard({ icon: Icon, title, className }) {
  return (
    <GlassCard
      className={`absolute z-20 grid h-[148px] w-[164px] place-items-center rounded-[24px] bg-[radial-gradient(circle_at_22%_15%,rgba(102,180,210,0.32),transparent_36%),linear-gradient(180deg,rgba(28,40,84,0.88),rgba(7,10,28,0.9))] p-5 text-center shadow-[0_0_34px_rgba(47,128,255,0.28),inset_0_1px_0_rgba(255,255,255,0.1)] max-sm:relative max-sm:left-auto max-sm:top-auto max-sm:h-full max-sm:w-full max-sm:translate-x-0 max-sm:translate-y-0 ${className}`}
      glow
    >
      <Icon className="h-11 w-11 text-cyan-300 drop-shadow-[0_0_15px_rgba(0,229,255,0.95)]" />
      <h3 className="max-w-[130px] text-base font-black leading-[1.08] text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.45)]">
        {title}
      </h3>
    </GlassCard>
  )
}

function ServicesHeroGraphic() {
  return (
    <div className="relative mx-auto min-h-[660px] w-full max-w-[720px] overflow-visible max-sm:grid max-sm:min-h-0 max-sm:grid-cols-2 max-sm:gap-3">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:64px_64px] opacity-45 max-sm:hidden" />
      <div className="pointer-events-none absolute -right-16 bottom-20 h-[330px] w-[420px] bg-[radial-gradient(circle,rgba(47,128,255,0.85)_1.2px,transparent_1.8px)] bg-[length:14px_14px] opacity-50 [mask-image:radial-gradient(ellipse,black_0_44%,transparent_72%)] [transform:perspective(560px)_rotateX(58deg)_rotateZ(-8deg)] max-sm:hidden" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(0,229,255,0.75)_0_2px,transparent_3px),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.45)_0_1px,transparent_2px),radial-gradient(circle_at_74%_84%,rgba(124,58,237,0.75)_0_2px,transparent_3px),radial-gradient(circle_at_12%_78%,rgba(0,229,255,0.55)_0_2px,transparent_3px)] bg-[length:150px_150px] opacity-55 max-sm:hidden" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/55 shadow-[0_0_36px_rgba(47,128,255,0.3)] max-sm:hidden" />
      <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/50 shadow-[0_0_44px_rgba(0,229,255,0.22)] max-sm:hidden" />
      <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/65 shadow-[0_0_54px_rgba(124,58,237,0.34)] max-sm:hidden" />
      <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(47,128,255,0.42),transparent_62%)] blur-xl max-sm:hidden" />
      <div className="absolute left-1/2 top-1/2 grid h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[36px] border border-white/14 bg-[radial-gradient(circle_at_22%_16%,rgba(0,229,255,0.22),transparent_32%),linear-gradient(135deg,rgba(26,44,103,0.94),rgba(20,25,70,0.95))] shadow-[0_0_44px_rgba(0,229,255,0.35),0_0_90px_rgba(47,128,255,0.45),inset_0_0_32px_rgba(255,255,255,0.08)] max-sm:hidden">
        <span className="font-['Sora'] text-[6.6rem] font-black leading-none tracking-[-0.13em] text-white drop-shadow-[0_0_22px_rgba(0,229,255,0.65)]">
          N
        </span>
      </div>

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
