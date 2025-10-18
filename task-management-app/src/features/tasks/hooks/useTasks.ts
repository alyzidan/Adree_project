import { useEffect } from 'react'
import { useTasksStore } from '../store'

export function useTasks() {
  const {
    tasks,
    total,
    pagination,
    totalPages,
    filters,
    sort,
    isLoading,
    error,
    fetchTasks,
    setFilters,
    setSort,
    setPagination,
    resetFilters,
    clearError,
  } = useTasksStore()

  // Fetch tasks on mount
  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  return {
    tasks,
    total,
    pagination,
    totalPages,
    filters,
    sort,
    isLoading,
    error,
    fetchTasks,
    setFilters,
    setSort,
    setPagination,
    resetFilters,
    clearError,
  }
}
