import { useCallback, useEffect, useState } from 'react'

export function useMobileMenu() {
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])
  const toggle = useCallback(() => setOpen((value) => !value), [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [close])

  return { open, close, toggle }
}
