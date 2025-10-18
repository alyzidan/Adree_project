import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { FileText, Trash2, AlertTriangle } from 'lucide-react'
import LoadingSpinner from './LoadingSpinner'
import EmptyState from './EmptyState'
import ErrorBoundary from './ErrorBoundary'
import ConfirmDialog from './ConfirmDialog'
import Button from '@/components/ui/button/Button'

const meta = {
  title: 'Shared/Components',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta

export default meta

export const Loading: StoryObj = {
  render: () => (
    <div className="flex flex-col items-center gap-8">
      <div className="flex items-center gap-4">
        <LoadingSpinner size="sm" />
        <LoadingSpinner size="md" />
        <LoadingSpinner size="lg" />
      </div>
      <div className="text-center">
        <LoadingSpinner className="mx-auto mb-2" />
        <p className="text-sm text-neutral-600">Loading tasks...</p>
      </div>
    </div>
  ),
}

export const Empty: StoryObj = {
  render: () => (
    <div className="w-[600px]">
      <EmptyState
        icon={<FileText className="h-12 w-12" />}
        title="No tasks yet"
        description="Get started by creating your first task."
        action={<Button>Create Task</Button>}
      />
    </div>
  ),
}

export const Error: StoryObj = {
  render: () => {
    const ThrowError = () => {
      throw new Error('This is a test error!')
    }

    return (
      <div className="w-[600px]">
        <ErrorBoundary>
          <Button onClick={() => <ThrowError />}>Trigger Error</Button>
        </ErrorBoundary>
      </div>
    )
  },
}

export const Confirm: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleConfirm = () => {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        setOpen(false)
        alert('Confirmed!')
      }, 2000)
    }

    return (
      <>
        <Button variant="destructive" onClick={() => setOpen(true)}>
          Delete Task
        </Button>
        <ConfirmDialog
          open={open}
          onOpenChange={setOpen}
          title="Delete Task?"
          description="This action cannot be undone. This will permanently delete the task."
          confirmText="Delete"
          cancelText="Cancel"
          variant="destructive"
          icon={<Trash2 className="h-12 w-12" />}
          onConfirm={handleConfirm}
          isLoading={isLoading}
        />
      </>
    )
  },
}
