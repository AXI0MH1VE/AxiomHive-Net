'use client'

import { motion } from 'framer-motion'

const items = [
  {
    id: 'eu',
    title: 'EU AI Act — High-Risk Systems',
    body: 'Demands traceability, risk management, and technical documentation that proves how each output is produced.',
    tag: 'Regulatory substrate',
  },
  {
    id: 'iso',
    title: 'ISO 26262 — Functional Safety',
    body: 'Treats software as safety-critical components with explicit failure modes, not opaque black boxes.',
    tag: 'Safety substrate',
  },
  {
    id: 'finra',
    title: 'FINRA Rule 3110 — Supervision',
    body: 'Requires firms to evidence supervision and retention of communications and decisions at scale.',
    tag: 'Supervisory substrate',
  },
]

export function TriLateralHammer() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          viewport={{ once: true }}
          className="border border-slate-dark/60 bg-black/50 p-6 flex flex-col justify-between"
        >
          <div className="text-xs uppercase tracking-widest text-warning-amber mb-3">
            {item.tag}
          </div>
          <div className="text-md font-mono-tight text-white mb-3">
            {item.title}
          </div>
          <p className="text-sm text-slate-dark leading-relaxed">
            {item.body}
          </p>
        </motion.div>
      ))}
    </div>
  )
}

