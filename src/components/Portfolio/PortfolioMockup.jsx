const mockupBase =
  'relative h-[220px] overflow-hidden bg-[radial-gradient(circle_at_35%_20%,rgba(0,229,255,0.28),transparent_34%),radial-gradient(circle_at_75%_65%,rgba(124,58,237,0.34),transparent_36%),linear-gradient(135deg,#071127,#0b1024_56%,#10102b)]'

const mockupGlow =
  'absolute -bottom-[55px] -left-5 -right-5 h-[100px] bg-[linear-gradient(90deg,rgba(47,128,255,0.5),rgba(124,58,237,0.42))] blur-[30px]'

const panelBase =
  'absolute border border-white/20 bg-white/[0.08] shadow-[0_16px_36px_rgba(0,0,0,0.35)] backdrop-blur-[10px]'

function PortfolioMockup({ type }) {
  return (
    <div className={mockupBase}>
      <div className={mockupGlow} />
      {type === 'startup' && (
        <>
          <div className={`${panelBase} left-[36px] top-[48px] h-[118px] w-[168px] rotate-[-7deg] rounded-[12px]`}>
            <span className="block h-5 border-b border-white/15 bg-white/[0.08]" />
            <div className="m-5 h-3 rounded-full bg-[#00e5ff] shadow-[0_0_18px_rgba(0,229,255,0.75)]" />
            <div className="mx-5 my-4 h-8 rounded-lg bg-[linear-gradient(90deg,rgba(47,128,255,0.5),rgba(139,92,246,0.55))]" />
          </div>
          <div className={`${panelBase} bottom-[34px] right-9 h-[104px] w-[140px] rotate-[7deg] rounded-xl`} />
        </>
      )}
      {type === 'branding' && (
        <>
          <div className={`${panelBase} bottom-[28px] left-[72px] h-[145px] w-[102px] rounded-lg bg-[linear-gradient(160deg,rgba(199,157,91,0.28),rgba(255,255,255,0.06))]`} />
          <div className={`${panelBase} bottom-14 left-[150px] h-[112px] w-28 rounded-lg bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(47,128,255,0.08))]`} />
          <div className={`${panelBase} bottom-[28px] right-[52px] h-[72px] w-[52px] rounded-b-[18px] rounded-t-lg`} />
        </>
      )}
      {type === 'ecommerce' && (
        <>
          <div className={`${panelBase} left-[34px] top-[34px] h-[138px] w-[214px] rounded-lg bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(203,218,255,0.7))]`} />
          <div className={`${panelBase} right-[48px] top-[48px] h-[112px] w-[72px] rounded-b-[20px] rounded-t-full bg-[linear-gradient(160deg,#ffe0c8,#1c2546_64%)]`} />
          <div className={`${panelBase} bottom-[58px] left-[56px] h-3 w-[78px] rounded-full bg-[#050816]`} />
        </>
      )}
      {type === 'dashboard' && (
        <>
          <div className={`${panelBase} left-[38px] top-10 h-[138px] w-[230px] rounded-xl`} />
          <div className={`${panelBase} bottom-[56px] right-[112px] h-[54px] w-[22px] rounded-t-md bg-[linear-gradient(#00e5ff,#8b5cf6)]`} />
          <div className={`${panelBase} bottom-[56px] right-[78px] h-[78px] w-[22px] rounded-t-md bg-[linear-gradient(#00e5ff,#8b5cf6)]`} />
          <div className={`${panelBase} bottom-[56px] right-[44px] h-[98px] w-[22px] rounded-t-md bg-[linear-gradient(#00e5ff,#8b5cf6)]`} />
        </>
      )}
      {type === 'campaign' && (
        <>
          <div className={`${panelBase} bottom-[30px] left-12 h-[150px] w-[72px] rotate-[-8deg] rounded-2xl bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.82),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.18),rgba(124,58,237,0.22))]`} />
          <div className={`${panelBase} bottom-[38px] left-[118px] h-[150px] w-[72px] scale-[1.08] rounded-2xl bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.82),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.18),rgba(124,58,237,0.22))]`} />
          <div className={`${panelBase} bottom-[30px] right-[52px] h-[150px] w-[72px] rotate-[8deg] rounded-2xl bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.82),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.18),rgba(124,58,237,0.22))]`} />
        </>
      )}
    </div>
  )
}

export default PortfolioMockup
