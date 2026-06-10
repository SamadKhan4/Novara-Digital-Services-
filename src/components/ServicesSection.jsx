import { motion } from 'framer-motion'
import GlassCard from './GlassCard'
import SectionBadge from './SectionBadge'
import { services } from '../data/siteData'

function ServicesSection() {
  return (
    <section id="services" className="relative z-10 mx-auto max-w-[1280px] px-5 py-10 lg:px-8">
      <div className="mb-7 max-w-[440px]">
        <SectionBadge>What We Do</SectionBadge>
        <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl">
          Digital Services Built
          <span className="block">for Modern Brands</span>
        </h2>
        <div className="mt-5 h-0.5 w-16 bg-gradient-to-r from-cyan-300 to-violet-500" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {services.map((service, index) => {
          const Icon = service.icon

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-90px' }}
              transition={{ duration: 0.48, delay: index * 0.06 }}
              className="h-full"
            >
              <GlassCard className="group flex h-full min-h-[230px] flex-col items-center p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-300/60 hover:shadow-[0_0_42px_rgba(47,128,255,0.24)]">
                <div className="grid h-16 w-16 place-items-center rounded-[18px] border border-cyan-300/25 bg-gradient-to-br from-cyan-300/15 to-violet-500/20 shadow-[inset_0_0_18px_rgba(255,255,255,0.06),0_0_24px_rgba(0,229,255,0.28)]">
                  <Icon className="h-9 w-9 text-cyan-300 drop-shadow-[0_0_16px_rgba(0,229,255,0.9)] transition group-hover:scale-110" />
                </div>
                <h3 className="mt-5 min-h-[48px] text-base font-black leading-tight text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#AAB2C8]">
                  {service.description}
                </p>
              </GlassCard>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default ServicesSection
