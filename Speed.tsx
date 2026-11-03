import { speed } from '../content'
import { FeatureSection } from './FeatureSection'

export function Speed() {
  return (
    <FeatureSection id="rendimiento" align="left" eyebrow={speed.eyebrow} title={speed.title} text={speed.text}>
      <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
        {speed.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse gap-2">
            <dt className="text-xs uppercase tracking-widest text-white/45">{stat.label}</dt>
            <dd className="font-display text-2xl font-semibold md:text-3xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </FeatureSection>
  )
}
