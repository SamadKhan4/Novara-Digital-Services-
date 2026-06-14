import GlassCard from '../GlassCard'

function AboutIconPanel({ icon: Icon, title, text }) {
  return (
    <GlassCard className="p-5 text-center">
      <Icon className="mx-auto h-10 w-10 text-cyan-300 drop-shadow-[0_0_16px_rgba(0,229,255,0.75)]" />
      <h3 className="mt-3 text-sm font-black text-white">{title}</h3>
      <p className="mt-2 text-xs leading-5 text-[#B9C2DA]">{text}</p>
    </GlassCard>
  )
}

export default AboutIconPanel
