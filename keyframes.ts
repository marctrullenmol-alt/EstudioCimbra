// Un fotograma clave por cada [data-section], en el mismo orden que en la página.
// Al hacer scroll entre dos secciones se interpola entre sus fotogramas.
export type Keyframe = {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
  color: string
  distort: number
  ringTilt: number
}

export const keyframes: Keyframe[] = [
  // Inicio: texto a la izquierda, esfera a la derecha
  { position: [1.8, 0, 0], rotation: [0, 0, 0], scale: 0.95, color: '#7c5cff', distort: 0.35, ringTilt: 1.2 },
  // Diseño: esfera a la izquierda
  { position: [-2, -0.1, 0], rotation: [0.6, 1.8, 0.2], scale: 1, color: '#22d3ee', distort: 0.5, ringTilt: 1.45 },
  // Rendimiento: esfera a la derecha
  { position: [2, 0, 0], rotation: [-0.4, 3.4, -0.2], scale: 0.95, color: '#f472b6', distort: 0.22, ringTilt: 0.9 },
  // Proceso: al fondo, detrás de las tarjetas
  { position: [0, -0.4, -4], rotation: [0.3, 4.8, 0], scale: 1.3, color: '#6366f1', distort: 0.6, ringTilt: 1.35 },
  // Contacto: centrada encima del texto
  { position: [0, 1.3, 0], rotation: [0, 6.3, 0], scale: 0.7, color: '#a78bfa', distort: 0.4, ringTilt: 1.2 },
]
