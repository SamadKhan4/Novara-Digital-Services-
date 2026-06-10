function GlassCard({
  children,
  className = '',
  as: Component = 'div',
  glow = false,
  ...props
}) {
  return (
    <Component
      className={`glass-card ${glow ? 'glass-card-glow' : ''} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export default GlassCard
