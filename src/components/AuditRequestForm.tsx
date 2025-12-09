'use client'

import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function AuditRequestForm() {
  const [state, setState] = useState<FormState>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    auditType: 'general',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('submitting')

    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setState('success')
        setFormData({ name: '', email: '', company: '', auditType: 'general' })
        setTimeout(() => setState('idle'), 3000)
      } else {
        setState('error')
      }
    } catch (error) {
      console.error('AUDIT_REQUEST_ERROR:', error)
      setState('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 font-sans-clinical">
      <div>
        <label className="block text-sm font-mono-tight text-terminal-green uppercase tracking-widest mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-slate-darker border border-slate-dark px-4 py-3 text-white placeholder-slate-dark/50 focus:border-terminal-green focus:outline-none transition-colors"
          placeholder="Your Name"
        />
      </div>

      <div>
        <label className="block text-sm font-mono-tight text-terminal-green uppercase tracking-widest mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-slate-darker border border-slate-dark px-4 py-3 text-white placeholder-slate-dark/50 focus:border-terminal-green focus:outline-none transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-mono-tight text-terminal-green uppercase tracking-widest mb-2">
          Company
        </label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full bg-slate-darker border border-slate-dark px-4 py-3 text-white placeholder-slate-dark/50 focus:border-terminal-green focus:outline-none transition-colors"
          placeholder="Your Organization"
        />
      </div>

      <div>
        <label className="block text-sm font-mono-tight text-terminal-green uppercase tracking-widest mb-2">
          Audit Type
        </label>
        <select
          name="auditType"
          value={formData.auditType}
          onChange={handleChange}
          aria-label="Audit Type"
          className="w-full bg-slate-darker border border-slate-dark px-4 py-3 text-white focus:border-terminal-green focus:outline-none transition-colors"
        >
          <option value="general">General Audit</option>
          <option value="defense">Defense & Security</option>
          <option value="finance">Finance & Trading</option>
          <option value="healthcare">Healthcare & Pharma</option>
          <option value="automotive">Automotive & Robotics</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={state === 'submitting'}
        className={`w-full py-3 font-mono-tight font-bold uppercase tracking-widest transition-all ${
          state === 'submitting'
            ? 'bg-slate-dark text-slate-dark/50 cursor-not-allowed'
            : 'bg-terminal-green text-void-black hover:bg-warning-amber hover:text-void-black'
        }`}
      >
        {state === 'submitting' ? '// Submitting...' : '→ Request Audit'}
      </button>

      {state === 'success' && (
        <div className="text-sm font-mono-tight text-terminal-green text-center">
          ✓ Request received. A deterministic human will respond within 24 hours.
        </div>
      )}

      {state === 'error' && (
        <div className="text-sm font-mono-tight text-warning-amber text-center">
          ✗ Unable to submit. Please retry or email hello@axiomhive.net
        </div>
      )}
    </form>
  )
}
