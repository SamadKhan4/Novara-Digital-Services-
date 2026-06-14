import { ArrowLeft, BadgeCheck, CheckCircle2, Sparkles } from 'lucide-react'

import Button from '../Button'
import GlassCard from '../GlassCard'
import SectionBadge from '../SectionBadge'
import { coreServices, serviceDetails } from './servicesData'

function ServiceDetailPageContent({ slug }) {
  const service = serviceDetails[slug] || serviceDetails['website-design-development']
  const Icon = service.icon
  const relatedServices = coreServices.filter((item) => item.slug !== slug).slice(0, 3)

  return (
    <div className="relative z-10 mx-auto grid max-w-[1280px] gap-12 px-5 pb-12 pt-32 lg:px-8">
      <section className="grid min-h-[520px] items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-black text-[#8EA2FF] transition hover:text-cyan-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </a>
          <SectionBadge className="mt-6 normal-case tracking-normal">
            <Sparkles className="h-3.5 w-3.5 text-cyan-200" />
            {service.eyebrow}
          </SectionBadge>
          <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-[4.7rem]">
            {service.title}
          </h1>
          <p className="mt-5 max-w-[650px] text-lg leading-8 text-[#D6DCF1]">
            {service.intro}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact">Book a Free Consultation</Button>
            <Button href="/portfolio" variant="secondary">
              View Our Work
            </Button>
          </div>
        </div>

        <GlassCard className="relative overflow-hidden p-6" glow>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(0,229,255,0.26),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(124,58,237,0.3),transparent_38%)]" />
          <div className="relative">
            <div className="grid h-24 w-24 place-items-center rounded-[24px] border border-cyan-300/25 bg-cyan-300/10 shadow-[0_0_38px_rgba(0,229,255,0.28)]">
              <Icon className="h-12 w-12 text-cyan-300 drop-shadow-[0_0_16px_rgba(0,229,255,0.85)]" />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {service.outcomes.map((outcome) => (
                <div key={outcome} className="rounded-[18px] border border-white/10 bg-white/[0.05] p-4">
                  <CheckCircle2 className="h-7 w-7 text-cyan-300" />
                  <p className="mt-4 text-sm font-black leading-tight text-white">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <GlassCard className="p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8EA2FF]">
            What We Deliver
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-white">
            Built with strategy, polish, and measurable purpose.
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {service.deliverables.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-[16px] border border-white/10 bg-white/[0.05] p-4">
                <BadgeCheck className="h-5 w-5 shrink-0 text-violet-300" />
                <span className="text-sm font-bold text-white/86">{item}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8EA2FF]">
            Our Process
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-white">
            A clear path from discovery to launch.
          </h2>
          <div className="mt-6 grid gap-4">
            {service.process.map((step, index) => (
              <div key={step} className="grid grid-cols-[52px_1fr] items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full border border-cyan-300/55 bg-[#121852] text-sm font-black text-white shadow-[0_0_22px_rgba(47,128,255,0.45)]">
                  0{index + 1}
                </div>
                <p className="text-sm font-semibold leading-6 text-[#C1C9DD]">{step}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      <section>
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8EA2FF]">
          Related Services
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {relatedServices.map((item) => {
            const RelatedIcon = item.icon

            return (
              <GlassCard key={item.slug} className="p-5">
                <RelatedIcon className="h-9 w-9 text-cyan-300 drop-shadow-[0_0_14px_rgba(0,229,255,0.75)]" />
                <h3 className="mt-4 text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#B8C1D8]">{item.text}</p>
                <a href={`/services/${item.slug}`} className="mt-5 inline-flex text-sm font-black text-[#8EA2FF]">
                  Explore Service
                </a>
              </GlassCard>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default ServiceDetailPageContent
