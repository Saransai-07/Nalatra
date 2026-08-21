import type { CSSProperties } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import { ServiceIcon } from '@/components/sections/ServiceIcon'
import { services, siteConfig } from '@/data/content'

type ServiceItemProps = {
  service: (typeof services)[number]
  index: number
}

function ServiceItem({ service, index }: ServiceItemProps) {
  return (
    <li
      style={{ '--svc-index': index } as CSSProperties}
      aria-label={`${service.title}. ${service.description}`}
    >
      <span className="svc-icon-wrap">
        <ServiceIcon icon={service.icon} />
      </span>
      <span className="svc-label">
        <span className="svc-brand">{siteConfig.name}</span>
        <span className="svc-name">{service.shortLabel}</span>
        <span className="svc-title">{service.title}</span>
        <span className="svc-desc">{service.description}</span>
      </span>
    </li>
  )
}

function ServiceRow({ suffix, hidden = false }: { suffix: string; hidden?: boolean }) {
  return (
    <ul className="service-list" aria-hidden={hidden || undefined}>
      {services.map((service, index) => (
        <ServiceItem
          key={`${service.shortLabel}-${suffix}`}
          service={service}
          index={index}
        />
      ))}
    </ul>
  )
}

export function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-inner services-inner">
        <Reveal as="p" className="eyebrow services-eyebrow">
          Our solutions
        </Reveal>
        <Reveal as="h2" className="section-title services-title">
          End-to-end digital capability
        </Reveal>
        <Reveal as="p" className="section-lead services-lead" delay={1}>
          From product design to cloud operations and intelligent automation.
          Our services scroll continuously—hover to pause and explore.
        </Reveal>

        <Reveal className="service-panel" delay={2}>
          <div className="service-scroll">
            <div className="service-track">
              <ServiceRow suffix="a" />
              <ServiceRow suffix="b" hidden />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
