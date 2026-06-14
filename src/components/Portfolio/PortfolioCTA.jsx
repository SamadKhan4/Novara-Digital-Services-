import Button from '../Button'
import GlassCard from '../GlassCard'

function PortfolioCTA() {
  return (
    <GlassCard className="overflow-hidden p-5 sm:p-7" glow>
      <div className="relative grid items-center gap-5 md:grid-cols-[1fr_auto]">
        <div>
          <h2 className="text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
            Have a project in mind?
          </h2>
          <p className="mt-2 max-w-[650px] text-base leading-7 text-[#D6DCF1]">
            Let us turn your idea into a polished digital experience built for
            growth, trust, and conversion.
          </p>
        </div>
        <Button href="/contact" className="md:px-9">
          Start Your Project
        </Button>
      </div>
    </GlassCard>
  )
}

export default PortfolioCTA
