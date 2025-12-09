# Axiom Hive — Deterministic AI Infrastructure

**THEY GUESS. WE PROVE.**

Production-ready Next.js application for Axiom Hive, the world's first deterministic AI infrastructure platform.

## Features

- **Deterministic AI Infrastructure**: 100% identical outputs across all runs
- **Cryptographic Proof**: Immutable audit trails for every inference
- **Zero Hallucination Rate**: Architecture-level constraints eliminate probabilistic variance
- **Regulatory Compliance**: Built for EU AI Act, ISO 26262, and FINRA Rule 3110

## Tech Stack

- **Next.js 14** (App Router with API Routes)
- **TypeScript** (Strict mode)
- **Tailwind CSS** (Custom dark theme with semantic tokens)
- **Framer Motion** (Smooth animations)
- **Three.js** (Direct 3D visualizations - no SSR issues)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── audit/
│   │   │       └── route.ts      # API endpoint for audit requests
│   │   ├── layout.tsx            # Root layout with navigation
│   │   ├── page.tsx              # Homepage
│   │   ├── globals.css           # Global styles
│   │   ├── platform/             # Platform page
│   │   ├── solutions/            # Solutions page
│   │   ├── compliance/          # Compliance page
│   │   ├── research/            # Research page
│   │   └── dev/                 # Developer docs page
│   └── components/
│       ├── CausalManifold.tsx    # 3D grid visualization (Three.js)
│       ├── HashTicker.tsx        # Live verification hashes
│       ├── ComparisonTable.tsx   # Probabilistic vs Deterministic comparison
│       ├── TriLateralHammer.tsx  # Regulatory compliance cards
│       └── AuditRequestForm.tsx  # Audit request form with API integration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

## Design System

### Colors
- `void-black`: #050505 (Background)
- `terminal-green`: #00FF41 (Primary accent)
- `warning-amber`: #FFB000 (Warning/Secondary)
- `slate-dark`: #1F2937 (Text secondary)
- `slate-darker`: #111827 (Cards/Containers)
- `accent-cyan`: #00FFFF (Tertiary accent)

### Typography
- **Monospace**: JetBrains Mono, Space Mono (Headings, Code)
- **Sans**: Inter (Body text)

## License

© 2025 Axiom Hive. Deterministic AI Infrastructure. All proofs reserved.

