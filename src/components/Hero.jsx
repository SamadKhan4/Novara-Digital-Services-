import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import Button from './Button'
import GlassCard from './GlassCard'
import SectionBadge from './SectionBadge'
import { heroServices, trustItems } from '../data/siteData'

const cardPositions = {
  top: 'left-1/2 top-0 -translate-x-1/2',
  rightTop: 'right-2 top-[17%]',
  rightBottom: 'right-4 bottom-[18%]',
  bottom: 'bottom-0 left-1/2 -translate-x-1/2',
  leftBottom: 'bottom-[18%] left-4',
  leftTop: 'left-2 top-[25%]',
}

function HeroOrbit() {
  return (
    <div className="relative mx-auto h-[500px] max-w-[560px] lg:h-[560px]">
      <div className="grid-wave absolute -right-24 top-5 h-[420px] w-[420px] opacity-70" />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(47,128,255,0.25),transparent_62%)] blur-3xl" />
      <div className="orbit-wrap absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 sm:h-[460px] sm:w-[460px]">
        <div className="orbit-ring orbit-ring-one" />
        <div className="orbit-ring orbit-ring-two" />
        <div className="orbit-ring orbit-ring-three" />
        <div className="orbit-spark spark-one" />
        <div className="orbit-spark spark-two" />
        <div className="orbit-spark spark-three" />
        <div className="central-logo">
          <span>N</span>
        </div>
      </div>
      <div className="hidden sm:block">
        {heroServices.map((service, index) => {
          const Icon = service.icon

          return (
            <GlassCard
              key={service.title}
              className={`floating-card absolute w-[136px] p-4 text-center ${cardPositions[service.position]}`}
              style={{ animationDelay: `${index * 0.25}s` }}
              glow
            >
              <Icon className="mx-auto mb-2 h-8 w-8 text-cyan-300 drop-shadow-[0_0_14px_rgba(0,229,255,0.9)]" />
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
      className="relative mx-auto grid min-h-screen max-w-[1280px] items-center gap-10 px-5 pb-16 pt-32 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:pt-24"
    >
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
        <h1 className="mt-8 text-5xl font-black leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.35rem]">
          Build a Powerful
          <span className="block bg-gradient-to-r from-[#00E5FF] via-[#2F80FF] to-[#8B5CF6] bg-clip-text text-transparent">
            Digital Presence
          </span>
          for the New Era
        </h1>
        <p className="mt-6 max-w-[530px] text-lg leading-8 text-[#D6DCF1]">
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
                <span className="text-sm font-bold text-white/86">
                  {item.label}
                </span>
              </div>
            )
          })}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
        className="relative"
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
