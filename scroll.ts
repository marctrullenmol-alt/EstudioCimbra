// Índice continuo de sección: 0 con la primera sección arriba del todo,
// 1 con la segunda, 1.5 a mitad de camino entre la segunda y la tercera, etc.
export const scroll = { offset: 0 }

export function measureSectionOffset(): number {
  const sections = document.querySelectorAll<HTMLElement>('[data-section]')
  if (sections.length < 2) return 0

  const y = window.scrollY
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  const tops = Array.from(sections, (el) => Math.min(el.getBoundingClientRect().top + y, maxScroll))

  for (let i = 0; i < tops.length - 1; i++) {
    if (y < tops[i + 1]) {
      return i + Math.max(0, y - tops[i]) / Math.max(1, tops[i + 1] - tops[i])
    }
  }
  return tops.length - 1
}
