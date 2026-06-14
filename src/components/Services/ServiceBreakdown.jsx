import { ArrowRight, BadgeCheck } from 'lucide-react'

import GlassCard from '../GlassCard'
import ServicesSectionTitle from './ServicesSectionTitle'
import { serviceBreakdown, workflow } from './servicesData'

function BreakdownRow({ item }) {
  const Icon = item.icon
  const Visual = item.visual

  return (
    <GlassCard className="grid items-center gap-4 p-4 md:grid-cols-[64px_1.1fr_1.35fr_120px_24px]">
      <div className="grid h-14 w-14 place-items-center rounded-[14px] border border-cyan-300/25 bg-cyan-300/10">
        <Icon className="h-8 w-8 text-cyan-300 drop-shadow-[0_0_15px_rgba(0,229,255,0.85)]" />
      </div>
      <div>
        <h3 className="text-base font-black text-white">{item.title}</h3>
        <p className="mt-2 text-xs leading-5 text-[#AAB2C8]">{item.text}</p>
      </div>
      <ul className="grid gap-1.5 text-xs text-[#B9C2DA] sm:grid-cols-2 md:grid-cols-1">
        {item.points.map((point) => (
          <li key={point} className="flex items-center gap-2">
            <BadgeCheck className="h-3.5 w-3.5 text-violet-300" />
            {point}
          </li>
        ))}
      </ul>
      <div className="hidden justify-self-center md:block">
        <Visual className="h-20 w-20 text-cyan-300 drop-shadow-[0_0_18px_rgba(0,229,255,0.85)]" />
      </div>
      <ArrowRight className="hidden h-6 w-6 text-white/80 md:block" />
    </GlassCard>
  )
}

function WorkflowPanel() {
  return (
    <GlassCard className="h-full p-6">
      <ServicesSectionTitle>Our Service Workflow</ServicesSectionTitle>
      <div className="relative mt-6 grid gap-6">
        <div className="absolute bottom-10 left-6 top-8 w-px bg-gradient-to-b from-cyan-300 via-violet-500 to-transparent shadow-[0_0_18px_rgba(0,229,255,0.65)]" />
        {workflow.map((step) => {
          const Icon = step.icon

          return (
            <div key={step.number} className="relative grid grid-cols-[56px_1fr_54px] items-center gap-4">
              <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-cyan-300/55 bg-[#10164A] text-lg font-black shadow-[0_0_22px_rgba(47,128,255,0.5)]">
                {step.number}
              </div>
              <div>
                <h3 className="text-sm font-black text-white">{step.title}</h3>
                <p className="mt-1 text-xs leading-5 text-[#AAB2C8]">{step.text}</p>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-full border border-violet-300/35 bg-violet-500/10">
                <Icon className="h-6 w-6 text-cyan-300 drop-shadow-[0_0_12px_rgba(0,229,255,0.8)]" />
              </div>
            </div>
          )
        })}
      </div>
    </GlassCard>
  )
}

function ServiceBreakdown() {
  return (
    <section className="grid gap-5 lg:grid-cols-[1fr_310px]">
      <div>
        <ServicesSectionTitle>In-Depth Service Breakdown</ServicesSectionTitle>
        <div className="mt-3 grid gap-3">
          {serviceBreakdown.map((item) => (
            <BreakdownRow key={item.title} item={item} />
          ))}
        </div>
      </div>
      <WorkflowPanel />
    </section>
  )
}

export default ServiceBreakdown
