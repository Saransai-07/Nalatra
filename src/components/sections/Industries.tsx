import { Reveal } from '@/components/ui/Reveal'
import { industries } from '@/data/content'

export function Industries() {
  return (
    <section className="section industries" id="industries">
      <div className="section-inner">
        <Reveal as="p" className="eyebrow">
          Sectors
        </Reveal>
        <Reveal as="h2" className="section-title">
          Industries we serve
        </Reveal>
        <Reveal as="p" className="section-lead">
          Domain-aware software for teams that need reliability at scale.
        </Reveal>
        <ul className="industry-flow">
          {industries.map((industry) => (
            <Reveal as="li" key={industry}>
              {industry}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
