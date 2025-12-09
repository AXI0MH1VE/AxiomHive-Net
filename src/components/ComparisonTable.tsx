'use client'

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto border border-slate-dark/40 bg-black/30">
      <table className="min-w-full text-xs md:text-sm font-mono-tight">
        <thead className="bg-black/70 border-b border-slate-dark/40">
          <tr>
            <th className="px-4 py-3 text-left text-slate-dark uppercase tracking-widest">
              Dimension
            </th>
            <th className="px-4 py-3 text-left text-terminal-green uppercase tracking-widest">
              Deterministic AI (Axiom Hive)
            </th>
            <th className="px-4 py-3 text-left text-warning-amber uppercase tracking-widest">
              Stochastic LLMs
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-slate-dark/30">
            <td className="px-4 py-4 text-slate-dark">Output variance</td>
            <td className="px-4 py-4 text-terminal-green">
              100 / 100 identical executions for the same input, config, and state.
            </td>
            <td className="px-4 py-4 text-warning-amber">
              Non-deterministic sampling; answers drift run to run even with fixed prompts.
            </td>
          </tr>
          <tr className="border-b border-slate-dark/30">
            <td className="px-4 py-4 text-slate-dark">Proof & auditability</td>
            <td className="px-4 py-4 text-terminal-green">
              Cryptographic trace of every token and decision for external verification.
            </td>
            <td className="px-4 py-4 text-warning-amber">
              Best-effort logs; no end-to-end proof that a given output is reconstructible.
            </td>
          </tr>
          <tr className="border-b border-slate-dark/30">
            <td className="px-4 py-4 text-slate-dark">Regulatory posture</td>
            <td className="px-4 py-4 text-terminal-green">
              Designed for safety-critical, high-liability workloads and formal oversight.
            </td>
            <td className="px-4 py-4 text-warning-amber">
              Built for productivity; retrofitted controls struggle under safety regimes.
            </td>
          </tr>
          <tr>
            <td className="px-4 py-4 text-slate-dark">Deployment domain</td>
            <td className="px-4 py-4 text-terminal-green">
              Defense, trading, grid, clinical, and other failure-intolerant systems.
            </td>
            <td className="px-4 py-4 text-warning-amber">
              Chat, content generation, and exploratory analysis in low-stakes contexts.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

