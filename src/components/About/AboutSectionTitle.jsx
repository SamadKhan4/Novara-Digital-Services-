function AboutSectionTitle({ eyebrow, title, text }) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8EA2FF]">
        {eyebrow}
      </p>
      {title && (
        <h2 className="mt-2 text-2xl font-black leading-tight tracking-[-0.03em] text-white sm:text-3xl">
          {title}
        </h2>
      )}
      {text && <p className="mt-3 text-sm leading-6 text-[#B8C1D8]">{text}</p>}
    </div>
  )
}

export default AboutSectionTitle
