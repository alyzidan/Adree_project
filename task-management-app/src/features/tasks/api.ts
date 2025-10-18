import { apiClient } from '@/lib/api'
import {
  Task,
  CreateTaskInput,
  UpdateTaskInput,
  TaskFilters,
  TaskSortConfig,
  PaginationConfig,
  TasksResponse,
} from './types'

export const tasksApi = {
  // Get all tasks
  async getTasks(
    filters?: TaskFilters,
    sort?: TaskSortConfig,
    pagination?: PaginationConfig
  ): Promise<TasksResponse> {
    const params: Record<string, string> = {}

    if (filters) {
      if (filters.status) params.status = filters.status
      if (filters.category) params.category = filters.category
      if (filters.priority) params.priority = filters.priority
      if (filters.assignee) params.assignee = filters.assignee
      if (filters.search) params.search = filters.search
    }

    if (sort) {
      params.sortBy = sort.field
      params.sortOrder = sort.order
    }

    if (pagination) {
      params.page = pagination.page.toString()
      params.pageSize = pagination.pageSize.toString()
    }

    return apiClient.get<TasksResponse>('/tasks', params)
  },

  // Get single task
  async getTask(id: string): Promise<Task> {
    return apiClient.get<Task>(`/tasks/${id}`)
  },

  // Create task
  async createTask(input: CreateTaskInput): Promise<Task> {
    return apiClient.post<Task>('/tasks', input)
  },

  // Update task
  async updateTask(id: string, input: Partial<UpdateTaskInput>): Promise<Task> {
    return apiClient.put<Task>(`/tasks/${id}`, input)
  },

  // Delete task
  async deleteTask(id: string): Promise<void> {
    return apiClient.delete<void>(`/tasks/${id}`)
  },
}
