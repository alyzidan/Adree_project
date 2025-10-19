import { Task, TaskCategory, TaskStatus } from '@/features/tasks/types'
import { TASK_STATUS } from '@/lib/constants'

export interface DashboardMetrics {
  totalTasks: number
  openTasks: number
  completedTasks: number
  cancelledTasks: number
  averageEstimatedHours: number
  overdueTasks: number
  completionRate: number
}

export interface CategoryData {
  category: TaskCategory
  count: number
}

export interface StatusData {
  status: TaskStatus
  count: number
}

export function calculateMetrics(tasks: Task[]): DashboardMetrics {
  const now = new Date()

  const totalTasks = tasks.length
  const openTasks = tasks.filter(
    (t) => t.status === TASK_STATUS.TODO || t.status === TASK_STATUS.IN_PROGRESS
  ).length
  const completedTasks = tasks.filter(
    (t) => t.status === TASK_STATUS.COMPLETED
  ).length
  const cancelledTasks = tasks.filter(
    (t) => t.status === TASK_STATUS.CANCELLED
  ).length

  const totalHours = tasks.reduce((sum, task) => sum + task.estimatedHours, 0)
  const averageEstimatedHours =
    totalTasks > 0 ? Math.round((totalHours / totalTasks) * 10) / 10 : 0

  const overdueTasks = tasks.filter((task) => {
    if (!task.dueDate) return false
    if (task.status === TASK_STATUS.COMPLETED) return false
    return new Date(task.dueDate) < now
  }).length

  const completionRate =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  return {
    totalTasks,
    openTasks,
    completedTasks,
    cancelledTasks,
    averageEstimatedHours,
    overdueTasks,
    completionRate,
  }
}

export function getTasksByCategory(tasks: Task[]): CategoryData[] {
  const categoryMap = new Map<TaskCategory, number>()

  tasks.forEach((task) => {
    const count = categoryMap.get(task.category) || 0
    categoryMap.set(task.category, count + 1)
  })

  return Array.from(categoryMap.entries())
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count)
}

export function getTasksByStatus(tasks: Task[]): StatusData[] {
  const statusMap = new Map<TaskStatus, number>()

  tasks.forEach((task) => {
    const count = statusMap.get(task.status) || 0
    statusMap.set(task.status, count + 1)
  })

  return Array.from(statusMap.entries())
    .map(([status, count]) => ({ status, count }))
    .sort((a, b) => b.count - a.count)
}

export function getRecentTasks(tasks: Task[], limit: number = 5): Task[] {
  return [...tasks]
    .sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    )
    .slice(0, limit)
}
