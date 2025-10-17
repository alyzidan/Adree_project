import Container from '@/components/layout/Container'

function TasksPage() {
  return (
    <Container>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">Tasks</h1>
            <p className="mt-2 text-neutral-600">
              Manage your tasks efficiently
            </p>
          </div>
          <button className="rounded-lg bg-primary-600 px-4 py-2 font-medium text-white transition-colors hover:bg-primary-700">
            Add Task
          </button>
        </div>

        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <p className="text-center text-neutral-500">
            Task list coming soon...
          </p>
        </div>
      </div>
    </Container>
  )
}

export default TasksPage
