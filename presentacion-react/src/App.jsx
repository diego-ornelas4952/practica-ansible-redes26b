import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, LayoutGrid, X } from 'lucide-react'
import {
  SlideHero,
  SlideTeam,
  SlideWhatIs,
  SlideHowItWorks,
  SlidePillars,
  SlideCode,
  SlideNginx,
  SlideIdempotency,
  SlideOutro,
} from './components/Slides'

const SLIDE_META = [
  { title: 'Portada', component: SlideHero },
  { title: 'Integrantes', component: SlideTeam },
  { title: '¿Qué es Ansible?', component: SlideWhatIs },
  { title: '¿Cómo funciona?', component: SlideHowItWorks },
  { title: 'Los 3 pilares', component: SlidePillars },
  { title: 'Código y Terminal', component: SlideCode },
  { title: 'Despliegue Nginx', component: SlideNginx },
  { title: 'Idempotencia', component: SlideIdempotency },
  { title: 'Conclusión', component: SlideOutro },
]

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 80 : -80,
    scale: 0.96,
    filter: 'blur(8px)',
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -80 : 80,
    scale: 0.96,
    filter: 'blur(8px)',
  }),
}

export default function App() {
  const [[index, direction], setSlide] = useState([0, 0])
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showGrid, setShowGrid] = useState(false)

  const goTo = useCallback(
    (nextIndex) => {
      if (nextIndex < 0 || nextIndex >= SLIDE_META.length || nextIndex === index) return
      setSlide([nextIndex, nextIndex > index ? 1 : -1])
      setShowGrid(false)
    },
    [index]
  )

  const next = useCallback(() => goTo(index + 1), [index, goTo])
  const prev = useCallback(() => goTo(index - 1), [index, goTo])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {})
    } else {
      document.exitFullscreen().catch(() => {})
    }
  }, [])

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', onFsChange)
    return () => document.removeEventListener('fullscreenchange', onFsChange)
  }, [])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (showGrid && e.key === 'Escape') {
        setShowGrid(false)
        return
      }
      if (['ArrowRight', 'ArrowDown', ' ', 'PageDown'].includes(e.key)) {
        e.preventDefault()
        next()
      } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault()
        prev()
      } else if (e.key.toLowerCase() === 'f') {
        toggleFullscreen()
      } else if (e.key.toLowerCase() === 'g') {
        setShowGrid((v) => !v)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [next, prev, toggleFullscreen, showGrid])

  const CurrentSlide = SLIDE_META[index].component

  return (
    <div className="relative flex h-screen w-screen flex-col overflow-hidden bg-black text-[#f5f5f7]">
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 z-50 h-[3px] bg-gradient-to-r from-[#2997ff] via-[#5ac8fa] to-[#bf5af2] shadow-[0_0_12px_rgba(41,151,255,0.75)]"
        animate={{ width: `${((index + 1) / SLIDE_META.length) * 100}%` }}
        transition={{ type: 'spring', stiffness: 200, damping: 28 }}
      />

      {/* Ambient Moving Orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            x: (index % 3) * 80 - 80,
            y: (index % 2) * 60 - 30,
          }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -top-44 -left-32 h-[600px] w-[600px] rounded-full opacity-30 blur-[130px]"
          style={{ background: 'radial-gradient(circle, #0a84ff 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{
            x: -((index % 3) * 70 - 70),
            y: -((index % 2) * 60 - 30),
          }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -right-32 -bottom-44 h-[560px] w-[560px] rounded-full opacity-30 blur-[130px]"
          style={{ background: 'radial-gradient(circle, #bf5af2 0%, transparent 70%)' }}
        />
      </div>
      <div className="grid-bg pointer-events-none fixed inset-0 z-0" />

      {/* Main Stage */}
      <main className="relative z-10 flex flex-1 items-center justify-center overflow-y-auto px-6 pt-10 pb-28 sm:px-14">
        <div className="w-full max-w-6xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <CurrentSlide onRestart={() => goTo(0)} />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Apple Keynote Slide Overview Grid Modal */}
      <AnimatePresence>
        {showGrid && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-8 backdrop-blur-2xl"
          >
            <div className="w-full max-w-4xl">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">Vista general de diapositivas</h3>
                <button
                  onClick={() => setShowGrid(false)}
                  className="cursor-pointer rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {SLIDE_META.map((s, idx) => (
                  <motion.button
                    key={s.title}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => goTo(idx)}
                    className={`cursor-pointer rounded-2xl border p-5 text-left transition ${
                      idx === index
                        ? 'border-[#2997ff] bg-[#2997ff]/15'
                        : 'border-white/10 bg-white/[0.04] hover:border-white/25'
                    }`}
                  >
                    <div className="font-mono text-xs text-[#5ac8fa]">0{idx + 1}</div>
                    <div className="mt-1 font-semibold text-white">{s.title}</div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Apple Dock */}
      <motion.nav
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="apple-dock fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full px-3.5 py-2"
      >
        <button
          onClick={prev}
          disabled={index === 0}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 disabled:cursor-default disabled:opacity-30"
          title="Anterior (←)"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-1.5 px-2">
          {SLIDE_META.map((s, idx) => (
            <button
              key={s.title}
              onClick={() => goTo(idx)}
              title={s.title}
              className="relative flex h-4 cursor-pointer items-center justify-center px-0.5"
            >
              <motion.span
                animate={{
                  width: idx === index ? 22 : 7,
                  backgroundColor: idx === index ? '#ffffff' : 'rgba(255,255,255,0.28)',
                }}
                transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                className="block h-[7px] rounded-full"
              />
            </button>
          ))}
        </div>

        <span className="min-w-[44px] text-center font-mono text-xs text-[#a1a1a6]">
          {index + 1} / {SLIDE_META.length}
        </span>

        <button
          onClick={next}
          disabled={index === SLIDE_META.length - 1}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 disabled:cursor-default disabled:opacity-30"
          title="Siguiente (→)"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        <div className="mx-1 h-4 w-px bg-white/15" />

        <button
          onClick={() => setShowGrid(true)}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          title="Vista general (G)"
        >
          <LayoutGrid className="h-3.5 w-3.5" />
        </button>

        <button
          onClick={toggleFullscreen}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          title="Pantalla completa (F)"
        >
          {isFullscreen ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
        </button>
      </motion.nav>
    </div>
  )
}
