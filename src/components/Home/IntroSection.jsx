import { motion } from 'framer-motion'
import GlassCard from '../GlassCard'
import SectionBadge from '../SectionBadge'
import { introCards } from '../../data/siteData'

function IntroSection() {
  return (
    <section id="about-us" className="relative z-10 mx-auto max-w-[1280px] px-5 py-8 lg:px-8">
      <GlassCard className="grid gap-8 p-7 md:grid-cols-[0.9fr_1.55fr] lg:p-9" glow>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <SectionBadge>Who We Are</SectionBadge>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl">
            More Than a Digital Agency -
            <span className="block">Your Growth Partner</span>
          </h2>
          <p className="mt-4 max-w-[540px] text-base leading-7 text-[#AAB2C8]">
            We combine strategy, design, technology, and marketing to create
            digital experiences that help brands look professional, attract
            customers, and scale with confidence.
          </p>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {introCards.map((card, index) => {
            const Icon = card.icon

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <GlassCard className="h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:shadow-[0_0_38px_rgba(0,229,255,0.18)]">
                  <Icon className="h-11 w-11 text-cyan-300 drop-shadow-[0_0_16px_rgba(0,229,255,0.75)]" />
                  <h3 className="mt-4 text-xl font-black leading-tight text-white">
                    {card.title}
                  </h3>
                  <div className="mt-3 h-0.5 w-14 bg-gradient-to-r from-cyan-300 to-violet-500" />
                  <p className="mt-4 text-sm leading-6 text-[#AAB2C8]">
                    {card.text}
                  </p>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </GlassCard>
    </section>
  )
}

export default IntroSection
