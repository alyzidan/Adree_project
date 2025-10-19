import { http, HttpResponse, delay } from 'msw'
import { mockTasks } from './data'
import {
  Task,
  CreateTaskInput,
  UpdateTaskInput,
  TaskFilters,
  TasksResponse,
} from '@/features/tasks/types'

const tasks: Task[] = [...mockTasks]

const NETWORK_DELAY = 500

function generateId(): string {
  return `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

function filterTasks(filters: TaskFilters): Task[] {
  let filtered = [...tasks]

  if (filters.status && filters.status !== 'all') {
    filtered = filtered.filter((task) => task.status === filters.status)
  }

  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter((task) => task.category === filters.category)
  }

  if (filters.priority && filters.priority !== 'all') {
    filtered = filtered.filter((task) => task.priority === filters.priority)
  }

  if (filters.assignee) {
    filtered = filtered.filter((task) => task.assignee === filters.assignee)
  }

  if (filters.search) {
    const searchLower = filters.search.toLowerCase()
    filtered = filtered.filter(
      (task) =>
        task.title.toLowerCase().includes(searchLower) ||
        task.description?.toLowerCase().includes(searchLower)
    )
  }

  return filtered
}

// API Handlers
export const handlers = [
  http.get('/api/tasks', async ({ request }) => {
    await delay(NETWORK_DELAY)

    const url = new URL(request.url)
    const page = parseInt(url.searchParams.get('page') || '1')
    const pageSize = parseInt(url.searchParams.get('pageSize') || '10')
    const status = url.searchParams.get('status') || undefined
    const category = url.searchParams.get('category') || undefined
    const priority = url.searchParams.get('priority') || undefined
    const assignee = url.searchParams.get('assignee') || undefined
    const search = url.searchParams.get('search') || undefined
    const sortBy = url.searchParams.get('sortBy') || 'createdAt'
    const sortOrder = url.searchParams.get('sortOrder') || 'desc'

    // Apply filters
    const filtered = filterTasks({
      status: status as TaskFilters['status'],
      category: category as TaskFilters['category'],
      priority: priority as TaskFilters['priority'],
      assignee,
      search,
    })

    filtered.sort((a, b) => {
      const aValue = a[sortBy as keyof Task]
      const bValue = b[sortBy as keyof Task]

      if (aValue === undefined || bValue === undefined) return 0

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

    // Apply pagination
    const total = filtered.length
    const totalPages = Math.ceil(total / pageSize)
    const startIndex = (page - 1) * pageSize
    const endIndex = startIndex + pageSize
    const paginatedTasks = filtered.slice(startIndex, endIndex)

    const response: TasksResponse = {
      tasks: paginatedTasks,
      total,
      page,
      pageSize,
      totalPages,
    }

    return HttpResponse.json(response)
  }),

  // GET /api/tasks/:id - Get single task
  http.get('/api/tasks/:id', async ({ params }) => {
    await delay(NETWORK_DELAY)

    const { id } = params
    const task = tasks.find((t) => t.id === id)

    if (!task) {
      return new HttpResponse(null, {
        status: 404,
        statusText: 'Task not found',
      })
    }

    return HttpResponse.json(task)
  }),

  // POST /api/tasks - Create new task
  http.post('/api/tasks', async ({ request }) => {
    await delay(NETWORK_DELAY)

    const input = (await request.json()) as CreateTaskInput
    const now = new Date().toISOString()

    const newTask: Task = {
      id: generateId(),
      ...input,
      createdAt: now,
      updatedAt: now,
    }

    tasks.unshift(newTask)

    return HttpResponse.json(newTask, { status: 201 })
  }),

  // PUT /api/tasks/:id - Update task
  http.put('/api/tasks/:id', async ({ params, request }) => {
    await delay(NETWORK_DELAY)

    const { id } = params
    const updates = (await request.json()) as Partial<UpdateTaskInput>

    const taskIndex = tasks.findIndex((t) => t.id === id)

    if (taskIndex === -1) {
      return new HttpResponse(null, {
        status: 404,
        statusText: 'Task not found',
      })
    }

    const updatedTask: Task = {
      ...tasks[taskIndex],
      ...updates,
      updatedAt: new Date().toISOString(),
    }

    tasks[taskIndex] = updatedTask

    return HttpResponse.json(updatedTask)
  }),

  // DELETE /api/tasks/:id - Delete task
  http.delete('/api/tasks/:id', async ({ params }) => {
    await delay(NETWORK_DELAY)

    const { id } = params
    const taskIndex = tasks.findIndex((t) => t.id === id)

    if (taskIndex === -1) {
      return new HttpResponse(null, {
        status: 404,
        statusText: 'Task not found',
      })
    }

    tasks.splice(taskIndex, 1)

    return new HttpResponse(null, { status: 204 })
  }),
]
