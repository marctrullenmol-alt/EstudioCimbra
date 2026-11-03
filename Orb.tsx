import { useRef, type ComponentRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { keyframes } from './keyframes'
import { scroll } from '../lib/scroll'

const { damp, lerp, smoothstep } = THREE.MathUtils
const SMOOTHING = 3.5
const palette = keyframes.map((k) => new THREE.Color(k.color))
const targetColor = new THREE.Color()
const satellites = [
  { angle: 0, size: 0.06 },
  { angle: 2.2, size: 0.035 },
  { angle: 4.1, size: 0.045 },
]

export function Orb({ reducedMotion }: { reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null!)
  const core = useRef<THREE.Group>(null!)
  const spinner = useRef<THREE.Mesh>(null!)
  const material = useRef<ComponentRef<typeof MeshDistortMaterial>>(null!)
  const rings = useRef<THREE.Group>(null!)
  const innerRing = useRef<THREE.Group>(null!)
  const outerRing = useRef<THREE.Group>(null!)
  const width = useThree((s) => s.size.width)
  const height = useThree((s) => s.size.height)

  useFrame((_, delta) => {
    const last = keyframes.length - 1
    const i = Math.min(Math.floor(scroll.offset), last)
    const j = Math.min(i + 1, last)
    const t = smoothstep(scroll.offset - i, 0, 1)
    const a = keyframes[i]
    const b = keyframes[j]
    const mix = (from: number, to: number) => lerp(from, to, t)

    let x = mix(a.position[0], b.position[0])
    let y = mix(a.position[1], b.position[1])
    let s = mix(a.scale, b.scale)
    if (width < 768) {
      // En móvil la esfera se queda centrada arriba y el texto va abajo
      x = 0
      y = y * 0.3 + 1.35
      s *= 0.55
    } else {
      const fit = Math.min(1, width / height / 1.6)
      x *= fit
      s *= Math.max(0.75, fit)
    }

    const g = group.current
    g.position.x = damp(g.position.x, x, SMOOTHING, delta)
    g.position.y = damp(g.position.y, y, SMOOTHING, delta)
    g.position.z = damp(g.position.z, mix(a.position[2], b.position[2]), SMOOTHING, delta)
    g.scale.setScalar(damp(g.scale.x, s, SMOOTHING, delta))

    const c = core.current
    c.rotation.x = damp(c.rotation.x, mix(a.rotation[0], b.rotation[0]), SMOOTHING, delta)
    c.rotation.y = damp(c.rotation.y, mix(a.rotation[1], b.rotation[1]), SMOOTHING, delta)
    c.rotation.z = damp(c.rotation.z, mix(a.rotation[2], b.rotation[2]), SMOOTHING, delta)

    const m = material.current
    targetColor.copy(palette[i]).lerp(palette[j], t)
    m.color.lerp(targetColor, 1 - Math.exp(-SMOOTHING * delta))
    m.emissive.copy(m.color)
    m.distort = damp(m.distort, mix(a.distort, b.distort), SMOOTHING, delta)

    rings.current.rotation.x = damp(rings.current.rotation.x, mix(a.ringTilt, b.ringTilt), SMOOTHING, delta)

    if (!reducedMotion) {
      spinner.current.rotation.y += delta * 0.15
      innerRing.current.rotation.z += delta * 0.4
      outerRing.current.rotation.y += delta * 0.12
    }
  })

  return (
    <group ref={group} position={keyframes[0].position}>
      <Float
        speed={reducedMotion ? 0 : 1.2}
        rotationIntensity={reducedMotion ? 0 : 0.3}
        floatIntensity={reducedMotion ? 0 : 0.6}
      >
        <group ref={core}>
          <mesh ref={spinner}>
            <sphereGeometry args={[1, 128, 128]} />
            <MeshDistortMaterial
              ref={material}
              color={keyframes[0].color}
              emissive={keyframes[0].color}
              emissiveIntensity={0.08}
              roughness={0.12}
              metalness={0.55}
              clearcoat={1}
              clearcoatRoughness={0.15}
              iridescence={1}
              iridescenceIOR={1.4}
              iridescenceThicknessRange={[100, 600]}
              envMapIntensity={1.4}
              distort={keyframes[0].distort}
              speed={reducedMotion ? 0 : 1.6}
            />
          </mesh>
        </group>

        <group ref={rings} rotation={[keyframes[0].ringTilt, 0.3, 0]}>
          <group ref={innerRing}>
            <mesh>
              <torusGeometry args={[1.6, 0.012, 16, 160]} />
              <meshBasicMaterial color={[1.6, 1.3, 3]} toneMapped={false} />
            </mesh>
            {satellites.map(({ angle, size }) => (
              <mesh key={angle} position={[Math.cos(angle) * 1.6, Math.sin(angle) * 1.6, 0]}>
                <sphereGeometry args={[size, 24, 24]} />
                <meshBasicMaterial color={[2.5, 2.2, 4]} toneMapped={false} />
              </mesh>
            ))}
          </group>
          <group ref={outerRing}>
            <mesh rotation={[0.5, 0, 0]}>
              <torusGeometry args={[2.05, 0.006, 16, 200]} />
              <meshBasicMaterial color={[0.6, 1.6, 2]} toneMapped={false} transparent opacity={0.6} />
            </mesh>
          </group>
        </group>
      </Float>
    </group>
  )
}
