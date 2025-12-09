import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono-tight': ['JetBrains Mono', 'Space Mono', 'monospace'],
        'sans-clinical': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'void-black': '#050505',
        'slate-darker': '#020617',
        'slate-dark': '#6B7280',
        'terminal-green': '#00FF41',
        'warning-amber': '#FFB000',
        'accent-cyan': '#22D3EE',
      },
      borderColor: {
        'slate-dark': '#374151',
      },
      backgroundColor: {
        'void-black': '#050505',
        'slate-darker': '#020617',
      },
      textColor: {
        'slate-dark': '#9CA3AF',
        'terminal-green': '#00FF41',
        'warning-amber': '#FFB000',
        'accent-cyan': '#22D3EE',
      },
    },
  },
  plugins: [],
}

export default config

