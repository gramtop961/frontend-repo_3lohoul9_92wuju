import { motion } from 'framer-motion'
import { Figma, Palette, MonitorSmartphone, LayoutPanelLeft, MousePointerClick, PenLine, Code } from 'lucide-react'

const tools = [
  { name: 'Figma', icon: Figma },
  { name: 'Adobe XD', icon: Palette },
  { name: 'Framer', icon: MonitorSmartphone },
  { name: 'Notion', icon: LayoutPanelLeft },
  { name: 'Maze', icon: MousePointerClick },
  { name: 'Affinity', icon: PenLine },
  { name: 'Dev Handoff', icon: Code },
]

export default function Inventory() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6 backdrop-blur"
    >
      <div className="mb-5 flex items-center gap-2 text-emerald-200">
        <div className="h-5 w-5 rounded-sm bg-gradient-to-br from-emerald-400 to-teal-500 shadow" />
        <h2 className="text-lg font-bold tracking-wide">Inventory</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
        {tools.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="flex flex-col items-center gap-2 rounded-lg border border-emerald-400/20 bg-slate-800/40 p-4 text-center"
          >
            <t.icon className="h-6 w-6 text-emerald-300" />
            <span className="text-xs text-emerald-100/90">{t.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
