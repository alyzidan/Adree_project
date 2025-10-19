import { useState, useCallback } from 'react'
import { useTasksStore } from '../store'

export function useTaskFilters() {
  const { filters, setFilters, resetFilters } = useTasksStore()
  const [searchQuery, setSearchQuery] = useState(filters.search || '')

  // Debounced search with useCallback
  const handleSearch = useCallback(
    (query: string) => {
      setSearchQuery(query)

      // Clear existing timeout
      const timeoutId = setTimeout(() => {
        setFilters({ search: query || undefined })
      }, 300)

      return () => clearTimeout(timeoutId)
    },
    [setFilters]
  )

  const handleFilterChange = useCallback(
    (key: keyof typeof filters, value: string | undefined) => {
      setFilters({ [key]: value })
    },
    [setFilters]
  )

  const handleReset = useCallback(() => {
    setSearchQuery('')
    resetFilters()
  }, [resetFilters])

  return {
    filters,
    searchQuery,
    handleSearch,
    handleFilterChange,
    handleReset,
  }
}
