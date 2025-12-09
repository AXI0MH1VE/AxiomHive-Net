'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type HashItem = {
  id: number
  hash: string
  label: string
}

const LABELS = [
  'EU-AIA-TRACE',
  'ISO-26262-RUN',
  'FINRA-3110-LOG',
  'SOC2-EVENT',
  'HIPAA-PHI-TRACE',
  'PCI-DSS-TXN',
]

let globalId = 0

function deterministicHash(seed: number) {
  const base = seed.toString(16).padStart(8, '0')
  return `0x${base.repeat(8).slice(0, 64)}`
}

export function HashTicker() {
  const [items, setItems] = useState<HashItem[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      globalId += 1
      const next: HashItem = {
        id: globalId,
        hash: deterministicHash(globalId),
        label: LABELS[globalId % LABELS.length],
      }
      setItems((prev) => {
        const updated = [next, ...prev]
        return updated.slice(0, 6)
      })
    }, 900)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-mono-tight text-xs space-y-2">
      <AnimatePresence initial={false}>
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.25 }}
            className="flex justify-between items-center border border-slate-dark/60 bg-black/40 px-3 py-2"
          >
            <span className="truncate text-terminal-green">{item.hash}</span>
            <span className="ml-4 text-warning-amber">{item.label}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

