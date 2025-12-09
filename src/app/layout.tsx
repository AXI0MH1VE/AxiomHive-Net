import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Axiom Hive — THEY GUESS. WE PROVE.',
  description: 'Deterministic AI Infrastructure for the Verification Economy. Cryptographic proof. Zero hallucinations. Enterprise-grade audit trails.',
  openGraph: {
    title: 'Axiom Hive — Sovereign Substrate',
    description: 'The only AI infrastructure architected for critical systems.',
    type: 'website',
    url: 'https://axiomhive.net',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;900&family=Space+Mono:wght@400;700&family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-void-black text-white font-sans-clinical">
        {/* Fixed Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-void-black/98 backdrop-blur border-b border-slate-dark/30 px-8 py-4 flex justify-between items-center">
          <div className="text-terminal-green font-mono-tight text-sm tracking-widest uppercase font-bold">
            ⬢ AXIOM HIVE
          </div>
          <div className="hidden md:flex gap-8 text-xs font-mono-tight tracking-wider uppercase">
            <a href="/platform" className="hover:text-terminal-green transition-colors duration-100">Platform</a>
            <a href="/solutions" className="hover:text-terminal-green transition-colors duration-100">Solutions</a>
            <a href="/compliance" className="hover:text-terminal-green transition-colors duration-100">Compliance</a>
            <a href="/research" className="hover:text-terminal-green transition-colors duration-100">Research</a>
          </div>
          <a href="#audit-request" className="px-4 py-2 border border-terminal-green text-terminal-green font-mono-tight text-xs hover:bg-terminal-green hover:text-void-black transition-all duration-100 font-bold">
            → AUDIT
          </a>
        </nav>

        {/* Page Content */}
        <div className="pt-16">
          {children}
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-dark/30 bg-void-black px-8 py-16 text-slate-dark text-xs font-mono-tight">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-terminal-green mb-4 font-bold">AXIOM HIVE</div>
              <p className="leading-relaxed">Sovereign AI Infrastructure for Critical Systems.</p>
            </div>
            <div>
              <div className="text-terminal-green mb-4 font-bold">PLATFORM</div>
              <ul className="space-y-2">
                <li><a href="/platform" className="hover:text-terminal-green">Architecture</a></li>
                <li><a href="/platform#specs" className="hover:text-terminal-green">Specifications</a></li>
                <li><a href="/dev" className="hover:text-terminal-green">API Docs</a></li>
              </ul>
            </div>
            <div>
              <div className="text-terminal-green mb-4 font-bold">COMPLIANCE</div>
              <ul className="space-y-2">
                <li><a href="/compliance#eu-ai-act" className="hover:text-terminal-green">EU AI Act</a></li>
                <li><a href="/compliance#iso-26262" className="hover:text-terminal-green">ISO 26262</a></li>
                <li><a href="/compliance#finra" className="hover:text-terminal-green">FINRA Rule 3110</a></li>
              </ul>
            </div>
            <div>
              <div className="text-terminal-green mb-4 font-bold">CONTACT</div>
              <ul className="space-y-2">
                <li><a href="mailto:hello@axiomhive.net" className="hover:text-terminal-green">hello@axiomhive.net</a></li>
                <li><a href="https://github.com/axiomhive" className="hover:text-terminal-green">GitHub</a></li>
                <li><a href="https://medium.com/@axiomhive" className="hover:text-terminal-green">Research</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-dark/30 mt-8 pt-8 text-center text-slate-dark/50">
            © 2025 Axiom Hive. Deterministic AI Infrastructure. All proofs reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}

