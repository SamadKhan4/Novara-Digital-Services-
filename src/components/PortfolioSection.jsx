import { motion } from 'framer-motion'
import Button from './Button'
import GlassCard from './GlassCard'
import SectionBadge from './SectionBadge'
import { portfolio } from '../data/siteData'

const mockupBase =
  'relative h-[170px] overflow-hidden bg-[radial-gradient(circle_at_35%_20%,rgba(0,229,255,0.28),transparent_34%),radial-gradient(circle_at_75%_65%,rgba(124,58,237,0.34),transparent_36%),linear-gradient(135deg,#071127,#0b1024_56%,#10102b)] max-sm:h-[190px]'

const mockupGlow =
  'absolute -bottom-[55px] -left-5 -right-5 h-[100px] bg-[linear-gradient(90deg,rgba(47,128,255,0.5),rgba(124,58,237,0.42))] blur-[30px]'

const panelBase =
  'absolute border border-white/20 bg-white/[0.08] shadow-[0_16px_36px_rgba(0,0,0,0.35)] backdrop-blur-[10px]'

function MockupVisual({ type }) {
  return (
    <div className={mockupBase}>
      <div className={mockupGlow} />
      {type === 'startup' && (
        <>
          <div className={`${panelBase} left-[26px] top-[38px] h-[92px] w-[132px] rotate-[-7deg] rounded-[10px]`}>
            <span className="block h-4 border-b border-white/15 bg-white/[0.08]" />
            <div className="m-4 h-3 rounded-full bg-[#00e5ff] shadow-[0_0_18px_rgba(0,229,255,0.75)]" />
            <div className="mx-4 my-3 h-6 rounded-lg bg-[linear-gradient(90deg,rgba(47,128,255,0.5),rgba(139,92,246,0.55))]" />
          </div>
          <div className={`${panelBase} bottom-[27px] right-6 h-[86px] w-[118px] rotate-[7deg] rounded-xl`} />
        </>
      )}
      {type === 'branding' && (
        <>
          <div className={`${panelBase} bottom-[22px] left-[58px] h-[116px] w-[82px] rounded-lg bg-[linear-gradient(160deg,rgba(199,157,91,0.28),rgba(255,255,255,0.06))]`} />
          <div className={`${panelBase} bottom-11 left-[120px] h-[88px] w-24 rounded-lg bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(47,128,255,0.08))]`} />
          <div className={`${panelBase} bottom-[22px] right-[38px] h-[54px] w-[42px] rounded-b-[18px] rounded-t-lg`} />
        </>
      )}
      {type === 'ecommerce' && (
        <>
          <div className={`${panelBase} left-[25px] top-[26px] h-[110px] w-[172px] rounded-lg bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(203,218,255,0.7))]`} />
          <div className={`${panelBase} right-[35px] top-[41px] h-[88px] w-[58px] rounded-b-[18px] rounded-t-full bg-[linear-gradient(160deg,#ffe0c8,#1c2546_64%)]`} />
          <div className={`${panelBase} bottom-[45px] left-[45px] h-3 w-[62px] rounded-full bg-[#050816]`} />
        </>
      )}
      {type === 'dashboard' && (
        <>
          <div className={`${panelBase} left-[30px] top-8 h-[108px] w-[180px] rounded-xl`} />
          <div className={`${panelBase} bottom-[43px] right-[83px] h-[43px] w-[18px] rounded-t-md bg-[linear-gradient(#00e5ff,#8b5cf6)]`} />
          <div className={`${panelBase} bottom-[43px] right-14 h-[62px] w-[18px] rounded-t-md bg-[linear-gradient(#00e5ff,#8b5cf6)]`} />
          <div className={`${panelBase} bottom-[43px] right-[29px] h-[78px] w-[18px] rounded-t-md bg-[linear-gradient(#00e5ff,#8b5cf6)]`} />
        </>
      )}
      {type === 'campaign' && (
        <>
          <div className={`${panelBase} bottom-[23px] left-9 h-[120px] w-[58px] rotate-[-8deg] rounded-2xl bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.82),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.18),rgba(124,58,237,0.22))]`} />
          <div className={`${panelBase} bottom-[31px] left-[91px] h-[120px] w-[58px] scale-[1.08] rounded-2xl bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.82),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.18),rgba(124,58,237,0.22))]`} />
          <div className={`${panelBase} bottom-[23px] right-[38px] h-[120px] w-[58px] rotate-[8deg] rounded-2xl bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.82),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.18),rgba(124,58,237,0.22))]`} />
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
