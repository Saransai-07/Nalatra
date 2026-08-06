import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionProps = {
  id?: string
  eyebrow?: string
  title?: string
  lead?: string
  children: ReactNode
  className?: string
  innerClassName?: string
}

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className,
  innerClassName,
}: SectionProps) {
  return (
    <section id={id} className={cn('section', className)}>
      <div className={cn('section-inner', innerClassName)}>
        {eyebrow ? <p className="eyebrow reveal-target">{eyebrow}</p> : null}
        {title ? <h2 className="section-title reveal-target">{title}</h2> : null}
        {lead ? <p className="section-lead reveal-target">{lead}</p> : null}
        {children}
      </div>
    </section>
  )
}
