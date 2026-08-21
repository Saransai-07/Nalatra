import { navLinks, siteConfig } from '@/data/content'
import { useMobileMenu } from '@/hooks/useMobileMenu'
import { cn } from '@/lib/utils'

export function Header() {
  const { open, toggle, close } = useMobileMenu()

  return (
    <>
    <header className={cn('site-header')}>
        <a className="logo" href="#top" onClick={close}>
          <img
            className="logo-mark"
            src="/nalatra2.svg"
            alt=""
            width={34}
            height={34}
          />
          <span className="logo-text">
            <span>{siteConfig.name}</span>
            <span className="logo-sub">Technologies</span>
          </span>
        </a>

        <nav className="nav nav-pill" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="book-call-btn" href="#contact">
          <span>Book a call</span>
        </a>

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
        <a className="mobile-book-call" href="#contact" onClick={close}>
          Book a call
        </a>
      </nav>
    </>
  )
}
