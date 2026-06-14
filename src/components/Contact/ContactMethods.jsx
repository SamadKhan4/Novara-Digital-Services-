import GlassCard from '../GlassCard'
import { contactMethods } from './contactData'

function ContactMethods() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {contactMethods.map((method) => {
        const Icon = method.icon

        return (
          <GlassCard key={method.title} className="h-full p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45">
            <div className="grid h-14 w-14 place-items-center rounded-[16px] border border-cyan-300/25 bg-cyan-300/10">
              <Icon className="h-7 w-7 text-cyan-300 drop-shadow-[0_0_14px_rgba(0,229,255,0.75)]" />
            </div>
            <h3 className="mt-5 text-lg font-black text-white">{method.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#B8C1D8]">{method.text}</p>
            <p className="mt-5 text-sm font-black text-cyan-200">{method.value}</p>
          </GlassCard>
        )
      })}
    </section>
  )
}

export default ContactMethods
