import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Button from '../Button'
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
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between rounded-[22px] border border-white/10 bg-[#050816]/58 px-4 py-3 shadow-[0_12px_50px_rgba(0,0,0,0.25)] backdrop-blur-2xl lg:px-7">
        <a
          href="/"
          onClick={(event) => handleNavigate(event, '/')}
          aria-label="Novara Digital Services home"
          className="flex items-center gap-3"
        >
          <img
            src={WebLogo}
            alt="Novara Digital Services"
            className="h-12 w-auto object-contain"
          />
          <span className="leading-none">
            <span className="block text-2xl font-black tracking-[0.02em] text-white">
              NOVARA
            </span>
            <span className="block text-[0.67rem] font-bold tracking-[0.32em] text-white/85">
              DIGITAL SERVICES
            </span>
          </span>
        </a>
        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={(event) => handleNavigate(event, link.path)}
              className={`text-sm font-bold transition hover:text-cyan-200 hover:drop-shadow-[0_0_10px_rgba(0,229,255,0.9)] ${
                currentPath === link.path ? 'text-white' : 'text-white/78'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden lg:block">
          <Button
            href="/contact"
            onClick={(event) => handleNavigate(event, '/contact')}
            className="px-6 py-3"
          >
            Book a Free Consultation
          </Button>
        </div>
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-[14px] border border-white/12 bg-white/[0.06] text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <div
        className={`mx-auto mt-3 max-w-[1280px] overflow-hidden rounded-[22px] border border-white/10 bg-[#080d1d]/92 shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-300 lg:hidden ${
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
          <Button
            href="/contact"
            onClick={(event) => handleNavigate(event, '/contact')}
            className="mt-2 w-full py-3"
          >
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
