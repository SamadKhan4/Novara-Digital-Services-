import { Send } from 'lucide-react'

import Button from '../Button'
import GlassCard from '../GlassCard'
import SectionBadge from '../SectionBadge'
import { trustNotes } from './contactData'

function ContactHero() {
  return (
    <section className="grid min-h-[520px] items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div>
        <SectionBadge className="normal-case tracking-normal">
          <Send className="h-3.5 w-3.5 text-cyan-200" />
          Contact Novara
        </SectionBadge>
        <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-[4.8rem]">
          Let&apos;s Build Your
          <span className="block bg-gradient-to-r from-[#00E5FF] via-[#2F80FF] to-[#8B5CF6] bg-clip-text text-transparent">
            Next Digital Win
          </span>
        </h1>
        <p className="mt-5 max-w-[620px] text-lg leading-8 text-[#D6DCF1]">
          Tell us what you want to create, improve, or scale. We will help you
          turn the idea into a clear digital plan with the right design,
          technology, and growth strategy.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="mailto:samad04.in@gmail.com">Email Your Project</Button>
          <Button href="#contact-form" variant="secondary">
            Fill Project Brief
          </Button>
        </div>
      </div>

      <GlassCard className="relative overflow-hidden p-6" glow>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(0,229,255,0.26),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(124,58,237,0.3),transparent_38%)]" />
        <div className="relative grid gap-4">
          <div className="grid h-24 w-24 place-items-center rounded-[24px] border border-cyan-300/25 bg-cyan-300/10 shadow-[0_0_38px_rgba(0,229,255,0.28)]">
            <Send className="h-12 w-12 text-cyan-300 drop-shadow-[0_0_16px_rgba(0,229,255,0.85)]" />
          </div>
          <div className="grid gap-3">
            {trustNotes.map((item) => {
              const Icon = item.icon

              return (
                <div key={item.label} className="flex items-center gap-3 rounded-[16px] border border-white/10 bg-white/[0.05] p-4">
                  <Icon className="h-6 w-6 text-cyan-300" />
                  <span className="text-sm font-bold text-white/86">{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </GlassCard>
    </section>
  )
}

export default ContactHero
