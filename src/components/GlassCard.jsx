const glassBase =
  'relative rounded-[22px] border border-[#aabeff38] bg-[linear-gradient(180deg,rgba(255,255,255,0.095),rgba(255,255,255,0.035)),rgba(10,16,40,0.76)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_40px_rgba(47,128,255,0.12)] backdrop-blur-[18px]'

const glowLayer =
  'before:absolute before:inset-[-1px] before:-z-10 before:rounded-[inherit] before:bg-[linear-gradient(135deg,rgba(0,229,255,0.42),rgba(139,92,246,0.38),transparent_60%)] before:opacity-75 before:blur-[18px] before:content-[""]'

function GlassCard({ children, className = '', style, glow = false }) {
  return (
    <div
      style={style}
      className={`${glassBase} ${glow ? glowLayer : ''} ${className}`}
    >
      {children}
    </div>
  )
}

export default GlassCard
