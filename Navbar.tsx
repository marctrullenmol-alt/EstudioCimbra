import { useLayoutEffect, useRef } from 'react'
import { brand, nav } from '../content'
import { gsap, ScrollTrigger } from '../lib/gsap'
import { useUI } from '../store'

export function Navbar() {
  const section = useUI((s) => s.section)
  const progress = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const bar = progress.current
    if (!bar) return
    const trigger = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => gsap.set(bar, { scaleX: self.progress }),
    })
    return () => trigger.kill()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 transition-colors duration-500 ${
        section > 0 ? 'bg-ink/60 backdrop-blur-lg' : ''
      }`}
    >
      <nav aria-label="Principal" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="font-display text-lg font-semibold tracking-tight">
          {brand.name}
          <span className="text-violet-400">.</span>
        </a>

        <ul className="hidden gap-8 text-sm md:flex">
          {nav.map((item) => {
            const active = section === item.section
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active ? 'true' : undefined}
                  className={`transition-colors ${active ? 'text-white' : 'text-white/55 hover:text-white'}`}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href="#contacto"
          className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-ink"
        >
          {brand.navCta}
        </a>
      </nav>
      <div
        ref={progress}
        className="h-px origin-left scale-x-0 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300"
      />
    </header>
  )
}
