import { Rocket } from 'lucide-react'

import Button from '../Button'
import GlassCard from '../GlassCard'

function ServicesCTA() {
  return (
    <GlassCard className="mt-6 overflow-hidden p-5 sm:p-7" glow>
      <div className="relative grid items-center gap-5 md:grid-cols-[100px_1fr_auto]">
        <div className="grid h-20 w-20 place-items-center rounded-[18px] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/18 to-violet-500/24 shadow-[0_0_30px_rgba(47,128,255,0.28)]">
          <Rocket className="h-11 w-11 text-cyan-300 drop-shadow-[0_0_16px_rgba(0,229,255,0.85)]" />
        </div>
        <div>
          <h2 className="text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
            Ready to Elevate Your Brand?
          </h2>
          <p className="mt-2 text-base text-[#D6DCF1]">
            Let's build something extraordinary together.
          </p>
        </div>
        <Button href="/contact" className="md:px-9">
          Book a Free Consultation
        </Button>
      </div>
    </GlassCard>
  )
}

export default ServicesCTA
