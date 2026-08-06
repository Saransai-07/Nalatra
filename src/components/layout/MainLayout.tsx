import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import type { ReactNode } from 'react'

type MainLayoutProps = {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <Header />
      {children}
      <Footer />
    </>
  )
}
