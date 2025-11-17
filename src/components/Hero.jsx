import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-900/60">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/50 to-slate-950/90" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 h-full flex items-center">
        <div className="px-6 sm:px-10 md:px-16 lg:px-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/50 px-3 py-1 text-xs text-cyan-200/90 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              Enter Player Profile
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-white">
              UI/UX Designer — Level 1
            </h1>
            <p className="mt-4 max-w-2xl text-cyan-100/90 text-sm sm:text-base">
              Crafting playful, usable interfaces with a game-inspired mindset. Explore stats, skills, inventory, and quest log below.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
