import Button from '../Button'
import GlassCard from '../GlassCard'

function ContactCTA() {
  return (
    <GlassCard className="overflow-hidden p-5 sm:p-7" glow>
      <div className="relative grid items-center gap-5 md:grid-cols-[1fr_auto]">
        <div>
          <h2 className="text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
            Ready for a focused consultation?
          </h2>
          <p className="mt-2 max-w-[680px] text-base leading-7 text-[#D6DCF1]">
            Bring your idea, website link, or current challenge. We will help
            you see what to build next and what to avoid wasting time on.
          </p>
        </div>
        <Button href="mailto:hello@novaradigital.com" className="md:px-9">
          Book a Free Consultation
        </Button>
      </div>
    </GlassCard>
  )
}

export default ContactCTA
