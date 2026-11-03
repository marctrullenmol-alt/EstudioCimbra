import { hero } from '../content'

export function Hero() {
  return (
    <section id="inicio" data-section className="relative flex min-h-svh items-end pb-14 md:items-center md:pb-0">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-xl">
          <p data-hero className="eyebrow">
            {hero.eyebrow}
          </p>
          <h1
            data-hero
            className="mt-5 font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl"
          >
            {hero.title} <span className="text-gradient">{hero.highlight}</span>
          </h1>
          <p data-hero className="mt-6 max-w-md text-lg leading-relaxed text-white/65">
            {hero.text}
          </p>
          <div data-hero className="mt-9 flex flex-wrap gap-3">
            <a href="#contacto" className="btn-primary">
              {hero.primaryCta}
            </a>
            <a href="#proceso" className="btn-ghost">
              {hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-8 hidden flex-col items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-white/40 md:flex"
      >
        {hero.scrollHint}
        <span className="relative h-10 w-px overflow-hidden bg-white/15">
          <span className="absolute inset-x-0 top-0 h-1/2 bg-white/70 motion-safe:animate-scroll-line" />
        </span>
      </div>
    </section>
  )
}
