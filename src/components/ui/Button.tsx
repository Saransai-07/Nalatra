import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'ghost'

type CommonProps = {
  children: ReactNode
  variant?: Variant
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', className, ...rest } = props
  const classes = cn('btn', `btn-${variant}`, className)

  if ('href' in rest && rest.href) {
    const { href, ...linkRest } = rest
    return (
      <a href={href} className={classes} {...linkRest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
