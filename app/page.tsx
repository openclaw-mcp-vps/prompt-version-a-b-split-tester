export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          AI Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          A/B Test AI Prompts with{" "}
          <span className="text-[#58a6ff]">Statistical Significance</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Split test different prompt versions against your real data, track performance metrics, and know with confidence which prompt wins — no guesswork.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Testing for $39/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. Works with OpenAI &amp; Anthropic.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "⚡", title: "Run Tests Fast", desc: "Upload your dataset and run both prompt variants in parallel via background jobs." },
            { icon: "📊", title: "Track Metrics", desc: "Measure accuracy, latency, cost, and custom scoring functions per prompt version." },
            { icon: "✅", title: "Stat Significance", desc: "Chi-square and t-test analysis tells you when a winner is real, not random noise." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$39</div>
          <div className="text-[#6e7681] text-sm mb-6">/month · billed monthly</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited A/B tests",
              "Up to 10,000 rows/dataset",
              "OpenAI + Anthropic support",
              "Statistical significance reports",
              "CSV export of results",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            {
              q: "Which AI providers are supported?",
              a: "We support OpenAI (GPT-4o, GPT-4, GPT-3.5) and Anthropic (Claude 3.5, Claude 3). Bring your own API keys — we never store them beyond your session."
            },
            {
              q: "How is statistical significance calculated?",
              a: "We use a two-proportion z-test for pass/fail metrics and Welch's t-test for continuous scores. Results show p-values and confidence intervals so you can make informed decisions."
            },
            {
              q: "What format does my dataset need to be in?",
              a: "Upload a CSV with an input column and an optional expected output column. We handle the rest — running each row through both prompt variants and scoring the results."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} Prompt A/B Tester. All rights reserved.
      </footer>
    </main>
  )
}
