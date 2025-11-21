export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-950 font-sans text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#38bdf8_0%,_transparent_55%),radial-gradient(circle_at_bottom,_#a855f7_0%,_transparent_60%)] opacity-70" />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-24 sm:px-10 lg:px-16">
        <section className="flex flex-col gap-12 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_340px] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-sm font-semibold text-cyan-100 shadow-lg shadow-cyan-500/20">
                Always-on agentic partner
              </span>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Codex handles the entire build loop — ideate, code, test, deploy
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
                Give a goal. I map the plan, write production-grade code, run
                tests, keep context across files, and ship the result to Vercel.
                Every task is reasoned, traceable, and ready for handoff.
              </p>
            </div>

            <aside className="rounded-2xl bg-slate-900 p-6 shadow-2xl shadow-cyan-500/10">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                Current mission
              </h2>
              <div className="mt-4 space-y-3">
                <p className="text-lg font-semibold text-white">
                  “Explain what you can do as an agent.”
                </p>
                <p className="text-sm text-slate-300">
                  ✅ Parsed instructions, built a Next.js experience, and staged
                  it for instant deployment.
                </p>
                <p className="text-sm text-slate-400">
                  Next steps? Expand scope, plug into APIs, or automate
                  day-to-day ops.
                </p>
              </div>
            </aside>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Plan",
                detail:
                  "Generate battle-tested strategies, technical designs, and execution timelines in minutes.",
              },
              {
                title: "Build",
                detail:
                  "Author full-stack features with typed React, API routes, DB migrations, and tailored UI states.",
              },
              {
                title: "Validate",
                detail:
                  "Run lint, tests, and custom scripts; highlight edge cases and add safety nets proactively.",
              },
              {
                title: "Ship",
                detail:
                  "Automate deployments to Vercel, monitor health, and iterate based on telemetry.",
              },
            ].map((capability) => (
              <div
                key={capability.title}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-slate-900"
              >
                <h3 className="text-lg font-semibold text-white">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {capability.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              How the agent executes end-to-end work
            </h2>
            <ol className="space-y-4 text-sm text-slate-200">
              {[
                {
                  title: "Deconstruct the brief",
                  detail:
                    "Extract constraints, uncover implicit expectations, and outline a concrete plan of attack.",
                },
                {
                  title: "Build with context awareness",
                  detail:
                    "Traverse repositories, refactor safely, and author new features with consistent patterns and docs.",
                },
                {
                  title: "Instrument quality gates",
                  detail:
                    "Augment tasks with linting, tests, type coverage, and proactive failure analysis before handoff.",
                },
                {
                  title: "Deploy and verify",
                  detail:
                    "Automate CI & Vercel rollouts, verify production endpoints, and provide operational guidance.",
                },
              ].map((step, index) => (
                <li
                  key={step.title}
                  className="flex items-start gap-4 rounded-2xl border border-white/5 bg-slate-950/60 p-5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-base font-semibold text-cyan-200">
                    {index + 1}
                  </span>
                  <div className="space-y-2">
                    <p className="text-base font-semibold text-white">
                      {step.title}
                    </p>
                    <p className="text-sm leading-relaxed text-slate-300">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">
                Skills snapshot
              </h3>
              <p className="mt-3 text-lg font-semibold text-white">
                Code generation · UI/UX · Data · Ops
              </p>
            </div>
            <dl className="space-y-4">
              {[
                {
                  label: "Framework fluency",
                  value:
                    "Next.js, Remix, SvelteKit, Astro, Express, Django, FastAPI, Rails, Spring",
                },
                {
                  label: "Cloud & tooling",
                  value:
                    "Vercel, AWS, Supabase, Postgres, Prisma, Terraform, GitHub Actions",
                },
                {
                  label: "Workflow automation",
                  value:
                    "Autonomous planning, script authoring, data pipelines, API orchestration",
                },
                {
                  label: "Partner handoff",
                  value:
                    "Concise summaries, inline code references, risk flags, and suggested next steps",
                },
              ].map((item) => (
                <div key={item.label} className="space-y-1">
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {item.label}
                  </dt>
                  <dd className="text-sm text-slate-200">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Live system transcript</h2>
              <span className="rounded-full border border-cyan-400/50 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-100">
                Autonomous loop
              </span>
            </div>
            <div className="grid gap-3 text-sm text-slate-200">
              {[
                {
                  speaker: "User",
                  message: "Hey, what can you do as an agent?",
                },
                {
                  speaker: "Codex",
                  message:
                    "Understood. Generating an interactive brief to showcase planning, build, and deploy capabilities.",
                },
                {
                  speaker: "Codex",
                  message:
                    "Scaffolded a Next.js + Tailwind experience, synthesised capability copy, and prepared deployment flow.",
                },
                {
                  speaker: "Codex",
                  message:
                    "Ready to extend into API integrations, knowledge base ingestion, or custom workflows on request.",
                },
              ].map((entry, index) => (
                <div
                  key={`${entry.speaker}-${index}`}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {entry.speaker}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-100">
                    {entry.message}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8">
            <h2 className="text-2xl font-semibold text-white">
              Engagement modes
            </h2>
            <div className="space-y-5 text-sm text-slate-200">
              {[
                {
                  heading: "Sprint teammate",
                  description:
                    "Pair program on-demand, unblock TODOs, and accelerate releases with inline PR-ready output.",
                },
                {
                  heading: "Grounded researcher",
                  description:
                    "Synthesize docs, RFCs, and production telemetry; surface actionable insights with citations.",
                },
                {
                  heading: "Autonomous operator",
                  description:
                    "Run scheduled jobs, maintain integrations, triage incidents, and escalate with full context.",
                },
              ].map((mode) => (
                <div
                  key={mode.heading}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 p-5"
                >
                  <p className="text-sm font-semibold text-white">
                    {mode.heading}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">
                    {mode.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-cyan-400/50 bg-cyan-500/10 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                Call to action
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                Drop in a repo, API, or product goal — I’ll architect the plan
                and ship the first release.
              </p>
              <a
                href="mailto:codex-agent@example.com"
                className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Launch a build
              </a>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            What you get every time
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Structured reasoning logs",
                detail:
                  "Transparent decision history, trade-offs, and assumptions for every change.",
              },
              {
                title: "Production-ready code",
                detail:
                  "Typed React components, API handlers, database layer, and config tuned for scale.",
              },
              {
                title: "Quality-first workflows",
                detail:
                  "Tests, lint passes, and performance checks integrated by default.",
              },
              {
                title: "Immediate deployment",
                detail:
                  "Vercel-ready project with environment docs, launch scripts, and sanity checks.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-5"
              >
                <p className="text-lg font-semibold text-white">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Codex Autonomous Agent</p>
          <p>Crafted in Next.js · Deploys to Vercel in a single command</p>
        </div>
      </footer>
    </div>
  );
}
