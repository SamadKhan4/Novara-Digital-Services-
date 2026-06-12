import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Common/Navbar'
import Footer from './components/Common/Footer'
import AboutPage from './pages/AboutPage'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'

const routes = {
  '/': Home,
  '/services': Services,
  '/about': AboutPage,
  '/portfolio': Portfolio,
  '/contact': Contact,
}

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const syncPath = () => setCurrentPath(window.location.pathname)

    window.addEventListener('popstate', syncPath)
    return () => window.removeEventListener('popstate', syncPath)
  }, [])

  const Page = useMemo(() => routes[currentPath] || Home, [currentPath])

  const handleNavigate = (path) => {
    if (path === currentPath) return

    window.history.pushState({}, '', path)
    setCurrentPath(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_18%_22%,rgba(47,128,255,0.2),transparent_25%),radial-gradient(circle_at_80%_18%,rgba(124,58,237,0.18),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(0,229,255,0.11),transparent_27%),linear-gradient(180deg,#050816_0%,#070b18_48%,#030511_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:72px_72px] [mask-image:radial-gradient(circle_at_50%_12%,black,transparent_68%)]" />
        <div className="absolute inset-0 opacity-65 [animation:starShift_18s_linear_infinite] bg-[radial-gradient(circle_at_8%_44%,rgba(0,229,255,0.45)_0_2px,transparent_3px),radial-gradient(circle_at_20%_70%,rgba(124,58,237,0.45)_0_2px,transparent_3px),radial-gradient(circle_at_84%_35%,rgba(255,255,255,0.5)_0_1px,transparent_2px),radial-gradient(circle_at_70%_58%,rgba(0,229,255,0.4)_0_1px,transparent_2px)] bg-[length:260px_220px]" />
      </div>
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(circle,rgba(255,255,255,0.75)_1px,transparent_1.5px),radial-gradient(circle,rgba(0,229,255,0.55)_1px,transparent_1.5px)] bg-[position:0_0,40px_70px] bg-[length:170px_170px,230px_230px] opacity-45" />
      <Navbar currentPath={routes[currentPath] ? currentPath : '/'} onNavigate={handleNavigate} />
      <Page />
      <Footer />
    </main>
  )
}

export default App
