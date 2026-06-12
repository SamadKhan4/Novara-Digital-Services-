import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'

import Button from './Button'
import GlassCard from './GlassCard'
import SectionBadge from './SectionBadge'
import { heroServices, trustItems } from '../data/siteData'

const cardPositions = {
  top: 'left-65 -top-3 -translate-x-1/2',
  rightTop: '-right-120 top-1',
  rightBottom: '-right-10 bottom-30',
  bottom: 'bottom-7 left-119 -translate-x-1/2',
  leftBottom: 'left-10 bottom-37',
  leftTop: 'left-65 bottom-38',
}

const ringBase =
  'absolute rounded-full border-[1.5px] shadow-[inset_0_0_28px_rgba(47,128,255,0.18),0_0_28px_rgba(47,128,255,0.26)] before:absolute before:left-[48%] before:top-[-5px] before:h-2.5 before:w-2.5 before:rounded-full before:bg-white before:shadow-[0_0_16px_#00e5ff,0_0_34px_rgba(47,128,255,0.9),0_0_54px_rgba(139,92,246,0.65)] before:content-[""]'


function HeroOrbit() {
  return (
    <div className="relative mx-auto h-[560px] max-w-[650px] lg:h-[620px]">
      <div className="absolute -right-28 top-10 h-[450px] w-[450px] rounded-[44%_56%_48%_52%] bg-[radial-gradient(circle,rgba(81,124,255,0.85)_1px,transparent_1.5px)] bg-[length:14px_14px] opacity-70 [animation:waveDrift_10s_ease-in-out_infinite_alternate] [mask-image:radial-gradient(circle,black_0_58%,transparent_76%)] [transform:perspective(560px)_rotateY(-38deg)_rotateX(62deg)] max-lg:opacity-[0.42] max-sm:opacity-[0.28]" />

      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(47,128,255,0.28),transparent_62%)] blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.18),transparent_64%)] blur-2xl" />

      <div className="absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_34px_rgba(47,128,255,0.36)] max-sm:!h-[300px] max-sm:!w-[300px] sm:h-[500px] sm:w-[500px]">
        <div className={`${ringBase} inset-0 animate-[orbitRotate_20s_linear_infinite] border-[#2f80ffa6]`} />
        <div className={`${ringBase} inset-[13%] animate-[orbitRotateReverse_24s_linear_infinite] border-[#00e5ff7a] max-sm:inset-[14%]`} />
        <div className={`${ringBase} inset-[26%] animate-[orbitRotate_15s_linear_infinite] border-[#8b5cf6bf] max-sm:inset-[28%]`} />

        

        <div className="absolute left-1/2 top-1/2 grid h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[38px] bg-[radial-gradient(circle_at_28%_20%,rgba(0,229,255,0.38),transparent_30%),radial-gradient(circle_at_75%_70%,rgba(139,92,246,0.44),transparent_34%),linear-gradient(135deg,rgba(0,229,255,0.95),rgba(47,128,255,0.95)_42%,rgba(124,58,237,0.98)),#111a3a] shadow-[0_0_42px_rgba(0,229,255,0.48),0_0_90px_rgba(124,58,237,0.58),inset_0_0_30px_rgba(255,255,255,0.12)] before:absolute before:inset-1.5 before:rounded-[32px] before:bg-[linear-gradient(145deg,rgba(255,255,255,0.18),transparent_40%),rgba(5,8,22,0.18)] before:content-[''] animate-[pulseGlow_3.2s_ease-in-out_infinite] max-sm:h-[108px] max-sm:w-[108px] max-sm:rounded-[28px]">
          <span className="relative font-['Sora'] text-8xl font-black leading-none tracking-[-0.12em] text-white  max-sm:text-[4.5rem]">
            N
          </span>
        </div>  
      </div>

      <div className="hidden sm:block">
        {heroServices.map((service, index) => {
          const Icon = service.icon

          return (
            <GlassCard
              key={service.title}
              className={`absolute z-20 grid min-h-[132px] w-[145px] place-items-center p-4 text-center transition duration-300 animate-[floatCard_5.5s_ease-in-out_infinite] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[linear-gradient(145deg,rgba(255,255,255,0.16),transparent_45%),radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.18),transparent_50%)] after:content-[""] hover:scale-[1.04] hover:border-cyan-300/50 hover:shadow-[0_0_44px_rgba(0,229,255,0.28),0_0_80px_rgba(139,92,246,0.22),inset_0_0_30px_rgba(255,255,255,0.07)] ${cardPositions[service.position]}`}
              style={{ animationDelay: `${index * 0.22}s` }}
              glow
            >
              <Icon className="mx-auto mb-2 h-9 w-9 text-cyan-300 drop-shadow-[0_0_16px_rgba(0,229,255,0.95)]" />
              <p className="text-sm font-black leading-tight text-white">
                {service.title}
              </p>
            </GlassCard>
          )
        })}
      </div>

      <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-3 px-2 sm:hidden">
        {heroServices.slice(0, 4).map((service) => {
          const Icon = service.icon

          return (
            <GlassCard key={service.title} className="p-3">
              <div className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-cyan-300" />
                <span className="text-xs font-bold text-white">
                  {service.title}
                </span>
              </div>
            </GlassCard>
          )
        })}
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-screen max-w-[1280px] items-center gap-10 px-5 pb-16 pt-32 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pt-24"
    >
      {/* left content */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="relative z-10 max-w-[640px]"
      >
        <SectionBadge className="normal-case tracking-normal">
          <Sparkles className="h-3.5 w-3.5 text-cyan-200" />
          Digital Solutions for the New Era
        </SectionBadge>

        <h1 className="mt-8 text-5xl font-black leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.25rem]">
          Build a Powerful
          <span className="block bg-gradient-to-r from-[#00E5FF] via-[#2F80FF] to-[#8B5CF6] bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(47,128,255,0.35)]">
            Digital Presence
          </span>
          for the New Era
        </h1>

        <p className="mt-6 max-w-[540px] text-lg leading-8 text-[#D6DCF1]">
          Novara Digital Services helps businesses grow with premium websites,
          branding, marketing, automation, and digital solutions designed for
          real impact.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Button href="#contact">Start Your Project</Button>

          <Button href="#services" variant="secondary">
            Explore Services
          </Button>
        </div>

        <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4">
          {trustItems.map((item) => {
            const Icon = item.icon || CheckCircle2

            return (
              <div key={item.label} className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full border border-cyan-300/40 bg-cyan-300/10 text-cyan-200 shadow-[0_0_14px_rgba(0,229,255,0.42)]">
                  <Icon className="h-3.5 w-3.5" />
                </span>

                <span className="text-sm font-bold text-white/85">
                  {item.label}
                </span>
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* right orbit */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
        className="relative z-10"
      >
        <HeroOrbit />
      </motion.div>

      <a
        href="#services"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-cyan-100/70 lg:flex"
      >
        Scroll <ArrowRight className="h-3.5 w-3.5 rotate-90" />
      </a>
    </section>
  )
}

export default Hero
