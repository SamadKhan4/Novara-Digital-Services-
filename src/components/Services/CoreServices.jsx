import { ArrowRight } from 'lucide-react'

import GlassCard from '../GlassCard'
import ServicesSectionTitle from './ServicesSectionTitle'
import { coreServices } from './servicesData'

function CoreServiceCard({ service }) {
  const Icon = service.icon

  return (
    <GlassCard className="group flex h-full flex-col p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/55 hover:shadow-[0_0_36px_rgba(47,128,255,0.22)]">
      <div className="flex items-start gap-4">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[14px] border border-cyan-300/25 bg-gradient-to-br from-cyan-300/15 to-violet-500/20 shadow-[0_0_22px_rgba(0,229,255,0.22)]">
          <Icon className="h-8 w-8 text-cyan-300 drop-shadow-[0_0_14px_rgba(0,229,255,0.85)]" />
        </div>
        <div>
          <h3 className="text-sm font-black leading-tight text-white">{service.title}</h3>
          <p className="mt-3 text-xs leading-5 text-[#B9C2DA]">{service.text}</p>
        </div>
      </div>
      <a href="/contact" className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-black text-[#8EA2FF]">
        Learn More <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </GlassCard>
  )
}

function CoreServices() {
  return (
    <section className="mt-2">
      <ServicesSectionTitle>Our Core Services</ServicesSectionTitle>
      <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {coreServices.map((service) => (
          <CoreServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  )
}

export default CoreServices
