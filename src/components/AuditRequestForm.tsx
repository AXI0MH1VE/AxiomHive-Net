'use client'

import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function AuditRequestForm() {
  const [state, setState] = useState<FormState>('idle')
  const [message, setMessage] = useState<string>('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')
    setMessage('')

    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      // Hook this to /api/audit or your external intake.
      console.log('AUDIT_REQUEST', payload)
      setState('success')
      setMessage('Request received. A deterministic human will respond.')
      e.currentTarget.reset()
    } catch {
      setState('error')
      setMessage('Unable to submit right now. Please retry or email hello@axiomhive.net.')
    }
  }

  return (
    <form
      id="audit-request"
      onSubmit={onSubmit}
      className="border border-terminal-green/40 bg-black/60 p-8 space-y-6 max-w-xl"
    >
      <div className="text-xs font-mono-tight uppercase tracking-widest text-terminal-green">
        // Request a fortress-grade audit
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono-tight uppercase text-slate-dark">
            Name
          </label>
          <input name="name" required placeholder="Your name" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono-tight uppercase text-slate-dark">
            Work email
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@enterprise.com"
          />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-xs font-mono-tight uppercase text-slate-dark">
            Organization
          </label>
          <input name="org" required placeholder="Company / institution" />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-xs font-mono-tight uppercase text-slate-dark">
            System class
          </label>
          <input
            name="systemClass"
            placeholder="Defense / trading / grid / clinical / other"
          />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-xs font-mono-tight uppercase text-slate-dark">
            Describe your current risk surface
          </label>
          <textarea
            name="context"
            rows={4}
            placeholder="Where are probabilistic models currently in your decision loop?"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="px-6 py-3 border border-terminal-green text-terminal-green font-mono-tight text-xs uppercase tracking-widest hover:bg-terminal-green hover:text-void-black transition-colors disabled:opacity-60"
      >
        {state === 'submitting' ? '// submitting…' : '→ Request audit'}
      </button>

      {message && (
        <div
          className={`text-xs font-mono-tight mt-2 ${
            state === 'success' ? 'text-terminal-green' : 'text-warning-amber'
          }`}
        >
          {message}
        </div>
      )}
    </form>
  )
}

