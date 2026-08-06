import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/data/content'

type SeoProps = {
  title?: string
  description?: string
  path?: string
}

export function Seo({
  title,
  description = siteConfig.description,
  path = '/',
}: SeoProps) {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`
  const url = `${siteConfig.url.replace(/\/$/, '')}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
