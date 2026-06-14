import { Plus } from 'lucide-react'

import GlassCard from '../GlassCard'
import ServicesSectionTitle from './ServicesSectionTitle'
import { faqs } from './servicesData'

function ServicesFAQ() {
  return (
    <section>
      <ServicesSectionTitle>Frequently Asked Questions</ServicesSectionTitle>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {faqs.map((faq) => (
          <GlassCard key={faq} className="flex items-center justify-between gap-4 px-5 py-3">
            <span className="text-sm font-bold text-white">{faq}</span>
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-violet-300/35 bg-violet-500/10 text-cyan-200">
              <Plus className="h-4 w-4" />
            </span>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}

export default ServicesFAQ
