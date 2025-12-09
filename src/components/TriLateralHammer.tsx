'use client'

import { motion } from 'framer-motion'

export function TriLateralHammer() {
  const cards = [
    {
      title: 'EU AI Act (Art. 13 & 19)',
      subtitle: 'Transparency Achieved',
      copy: 'Automated generation of regulatory audit logs. Every token is cryptographically linked and timestamped. Compliance becomes code, not checklist.',
      icon: '📋',
    },
    {
      title: 'FINRA Rule 3110',
      subtitle: 'Supervision Automated',
      copy: 'Deterministic execution paths are intrinsically auditable and replayable. Regulators can verify algorithmic decisions in real-time.',
      icon: '📊',
    },
    {
      title: 'ISO 26262',
      subtitle: 'Safety Certified',
      copy: 'Batch-invariant operations guarantee reproducibility. Safety cases become mathematically provable, not statistically probable.',
      icon: '🔒',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {cards.map((card, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          className="border border-slate-dark/50 p-6 rounded bg-slate-darker/30 hover:border-terminal-green/50 transition-colors"
        >
          <div className="text-2xl mb-2">{card.icon}</div>
          <h3 className="font-mono-tight text-warning-amber uppercase text-sm tracking-widest mb-2">
            {card.title}
          </h3>
          <h4 className="font-bold text-terminal-green mb-4">{card.subtitle}</h4>
          <p className="text-slate-dark text-sm leading-relaxed">{card.copy}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}
