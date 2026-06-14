import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Common/Navbar'
import Footer from './components/Common/Footer'
import WelcomeScreen from './components/Common/WelcomeScreen'
import AboutPage from './pages/AboutPage'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import BrandingIdentity from './pages/Services/BrandingIdentity'
import BusinessAutomation from './pages/Services/BusinessAutomation'
import SeoOnlineGrowth from './pages/Services/SeoOnlineGrowth'
import SocialMediaMarketing from './pages/Services/SocialMediaMarketing'
import UiUxDesign from './pages/Services/UiUxDesign'
import WebsiteDevelopment from './pages/Services/WebsiteDevelopment'
import { serviceDetails } from './components/Services/servicesData'

const routes = {
  '/': Home,
  '/services': Services,
  '/services/website-design-development': WebsiteDevelopment,
  '/services/branding-identity': BrandingIdentity,
  '/services/social-media-marketing': SocialMediaMarketing,
  '/services/seo-online-growth': SeoOnlineGrowth,
  '/services/business-automation': BusinessAutomation,
  '/services/ui-ux-design': UiUxDesign,
  '/about': AboutPage,
  '/portfolio': Portfolio,
  '/contact': Contact,
}

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const syncPath = () => setCurrentPath(window.location.pathname)

    window.addEventListener('popstate', syncPath)
    return () => window.removeEventListener('popstate', syncPath)
  }, [])

  const serviceSlug = currentPath.startsWith('/services/')
    ? currentPath.replace('/services/', '')
    : ''

  const Page = useMemo(() => {
    return routes[currentPath] || Home
  }, [currentPath])

  const handleNavigate = (path) => {
    if (path === currentPath) return

    window.history.pushState({}, '', path)
    setCurrentPath(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const closeWelcome = () => {
    setShowWelcome(false)
  }

  useEffect(() => {
    if (!showWelcome) return

    const timer = window.setTimeout(closeWelcome, 2600)
    return () => window.clearTimeout(timer)
  }, [showWelcome])

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <WelcomeScreen visible={showWelcome} onFinish={closeWelcome} />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_18%_22%,rgba(47,128,255,0.2),transparent_25%),radial-gradient(circle_at_80%_18%,rgba(124,58,237,0.18),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(0,229,255,0.11),transparent_27%),linear-gradient(180deg,#050816_0%,#070b18_48%,#030511_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:72px_72px] [mask-image:radial-gradient(circle_at_50%_12%,black,transparent_68%)]" />
        <div className="absolute inset-0 opacity-65 [animation:starShift_18s_linear_infinite] bg-[radial-gradient(circle_at_8%_44%,rgba(0,229,255,0.45)_0_2px,transparent_3px),radial-gradient(circle_at_20%_70%,rgba(124,58,237,0.45)_0_2px,transparent_3px),radial-gradient(circle_at_84%_35%,rgba(255,255,255,0.5)_0_1px,transparent_2px),radial-gradient(circle_at_70%_58%,rgba(0,229,255,0.4)_0_1px,transparent_2px)] bg-[length:260px_220px]" />
      </div>
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(circle,rgba(255,255,255,0.75)_1px,transparent_1.5px),radial-gradient(circle,rgba(0,229,255,0.55)_1px,transparent_1.5px)] bg-[position:0_0,40px_70px] bg-[length:170px_170px,230px_230px] opacity-45" />
      <Navbar
        currentPath={serviceSlug && serviceDetails[serviceSlug] ? '/services' : routes[currentPath] ? currentPath : '/'}
        onNavigate={handleNavigate}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPath}
          initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Page slug={serviceSlug} />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </main>
  )
}

export default App
