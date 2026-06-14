import GlassCard from '../GlassCard'
import { consultationSteps } from './contactData'

function ContactConsultation() {
  return (
    <section>
      <div className="mb-5">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8EA2FF]">
          What Happens Next
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-white">
          A simple path from idea to action
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {consultationSteps.map((step, index) => {
          const Icon = step.icon

          return (
            <GlassCard key={step.title} className="p-5">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full border border-cyan-300/55 bg-[#121852] text-lg font-black text-white shadow-[0_0_24px_rgba(47,128,255,0.55)]">
                  0{index + 1}
                </div>
                <Icon className="h-9 w-9 text-cyan-300 drop-shadow-[0_0_14px_rgba(0,229,255,0.8)]" />
              </div>
              <h3 className="mt-5 text-lg font-black text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#B8C1D8]">{step.text}</p>
            </GlassCard>
          )
        })}
      </div>
    </section>
  )
}

export default ContactConsultation
