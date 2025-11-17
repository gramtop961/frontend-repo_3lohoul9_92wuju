import { motion } from 'framer-motion'
import { Trophy, FolderGit2, ExternalLink } from 'lucide-react'

const quests = [
  {
    title: 'Redesign Marketing Site',
    role: 'UI/UX Design',
    result: 'Boosted signup rate by 24% with clearer IA and polished visuals',
    link: '#'
  },
  {
    title: 'Mobile App Prototype',
    role: 'Interaction Design',
    result: 'Clickable prototype validated with 8 users, 3 iterations',
    link: '#'
  },
  {
    title: 'Design System Seeds',
    role: 'Design Ops',
    result: 'Tokenized colors/type, component library for faster delivery',
    link: '#'
  }
]

export default function QuestLog() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-amber-400/20 bg-slate-900/60 p-6 backdrop-blur"
    >
      <div className="mb-5 flex items-center gap-2 text-amber-200">
        <Trophy className="h-5 w-5 text-amber-300" />
        <h2 className="text-lg font-bold tracking-wide">Quest Log</h2>
      </div>

      <div className="space-y-4">
        {quests.map((q, i) => (
          <motion.a
            key={q.title}
            href={q.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group block rounded-xl border border-amber-400/20 bg-slate-800/40 p-4 hover:border-amber-300/40"
          >
            <div className="flex items-start gap-3">
              <FolderGit2 className="mt-0.5 h-5 w-5 flex-none text-amber-300" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="truncate text-sm font-semibold text-white">{q.title}</p>
                  <ExternalLink className="h-3.5 w-3.5 text-amber-300 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="text-xs text-amber-100/90">{q.role}</p>
                <p className="mt-1 text-sm text-amber-50/90">{q.result}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  )
}
