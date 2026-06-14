import { ArrowUpRight, BadgeCheck } from 'lucide-react'
import { motion } from 'framer-motion'

import GlassCard from '../GlassCard'
import { portfolio } from '../../data/siteData'
import PortfolioMockup from './PortfolioMockup'
import { portfolioCategories, projectDetails } from './portfolioData'

function PortfolioCard({ project, index }) {
  const details = projectDetails[project.type]
  const Icon = details.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -8 }}
    >
      <GlassCard className="h-full overflow-hidden p-0 transition duration-300 hover:border-cyan-300/50 hover:shadow-[0_0_42px_rgba(47,128,255,0.24)]">
        <PortfolioMockup type={project.type} />
        <div className="border-t border-white/10 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-cyan-300">{project.category}</span>
              <h3 className="mt-2 text-xl font-black leading-tight text-white">
                {project.title}
              </h3>
            </div>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[12px] border border-cyan-300/25 bg-cyan-300/10">
              <Icon className="h-5 w-5 text-cyan-300" />
            </span>
          </div>
          <p className="mt-4 text-sm leading-6 text-[#B8C1D8]">{details.summary}</p>
          <ul className="mt-5 grid gap-2 text-xs text-[#C1C9DD]">
            {details.outcomes.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <BadgeCheck className="h-3.5 w-3.5 text-violet-300" />
                {item}
              </li>
            ))}
          </ul>
          <a href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#8EA2FF]">
            Discuss Similar Project <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </GlassCard>
    </motion.div>
  )
}

function PortfolioGrid() {
  return (
    <section className="mt-4">
      <div className="mb-6 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8EA2FF]">
            Featured Work
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
            Selected Projects
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {portfolioCategories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold text-white/80"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {portfolio.map((project, index) => (
          <PortfolioCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default PortfolioGrid
