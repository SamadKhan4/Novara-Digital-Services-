import { Plus } from 'lucide-react'
import { useState } from 'react'

import GlassCard from '../GlassCard'
import ServicesSectionTitle from './ServicesSectionTitle'
import { faqs } from './servicesData'

function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section>
      <ServicesSectionTitle>Frequently Asked Questions</ServicesSectionTitle>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {faqs.map((faq, index) => (
          <GlassCard key={faq.question} className="px-5 py-4">
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={openIndex === index}
            >
              <span className="text-sm font-bold text-white">{faq.question}</span>
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-violet-300/35 bg-violet-500/10 text-cyan-200">
                <Plus
                  className={`h-4 w-4 transition duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="mt-3 border-t border-white/10 pt-3 text-sm leading-6 text-[#B9C2DA]">
                  {faq.answer}
                </p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}

export default ServicesFAQ
