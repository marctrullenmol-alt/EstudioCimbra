import { useLayoutEffect } from 'react'
import { gsap } from '../lib/gsap'

// [data-hero]: entrada al cargar la página.
// [data-reveal]: sus hijos aparecen en cascada al entrar en pantalla.
export function useReveal(reducedMotion: boolean) {
  useLayoutEffect(() => {
    if (reducedMotion) return

    const ctx = gsap.context(() => {
      gsap.from('[data-hero]', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.12,
        delay: 0.15,
      })

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((group) => {
        gsap.from(group.children, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: { trigger: group, start: 'top 80%' },
        })
      })
    })

    return () => ctx.revert()
  }, [reducedMotion])
}
