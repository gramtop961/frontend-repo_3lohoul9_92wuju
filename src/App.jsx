import { useMemo } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import StatsPanel from './components/StatsPanel'
import SkillsTree from './components/SkillsTree'
import Inventory from './components/Inventory'
import QuestLog from './components/QuestLog'

function App() {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white selection:bg-cyan-400/30">
      <div className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-overlay bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Hero />

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-6">
            <PlayerCard />
            <StatsPanel />
          </div>
          <div className="lg:col-span-2 space-y-6">
            <SkillsTree />
            <Inventory />
            <QuestLog />
          </div>
        </section>

        <Footer year={year} />
      </div>
    </div>
  )
}

function PlayerCard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-6 backdrop-blur"
    >
      <div className="mb-4 flex items-center gap-4">
        <div className="h-14 w-14 rounded-lg border border-cyan-400/30 bg-gradient-to-br from-slate-700 to-slate-800 shadow-inner" />
        <div>
          <h2 className="text-xl font-black tracking-wide">Character</h2>
          <p className="text-cyan-200/80">UI/UX Designer — Level 1</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm text-cyan-100/90">
        <div className="rounded-lg border border-cyan-400/10 bg-slate-800/40 p-3">
          <p className="text-[11px] uppercase tracking-wider text-cyan-300/70">Class</p>
          <p className="font-semibold">Designer</p>
        </div>
        <div className="rounded-lg border border-cyan-400/10 bg-slate-800/40 p-3">
          <p className="text-[11px] uppercase tracking-wider text-cyan-300/70">Alignment</p>
          <p className="font-semibold">User-first</p>
        </div>
        <div className="rounded-lg border border-cyan-400/10 bg-slate-800/40 p-3">
          <p className="text-[11px] uppercase tracking-wider text-cyan-300/70">Region</p>
          <p className="font-semibold">Remote / Global</p>
        </div>
        <div className="rounded-lg border border-cyan-400/10 bg-slate-800/40 p-3">
          <p className="text-[11px] uppercase tracking-wider text-cyan-300/70">Looking for</p>
          <p className="font-semibold">Internships / Junior roles</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {['Portfolio', 'Resume', 'Contact'].map((label) => (
          <button
            key={label}
            className="group relative overflow-hidden rounded-md border border-cyan-400/30 bg-slate-800/40 px-3 py-1.5 text-sm text-cyan-100 hover:border-cyan-300/60"
          >
            <span className="relative z-10">{label}</span>
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          </button>
        ))}
      </div>
    </motion.section>
  )
}

function Footer({ year }) {
  return (
    <footer className="pb-10 pt-2 text-center text-xs text-cyan-200/60">
      <p>
        Press Start to continue • © {year}
      </p>
    </footer>
  )
}

export default App
