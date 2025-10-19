import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import {
  Task,
  CreateTaskInput,
  UpdateTaskInput,
  TaskFilters,
  TaskSortConfig,
  PaginationConfig,
} from './types'
import { tasksApi } from './api'

interface TasksState {
  // Data
  tasks: Task[]
  selectedTask: Task | null
  total: number

  // Pagination
  pagination: PaginationConfig
  totalPages: number

  // Filters & Sort
  filters: TaskFilters
  sort: TaskSortConfig

  // Loading states
  isLoading: boolean
  isCreating: boolean
  isUpdating: boolean
  isDeleting: boolean

  // Error state
  error: string | null

  // Actions
  fetchTasks: () => Promise<void>
  fetchTask: (id: string) => Promise<void>
  createTask: (input: CreateTaskInput) => Promise<Task>
  updateTask: (id: string, input: Partial<UpdateTaskInput>) => Promise<Task>
  deleteTask: (id: string) => Promise<void>
  setFilters: (filters: Partial<TaskFilters>) => void
  setSort: (sort: TaskSortConfig) => void
  setPagination: (pagination: Partial<PaginationConfig>) => void
  resetFilters: () => void
  clearError: () => void
}

const initialFilters: TaskFilters = {
  status: 'all',
  category: 'all',
  priority: 'all',
}

const initialSort: TaskSortConfig = {
  field: 'createdAt',
  order: 'desc',
}

const initialPagination: PaginationConfig = {
  page: 1,
  pageSize: 10,
}

export const useTasksStore = create<TasksState>()(
  devtools(
    (set, get) => ({
      // Initial state
      tasks: [],
      selectedTask: null,
      total: 0,
      pagination: initialPagination,
      totalPages: 0,
      filters: initialFilters,
      sort: initialSort,
      isLoading: false,
      isCreating: false,
      isUpdating: false,
      isDeleting: false,
      error: null,

      // Fetch all tasks
      fetchTasks: async () => {
        const state = get()

        // Prevent duplicate requests
        if (state.isLoading) {
          console.log('⏸️ Already loading, skipping duplicate request')
          return
        }

        set({ isLoading: true, error: null })

        try {
          const { filters, sort, pagination } = get()
          console.log('Fetching tasks with:', { filters, sort, pagination })

          const response = await tasksApi.getTasks(filters, sort, pagination)

          console.log('Tasks fetched:', response.tasks.length)

          set({
            tasks: response.tasks,
            total: response.total,
            totalPages: response.totalPages,
            isLoading: false,
          })
        } catch (error) {
          console.error(' Fetch error:', error)
          set({
            error:
              error instanceof Error ? error.message : 'Failed to fetch tasks',
            isLoading: false,
          })
        }
      },

      // Fetch single task
      fetchTask: async (id: string) => {
        set({ isLoading: true, error: null })
        try {
          const task = await tasksApi.getTask(id)
          set({ selectedTask: task, isLoading: false })
        } catch (error) {
          set({
            error:
              error instanceof Error ? error.message : 'Failed to fetch task',
            isLoading: false,
          })
        }
      },

      // Create task
      createTask: async (input: CreateTaskInput) => {
        set({ isCreating: true, error: null })
        try {
          const newTask = await tasksApi.createTask(input)

          set({ isCreating: false })

          // Refresh to sync with server
          await get().fetchTasks()

          return newTask
        } catch (error) {
          set({
            error:
              error instanceof Error ? error.message : 'Failed to create task',
            isCreating: false,
          })
          throw error
        }
      },

      // Update task
      updateTask: async (id: string, input: Partial<UpdateTaskInput>) => {
        set({ isUpdating: true, error: null })
        try {
          const updatedTask = await tasksApi.updateTask(id, input)

          set({ isUpdating: false })

          // Refresh to sync with server
          await get().fetchTasks()

          return updatedTask
        } catch (error) {
          set({
            error:
              error instanceof Error ? error.message : 'Failed to update task',
            isUpdating: false,
          })
          throw error
        }
      },

      // Delete task
      deleteTask: async (id: string) => {
        set({ isDeleting: true, error: null })
        try {
          await tasksApi.deleteTask(id)

          set({ isDeleting: false })

          // Refresh to sync with server
          await get().fetchTasks()
        } catch (error) {
          set({
            error:
              error instanceof Error ? error.message : 'Failed to delete task',
            isDeleting: false,
          })
          throw error
        }
      },

      // Set filters
      setFilters: (newFilters: Partial<TaskFilters>) => {
        set((state) => ({
          filters: { ...state.filters, ...newFilters },
          pagination: { ...state.pagination, page: 1 },
        }))

        // Debounce the fetch slightly
        setTimeout(() => {
          get().fetchTasks()
        }, 100)
      },

      // Set sort
      setSort: (sort: TaskSortConfig) => {
        set({ sort })

        setTimeout(() => {
          get().fetchTasks()
        }, 100)
      },

      // Set pagination
      setPagination: (newPagination: Partial<PaginationConfig>) => {
        set((state) => ({
          pagination: { ...state.pagination, ...newPagination },
        }))

        setTimeout(() => {
          get().fetchTasks()
        }, 100)
      },

      // Reset filters
      resetFilters: () => {
        set({
          filters: initialFilters,
          pagination: initialPagination,
        })

        setTimeout(() => {
          get().fetchTasks()
        }, 100)
      },

      // Clear error
      clearError: () => {
        set({ error: null })
      },
    }),
    {
      name: 'tasks-store',
      enabled: true,
    }
  )
)

if (process.env.NODE_ENV === 'development') {
  (window as any).tasksStore = useTasksStore
}
