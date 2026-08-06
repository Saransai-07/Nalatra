import { HelmetProvider } from 'react-helmet-async'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { AppRouter } from '@/app/AppRouter'

export default function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </HelmetProvider>
  )
}
