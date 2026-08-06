import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Button } from '@/components/ui/Button'

type Props = { children: ReactNode }
type State = { hasError: boolean }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Uncaught application error:', error, info)
  }

  private handleReload = () => {
    window.location.assign('/')
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="error-screen">
          <h1>Something went wrong</h1>
          <p>Please refresh the page or return home.</p>
          <Button onClick={this.handleReload}>Go home</Button>
        </main>
      )
    }

    return this.props.children
  }
}
