'use client'

import { useEffect, useState } from 'react'

export function HashTicker() {
  const [hashes, setHashes] = useState<string[]>([])

  useEffect(() => {
    const generateHash = () => {
      return Math.random()
        .toString(16)
        .substring(2)
        .toUpperCase()
        .padEnd(64, '0')
        .substring(0, 64)
    }

    setHashes(Array.from({ length: 5 }, generateHash))

    const interval = setInterval(() => {
      setHashes((prev) => [...prev.slice(1), generateHash()])
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-2 font-mono-tight text-xs text-terminal-green">
      {hashes.map((hash, i) => (
        <div key={`${hash}-${i}`} className="flex gap-4 animate-pulse">
          <span className="text-slate-dark min-w-fit">#{i + 1}</span>
          <span className="tracking-wider font-mono-tight">{hash}</span>
          <span className="text-warning-amber ml-auto min-w-fit">✓ VERIFIED</span>
        </div>
      ))}
    </div>
  )
}
