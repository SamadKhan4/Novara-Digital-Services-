import { Mail, MapPin, Phone } from 'lucide-react'
import Logo from './Logo'
import { footerLinks, socialLinks } from '../data/siteData'

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="text-sm font-black text-white">{title}</h3>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#home"
              className="text-sm text-[#AAB2C8] transition hover:text-cyan-200"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Footer() {
  return (
    <footer className="relative z-10 mx-auto max-w-[1280px] px-5 pb-7 lg:px-8">
      <div className="glass-card relative overflow-hidden p-7 lg:p-8">
        <div className="world-map" />
        <div className="relative grid gap-9 md:grid-cols-[1.4fr_1fr_1.3fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-[260px] text-sm text-[#AAB2C8]">
              Digital Solutions for the New Era
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon

                return (
                  <a
                    key={social.label}
                    href="#home"
                    aria-label={social.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/[0.06] text-cyan-200 transition hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-[0_0_22px_rgba(0,229,255,0.35)]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>
          <FooterColumn title="Quick Links" items={footerLinks.quick} />
          <FooterColumn title="Services" items={footerLinks.services} />
          <div>
            <h3 className="text-sm font-black text-white">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#AAB2C8]">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-cyan-300" />
                +91 12345 67890
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-cyan-300" />
                hello@novaradigital.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-cyan-300" />
                India | Worldwide
              </li>
            </ul>
          </div>
        </div>
        <div className="relative mt-8 flex flex-col gap-4 border-t border-white/10 pt-5 text-sm text-[#AAB2C8] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Novara Digital Services. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-cyan-200">
              Privacy Policy
            </a>
            <a href="#home" className="hover:text-cyan-200">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
