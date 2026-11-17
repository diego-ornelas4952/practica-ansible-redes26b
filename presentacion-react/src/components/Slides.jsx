import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Play,
  RotateCcw,
  Sparkles,
  Thermometer,
} from 'lucide-react'
import SpotlightCard from './SpotlightCard'

const appleEase = [0.22, 1, 0.36, 1]

function Eyebrow({ children, delay = 0.05 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay, ease: appleEase }}
      className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#5ac8fa]/30 bg-[#5ac8fa]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#5ac8fa]"
    >
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </motion.div>
  )
}

function SlideHeading({ title, subtitle }) {
  return (
    <div className="mb-7">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.12, ease: appleEase }}
        className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: appleEase }}
          className="mt-2.5 max-w-3xl text-lg leading-relaxed text-[#a1a1a6]"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* CUSTOM SVG GRAPHIC RESOURCES                                               */
/* -------------------------------------------------------------------------- */

function MacIllustration() {
  return (
    <svg width="136" height="92" viewBox="0 0 136 92" fill="none" className="mx-auto drop-shadow-[0_12px_24px_rgba(41,151,255,0.22)]">
      <defs>
        <linearGradient id="macFrameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#48484a" />
          <stop offset="50%" stopColor="#2c2c2e" />
          <stop offset="100%" stopColor="#1c1c1e" />
        </linearGradient>
        <linearGradient id="macScreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0b192c" />
          <stop offset="55%" stopColor="#111827" />
          <stop offset="100%" stopColor="#1e1035" />
        </linearGradient>
        <linearGradient id="macBaseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#636366" />
          <stop offset="45%" stopColor="#3a3a3c" />
          <stop offset="100%" stopColor="#1c1c1e" />
        </linearGradient>
      </defs>

      {/* Soft ambient shadow */}
      <ellipse cx="68" cy="85" rx="56" ry="4" fill="rgba(0,0,0,0.65)" />

      {/* Outer Aluminum Lid */}
      <rect x="18" y="6" width="100" height="66" rx="7" fill="url(#macFrameGrad)" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" />

      {/* Black Display Bezel */}
      <rect x="21" y="9" width="94" height="60" rx="4.5" fill="#050507" />

      {/* Vibrant macOS Screen */}
      <rect x="23" y="11" width="90" height="56" rx="3" fill="url(#macScreenGrad)" />

      {/* Subtle Wallpaper Glow */}
      <circle cx="96" cy="24" r="18" fill="#bf5af2" opacity="0.2" />
      <circle cx="38" cy="54" r="18" fill="#2997ff" opacity="0.22" />

      {/* MacBook Notch & Camera */}
      <path d="M58 11H78V14.5C78 15.6 77.1 16.5 76 16.5H60C58.9 16.5 58 15.6 58 14.5V11Z" fill="#050507" />
      <circle cx="68" cy="13.5" r="0.9" fill="#2997ff" opacity="0.8" />

      {/* Mini macOS Terminal Window inside screen */}
      <rect x="30" y="21" width="76" height="40" rx="4" fill="rgba(17,17,20,0.88)" stroke="rgba(255,255,255,0.16)" strokeWidth="0.8" />
      <line x1="30" y1="28.5" x2="106" y2="28.5" stroke="rgba(255,255,255,0.08)" strokeWidth="0.7" />
      {/* Traffic Lights */}
      <circle cx="35" cy="24.8" r="1.5" fill="#ff5f56" />
      <circle cx="40" cy="24.8" r="1.5" fill="#ffbd2e" />
      <circle cx="45" cy="24.8" r="1.5" fill="#27c93f" />

      {/* Animated Terminal Lines */}
      <motion.rect
        x="36"
        y="33"
        width="34"
        height="2.6"
        rx="1.3"
        fill="#5ac8fa"
        animate={{ width: [18, 38, 18], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <rect x="36" y="39" width="52" height="2.6" rx="1.3" fill="#30d158" opacity="0.9" />
      <rect x="36" y="45" width="40" height="2.6" rx="1.3" fill="#bf5af2" opacity="0.85" />
      <motion.rect
        x="36"
        y="51"
        width="16"
        height="2.6"
        rx="1.3"
        fill="#ff9f0a"
        animate={{ opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />

      {/* Unibody Base */}
      <path d="M5 72H131L126 79.5C125.2 80.7 123.8 81.5 122.3 81.5H13.7C12.2 81.5 10.8 80.7 10 79.5L5 72Z" fill="url(#macBaseGrad)" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
      {/* Thumb Indent Notch */}
      <path d="M57 72H79V73.5C79 74.3 78.3 75 77.5 75H58.5C57.7 75 57 74.3 57 73.5V72Z" fill="#1c1c1e" />
    </svg>
  )
}

function ServerRackIllustration() {
  return (
    <svg width="100" height="84" viewBox="0 0 100 84" fill="none" className="mx-auto">
      {[8, 32, 56].map((y, idx) => (
        <g key={y}>
          <rect x="12" y={y} width="76" height="19" rx="4" fill="#1c1c1e" stroke="#30d158" strokeWidth="1.6" />
          <rect x="20" y={y + 7} width="32" height="4" rx="2" fill="rgba(255,255,255,0.14)" />
          <motion.circle
            cx="68"
            cy={y + 9}
            r="2.6"
            fill="#30d158"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.4, delay: idx * 0.35, repeat: Infinity }}
          />
          <circle cx="77" cy={y + 9} r="2.6" fill="#5ac8fa" opacity="0.7" />
        </g>
      ))}
    </svg>
  )
}

/* -------------------------------------------------------------------------- */
/* SLIDE 1: PORTADA HERO                                                      */
/* -------------------------------------------------------------------------- */
export function SlideHero() {
  const badges = [
    { label: 'Control: Macintosh', color: '#2997ff' },
    { label: 'Servidor: AWS EC2 (Ubuntu 26.04)', color: '#30d158' },
    { label: 'Conexión: SSH (.pem)', color: '#bf5af2' },
  ]

  return (
    <div className="flex flex-col items-center text-center">
      {/* Animated Conic Aura Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
        className="relative mb-7 flex h-24 w-24 items-center justify-center rounded-[28px] border border-white/20 bg-white/5 shadow-[0_24px_60px_rgba(41,151,255,0.3)]"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="pointer-events-none absolute -inset-1 rounded-[32px] opacity-40 blur-md"
          style={{
            background: 'conic-gradient(from 0deg, #2997ff, #5ac8fa, #bf5af2, #30d158, #2997ff)',
          }}
        />
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-10 flex h-full w-full items-center justify-center rounded-[28px] bg-[#111114]/90 backdrop-blur-xl"
        >
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <defs>
              <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2997ff" />
                <stop offset="50%" stopColor="#5ac8fa" />
                <stop offset="100%" stopColor="#bf5af2" />
              </linearGradient>
            </defs>
            <circle cx="12" cy="12" r="10" stroke="url(#heroGrad)" />
            <path d="M12 6.5L16.8 17.5L10.6 12.7L7.5 17.5L12 6.5Z" stroke="url(#heroGrad)" />
          </svg>
        </motion.div>
      </motion.div>

      <Eyebrow delay={0.12}>Práctica · Automatización de Servidores</Eyebrow>

      <motion.h1
        initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, delay: 0.18, ease: appleEase }}
        className="text-6xl font-bold tracking-tighter sm:text-8xl"
      >
        <span className="bg-gradient-to-b from-white to-[#a1a1a6] bg-clip-text text-transparent">
          Ansible.
        </span>
        <br />
        <span className="bg-gradient-to-r from-[#2997ff] via-[#5ac8fa] to-[#bf5af2] bg-clip-text text-transparent">
          Configura todo en un clic.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: appleEase }}
        className="mt-5 max-w-2xl text-lg leading-relaxed text-[#a1a1a6] sm:text-xl"
      >
        En lugar de entrar a cada servidor a instalar cosas a mano, escribimos una lista de instrucciones y Ansible lo hace por nosotros.
      </motion.p>

      {/* Mini visual flow on Hero */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.38, ease: appleEase }}
        className="mt-8 flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-4 backdrop-blur-md"
      >
        <div className="scale-75"><MacIllustration /></div>
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 1.2, delay: dot * 0.25, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-[#5ac8fa]"
            />
          ))}
        </div>
        <div className="scale-75"><ServerRackIllustration /></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease: appleEase }}
        className="mt-6 flex flex-wrap justify-center gap-3"
      >
        {badges.map((b, i) => (
          <motion.div
            key={b.label}
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-[#d1d1d6]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-65"
                style={{ backgroundColor: b.color, animationDelay: `${i * 0.4}s` }}
              />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full" style={{ backgroundColor: b.color }} />
            </span>
            {b.label}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* SLIDE 2: INTEGRANTES DEL EQUIPO                                            */
/* -------------------------------------------------------------------------- */
export function SlideTeam() {
  const members = [
    {
      name: 'Diego Josuan Ornelas Durán',
      initials: 'DO',
      gradient: 'from-[#2997ff] to-[#5ac8fa]',
      glow: 'rgba(41, 151, 255, 0.25)',
    },
    {
      name: 'Alberto Guadalupe Hernández Valencia',
      initials: 'AH',
      gradient: 'from-[#30d158] to-[#5ac8fa]',
      glow: 'rgba(48, 209, 88, 0.25)',
    },
    {
      name: 'Juan Carlos Gutiérrez Hernández',
      initials: 'JG',
      gradient: 'from-[#bf5af2] to-[#2997ff]',
      glow: 'rgba(191, 90, 242, 0.25)',
    },
    {
      name: 'Ernesto Gutiérrez García',
      initials: 'EG',
      gradient: 'from-[#ff9f0a] to-[#ff453a]',
      glow: 'rgba(255, 159, 10, 0.25)',
    },
  ]

  return (
    <div className="w-full">
      <Eyebrow>Equipo</Eyebrow>
      <SlideHeading
        title="Integrantes del equipo"
        subtitle="Práctica de automatización de infraestructura con Ansible."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {members.map((m, idx) => (
          <SpotlightCard key={m.name} glowColor={m.glow} delay={0.12 + idx * 0.08}>
            <div className="flex items-center gap-5">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 4 }}
                transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${m.gradient} text-xl font-bold text-white shadow-lg`}
              >
                {m.initials}
              </motion.div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#5ac8fa]">
                  Integrante 0{idx + 1}
                </div>
                <h3 className="mt-1 text-xl font-semibold tracking-tight text-white">
                  {m.name}
                </h3>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* SLIDE 2: QUÉ ES ANSIBLE (CON GRÁFICOS SVG Y LENGUAJE SIMPLE)               */
/* -------------------------------------------------------------------------- */
export function SlideWhatIs() {
  const items = [
    {
      title: 'Una receta en texto simple',
      desc: 'Se escribe lo que queremos instalar en un archivo YAML fácil de leer, como si fuera una lista de pasos.',
      glow: 'rgba(41, 151, 255, 0.24)',
      graphic: (
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          <rect x="8" y="6" width="36" height="40" rx="8" fill="rgba(41,151,255,0.16)" stroke="#2997ff" strokeWidth="1.8" />
          <motion.line x1="16" y1="18" x2="36" y2="18" stroke="#5ac8fa" strokeWidth="2.5" strokeLinecap="round" animate={{ x2: [22, 36, 22] }} transition={{ duration: 3, repeat: Infinity }} />
          <line x1="16" y1="26" x2="32" y2="26" stroke="#2997ff" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="16" y1="34" x2="28" y2="34" stroke="#2997ff" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
        </svg>
      ),
    },
    {
      title: 'Sin instalar nada extra',
      desc: 'No hace falta instalar programas pesados en el servidor Ubuntu. Ansible entra por SSH, hace el trabajo y sale.',
      glow: 'rgba(48, 209, 88, 0.24)',
      graphic: (
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          <circle cx="26" cy="26" r="20" fill="rgba(48,209,88,0.15)" stroke="#30d158" strokeWidth="1.8" />
          <path d="M19 25V21C19 17.1 22.1 14 26 14C29.9 14 33 17.1 33 21V25" stroke="#30d158" strokeWidth="2.2" strokeLinecap="round" />
          <rect x="16" y="25" width="20" height="14" rx="4" fill="#30d158" fillOpacity="0.25" stroke="#30d158" strokeWidth="1.8" />
          <circle cx="26" cy="32" r="2" fill="#30d158" />
        </svg>
      ),
    },
    {
      title: 'Seguro de repetir (Idempotente)',
      desc: 'Si se ejecuta el archivo 10 veces seguidas, no rompe nada. Si algo ya está instalado, simplemente lo omite.',
      glow: 'rgba(191, 90, 242, 0.24)',
      graphic: (
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          <circle cx="26" cy="26" r="20" fill="rgba(191,90,242,0.15)" stroke="#bf5af2" strokeWidth="1.8" />
          <motion.g animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} style={{ originX: '26px', originY: '26px' }}>
            <path d="M35 22C33.4 18.4 29.9 16 26 16C20.5 16 16 20.5 16 26" stroke="#bf5af2" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M17 30C18.6 33.6 22.1 36 26 36C31.5 36 36 31.5 36 26" stroke="#d896ff" strokeWidth="2.2" strokeLinecap="round" />
          </motion.g>
          <path d="M22 26L25 29L31 23" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Sirve para 1 o 1,000 servidores',
      desc: 'Hoy lo probamos con 1 máquina virtual Ubuntu, pero el mismo código puede configurar cientos de servidores a la vez.',
      glow: 'rgba(255, 159, 10, 0.24)',
      graphic: (
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          <rect x="6" y="10" width="40" height="32" rx="8" fill="rgba(255,159,10,0.15)" stroke="#ff9f0a" strokeWidth="1.8" />
          <circle cx="17" cy="26" r="3.5" fill="#ff9f0a" />
          <circle cx="26" cy="26" r="3.5" fill="#ffd60a" />
          <circle cx="35" cy="26" r="3.5" fill="#ff9f0a" />
          <line x1="20.5" y1="26" x2="22.5" y2="26" stroke="#fff" strokeWidth="1.5" />
          <line x1="29.5" y1="26" x2="31.5" y2="26" stroke="#fff" strokeWidth="1.5" />
        </svg>
      ),
    },
  ]

  return (
    <div className="w-full">
      <Eyebrow>01 · Concepto Básico</Eyebrow>
      <SlideHeading
        title="¿Qué es Ansible?"
        subtitle="Es un asistente automático que configura los servidores por nosotros, sin tener que escribir comandos uno por uno."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {items.map((item, idx) => (
          <SpotlightCard key={item.title} glowColor={item.glow} delay={0.15 + idx * 0.08}>
            <div className="flex items-start gap-5">
              <div className="shrink-0">{item.graphic}</div>
              <div>
                <h3 className="mb-1.5 text-xl font-semibold tracking-tight text-white">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#a1a1a6]">{item.desc}</p>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* SLIDE 3: CÓMO FUNCIONA (ILUSTRACIONES + SIMULADOR)                         */
/* -------------------------------------------------------------------------- */
export function SlideHowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const [isSimulating, setIsSimulating] = useState(false)

  const steps = [
    { num: '1', title: 'Lee la lista', desc: 'Busca la IP de la VM en hosts.ini.' },
    { num: '2', title: 'Entra por SSH', desc: 'Se conecta sin pedir contraseña.' },
    { num: '3', title: 'Ejecuta tareas', desc: 'Instala y copia usando Python.' },
    { num: '4', title: 'Avisa y sale', desc: 'Muestra el resultado en verde.' },
  ]

  function runSimulation() {
    if (isSimulating) return
    setIsSimulating(true)
    setActiveStep(0)
    steps.forEach((_, idx) => {
      setTimeout(() => {
        setActiveStep(idx)
        if (idx === steps.length - 1) {
          setTimeout(() => setIsSimulating(false), 900)
        }
      }, idx * 750)
    })
  }

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>02 · Funcionamiento</Eyebrow>
          <SlideHeading
            title="¿Cómo funciona?"
            subtitle="La Mac envía las órdenes por un túnel seguro (SSH) hacia la máquina virtual Ubuntu."
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={runSimulation}
          className="mb-7 flex cursor-pointer items-center gap-2 rounded-full bg-[#2997ff] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(41,151,255,0.4)] transition hover:bg-[#3aa0ff]"
        >
          <Play className="h-4 w-4 fill-current" />
          {isSimulating ? 'Enviando órdenes...' : 'Ver animación'}
        </motion.button>
      </div>

      <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-[1fr_220px_1fr]">
        <SpotlightCard glowColor="rgba(41, 151, 255, 0.25)" delay={0.15} className="text-center">
          <span className="inline-block rounded-full bg-[#2997ff]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2997ff]">
            Equipo de Control
          </span>
          <div className="my-4"><MacIllustration /></div>
          <h3 className="text-xl font-semibold">macOS</h3>
          <p className="mt-1 text-xs text-[#a1a1a6]">Aquí guardamos las recetas y lanzamos los comandos.</p>
        </SpotlightCard>

        <div className="flex flex-col items-center gap-2.5 py-2">
          <span className="rounded-full border border-[#5ac8fa]/30 bg-[#5ac8fa]/10 px-3 py-1 font-mono text-xs text-[#5ac8fa]">
            Conexión SSH Segura
          </span>
          <svg width="200" height="44" viewBox="0 0 200 44" className="overflow-visible">
            <defs>
              <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2997ff" />
                <stop offset="100%" stopColor="#30d158" />
              </linearGradient>
            </defs>
            <line x1="12" y1="22" x2="180" y2="22" stroke="rgba(255,255,255,0.12)" strokeWidth="3" strokeLinecap="round" />
            <motion.line
              x1="12"
              y1="22"
              x2="180"
              y2="22"
              stroke="url(#streamGrad)"
              strokeWidth="3"
              strokeDasharray="8 8"
              animate={{ strokeDashoffset: [0, -32] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
            />
            <motion.circle
              cy="22"
              r="5.5"
              fill="#5ac8fa"
              animate={{ cx: [14, 178], opacity: [0, 1, 1, 0] }}
              transition={{ duration: isSimulating ? 0.65 : 1.7, repeat: Infinity, ease: 'easeInOut' }}
            />
            <polygon points="178,15 192,22 178,29" fill="#30d158" />
          </svg>
          <span className="text-xs text-[#a1a1a6]">Viaja sin pedir contraseña</span>
        </div>

        <SpotlightCard glowColor="rgba(48, 209, 88, 0.25)" delay={0.25} className="text-center">
          <span className="inline-block rounded-full bg-[#30d158]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#30d158]">
            Servidor Remoto (Objetivo)
          </span>
          <div className="my-3"><ServerRackIllustration /></div>
          <h3 className="text-xl font-semibold">Ubuntu Server (AWS)</h3>
          <p className="mt-1 text-xs text-[#a1a1a6]">IP: <code className="text-white">18.191.92.45</code> · Recibe y ejecuta todo.</p>
        </SpotlightCard>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {steps.map((s, idx) => {
          const isActive = activeStep === idx
          return (
            <motion.button
              key={s.num}
              onClick={() => setActiveStep(idx)}
              animate={{
                borderColor: isActive ? 'rgba(41, 151, 255, 0.7)' : 'rgba(255, 255, 255, 0.08)',
                backgroundColor: isActive ? 'rgba(41, 151, 255, 0.14)' : 'rgba(255, 255, 255, 0.04)',
                scale: isActive ? 1.02 : 1,
              }}
              className="cursor-pointer rounded-2xl border p-4 text-left"
            >
              <div className="text-xs font-bold text-[#2997ff]">PASO {s.num}</div>
              <div className="mt-1 text-sm font-semibold text-white">{s.title}</div>
              <div className="mt-0.5 text-xs text-[#a1a1a6]">{s.desc}</div>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* SLIDE 4: LOS 3 PILARES (ANALOGÍA VISUAL)                                   */
/* -------------------------------------------------------------------------- */
export function SlidePillars() {
  const [selected, setSelected] = useState(0)

  const pillars = [
    {
      title: '1. La Lista',
      tag: 'hosts.ini',
      color: '#2997ff',
      summary: 'Es la agenda de contactos. Aquí anotamos la IP y el usuario de nuestra VM.',
      detail: 'En nuestro proyecto tiene dos grupos: la Mac ([local]) y la VM en AWS ([servidores_web]).',
      svg: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="10" y="8" width="36" height="40" rx="8" fill="rgba(41,151,255,0.16)" stroke="#2997ff" strokeWidth="1.8" />
          <circle cx="20" cy="21" r="3" fill="#5ac8fa" />
          <line x1="27" y1="21" x2="39" y2="21" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="20" cy="30" r="3" fill="#30d158" />
          <line x1="27" y1="30" x2="39" y2="30" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="20" cy="39" r="3" fill="#bf5af2" />
          <line x1="27" y1="39" x2="35" y2="39" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" opacity="0.7" />
        </svg>
      ),
    },
    {
      title: '2. Las Herramientas',
      tag: 'Módulos',
      color: '#bf5af2',
      summary: 'Son piezas listas para hacer una acción: hacer ping, copiar archivos o encender servicios.',
      detail: 'Primero probamos el módulo "ping" para confirmar que la Mac y Ubuntu se escuchan.',
      svg: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="8" y="10" width="40" height="36" rx="8" fill="rgba(191,90,242,0.16)" stroke="#bf5af2" strokeWidth="1.8" />
          <path d="M18 24L24 30L18 36" stroke="#d896ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="28" y1="36" x2="38" y2="36" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: '3. La Receta',
      tag: 'playbook.yml',
      color: '#30d158',
      summary: 'Junta varios pasos en orden: instalar Nginx, crear la página web y arrancar el servidor.',
      detail: 'Con un solo comando ejecuta toda la receta de principio a fin sin errores.',
      svg: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="10" y="10" width="36" height="10" rx="4" fill="rgba(48,209,88,0.22)" stroke="#30d158" strokeWidth="1.6" />
          <rect x="10" y="23" width="36" height="10" rx="4" fill="rgba(48,209,88,0.22)" stroke="#30d158" strokeWidth="1.6" />
          <rect x="10" y="36" width="36" height="10" rx="4" fill="rgba(48,209,88,0.22)" stroke="#30d158" strokeWidth="1.6" />
          <circle cx="17" cy="15" r="2" fill="#30d158" />
          <circle cx="17" cy="28" r="2" fill="#30d158" />
          <circle cx="17" cy="41" r="2" fill="#30d158" />
        </svg>
      ),
    },
  ]

  return (
    <div className="w-full">
      <Eyebrow>03 · Estructura del Proyecto</Eyebrow>
      <SlideHeading
        title="Solo 3 piezas clave"
        subtitle="Así organizamos todo nuestro proyecto dentro de la carpeta practica-ansible."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {pillars.map((p, idx) => {
          const isSelected = selected === idx
          return (
            <motion.div
              key={p.title}
              onClick={() => setSelected(idx)}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 + idx * 0.1, ease: appleEase }}
              className={`relative cursor-pointer rounded-3xl apple-glass p-7 transition-all ${isSelected ? 'ring-2 ring-white/40' : 'opacity-80 hover:opacity-100'
                }`}
            >
              <div className="mb-4">{p.svg}</div>
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <code className="mt-1 inline-block text-xs" style={{ color: p.color }}>
                {p.tag}
              </code>
              <p className="mt-3 text-sm leading-relaxed text-[#a1a1a6]">{p.summary}</p>
            </motion.div>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: appleEase }}
          className="mt-6 rounded-2xl border border-white/15 bg-white/[0.05] px-6 py-4 text-sm text-[#e5e5ea] backdrop-blur-xl"
        >
          <span className="font-semibold text-white">En nuestra práctica: </span>
          {pillars[selected].detail}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* SLIDE 5: CÓDIGO Y TERMINAL INTERACTIVA                                     */
/* -------------------------------------------------------------------------- */
export function SlideCode() {
  const [tab, setTab] = useState('hosts')
  const [typedLines, setTypedLines] = useState(0)

  const tabs = [
    { id: 'hosts', label: '1. hosts.ini', hint: 'IP de AWS, llave .pem y ruta de Python' },
    { id: 'playbook', label: '2. playbook.yml', hint: 'Receta para instalar Nginx y crear la página web' },
    { id: 'ping', label: '3. Prueba Ad-Hoc', hint: 'Confirmación en verde de que ambos equipos responden' },
  ]

  const pingLines = [
    '➜ ansible all -i hosts.ini -m ping',
    'localhost | SUCCESS => {',
    '    "changed": false,',
    '    "ping": "pong"',
    '}',
    'ubuntu_vm | SUCCESS => {',
    '    "changed": false,',
    '    "ping": "pong"',
    '}',
  ]

  useEffect(() => {
    if (tab !== 'ping') return
    setTypedLines(0)
    const timers = pingLines.map((_, idx) =>
      setTimeout(() => setTypedLines(idx + 1), idx * 140)
    )
    return () => timers.forEach(clearTimeout)
  }, [tab])

  const currentHint = tabs.find((t) => t.id === tab)?.hint

  return (
    <div className="w-full">
      <Eyebrow>04 · Nuestro Código</Eyebrow>
      <SlideHeading title="Así se ve en la práctica" />

      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-xl border border-white/10 bg-white/[0.06] p-1 backdrop-blur-md">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`relative cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-colors ${tab === t.id ? 'text-white' : 'text-[#a1a1a6] hover:text-white'
                }`}
            >
              {tab === t.id && (
                <motion.div
                  layoutId="codeTabPill"
                  transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                  className="absolute inset-0 rounded-lg bg-white/15 shadow-sm"
                />
              )}
              <span className="relative z-10">{t.label}</span>
            </button>
          ))}
        </div>

        <span className="text-sm text-[#5ac8fa]">{currentHint}</span>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#111114] shadow-2xl">
        <div className="flex h-10 items-center justify-between border-b border-white/10 bg-white/[0.04] px-4">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="font-mono text-xs text-[#a1a1a6]">
            {tab === 'hosts' && '~/practica-ansible/hosts.ini'}
            {tab === 'playbook' && '~/practica-ansible/playbook.yml'}
            {tab === 'ping' && 'zsh — ~/practica-ansible'}
          </span>
          <div className="w-12" />
        </div>

        <AnimatePresence mode="wait">
          {tab === 'hosts' && (
            <motion.pre
              key="hosts"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed text-[#e5e5ea]"
            >
              <span className="font-semibold text-[#bf5af2]">[local]</span>
              {'\n'}localhost <span className="text-[#5ac8fa]">ansible_connection</span>=<span className="text-[#30d158]">local</span> <span className="text-[#5ac8fa]">ansible_python_interpreter</span>=<span className="text-[#30d158]">/opt/homebrew/bin/python3</span>
              {'\n\n'}
              <span className="font-semibold text-[#bf5af2]">[servidores_web]</span>
              {'\n'}ubuntu_vm <span className="text-[#5ac8fa]">ansible_host</span>=<span className="text-[#30d158]">18.191.92.45</span> <span className="text-[#5ac8fa]">ansible_user</span>=<span className="text-[#30d158]">ubuntu</span> <span className="text-[#5ac8fa]">ansible_ssh_private_key_file</span>=<span className="text-[#30d158]">~/Downloads/key-redes.pem</span> <span className="text-[#5ac8fa]">ansible_python_interpreter</span>=<span className="text-[#30d158]">/usr/bin/python3</span>
            </motion.pre>
          )}

          {tab === 'playbook' && (
            <motion.pre
              key="playbook"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="overflow-x-auto p-6 font-mono text-[12.5px] leading-relaxed text-[#e5e5ea]"
            >
              <span className="text-[#6e6e73]">---</span>{'\n'}
              - <span className="text-[#5ac8fa]">name</span>: <span className="text-[#30d158]">Desplegar Nginx en Ubuntu Server (AWS)</span>{'\n'}
              {'  '}<span className="text-[#5ac8fa]">hosts</span>: <span className="text-[#30d158]">servidores_web</span>{'\n'}
              {'  '}<span className="text-[#5ac8fa]">become</span>: <span className="text-[#ff9f0a]">true</span>  <span className="text-[#6e6e73]"># Usa permisos de administrador (sudo)</span>{'\n\n'}
              {'  '}<span className="text-[#5ac8fa]">tasks</span>:{'\n'}
              {'    '}- <span className="text-[#5ac8fa]">name</span>: <span className="text-[#30d158]">1. Instalar servidor web Nginx</span>{'\n'}
              {'      '}<span className="text-[#5ac8fa]">ansible.builtin.apt</span>:{'\n'}
              {'        '}<span className="text-[#5ac8fa]">name</span>: <span className="text-[#30d158]">nginx</span> | <span className="text-[#5ac8fa]">state</span>: <span className="text-[#30d158]">present</span> | <span className="text-[#5ac8fa]">update_cache</span>: <span className="text-[#ff9f0a]">true</span>{'\n\n'}
              {'    '}- <span className="text-[#5ac8fa]">name</span>: <span className="text-[#30d158]">2. Crear página web con datos del servidor</span>{'\n'}
              {'      '}<span className="text-[#5ac8fa]">ansible.builtin.copy</span>:{'\n'}
              {'        '}<span className="text-[#5ac8fa]">dest</span>: <span className="text-[#30d158]">/var/www/html/index.html</span>{'\n'}
              {'        '}<span className="text-[#5ac8fa]">content</span>: <span className="text-[#30d158]">| ... &#123;&#123; ansible_facts['hostname'] &#125;&#125; ...</span>{'\n\n'}
              {'    '}- <span className="text-[#5ac8fa]">name</span>: <span className="text-[#30d158]">3. Liberar puerto 80 (Apache2) y encender Nginx</span>{'\n'}
              {'      '}<span className="text-[#5ac8fa]">ansible.builtin.service</span>:{'\n'}
              {'        '}<span className="text-[#5ac8fa]">name</span>: <span className="text-[#30d158]">nginx</span> | <span className="text-[#5ac8fa]">state</span>: <span className="text-[#30d158]">started</span> | <span className="text-[#5ac8fa]">enabled</span>: <span className="text-[#ff9f0a]">true</span>
            </motion.pre>
          )}

          {tab === 'ping' && (
            <motion.div
              key="ping"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-6 font-mono text-[13px] leading-relaxed"
            >
              {pingLines.slice(0, typedLines).map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={idx === 0 ? 'mb-2 text-[#ff9f0a]' : 'font-semibold text-[#30d158]'}
                >
                  {line}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* SLIDE 7: DESPLIEGUE DE NGINX                                               */
/* -------------------------------------------------------------------------- */
export function SlideNginx() {
  const steps = [
    { num: '1', title: 'Instala Nginx', desc: 'Descarga y configura el servidor web sin tocar manualmente la VM.', color: '#5ac8fa' },
    { num: '2', title: 'Detecta datos reales', desc: 'Lee automáticamente el nombre, IP y versión de Ubuntu.', color: '#30d158' },
    { num: '3', title: 'Publica la página', desc: 'Guarda nuestro diseño HTML y enciende el servicio.', color: '#bf5af2' },
  ]

  return (
    <div className="w-full">
      <Eyebrow>05 · Resultado Final</Eyebrow>
      <SlideHeading
        title="Página web lista en segundos"
        subtitle="Al abrir http://18.191.92.45 en Safari vemos la página creada automáticamente en AWS."
      />

      <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.1, ease: appleEase }}
              whileHover={{ x: 6 }}
              className="flex items-center gap-4 rounded-2xl apple-glass p-5"
            >
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border font-mono text-base font-bold"
                style={{ backgroundColor: `${s.color}20`, borderColor: `${s.color}40`, color: s.color }}
              >
                {s.num}
              </div>
              <div>
                <h4 className="font-semibold text-white">{s.title}</h4>
                <p className="mt-0.5 text-sm text-[#a1a1a6]">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: appleEase }}
          whileHover={{ y: -5 }}
          className="overflow-hidden rounded-2xl border border-white/15 bg-[#0f172a] shadow-[0_30px_70px_rgba(0,0,0,0.7)]"
        >
          <div className="flex h-10 items-center border-b border-white/10 bg-[#1c1c1e] px-4">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="mx-auto rounded-md bg-white/10 px-10 py-1 font-mono text-xs text-[#a1a1a6]">
              http://18.191.92.45
            </div>
          </div>
          <div className="bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_60%)] p-7">
            <div className="rounded-xl border border-[#334155] bg-[#1e293b] p-6 shadow-xl">
              <h3 className="text-lg font-bold text-[#38bdf8]">¡Servidor configurado con Ansible!</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#cbd5e1]">
                Este servidor web <strong>Nginx</strong> fue instalado y configurado automáticamente desde macOS.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-[#e2e8f0]">
                <li><strong>Hostname:</strong> <code className="rounded bg-[#0f172a] px-1.5 py-0.5 text-[#4ade80]">ip-172-31-47-100</code></li>
                <li><strong>Sistema Operativo:</strong> <code className="rounded bg-[#0f172a] px-1.5 py-0.5 text-[#4ade80]">Ubuntu 26.04</code></li>
                <li><strong>Dirección IP:</strong> <code className="rounded bg-[#0f172a] px-1.5 py-0.5 text-[#4ade80]">172.31.47.100 (AWS)</code></li>
                <li><strong>Arquitectura:</strong> <code className="rounded bg-[#0f172a] px-1.5 py-0.5 text-[#4ade80]">x86_64</code></li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* SLIDE 8: IDEMPOTENCIA (ANALOGÍA SIMPLE + SIMULADOR)                        */
/* -------------------------------------------------------------------------- */
export function SlideIdempotency() {
  const [run, setRun] = useState(1)

  const tasks = [
    { name: 'Instalar Nginx', run1: 'CHANGED', run2: 'OK' },
    { name: 'Crear página index.html', run1: 'CHANGED', run2: 'OK' },
    { name: 'Encender servicio Nginx', run1: 'CHANGED', run2: 'OK' },
  ]

  return (
    <div className="w-full">
      <Eyebrow>06 · La magia de Ansible</Eyebrow>
      <SlideHeading
        title="¿Qué es la Idempotencia?"
        subtitle="Funciona como un termostato: si el cuarto ya está a la temperatura ideal, no vuelve a encender el aire."
      />

      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex rounded-xl border border-white/10 bg-white/[0.06] p-1">
          {[1, 2].map((n) => (
            <button
              key={n}
              onClick={() => setRun(n)}
              className={`relative cursor-pointer rounded-lg px-5 py-2 text-sm font-semibold transition ${run === n ? 'text-white' : 'text-[#a1a1a6] hover:text-white'
                }`}
            >
              {run === n && (
                <motion.div
                  layoutId="runPill"
                  transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                  className="absolute inset-0 rounded-lg bg-white/15"
                />
              )}
              <span className="relative z-10">{n}ª Ejecución</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-[#a1a1a6]">
          <Thermometer className="h-4 w-4 text-[#5ac8fa]" />
          Comparativa entre la 1ª y 2ª ejecución del Playbook
        </div>
      </div>

      <div className="apple-glass rounded-3xl p-7">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-white">
              {run === 1 ? 'Primera vez: Instala y configura todo' : 'Segunda vez: Todo listo, no cambia nada'}
            </h3>
            <p className="mt-1 text-sm text-[#a1a1a6]">
              {run === 1
                ? 'Como el servidor estaba vacío, Ansible aplica los 3 cambios.'
                : 'Ansible revisa el servidor, ve que ya todo está igual y no repite trabajo.'}
            </p>
          </div>
          <span
            className={`rounded-full px-4 py-1.5 font-mono text-xs font-bold ${run === 1 ? 'bg-[#ff9f0a]/20 text-[#ff9f0a]' : 'bg-[#30d158]/20 text-[#30d158]'
              }`}
          >
            {run === 1 ? 'changed = 3' : 'ok = 4 · changed = 0'}
          </span>
        </div>

        <div className="mb-6 h-3 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            animate={{
              width: run === 1 ? '75%' : '100%',
              backgroundColor: run === 1 ? '#ff9f0a' : '#30d158',
            }}
            transition={{ type: 'spring', stiffness: 160, damping: 22 }}
            className="h-full rounded-full"
          />
        </div>

        <div className="space-y-3">
          {tasks.map((t) => {
            const status = run === 1 ? t.run1 : t.run2
            const isChanged = status === 'CHANGED'
            return (
              <div
                key={t.name}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm"
              >
                <span className="text-[#e5e5ea]">{t.name}</span>
                <motion.span
                  key={status}
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={`rounded-md px-2.5 py-0.5 font-mono text-xs font-bold ${isChanged ? 'bg-[#ff9f0a]/20 text-[#ff9f0a]' : 'bg-[#30d158]/20 text-[#30d158]'
                    }`}
                >
                  {isChanged ? 'CAMBIADO' : 'SIN CAMBIOS (OK)'}
                </motion.span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* SLIDE 9: CONCLUSIÓN                                                        */
/* -------------------------------------------------------------------------- */
export function SlideOutro({ onRestart }) {
  return (
    <div className="flex flex-col items-center text-center">
      <Eyebrow>Conclusión</Eyebrow>
      <motion.h2
        initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.75, delay: 0.12, ease: appleEase }}
        className="text-5xl font-bold tracking-tight sm:text-7xl"
      >
        <span className="bg-gradient-to-b from-white to-[#a1a1a6] bg-clip-text text-transparent">
          Menos trabajo manual.
        </span>
        <br />
        <span className="bg-gradient-to-r from-[#2997ff] via-[#5ac8fa] to-[#30d158] bg-clip-text text-transparent">
          Más automatización.
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.25, ease: appleEase }}
        className="mt-5 max-w-2xl text-lg text-[#a1a1a6]"
      >
        Con solo dos archivos logramos que nuestra Mac configure automáticamente un servidor Ubuntu completo y publique una página web.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.35, ease: appleEase }}
        className="mt-8 w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-[#111114] text-left shadow-2xl"
      >
        <div className="flex h-9 items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="mx-auto font-mono text-[11px] text-[#a1a1a6]">Resumen de comandos</span>
        </div>
        <pre className="p-5 font-mono text-xs leading-relaxed text-[#e5e5ea]">
          <span className="text-[#6e6e73]"># 1. Comprobar que el servidor responde</span>{'\n'}
          <span className="text-[#ff9f0a]">ansible</span> all -i hosts.ini -m ping{'\n\n'}
          <span className="text-[#6e6e73]"># 2. Instalar y configurar todo en AWS</span>{'\n'}
          <span className="text-[#ff9f0a]">ansible-playbook</span> -i hosts.ini playbook.yml
        </pre>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onRestart}
        className="mt-8 flex cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
      >
        <RotateCcw className="h-4 w-4" />
        Volver al inicio
      </motion.button>
    </div>
  )
}
