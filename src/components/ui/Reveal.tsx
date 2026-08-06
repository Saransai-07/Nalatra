import type { HTMLAttributes, ReactNode, Ref } from 'react'
import { useReveal } from '@/hooks/useReveal'
import { cn } from '@/lib/utils'

type RevealTag = 'div' | 'p' | 'h1' | 'h2' | 'li' | 'article' | 'span'

type RevealProps = {
  children: ReactNode
  className?: string
  as?: RevealTag
  delay?: 0 | 1 | 2 | 3
} & Omit<HTMLAttributes<HTMLElement>, 'children' | 'className'>

export function Reveal({
  children,
  className,
  as: Tag = 'div',
  delay = 0,
  ...rest
}: RevealProps) {
  const ref = useReveal<HTMLElement>()

  return (
    <Tag
      ref={ref as Ref<never>}
      className={cn('reveal', delay > 0 && `reveal-delay-${delay}`, className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}
