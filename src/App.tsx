import { Suspense } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { routes } from '@/routes'
import { LoadingFallback } from './components/shared/LoadingFallback'
import PageLayout from '@/components/layout/PageLayout'
import { Toaster } from '@/components/ui/toast'

// Routes wrapper
const AppRoutes: React.FC = () => useRoutes(routes)

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Suspense fallback={<LoadingFallback />}>
          <AppRoutes />
        </Suspense>
      </PageLayout>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
