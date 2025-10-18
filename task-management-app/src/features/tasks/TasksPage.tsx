import { useState } from 'react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/button/Button'
import { Plus } from 'lucide-react'
import TaskList from './components/TaskList'
import TaskFilters from './components/TaskFilters'
import TaskSort from './components/TaskSort'
import TaskSearch from './components/TaskSearch'
import TaskModal from './components/TaskModal'
import { Toaster } from '@/components/ui/toast/Toaster'

function TasksPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  return (
    <>
      <Container>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-neutral-900">Tasks</h1>
              <p className="mt-2 text-neutral-600">
                Manage and track your tasks efficiently
              </p>
            </div>
            <Button
              leftIcon={<Plus className="h-4 w-4" />}
              onClick={() => setIsCreateModalOpen(true)}
            >
              Add Task
            </Button>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <TaskSearch />
              </div>
              <TaskFilters />
            </div>

            {/* Sorting */}
            <div className="flex justify-end">
              <TaskSort />
            </div>
          </div>

          {/* Tasks List */}
          <TaskList />
        </div>
      </Container>

      {/* Create Task Modal */}
      <TaskModal
        open={isCreateModalOpen}
        onOpenChange={setIsCreateModalOpen}
        mode="create"
      />

      {/* Toast Notifications */}
      <Toaster />
    </>
  )
}

export default TasksPage
