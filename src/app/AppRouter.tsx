import { useSyncExternalStore } from 'react'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'

function subscribe(onStoreChange: () => void) {
  window.addEventListener('popstate', onStoreChange)
  return () => window.removeEventListener('popstate', onStoreChange)
}

function getPathname() {
  return window.location.pathname
}

function getServerPathname() {
  return '/'
}

export function AppRouter() {
  const pathname = useSyncExternalStore(subscribe, getPathname, getServerPathname)
  const normalized = pathname.replace(/\/+$/, '') || '/'

  if (normalized === '/') {
    return <HomePage />
  }

  return <NotFoundPage />
}
