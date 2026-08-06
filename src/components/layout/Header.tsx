import { navLinks, siteConfig } from '@/data/content'
import { useMobileMenu } from '@/hooks/useMobileMenu'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/lib/utils'

export function Header() {
  const scrolled = useScrolled()
  const { open, toggle, close } = useMobileMenu()

  return (
    <>
      <header className={cn('site-header', scrolled && 'is-scrolled')}>
        <a className="logo" href="#top" onClick={close}>
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

        <nav className="nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact">
            Talk to us
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={toggle}
        >
          <span />
          <span />
        </button>
      </header>

      <nav
        className={cn('mobile-nav', open && 'is-open')}
        aria-label="Mobile"
        aria-hidden={!open}
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
        <a href="#contact" onClick={close}>
          Talk to us
        </a>
      </nav>
    </>
  )
}
