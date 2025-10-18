import { useState } from 'react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/button/Button'
import { Plus, SlidersHorizontal } from 'lucide-react'
import TaskList from './components/TaskList'
import TaskFilters from './components/TaskFilters'
import TaskSearch from './components/TaskSearch'
import TaskSort from './components/TaskSort'
import TaskModal from './components/TaskModal'
import { Toaster } from '@/components/ui/toast/Toaster'
import { useTasks } from './hooks'
import Badge from '@/components/ui/badge/Badge'

function TasksPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const { total, filters } = useTasks()

  const hasActiveFilters =
    filters.status !== 'all' ||
    filters.category !== 'all' ||
    filters.priority !== 'all' ||
    filters.search

  return (
    <>
      <Container>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold text-neutral-900">Tasks</h1>
                <Badge variant="primary">{total}</Badge>
              </div>
              <p className="mt-2 text-neutral-600">
                Manage and track your tasks efficiently
              </p>
            </div>
            <Button
              leftIcon={<Plus className="h-4 w-4" />}
              onClick={() => setIsCreateModalOpen(true)}
            >
              <span className="hidden sm:inline">Add Task</span>
              <span className="sm:hidden">Add</span>
            </Button>
          </div>

          {/* Search Bar */}
          <TaskSearch />

          {/* Filters Toggle (Mobile) */}
          <div className="flex items-center justify-between lg:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              leftIcon={<SlidersHorizontal className="h-4 w-4" />}
            >
              Filters {hasActiveFilters && '(Active)'}
            </Button>
            <TaskSort />
          </div>

          {/* Filters (Desktop) & Sort */}
          <div className="hidden items-center justify-between lg:flex">
            <TaskFilters />
            <TaskSort />
          </div>

          {/* Filters (Mobile - Collapsible) */}
          {showFilters && (
            <div className="lg:hidden">
              <TaskFilters />
            </div>
          )}

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
