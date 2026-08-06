import { Reveal } from '@/components/ui/Reveal'
import { whyChoose } from '@/data/content'

export function WhyUs() {
  return (
    <section className="section why" id="why">
      <div className="section-inner">
        <Reveal as="p" className="eyebrow">
          Partnership
        </Reveal>
        <Reveal as="h2" className="section-title">
          Why choose NALATRA?
        </Reveal>
        <ul className="why-list">
          {whyChoose.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={(index % 3) as 0 | 1 | 2}
            >
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
