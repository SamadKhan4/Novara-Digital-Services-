import { Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import WebLogo from '../../assets/Weblogo.png'
import { navLinks } from '../../data/siteData'

function Navbar({ currentPath = '/', onNavigate }) {
  const [open, setOpen] = useState(false)

  const handleNavigate = (event, path) => {
    if (!onNavigate) return

    event.preventDefault()
    onNavigate(path)
    setOpen(false)
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4">
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
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-[12px] border border-white/12 bg-white/[0.06] text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <div
        className={`mx-auto mt-2 max-w-[980px] overflow-hidden rounded-b-[24px] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.035)),rgba(0,0,0,0.68)] shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-[24px] transition-all duration-300 lg:hidden ${
          open ? 'max-h-[520px] opacity-100' : 'max-h-0 border-transparent opacity-0'
        }`}
      >
        <div className="grid gap-1 p-4">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={(event) => handleNavigate(event, link.path)}
              className={`rounded-[14px] px-4 py-3 text-sm font-bold hover:bg-white/10 hover:text-cyan-100 ${
                currentPath === link.path ? 'bg-white/10 text-white' : 'text-white/82'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={(event) => handleNavigate(event, '/contact')}
            className="mt-2 inline-flex w-full items-center justify-center rounded-[14px] bg-white px-5 py-3 text-sm font-black text-black"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
