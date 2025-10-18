import { TASK_STATUS, TASK_CATEGORY, TASK_PRIORITY } from '@/lib/constants'

export type TaskStatus = (typeof TASK_STATUS)[keyof typeof TASK_STATUS]
export type TaskCategory = (typeof TASK_CATEGORY)[keyof typeof TASK_CATEGORY]
export type TaskPriority = (typeof TASK_PRIORITY)[keyof typeof TASK_PRIORITY]

export interface Task {
  id: string
  title: string
  description?: string
  status: TaskStatus
  category: TaskCategory
  priority: TaskPriority
  assignee?: string
  dueDate?: string
  estimatedHours: number
  createdAt: string
  updatedAt: string
}

export interface CreateTaskInput {
  title: string
  description?: string
  status: TaskStatus
  category: TaskCategory
  priority: TaskPriority
  assignee?: string
  dueDate?: string
  estimatedHours: number
}

export interface UpdateTaskInput {
  id: string
  title?: string
  description?: string
  status?: TaskStatus
  category?: TaskCategory
  priority?: TaskPriority
  assignee?: string
  dueDate?: string
  estimatedHours?: number
}

export interface TaskFilters {
  status?: TaskStatus | 'all'
  category?: TaskCategory | 'all'
  priority?: TaskPriority | 'all'
  assignee?: string
  search?: string
}

export interface TaskSortConfig {
  field: keyof Task
  order: 'asc' | 'desc'
}

export interface PaginationConfig {
  page: number
  pageSize: number
}

export interface TasksResponse {
  tasks: Task[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}
