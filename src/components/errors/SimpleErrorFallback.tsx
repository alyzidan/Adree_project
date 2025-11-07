// components/errors/SimpleErrorFallback.tsx
interface SimpleErrorFallbackProps {
  message?: string
}

export function SimpleErrorFallback({
  message = 'فشل تحميل هذا القسم',
}: SimpleErrorFallbackProps) {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-4">
      <div className="flex items-center gap-2">
        <svg
          className="h-5 w-5 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-sm font-medium text-red-800">{message}</p>
      </div>
    </div>
  )
}
