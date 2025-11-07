// components/errors/DashboardErrorBoundary.tsx
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { ReactNode } from 'react'

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="max-w-md rounded-lg bg-red-50 p-6 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
          <svg
            className="h-6 w-6 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <h3 className="mb-2 text-lg font-semibold text-red-900">
          حدث خطأ في لوحة التحكم
        </h3>

        <p className="mb-4 text-sm text-red-700">
          {error.message || 'حدث خطأ غير متوقع'}
        </p>

        <button
          onClick={resetErrorBoundary}
          className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          إعادة المحاولة
        </button>
      </div>
    </div>
  )
}

interface DashboardErrorBoundaryProps {
  children: ReactNode
}

export function DashboardErrorBoundary({
  children,
}: DashboardErrorBoundaryProps) {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error('Dashboard Error:', error, errorInfo)
  }

  const handleReset = () => {
    window.location.reload()
  }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={handleError}
      onReset={handleReset}
    >
      {children}
    </ErrorBoundary>
  )
}
