import { motion } from 'framer-motion'
import { PenTool, Figma, Boxes, Workflow } from 'lucide-react'

const skills = [
  { name: 'UI Design', icon: PenTool, tier: 1, desc: 'Typography, color, layout' },
  { name: 'Figma', icon: Figma, tier: 1, desc: 'Components, variants, dev mode' },
  { name: 'Wireframing', icon: Boxes, tier: 2, desc: 'User flows, low-fi ideation' },
  { name: 'Prototyping', icon: Workflow, tier: 2, desc: 'Microinteractions, motion' },
]

export default function SkillsTree() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-fuchsia-400/20 bg-slate-900/60 p-6 backdrop-blur"
    >
      <div className="mb-5 flex items-center gap-2 text-fuchsia-200">
        <div className="h-5 w-5 rounded-sm bg-gradient-to-br from-fuchsia-400 to-purple-500 shadow" />
        <h2 className="text-lg font-bold tracking-wide">Skills</h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 right-0 top-8 bottom-8 pointer-events-none">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_50%)]" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative rounded-xl border border-fuchsia-400/20 bg-slate-800/40 p-4"
            >
              <div className="mb-2 flex items-center gap-2">
                <s.icon className="h-5 w-5 text-fuchsia-300" />
                <p className="text-sm font-semibold text-white">{s.name}</p>
                <span className="ml-auto text-[10px] text-fuchsia-200/70">Tier {s.tier}</span>
              </div>
              <p className="text-xs text-fuchsia-100/80">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
