function SectionBadge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-violet-200 shadow-[0_0_24px_rgba(124,58,237,0.18)] ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(0,229,255,0.9)]" />
      {children}
    </span>
  )
}

export default SectionBadge
