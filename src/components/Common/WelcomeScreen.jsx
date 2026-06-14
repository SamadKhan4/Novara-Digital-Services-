import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import WebLogo from '../../assets/Weblogo.png'

function WelcomeScreen({ visible, onFinish }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#030511]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(14px)' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(0,229,255,0.22),transparent_28%),radial-gradient(circle_at_68%_62%,rgba(124,58,237,0.22),transparent_30%),linear-gradient(180deg,#050816_0%,#02030c_100%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-50 [animation:starShift_18s_linear_infinite] bg-[radial-gradient(circle_at_8%_44%,rgba(0,229,255,0.45)_0_2px,transparent_3px),radial-gradient(circle_at_20%_70%,rgba(124,58,237,0.45)_0_2px,transparent_3px),radial-gradient(circle_at_84%_35%,rgba(255,255,255,0.5)_0_1px,transparent_2px)] bg-[length:260px_220px]" />

          <motion.div
            className="relative mx-5 grid w-full max-w-[620px] justify-items-center rounded-[34px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.11),rgba(255,255,255,0.035)),rgba(7,11,30,0.72)] px-6 py-10 text-center shadow-[0_0_80px_rgba(47,128,255,0.22),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-[26px]"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="grid h-24 w-24 place-items-center rounded-[28px] border border-cyan-300/25 bg-cyan-300/10 shadow-[0_0_42px_rgba(0,229,255,0.32)]"
              animate={{
                boxShadow: [
                  '0 0 32px rgba(0,229,255,0.24)',
                  '0 0 64px rgba(124,58,237,0.42)',
                  '0 0 32px rgba(0,229,255,0.24)',
                ],
              }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img src={WebLogo} alt="Novara Digital Services" className="h-16 w-auto object-contain" />
            </motion.div>

            <motion.p
              className="mt-8 text-xs font-black uppercase tracking-[0.32em] text-cyan-200"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.55 }}
            >
              Welcome to
            </motion.p>
            <motion.h1
              className="mt-3 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.62 }}
            >
              Novara Digital Services
            </motion.h1>
            <motion.p
              className="mt-4 max-w-[460px] text-base leading-7 text-[#D6DCF1]"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.46, duration: 0.62 }}
            >
              Premium websites, branding, marketing, and automation for brands
              ready to look sharper and grow smarter.
            </motion.p>

            <motion.button
              type="button"
              onClick={onFinish}
              className="mt-8 inline-flex items-center gap-3 rounded-[16px] bg-white px-6 py-3 text-sm font-black text-black shadow-[0_0_36px_rgba(255,255,255,0.18)] transition hover:-translate-y-1"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62, duration: 0.55 }}
            >
              Enter Website <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WelcomeScreen
