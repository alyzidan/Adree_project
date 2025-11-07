// src/components/ErrorFallback.tsx
import React from 'react'

type Props = {
  error: Error
  resetErrorBoundary: () => void
}

export default function ErrorFallback({ error, resetErrorBoundary }: Props) {
  return (
    <div role="alert" style={{ padding: 16 }}>
      <h2>حدث خطأ غير متوقع</h2>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>حاول مرة تانية</button>
    </div>
  )
}
