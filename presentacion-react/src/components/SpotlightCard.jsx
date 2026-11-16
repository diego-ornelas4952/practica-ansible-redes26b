import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'

export default function SpotlightCard({
  children,
  className = '',
  glowColor = 'rgba(41, 151, 255, 0.22)',
  delay = 0,
}) {
  const cardRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useMotionValue(0), { stiffness: 260, damping: 24 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 260, damping: 24 })

  function handleMouseMove(e) {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    mouseX.set(x)
    mouseY.set(y)

    const centerX = rect.width / 2
    const centerY = rect.height / 2
    rotateX.set(((y - centerY) / centerY) * -4.5)
    rotateY.set(((x - centerX) / centerX) * 4.5)
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  const background = useMotionTemplate`radial-gradient(380px circle at ${mouseX}px ${mouseY}px, ${glowColor}, transparent 70%)`

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      whileHover={{ y: -4 }}
      className={`group relative overflow-hidden rounded-3xl apple-glass p-7 transition-colors duration-300 hover:border-white/25 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
