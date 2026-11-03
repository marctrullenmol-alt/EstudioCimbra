import type { ReactNode } from 'react'

type FeatureSectionProps = {
  id: string
  align: 'left' | 'right'
  eyebrow: string
  title: string
  text: string
  children?: ReactNode
}

export function FeatureSection({ id, align, eyebrow, title, text, children }: FeatureSectionProps) {
  return (
    <section id={id} data-section className="flex min-h-svh items-end py-24 md:items-center">
      <div className={`mx-auto flex w-full max-w-6xl px-6 ${align === 'right' ? 'md:justify-end' : ''}`}>
        <div data-reveal className="panel max-w-lg">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/65">{text}</p>
          {children}
        </div>
      </div>
    </section>
  )
}
