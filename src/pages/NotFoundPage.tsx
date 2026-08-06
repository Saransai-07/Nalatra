import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/Button'
import { MainLayout } from '@/components/layout/MainLayout'

export function NotFoundPage() {
  return (
    <MainLayout>
      <Seo title="Page not found" description="The page you requested could not be found." path="/404" />
      <main className="error-screen">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist or has moved.</p>
        <Button href="/">Back to home</Button>
      </main>
    </MainLayout>
  )
}
