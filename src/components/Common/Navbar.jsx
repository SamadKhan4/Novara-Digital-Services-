import { Home, LayoutGrid, Phone, Sparkles, UserRound } from 'lucide-react'
import WebLogo from '../../assets/Weblogo.png'
import { navLinks } from '../../data/siteData'

const navIcons = {
  '/': Home,
  '/services': Sparkles,
  '/about': UserRound,
  '/portfolio': LayoutGrid,
  '/contact': Phone,
}

function Navbar({ currentPath = '/', onNavigate }) {
  const handleNavigate = (event, path) => {
    if (!onNavigate) return

    event.preventDefault()
    onNavigate(path)
  }

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 hidden px-4 lg:block">
        <nav className="mx-auto flex max-w-[980px] items-center justify-between rounded-b-[30px] border-x border-b border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.045)),rgba(0,0,0,0.58)] px-5 py-3 shadow-[0_20px_70px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-[26px]">
          <a
            href="/"
            onClick={(event) => handleNavigate(event, '/')}
            aria-label="Novara Digital Services home"
            className="flex items-center gap-2"
          >
            <img
              src={WebLogo}
              alt="Novara Digital Services"
              className="h-9 w-auto object-contain"
            />
            <span className="leading-none">
              <span className="block text-sm font-black tracking-[0.02em] text-white">
                NOVARA
              </span>
              <span className="block text-[0.48rem] font-bold tracking-[0.22em] text-white/68">
                DIGITAL
              </span>
            </span>
          </a>
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(event) => handleNavigate(event, link.path)}
                className={`text-xs font-bold transition hover:text-cyan-200 ${
                  currentPath === link.path ? 'text-white' : 'text-white/58'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="/contact"
            onClick={(event) => handleNavigate(event, '/contact')}
            aria-label="Contact Novara Digital Services"
            className="hidden h-11 w-11 place-items-center rounded-[14px] border border-cyan-300/30 bg-cyan-300/12 text-cyan-100 shadow-[0_0_24px_rgba(0,229,255,0.28),inset_0_1px_0_rgba(255,255,255,0.12)] transition hover:-translate-y-0.5 hover:border-cyan-200/70 hover:bg-cyan-300/18 hover:shadow-[0_0_34px_rgba(0,229,255,0.45)] lg:grid"
          >
            <Phone className="h-5 w-5 drop-shadow-[0_0_10px_rgba(0,229,255,0.9)]" />
          </a>
        </nav>
      </header>

      <nav className="fixed bottom-4 left-1/2 z-50 grid w-[calc(100%-2rem)] max-w-[430px] -translate-x-1/2 grid-cols-5 gap-2 rounded-[28px] border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.13),rgba(255,255,255,0.045)),rgba(0,0,0,0.62)] p-2 shadow-[0_18px_70px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-[26px] lg:hidden">
        {navLinks.map((link) => {
          const Icon = navIcons[link.path] || Home
          const active = currentPath === link.path

          return (
            <a
              key={link.path}
              href={link.path}
              onClick={(event) => handleNavigate(event, link.path)}
              aria-label={link.label}
              title={link.label}
              className={`grid h-12 place-items-center rounded-[20px] transition ${
                active
                  ? 'border border-cyan-300/35 bg-cyan-300/14 text-cyan-100 shadow-[0_0_24px_rgba(0,229,255,0.3)]'
                  : 'text-white/62 hover:bg-white/10 hover:text-cyan-100'
              }`}
            >
              <Icon className="h-5 w-5" />
            </a>
          )
        })}
      </nav>
    </>
  )
}

export default Navbar
