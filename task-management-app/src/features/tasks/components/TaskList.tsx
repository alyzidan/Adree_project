import { useTasks } from '../hooks'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import EmptyState from '@/components/shared/EmptyState'
import { FileText } from 'lucide-react'
import TaskTable from './TaskTable'
import TaskCards from './TaskCards'
import TaskPagination from './TaskPagination'

function TaskList() {
  const { tasks, isLoading, error, total } = useTasks()

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-lg border-2 border-danger-200 bg-danger-50 p-8 text-center">
        <p className="text-danger-900">Error: {error}</p>
      </div>
    )
  }

  if (tasks.length === 0) {
    return (
      <EmptyState
        icon={<FileText className="h-12 w-12" />}
        title="No tasks found"
        description="Try adjusting your filters or create a new task to get started."
      />
    )
  }

  return (
    <div className="space-y-4">
      {/* Desktop Table View */}
      <div className="hidden md:block">
        <TaskTable tasks={tasks} />
      </div>

      {/* Mobile Cards View */}
      <div className="md:hidden">
        <TaskCards tasks={tasks} />
      </div>

      {/* Pagination */}
      {total > 0 && <TaskPagination />}
    </div>
  )
}

export default TaskList
