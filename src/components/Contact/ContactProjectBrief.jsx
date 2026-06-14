import { ArrowRight, BadgeCheck } from 'lucide-react'

import GlassCard from '../GlassCard'
import { projectTypes } from './contactData'

function Field({ label, placeholder, type = 'text', multiline = false }) {
  const className =
    'mt-2 w-full rounded-[16px] border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-semibold text-white outline-none transition placeholder:text-white/35 focus:border-cyan-300/60 focus:bg-cyan-300/[0.06] focus:shadow-[0_0_24px_rgba(0,229,255,0.14)]'

  return (
    <label className="block">
      <span className="text-xs font-black uppercase tracking-[0.18em] text-[#8EA2FF]">
        {label}
      </span>
      {multiline ? (
        <textarea className={`${className} min-h-[132px] resize-none`} placeholder={placeholder} />
      ) : (
        <input className={className} type={type} placeholder={placeholder} />
      )}
    </label>
  )
}

function ContactProjectBrief() {
  return (
    <section id="contact-form" className="mt-6 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
      <GlassCard className="p-5 sm:p-7" glow>
        <div className="mb-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8EA2FF]">
            Project Brief
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-white">
            Share a few details
          </h2>
          <p className="mt-3 max-w-[650px] text-sm leading-6 text-[#B8C1D8]">
            The more context you share, the faster we can recommend the right
            plan for your website, brand, marketing, or automation project.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Your Name" placeholder="Enter your name" />
          <Field label="Email Address" placeholder="you@example.com" type="email" />
          <Field label="Company / Brand" placeholder="Your brand name" />
          <Field label="Budget Range" placeholder="Example: Rs. 50k - 1L" />
        </div>
        <div className="mt-4">
          <Field
            label="Project Details"
            placeholder="Tell us what you need, your goals, timeline, and any important links."
            multiline
          />
        </div>

        <button
          type="button"
          className="mt-6 inline-flex items-center justify-center gap-3 rounded-[16px] bg-gradient-to-r from-[#2F80FF] via-[#00A7FF] to-[#7C3AED] px-7 py-4 text-sm font-extrabold text-white shadow-[0_0_32px_rgba(47,128,255,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_46px_rgba(124,58,237,0.7)]"
        >
          Send Project Brief <ArrowRight className="h-4 w-4" />
        </button>
      </GlassCard>

      <GlassCard className="p-5 sm:p-7">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8EA2FF]">
          Services You Can Ask For
        </p>
        <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] text-white">
          We can help with
        </h2>
        <div className="mt-5 grid gap-3">
          {projectTypes.map((type) => (
            <div key={type} className="flex items-center gap-3 rounded-[16px] border border-white/10 bg-white/[0.05] p-4">
              <BadgeCheck className="h-5 w-5 text-violet-300" />
              <span className="text-sm font-bold text-white/86">{type}</span>
            </div>
          ))}
        </div>
      </GlassCard>
    </section>
  )
}

export default ContactProjectBrief
