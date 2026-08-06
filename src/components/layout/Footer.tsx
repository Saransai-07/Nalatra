import { siteConfig } from '@/data/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a className="logo" href="#top">
            <img
              className="logo-mark"
              src="/brand/logo-mark.svg"
              alt=""
              width={34}
              height={34}
            />
            <span className="logo-text">
              <span>{siteConfig.name}</span>
              <span className="logo-sub">Technologies</span>
            </span>
          </a>
          <p>{siteConfig.tagline}</p>
        </div>
        <p className="footer-copy">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
