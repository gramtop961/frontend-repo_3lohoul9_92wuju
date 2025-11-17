import { motion } from 'framer-motion'
import { Star, Brain, MessageSquare, Zap } from 'lucide-react'

const StatBar = ({ label, value, icon: Icon, color = 'cyan' }) => {
  const colorMap = {
    cyan: 'from-cyan-400 to-sky-400',
    purple: 'from-purple-400 to-fuchsia-400',
    amber: 'from-amber-400 to-orange-400',
    emerald: 'from-emerald-400 to-teal-400',
  }
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-cyan-100/90 text-sm">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-cyan-300" />
          <span>{label}</span>
        </div>
        <span className="font-mono">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-800/80">
        <div
          className={`h-2 rounded-full bg-gradient-to-r ${colorMap[color]}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

export default function StatsPanel() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-6 backdrop-blur"
    >
      <div className="mb-5 flex items-center gap-2 text-cyan-200">
        <Star className="h-5 w-5 text-cyan-300" />
        <h2 className="text-lg font-bold tracking-wide">Attributes</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <StatBar label="Creativity" value={92} icon={Zap} color="purple" />
        <StatBar label="Problem Solving" value={88} icon={Brain} color="cyan" />
        <StatBar label="Communication" value={85} icon={MessageSquare} color="amber" />
        <StatBar label="Collaboration" value={90} icon={Star} color="emerald" />
      </div>
    </motion.section>
  )
}
