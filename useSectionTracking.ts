import { useEffect } from 'react'
import { measureSectionOffset, scroll } from '../lib/scroll'
import { useUI } from '../store'

export function useSectionTracking() {
  useEffect(() => {
    const update = () => {
      scroll.offset = measureSectionOffset()
      const section = Math.round(scroll.offset)
      if (useUI.getState().section !== section) useUI.setState({ section })
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    // Recalcula cuando cambia el alto de la página (redimensionar, carga de fuentes...)
    const observer = new ResizeObserver(update)
    observer.observe(document.body)

    return () => {
      window.removeEventListener('scroll', update)
      observer.disconnect()
    }
  }, [])
}
