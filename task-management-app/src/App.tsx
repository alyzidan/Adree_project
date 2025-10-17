import { Suspense } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { routes } from '@/routes'

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary-200 border-t-primary-600"></div>
        <p className="mt-4 text-neutral-600">Loading...</p>
      </div>
    </div>
  )
}

// Routes wrapper
function AppRoutes() {
  return useRoutes(routes)
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
