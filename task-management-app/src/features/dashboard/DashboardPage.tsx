import Container from '@/components/layout/Container'

function DashboardPage() {
  return (
    <Container>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Dashboard</h1>
          <p className="mt-2 text-neutral-600">
            Overview of your tasks and metrics
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Placeholder cards */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="h-4 w-20 animate-pulse rounded bg-neutral-200"></div>
              <div className="mt-4 h-8 w-16 animate-pulse rounded bg-neutral-200"></div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default DashboardPage
