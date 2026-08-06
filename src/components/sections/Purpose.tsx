import { Reveal } from '@/components/ui/Reveal'
import { mission, vision } from '@/data/content'

export function Purpose() {
  return (
    <section className="section purpose" id="purpose">
      <div className="section-inner purpose-layout">
        <Reveal as="article" className="purpose-block">
          <h2>Vision</h2>
          <p>{vision}</p>
        </Reveal>
        <Reveal as="article" className="purpose-block" delay={1}>
          <h2>Mission</h2>
          <ul className="mission-list">
            {mission.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
