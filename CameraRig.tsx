import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const { damp } = THREE.MathUtils

// Paralaje suave de la cámara siguiendo el cursor
export function CameraRig({ reducedMotion }: { reducedMotion: boolean }) {
  useFrame(({ camera, pointer }, delta) => {
    if (reducedMotion) return
    camera.position.x = damp(camera.position.x, pointer.x * 0.4, 2, delta)
    camera.position.y = damp(camera.position.y, pointer.y * 0.25, 2, delta)
    camera.lookAt(0, 0, 0)
  })

  return null
}
