import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt A/B Split Tester — Test AI Prompts with Statistical Significance',
  description: 'Split test different prompt versions against your data, track performance metrics, and determine statistical significance. Built for AI product managers and prompt engineers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c7472d3e-14fa-489f-b21e-d2bc57bad52f"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
