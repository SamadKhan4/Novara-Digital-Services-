function Logo({ compact = false }) {
  return (
    <a href="#home" className="group flex items-center gap-3">
      <span className="relative grid h-11 w-11 place-items-center rounded-[12px] bg-gradient-to-br from-[#00E5FF] via-[#2F80FF] to-[#8B5CF6] shadow-[0_0_30px_rgba(47,128,255,0.65)]">
        <span className="absolute inset-[2px] rounded-[10px] bg-[#081126]/40" />
        <span className="relative text-3xl font-black leading-none tracking-[-0.08em] text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.75)]">
          N
        </span>
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block text-2xl font-black tracking-[0.02em] text-white">
            NOVARA
          </span>
          <span className="block text-[0.67rem] font-bold tracking-[0.32em] text-white/85">
            DIGITAL SERVICES
          </span>
        </span>
      )}
    </a>
  )
}

export default Logo
