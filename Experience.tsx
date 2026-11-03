import { Canvas } from '@react-three/fiber'
import { Environment, Lightformer, Sparkles } from '@react-three/drei'
import { Bloom, EffectComposer, Noise, ToneMapping, Vignette } from '@react-three/postprocessing'
import { CameraRig } from './CameraRig'
import { Orb } from './Orb'

export function Experience({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 h-lvh" aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 6], fov: 40 }}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
        eventSource={document.getElementById('root')!}
        eventPrefix="client"
      >
        <color attach="background" args={['#05060a']} />
        <CameraRig reducedMotion={reducedMotion} />
        <Orb reducedMotion={reducedMotion} />
        <Sparkles
          count={140}
          scale={[14, 9, 8]}
          size={2.2}
          speed={reducedMotion ? 0 : 0.3}
          opacity={0.6}
          noise={1}
          color="#a78bfa"
        />

        <Environment resolution={256}>
          <Lightformer form="rect" intensity={2.5} scale={[12, 3, 1]} position={[0, 6, 3]} target={[0, 0, 0]} />
          <Lightformer form="rect" color="#7c5cff" intensity={4} scale={[8, 8, 1]} position={[-7, 0, 1]} target={[0, 0, 0]} />
          <Lightformer form="rect" color="#22d3ee" intensity={3} scale={[5, 9, 1]} position={[7, -1, 0]} target={[0, 0, 0]} />
          <Lightformer form="rect" color="#f472b6" intensity={1.5} scale={[10, 4, 1]} position={[0, -6, -3]} target={[0, 0, 0]} />
        </Environment>

        <EffectComposer multisampling={4}>
          <Bloom mipmapBlur luminanceThreshold={1} intensity={0.8} />
          <ToneMapping />
          <Vignette offset={0.3} darkness={0.75} />
          <Noise opacity={0.035} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
