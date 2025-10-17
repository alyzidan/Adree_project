export function LoadingFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="size-12 animate-spin rounded-full border-4 border-primary-200 border-t-primary-600" />
        <p className="mt-4 text-neutral-600">Loading...</p>
      </div>
    </div>
  )
}
