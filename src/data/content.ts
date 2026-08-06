export const siteConfig = {
  name: import.meta.env.VITE_COMPANY_NAME ?? 'NALATRA',
  tagline: 'Smart Software. Real Solutions.',
  url: import.meta.env.VITE_SITE_URL ?? 'https://nalatra.in',
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL ?? 'hello@nalatra.in',
  description:
    'NALATRA builds reliable, scalable, and intelligent digital solutions that solve real business problems.',
} as const

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'Industries', href: '#industries' },
] as const

export const aboutCopy = [
  'At NALATRA, we help businesses transform their ideas into reliable, scalable, and intelligent digital solutions. We specialize in designing and developing modern software that improves operations, automates workflows, and accelerates business growth.',
  "Our focus is not just on writing code—we partner with our clients to understand their challenges and build technology that delivers measurable results. Whether you're a startup launching your first product, an established business modernizing operations, or an enterprise looking for custom software, NALATRA delivers with transparency, innovation, and long-term support.",
] as const

export const vision =
  'To become a trusted global technology partner that empowers businesses through innovative, reliable, and future-ready software solutions.'

export const mission = [
  'Deliver high-quality software tailored to business needs.',
  'Build secure, scalable, and user-friendly applications.',
  'Create long-term partnerships through trust and transparency.',
  'Continuously innovate using modern technologies and best practices.',
] as const

export const services = [
  'Custom Software Development',
  'Web Application Development',
  'Mobile Application Development',
  'ERP & CRM Solutions',
  'WhatsApp Business Solutions',
  'API Development & Integration',
  'Cloud & DevOps Services',
  'AI & Automation',
  'Technical Consulting',
] as const

export const whyChoose = [
  {
    title: 'Experienced engineering',
    description: 'A software team that ships with craft and care.',
  },
  {
    title: 'Customer-focused',
    description: 'Development shaped around your real challenges.',
  },
  {
    title: 'Modern stack',
    description: 'Technologies chosen for longevity and speed.',
  },
  {
    title: 'Secure & scalable',
    description: 'Architecture that grows with your business.',
  },
  {
    title: 'Transparent communication',
    description: 'Clear progress, honest timelines, no surprises.',
  },
  {
    title: 'On-time delivery',
    description: 'Commitments we plan for—and keep.',
  },
  {
    title: 'Long-term support',
    description: 'Partners beyond launch, not just vendors at kickoff.',
  },
] as const

export const industries = [
  'Education',
  'Healthcare',
  'Retail',
  'Real Estate',
  'Manufacturing',
  'Logistics',
  'Finance',
  'Travel & Hospitality',
  'Professional Services',
  'Startups & SMEs',
] as const
