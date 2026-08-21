import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { siteConfig } from '@/data/content'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="hero-visual" aria-hidden="true">
        <div className="orbit orbit-1" />
        <div className="orbit orbit-2" />
        <div className="grid-plane" />
        <div className="signal-beam" />
      </div>

      <div className="hero-content">
        <Reveal as="p" className="brand-mark">
          {siteConfig.name}
        </Reveal>
        <Reveal as="p" className="brand-sub" delay={1}>
          Technologies
        </Reveal>
        <Reveal as="h1" id="hero-heading" delay={1}>
          Smart Software.
          <br />
          <span className="accent">Real Solutions.</span>
        </Reveal>
        <Reveal as="p" className="hero-lead" delay={2}>
          We transform business ideas into reliable, scalable, and intelligent
          digital products that improve operations and accelerate growth.
        </Reveal>
        <Reveal className="hero-actions" delay={3}>
          <Button href="#contact" className='mobile-book-call'>Start a project</Button>
          <Button href="#services" variant="ghost">
            Explore services
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
