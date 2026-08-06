import { Reveal } from '@/components/ui/Reveal'
import { services } from '@/data/content'
import { formatIndex } from '@/lib/utils'

export function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-inner">
        <Reveal as="p" className="eyebrow">
          What we do
        </Reveal>
        <Reveal as="h2" className="section-title">
          Our services
        </Reveal>
        <Reveal as="p" className="section-lead">
          End-to-end capability—from product design to cloud operations and
          intelligent automation.
        </Reveal>
        <ul className="service-list">
          {services.map((service, index) => (
            <Reveal as="li" key={service}>
              <span className="svc-num">{formatIndex(index)}</span>
              <span className="svc-name">{service}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
