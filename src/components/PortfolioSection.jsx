import { motion } from 'framer-motion'
import Button from './Button'
import GlassCard from './GlassCard'
import SectionBadge from './SectionBadge'
import { portfolio } from '../data/siteData'

function MockupVisual({ type }) {
  return (
    <div className={`mockup mockup-${type}`}>
      <div className="mockup-glow" />
      {type === 'startup' && (
        <>
          <div className="browser browser-main">
            <span />
            <div />
            <div />
          </div>
          <div className="device device-tablet" />
        </>
      )}
      {type === 'branding' && (
        <>
          <div className="brand-bag" />
          <div className="brand-card" />
          <div className="brand-cup" />
        </>
      )}
      {type === 'ecommerce' && (
        <>
          <div className="shop-window" />
          <div className="shop-photo" />
          <div className="shop-button" />
        </>
      )}
      {type === 'dashboard' && (
        <>
          <div className="dash-panel" />
          <div className="dash-chart dash-one" />
          <div className="dash-chart dash-two" />
          <div className="dash-chart dash-three" />
        </>
      )}
      {type === 'campaign' && (
        <>
          <div className="phone phone-one" />
          <div className="phone phone-two" />
          <div className="phone phone-three" />
        </>
      )}
    </div>
  )
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="relative z-10 mx-auto max-w-[1280px] px-5 py-10 lg:px-8">
      <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <SectionBadge>Our Work</SectionBadge>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl">
            Designed to Make Brands
            <span className="block">Look Unforgettable</span>
          </h2>
        </div>
        <Button href="#portfolio" variant="secondary" className="px-5 py-3">
          View All Projects
        </Button>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {portfolio.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-90px' }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            whileHover={{ y: -8 }}
          >
            <GlassCard className="overflow-hidden p-0 transition duration-300 hover:border-cyan-300/50 hover:shadow-[0_0_42px_rgba(47,128,255,0.24)]">
              <MockupVisual type={project.type} />
              <div className="border-t border-white/10 p-5">
                <span className="text-xs font-bold text-cyan-300">
                  {project.category}
                </span>
                <h3 className="mt-2 text-lg font-black leading-tight text-white">
                  {project.title}
                </h3>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default PortfolioSection
