import { design } from '../content'
import { FeatureSection } from './FeatureSection'

export function Design() {
  return (
    <FeatureSection id="diseno" align="right" eyebrow={design.eyebrow} title={design.title} text={design.text}>
      <ul className="mt-8 space-y-3">
        {design.points.map((point) => (
          <li key={point} className="flex items-center gap-3 text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_theme(colors.cyan.300)]" />
            {point}
          </li>
        ))}
      </ul>
    </FeatureSection>
  )
}
