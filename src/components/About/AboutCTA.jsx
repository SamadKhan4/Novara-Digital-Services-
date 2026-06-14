import Button from '../Button'
import GlassCard from '../GlassCard'

function AboutCTA() {
  return (
    <GlassCard className="overflow-hidden p-5 sm:p-7">
      <div className="relative grid items-center gap-5 md:grid-cols-[130px_1fr_auto]">
        <div className="grid h-24 w-24 place-items-center rounded-[18px] border border-white/12 bg-[radial-gradient(circle_at_30%_20%,rgba(0,229,255,0.35),transparent_35%),linear-gradient(135deg,rgba(47,128,255,0.34),rgba(124,58,237,0.3))] shadow-[0_0_35px_rgba(47,128,255,0.28)]">
          <span className="font-['Sora'] text-6xl font-black leading-none tracking-[-0.13em] text-white">
            N
          </span>
        </div>
        <div>
          <h2 className="text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
            Let's Build Something Exceptional Together
          </h2>
          <p className="mt-2 text-base text-[#D6DCF1]">
            Ready to take your brand to the next level? We're here to help.
          </p>
        </div>
        <Button href="/contact" className="md:px-9">
          Book a Free Consultation
        </Button>
      </div>
    </GlassCard>
  )
}

export default AboutCTA
