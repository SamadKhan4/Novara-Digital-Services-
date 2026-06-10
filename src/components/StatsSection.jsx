import { motion } from 'framer-motion'
import GlassCard from './GlassCard'
import { stats } from '../data/siteData'

function StatsSection() {
  return (
    <section className="relative z-10 mx-auto max-w-[1280px] px-5 py-4 lg:px-8">
      <GlassCard className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-5" glow>
        {stats.map((stat, index) => {
          const Icon = stat.icon

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="flex items-center justify-center gap-4 rounded-[18px] px-3 py-2"
            >
              <Icon className="h-10 w-10 text-cyan-300 drop-shadow-[0_0_16px_rgba(0,229,255,0.8)]" />
              <div>
                <div className="text-3xl font-black leading-none text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-[#AAB2C8]">{stat.label}</div>
              </div>
            </motion.div>
          )
        })}
      </GlassCard>
    </section>
  )
}

export default StatsSection
