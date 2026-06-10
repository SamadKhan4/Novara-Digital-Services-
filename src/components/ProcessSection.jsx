import { motion } from 'framer-motion'
import Button from './Button'
import GlassCard from './GlassCard'
import SectionBadge from './SectionBadge'
import { processSteps } from '../data/siteData'

function ProcessSection() {
  return (
    <section id="process" className="relative z-10 mx-auto max-w-[1280px] px-5 py-10 lg:px-8">
      <GlassCard className="overflow-hidden p-7 lg:p-9" glow>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_0%,rgba(124,58,237,0.32),transparent_36%),radial-gradient(circle_at_95%_45%,rgba(0,229,255,0.16),transparent_35%)]" />
        <div className="relative grid gap-10 lg:grid-cols-[0.75fr_2fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
          >
            <SectionBadge>Our Process</SectionBadge>
            <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.04em] sm:text-5xl">
              The Novara
              <span className="block">Method</span>
            </h2>
            <p className="mt-5 max-w-[280px] text-base leading-7 text-[#AAB2C8]">
              A clear process designed to turn ideas into powerful digital
              assets.
            </p>
            <Button href="#about-us" variant="secondary" className="mt-7 px-5 py-3">
              Learn More About Us
            </Button>
          </motion.div>
          <div className="relative grid gap-7 md:grid-cols-4">
            <div className="absolute left-[12.5%] right-[12.5%] top-[34px] hidden h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent shadow-[0_0_18px_rgba(0,229,255,0.75)] md:block" />
            {processSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-90px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="mx-auto grid h-[70px] w-[70px] place-items-center rounded-full border border-cyan-300/60 bg-gradient-to-br from-[#173A8E] to-[#5B21B6] text-lg font-black shadow-[0_0_28px_rgba(47,128,255,0.65)]">
                    {step.number}
                  </div>
                  <div className="mx-auto mt-4 grid h-[76px] w-[76px] place-items-center rounded-full border border-cyan-300/35 bg-[#050816]/60">
                    <Icon className="h-9 w-9 text-[#AAB2C8] drop-shadow-[0_0_15px_rgba(124,58,237,0.55)]" />
                  </div>
                  <h3 className="mt-4 text-xl font-black text-white">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-[190px] text-sm leading-6 text-[#AAB2C8]">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </GlassCard>
    </section>
  )
}

export default ProcessSection
