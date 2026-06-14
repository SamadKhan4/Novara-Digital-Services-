import GlassCard from '../GlassCard'
import AboutSectionTitle from './AboutSectionTitle'
import { process } from './aboutData'

function AboutProcess() {
  return (
    <GlassCard className="p-5">
      <AboutSectionTitle eyebrow="Our Process" />
      <div className="relative mt-4 grid gap-5 lg:grid-cols-5">
        <div className="pointer-events-none absolute left-[10%] right-[10%] top-6 hidden h-px bg-cyan-300/70 shadow-[0_0_20px_rgba(0,229,255,0.7)] lg:block" />
        {process.map((step) => {
          const Icon = step.icon

          return (
            <div key={step.number} className="relative z-10 grid gap-3 sm:grid-cols-[72px_1fr] lg:block">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-cyan-300/55 bg-[#121852] text-lg font-black text-white shadow-[0_0_24px_rgba(47,128,255,0.65)]">
                {step.number}
              </div>
              <div className="mt-4 flex gap-4 lg:mt-6">
                <Icon className="h-9 w-9 shrink-0 text-cyan-300 drop-shadow-[0_0_14px_rgba(0,229,255,0.75)]" />
                <div>
                  <h3 className="text-sm font-black text-white">{step.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#B9C2DA]">
                    {step.text}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </GlassCard>
  )
}

export default AboutProcess
