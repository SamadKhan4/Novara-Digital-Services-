import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import GlassCard from './GlassCard'
import SectionBadge from './SectionBadge'
import { testimonials } from '../data/siteData'

function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative z-10 mx-auto max-w-[1280px] px-5 py-10 lg:px-8">
      <SectionBadge>Testimonials</SectionBadge>
      <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl">
        Trusted by Ambitious Businesses
      </h2>
      <div className="mt-7 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <GlassCard className="relative h-full overflow-hidden p-7">
              <span className="absolute right-7 top-1 text-8xl font-black leading-none text-violet-400/14">
                "
              </span>
              <div className="flex gap-1 text-yellow-300">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-4 w-4 fill-current drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]"
                  />
                ))}
              </div>
              <p className="relative mt-5 min-h-[104px] text-sm leading-7 text-white/86">
                {testimonial.text}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div
                  className={`h-12 w-12 rounded-full bg-gradient-to-br ${testimonial.gradient} shadow-[0_0_20px_rgba(124,58,237,0.45)]`}
                />
                <div>
                  <h3 className="font-black text-white">{testimonial.name}</h3>
                  <p className="text-xs text-[#AAB2C8]">{testimonial.role}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
