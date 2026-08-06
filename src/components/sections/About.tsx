import { Reveal } from '@/components/ui/Reveal'
import { aboutCopy } from '@/data/content'

export function About() {
  return (
    <section className="section about" id="about">
      <div className="section-inner">
        <Reveal as="p" className="eyebrow">
          Who we are
        </Reveal>
        <Reveal as="h2" className="section-title">
          Building software that solves real business problems
        </Reveal>
        <div className="about-grid">
          {aboutCopy.map((paragraph, index) => (
            <Reveal
              key={paragraph.slice(0, 24)}
              as="p"
              className="about-copy"
              delay={index === 1 ? 1 : 0}
            >
              {paragraph}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
