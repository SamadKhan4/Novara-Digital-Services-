import { ShieldCheck } from 'lucide-react'

import Button from '../Button'
import GlassCard from '../GlassCard'
import SectionBadge from '../SectionBadge'
import { heroCards, trustItems } from './aboutData'

function MiniIconCard({ icon: Icon, title, text, className }) {
  return (
    <GlassCard
      className={`absolute z-20 w-[150px] p-4 max-sm:relative max-sm:left-auto max-sm:right-auto max-sm:top-auto max-sm:bottom-auto max-sm:w-full max-sm:translate-x-0 max-sm:translate-y-0 ${className}`}
      glow
    >
      <Icon className="mb-3 h-8 w-8 text-cyan-300 drop-shadow-[0_0_14px_rgba(0,229,255,0.9)]" />
      <h3 className="text-sm font-black text-white">{title}</h3>
      <p className="mt-1 text-[11px] leading-5 text-[#B9C2DA]">{text}</p>
    </GlassCard>
  )
}

function AboutHeroGraphic() {
  return (
    <div className="relative min-h-[590px] overflow-visible max-sm:grid max-sm:min-h-0 max-sm:grid-cols-2 max-sm:gap-3">
      <div className="pointer-events-none absolute -right-24 top-5 h-[500px] w-[500px] rounded-[48%] bg-[radial-gradient(circle,rgba(87,97,255,0.9)_1px,transparent_1.6px)] bg-[length:13px_13px] opacity-45 [animation:waveDrift_9s_ease-in-out_infinite_alternate] [mask-image:radial-gradient(circle,black_0_54%,transparent_74%)] max-sm:hidden" />
      <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(47,128,255,0.25),transparent_64%)] blur-2xl max-sm:hidden" />
      <div className="absolute left-1/2 top-[47%] h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/35 shadow-[inset_0_0_38px_rgba(47,128,255,0.22),0_0_45px_rgba(47,128,255,0.22)] max-sm:hidden" />
      <div className="absolute left-1/2 top-[47%] h-[245px] w-[245px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/50 shadow-[inset_0_0_35px_rgba(124,58,237,0.25),0_0_60px_rgba(124,58,237,0.28)] max-sm:hidden" />
      <div className="absolute left-1/2 top-[47%] grid h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-[radial-gradient(circle_at_28%_20%,rgba(0,229,255,0.42),transparent_30%),radial-gradient(circle_at_75%_70%,rgba(139,92,246,0.5),transparent_34%),rgba(9,14,42,0.86)] shadow-[0_0_42px_rgba(0,229,255,0.35),0_0_90px_rgba(124,58,237,0.48),inset_0_0_30px_rgba(255,255,255,0.12)] max-sm:hidden">
        <span className="font-['Sora'] text-[7rem] font-black leading-none tracking-[-0.13em] text-white drop-shadow-[0_0_22px_rgba(0,229,255,0.8)]">
          N
        </span>
      </div>
      <div className="pointer-events-none absolute inset-x-[13%] top-[47%] h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent max-sm:hidden" />
      <div className="pointer-events-none absolute left-1/2 top-[47%] h-[430px] w-px -translate-x-1/2 -translate-y-1/2 rotate-60 bg-gradient-to-b from-transparent via-violet-400/55 to-transparent max-sm:hidden" />

      {heroCards.map((card) => (
        <MiniIconCard key={card.title} {...card} />
      ))}
    </div>
  )
}

function AboutHero() {
  return (
    <section className="grid min-h-[650px] items-center gap-8 lg:grid-cols-[0.88fr_1.12fr]">
      <div>
        <SectionBadge className="normal-case tracking-normal">
          About Our Company
        </SectionBadge>
        <h1 className="mt-5 text-5xl font-black leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-[4.85rem]">
          About{' '}
          <span className="bg-gradient-to-r from-[#8B5CF6] via-[#2F80FF] to-[#00E5FF] bg-clip-text text-transparent">
            Novara
          </span>
          <span className="block bg-gradient-to-r from-[#00E5FF] via-[#2F80FF] to-[#8B5CF6] bg-clip-text text-transparent">
            Digital Services
          </span>
        </h1>
        <p className="mt-4 max-w-[560px] text-2xl font-extrabold leading-tight text-white">
          Your Growth-Focused Digital Partner for Modern Brands.
        </p>
        <p className="mt-5 max-w-[585px] text-lg leading-8 text-[#D6DCF1]">
          We combine strategy, creativity, and technology to build powerful
          digital experiences that drive growth, engagement, and long-term
          success.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="/contact">Book a Free Consultation</Button>
          <Button href="/services" variant="secondary">
            Explore Our Services
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-9 gap-y-4">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-full border border-cyan-300/35 bg-cyan-300/10 text-cyan-200 shadow-[0_0_14px_rgba(0,229,255,0.35)]">
                <ShieldCheck className="h-3.5 w-3.5" />
              </span>
              <span className="text-sm font-bold text-white/82">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <AboutHeroGraphic />
    </section>
  )
}

export default AboutHero
