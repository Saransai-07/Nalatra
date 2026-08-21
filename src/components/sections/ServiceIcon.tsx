import type { ServiceIconId } from '@/data/content'

type ServiceIconProps = {
  icon: ServiceIconId
}

const iconProps = {
  width: 36,
  height: 36,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export function ServiceIcon({ icon }: ServiceIconProps) {
  switch (icon) {
    case 'custom':
      return (
        <svg {...iconProps}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6M9 12h6M9 15h4" />
        </svg>
      )
    case 'web':
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      )
    case 'mobile':
      return (
        <svg {...iconProps}>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      )
    case 'erp':
      return (
        <svg {...iconProps}>
          <path d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z" />
          <path d="M12 3v9l6.5 3.5" />
        </svg>
      )
    case 'connect':
      return (
        <svg {...iconProps}>
          <path d="M6 8a4 4 0 0 1 8 0v5a4 4 0 0 1-8 0V8z" />
          <path d="M8 17l-2 3v-3" />
          <circle cx="9" cy="10.5" r="0.75" fill="currentColor" stroke="none" />
          <circle cx="12" cy="10.5" r="0.75" fill="currentColor" stroke="none" />
          <circle cx="15" cy="10.5" r="0.75" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'apis':
      return (
        <svg {...iconProps}>
          <path d="M8 6l-4 6 4 6M16 6l4 6-4 6M14 4l-4 16" />
        </svg>
      )
    case 'cloud':
      return (
        <svg {...iconProps}>
          <path d="M7 18h10a4 4 0 0 0 .5-8 5.5 5.5 0 0 0-10.6-1.5A4 4 0 0 0 7 18z" />
        </svg>
      )
    case 'ai':
      return (
        <svg {...iconProps}>
          <path d="M9 5a3 3 0 0 1 6 0v1a3 3 0 0 1-6 0V5z" />
          <path d="M12 9v2M8 12h8M7 16c1.5 2 8.5 2 10 0" />
          <path d="M6 8l-2 1M18 8l2 1M5 14l-2 1M19 14l2 1" />
        </svg>
      )
    case 'consult':
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      )
  }
}
