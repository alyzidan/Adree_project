import { useTasksStore } from '@/features/tasks/store'
import { tasksApi } from '@/features/tasks/api'
import { TASK_STATUS, TASK_CATEGORY, TASK_PRIORITY } from './constants'

export const devTools = {
  store: useTasksStore,

  getState: () => useTasksStore.getState(),

  api: tasksApi,

  async fetchTasks() {
    console.log('🔄 Fetching tasks...')
    await useTasksStore.getState().fetchTasks()
    console.log('✅ Tasks fetched:', useTasksStore.getState().tasks.length)
    return useTasksStore.getState().tasks
  },

  async createTestTask() {
    console.log('🔄 Creating test task...')
    const task = await useTasksStore.getState().createTask({
      title: 'Test Task - ' + new Date().toLocaleTimeString(),
      description: 'This is a test task created from devTools',
      status: TASK_STATUS.TODO,
      category: TASK_CATEGORY.DEVELOPMENT,
      priority: TASK_PRIORITY.MEDIUM,
      estimatedHours: 5,
    })
    console.log('✅ Task created:', task)
    return task
  },

  async updateTestTask(id: string) {
    console.log('🔄 Updating task:', id)
    const task = await useTasksStore.getState().updateTask(id, {
      status: TASK_STATUS.COMPLETED,
    })
    console.log('✅ Task updated:', task)
    return task
  },

  async deleteTestTask(id: string) {
    console.log('🔄 Deleting task:', id)
    await useTasksStore.getState().deleteTask(id)
    console.log('✅ Task deleted')
  },

  setFilter(key: string, value: string) {
    console.log(`🔄 Setting filter: ${key} = ${value}`)
    useTasksStore.getState().setFilters({ [key]: value })
  },

  resetFilters() {
    console.log('🔄 Resetting filters...')
    useTasksStore.getState().resetFilters()
  },

  logState() {
    const state = useTasksStore.getState()
    console.log('📊 Current State:', {
      tasks: state.tasks.length,
      total: state.total,
      filters: state.filters,
      pagination: state.pagination,
      isLoading: state.isLoading,
      error: state.error,
    })
    return state
  },

  logTasks() {
    console.table(
      useTasksStore.getState().tasks.map((t) => ({
        id: t.id,
        title: t.title,
        status: t.status,
        category: t.category,
        priority: t.priority,
      }))
    )
  },

  checkMSW() {
    if ('worker' in window) {
      console.log(' MSW is running')
      return true
    } else {
      console.log(' MSW is not running')
      return false
    }
  },
}

if (process.env.NODE_ENV === 'development') {
  ;(window as any).devTools = devTools
  console.log(
    '%c🛠️ DevTools Available',
    'background: #0ea5e9; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;'
  )
  console.log('Try: devTools.fetchTasks()')
  console.log('Try: devTools.createTestTask()')
  console.log('Try: devTools.logState()')
  console.log('Try: devTools.logTasks()')
}
