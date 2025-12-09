'use client'

export function ComparisonTable() {
  const rows = [
    {
      attribute: 'Output Determinism',
      probabilistic: 'Non-deterministic (8–12% variance)',
      axiom: '100% Identical (Batch-Invariant)',
    },
    {
      attribute: 'Audit Trail',
      probabilistic: 'Post-hoc explanations (mutable)',
      axiom: 'Cryptographic proof (immutable)',
    },
    {
      attribute: 'Regulatory Compliance',
      probabilistic: 'Black-box (GDPR non-compliant)',
      axiom: 'EU AI Act Art. 13 Automated',
    },
    {
      attribute: 'Hallucination Rate',
      probabilistic: 'Irreducible (by design)',
      axiom: '0% (Deterministic constraint)',
    },
    {
      attribute: 'Enterprise Liability',
      probabilistic: 'Unlimited (uninsurable)',
      axiom: 'Capped (verifiable)',
    },
  ]

  return (
    <div className="overflow-x-auto border border-slate-dark rounded">
      <table className="w-full text-sm font-sans-clinical">
        <thead>
          <tr className="border-b border-slate-dark bg-slate-darker/70">
            <th className="px-6 py-4 text-left font-mono-tight text-slate-dark uppercase text-xs tracking-widest">
              Metric
            </th>
            <th className="px-6 py-4 text-left font-mono-tight text-warning-amber uppercase text-xs tracking-widest">
              Probabilistic (OpenAI, Anthropic)
            </th>
            <th className="px-6 py-4 text-left font-mono-tight text-terminal-green uppercase text-xs tracking-widest">
              Axiom Hive (Deterministic)
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-slate-dark/50 hover:bg-slate-darker/30">
              <td className="px-6 py-4 font-mono-tight text-slate-dark">{row.attribute}</td>
              <td className="px-6 py-4 text-slate-dark/70">{row.probabilistic}</td>
              <td className="px-6 py-4 text-terminal-green font-bold">{row.axiom}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
