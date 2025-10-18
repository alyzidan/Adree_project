import {
  Task,
  TaskStatus,
  TaskCategory,
  TaskPriority,
} from '@/features/tasks/types'

// Generate mock task
export function createMockTask(overrides?: Partial<Task>): Task {
  const now = new Date().toISOString()

  return {
    id: 'test-task-1',
    title: 'Test Task',
    description: 'Test description',
    status: 'todo' as TaskStatus,
    category: 'development' as TaskCategory,
    priority: 'medium' as TaskPriority,
    estimatedHours: 5,
    createdAt: now,
    updatedAt: now,
    ...overrides,
  }
}

// Generate multiple mock tasks
export function createMockTasks(count: number): Task[] {
  return Array.from({ length: count }, (_, i) =>
    createMockTask({
      id: `test-task-${i + 1}`,
      title: `Test Task ${i + 1}`,
    })
  )
}

// Wait for async operations
export const waitFor = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))
