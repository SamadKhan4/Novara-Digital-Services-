import GlassCard from '../GlassCard'
import { stats } from './aboutData'

function AboutStats() {
  return (
    <GlassCard className="mt-5 p-5">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {stats.map((item) => {
          const Icon = item.icon

          return (
            <div key={item.label} className="flex items-center gap-4">
              <Icon className="h-11 w-11 text-cyan-300 drop-shadow-[0_0_14px_rgba(0,229,255,0.85)]" />
              <div>
                <div className="text-3xl font-black text-white">{item.value}</div>
                <p className="text-xs font-semibold text-[#B8C1D8]">{item.label}</p>
              </div>
            </div>
          )
        })}
      </div>
    </GlassCard>
  )
}

export default AboutStats
