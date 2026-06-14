function ServicesSectionTitle({ children, className = '' }) {
  return (
    <h2 className={`text-xl font-black tracking-[-0.02em] text-white ${className}`}>
      {children}
    </h2>
  )
}

export default ServicesSectionTitle
