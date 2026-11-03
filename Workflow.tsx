import { workflow } from '../content'

export function Workflow() {
  return (
    <section id="proceso" data-section className="flex min-h-svh items-center py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{workflow.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
            {workflow.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/65">{workflow.text}</p>
        </div>

        <ol data-reveal className="mt-14 grid gap-5 md:grid-cols-3">
          {workflow.steps.map((step, index) => (
            <li key={step.title} className="card">
              <span className="font-display text-sm text-violet-300">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-6 font-display text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-white/60">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
