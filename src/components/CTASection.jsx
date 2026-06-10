import { motion } from 'framer-motion'
import Button from './Button'
import GlassCard from './GlassCard'

function CTASection() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-[1280px] px-5 py-7 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.58 }}
      >
        <GlassCard className="relative grid items-center gap-7 overflow-hidden p-7 md:grid-cols-[1.2fr_1fr_auto] lg:p-9" glow>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(47,128,255,0.55),transparent_31%),radial-gradient(circle_at_80%_50%,rgba(124,58,237,0.45),transparent_34%)]" />
          <h2 className="relative text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl">
            Ready to Build a Brand That
            <span className="block">Looks Professional Online?</span>
          </h2>
          <p className="relative max-w-[520px] text-base leading-7 text-white/82">
            Let's create a digital presence that makes your business stand out,
            build trust, and attract better customers.
          </p>
          <Button href="#contact" className="relative whitespace-nowrap">
            Book a Free Consultation
          </Button>
        </GlassCard>
      </motion.div>
    </section>
  )
}

export default CTASection
