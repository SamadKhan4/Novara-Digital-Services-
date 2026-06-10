import { ArrowRight } from 'lucide-react'

function Button({ children, variant = 'primary', className = '', href = '#' }) {
  const isPrimary = variant === 'primary'

  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-3 rounded-[16px] px-7 py-4 text-sm font-extrabold transition duration-300 ${
        isPrimary
          ? 'bg-gradient-to-r from-[#2F80FF] via-[#00A7FF] to-[#7C3AED] text-white shadow-[0_0_32px_rgba(47,128,255,0.45)] hover:-translate-y-1 hover:shadow-[0_0_46px_rgba(124,58,237,0.7)]'
          : 'border border-white/25 bg-white/[0.03] text-white hover:-translate-y-1 hover:border-cyan-300/70 hover:bg-cyan-300/10 hover:shadow-[0_0_30px_rgba(0,229,255,0.22)]'
      } ${className}`}
    >
      {children}
      {isPrimary && (
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      )}
    </a>
  )
}

export default Button
