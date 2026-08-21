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
  {
    shortLabel: 'CUSTOM',
    title: 'Custom Software Development',
    description: 'Tailored applications built around your workflows and business goals.',
    icon: 'custom',
  },
  {
    shortLabel: 'WEB',
    title: 'Web Application Development',
    description: 'Fast, responsive web apps with modern UX and reliable performance.',
    icon: 'web',
  },
  {
    shortLabel: 'MOBILE',
    title: 'Mobile Application Development',
    description: 'Native and cross-platform mobile experiences for iOS and Android.',
    icon: 'mobile',
  },
  {
    shortLabel: 'ERP',
    title: 'ERP & CRM Solutions',
    description: 'Unified systems to manage operations, sales, and customer relationships.',
    icon: 'erp',
  },
  {
    shortLabel: 'CONNECT',
    title: 'WhatsApp Business Solutions',
    description: 'Automated messaging, support flows, and customer engagement on WhatsApp.',
    icon: 'connect',
  },
  {
    shortLabel: 'APIS',
    title: 'API Development & Integration',
    description: 'Secure APIs and seamless integrations across your software stack.',
    icon: 'apis',
  },
  {
    shortLabel: 'CLOUD',
    title: 'Cloud & DevOps Services',
    description: 'Scalable cloud infrastructure, CI/CD pipelines, and reliable deployments.',
    icon: 'cloud',
  },
  {
    shortLabel: 'AI',
    title: 'AI & Automation',
    description: 'Intelligent automation that reduces manual work and speeds decisions.',
    icon: 'ai',
  },
  {
    shortLabel: 'CONSULT',
    title: 'Technical Consulting',
    description: 'Expert guidance on architecture, stack choices, and digital strategy.',
    icon: 'consult',
  },
] as const

export type ServiceIconId = (typeof services)[number]['icon']

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

export const comparisonColumns = [
  { id: 'nalatra', label: 'NALATRA', featured: true },
  { id: 'hiring', label: 'Hiring Employees', featured: false },
  { id: 'agencies', label: 'Other agencies', featured: false },
] as const

export type ComparisonColumnId = (typeof comparisonColumns)[number]['id']

export const comparisonRows = [
  {
    label: 'Cost',
    values: {
      nalatra: { positive: true, text: 'Fair, transparent' },
      hiring: { positive: false, text: '$$$ (salary/benefits)' },
      agencies: { positive: false, text: '$$$ – $$$$ (project-based)' },
    },
  },
  {
    label: 'Expertise',
    values: {
      nalatra: { positive: true, text: 'Full-stack, modern stack' },
      hiring: { positive: false, text: 'Limited to individual skills' },
      agencies: { positive: false, text: 'Variable quality' },
    },
  },
  {
    label: 'Turnaround',
    values: {
      nalatra: { positive: true, text: 'Fast, agile sprints' },
      hiring: { positive: false, text: 'Slow (hiring & onboarding)' },
      agencies: { positive: false, text: 'Depends on agency load' },
    },
  },
  {
    label: 'Flexibility',
    values: {
      nalatra: { positive: true, text: 'Scale up or down easily' },
      hiring: { positive: false, text: 'Fixed headcount' },
      agencies: { positive: false, text: 'Contract-bound' },
    },
  },
  {
    label: 'Design',
    values: {
      nalatra: { positive: true, text: 'UX-first, polished UI' },
      hiring: { positive: false, text: 'May need a separate hire' },
      agencies: { positive: false, text: 'Often template-based' },
    },
  },
  {
    label: 'Client Focus',
    values: {
      nalatra: { positive: true, text: 'Dedicated partnership' },
      hiring: { positive: false, text: 'Split across the team' },
      agencies: { positive: false, text: 'Juggling multiple clients' },
    },
  },
  {
    label: 'Support',
    values: {
      nalatra: { positive: true, text: 'Long-term, responsive' },
      hiring: { positive: true, text: 'In-house, but costly' },
      agencies: { positive: false, text: 'Limited post-launch' },
    },
  },
] as const satisfies ReadonlyArray<{
  label: string
  values: Record<ComparisonColumnId, { positive: boolean; text: string }>
}>

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
