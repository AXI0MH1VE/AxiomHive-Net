'use client'

import { motion } from 'framer-motion'
import { CausalManifold } from '@/components/CausalManifold'
import { HashTicker } from '@/components/HashTicker'
import { ComparisonTable } from '@/components/ComparisonTable'
import { TriLateralHammer } from '@/components/TriLateralHammer'
import { AuditRequestForm } from '@/components/AuditRequestForm'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export default function Home() {
  return (
    <main className="bg-void-black overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 pt-32 pb-20 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Headline */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-7xl md:text-8xl font-mono-tight text-terminal-green tracking-tighter uppercase font-black leading-none">
              THEY<br />GUESS.<br />WE<br />PROVE.
            </h1>
            <p className="text-xl md:text-2xl text-slate-dark max-w-3xl leading-relaxed font-sans-clinical">
              The world's first <strong className="text-terminal-green">Deterministic AI Infrastructure</strong>.
              <br />
              <span className="text-terminal-green font-mono-tight">100/100 identical outputs.</span>{' '}
              <span className="text-warning-amber font-mono-tight">Cryptographic proof.</span>{' '}
              <span className="text-accent-cyan font-mono-tight">Zero hallucinations.</span>
            </p>
          </motion.div>

          {/* CausalManifold Visualization */}
          <motion.div variants={itemVariants} className="mt-12 border border-terminal-green/40 p-8 rounded">
            <div className="text-xs font-mono-tight text-terminal-green mb-4 uppercase tracking-widest">
              // Live Causal Manifold — Deterministic Execution Space
            </div>
            <CausalManifold />
          </motion.div>

          {/* Hash Ticker */}
          <motion.div variants={itemVariants} className="border border-slate-dark/50 p-6 rounded bg-slate-darker/30">
            <div className="text-xs font-mono-tight text-terminal-green mb-3 uppercase tracking-widest">
              // Live Verification Hashes — Real-Time Proof Generation
            </div>
            <HashTicker />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== PROBLEM / SOLUTION SPLIT ===== */}
      <section className="px-8 md:px-16 py-24 bg-slate-darker/20 border-y border-slate-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-mono-tight uppercase mb-12 text-slate-dark tracking-tight"
          >
            The Stochastic Crisis
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg text-slate-dark max-w-3xl mb-16 leading-relaxed"
          >
            Today's leading probabilistic models—OpenAI GPT-4, Anthropic Claude—are optimized for "good enough" answers and creative variance. That architecture is acceptable for low-stakes content generation. It is structurally unfit for defense, trading, grid control, or clinical decision-making, where even a small, irreducible hallucination rate becomes an enterprise-scale liability.
          </motion.p>

          <ComparisonTable />
        </div>
      </section>

      {/* ===== TRI-LATERAL HAMMER: REGULATORY IMPERATIVE ===== */}
      <section className="px-8 md:px-16 py-24 border-b border-slate-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-mono-tight uppercase mb-16 text-warning-amber tracking-tight"
          >
            Compliance is Not a Checklist.<br />It Is Architecture.
          </motion.h2>

          <TriLateralHammer />
        </div>
      </section>

      {/* ===== THE SOLUTION: AXIOM HIVE ===== */}
      <section className="px-8 md:px-16 py-24 bg-slate-darker/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-5xl font-mono-tight uppercase text-terminal-green tracking-tight">
                Deterministic AI Infrastructure
              </h2>
              <p className="text-lg text-slate-dark max-w-3xl leading-relaxed font-sans-clinical">
                Axiom Hive is engineered as a cryptographically provable execution substrate,
                not a probabilistic content generator. Every inference is replayable, auditable,
                and anchored to a verifiable causal graph.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="text-xs font-mono-tight uppercase tracking-widest text-slate-dark">
                  Core guarantees
                </div>
                <ul className="space-y-3 text-sm text-slate-dark">
                  <li>Deterministic execution across clusters and regions with identical inputs.</li>
                  <li>End-to-end provenance for every token, transformation, and policy decision.</li>
                  <li>Regulator-ready logs that map directly onto safety and supervision mandates.</li>
                  <li>Composable substrate that wraps or replaces stochastic models when required.</li>
                </ul>
              </div>

              <AuditRequestForm />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

