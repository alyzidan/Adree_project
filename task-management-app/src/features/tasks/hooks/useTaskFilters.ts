import { useState, useMemo } from 'react'
import { useTasksStore } from '../store'

export function useTaskFilters() {
  const { filters, setFilters, resetFilters } = useTasksStore()
  const [searchQuery, setSearchQuery] = useState(filters.search || '')

  // Debounced search
  const handleSearch = useMemo(() => {
    let timeoutId: NodeJS.Timeout

    return (query: string) => {
      setSearchQuery(query)
      clearTimeout(timeoutId)

      timeoutId = setTimeout(() => {
        setFilters({ search: query || undefined })
      }, 300) // 300ms debounce
    }
  }, [setFilters])

  const handleFilterChange = (
    key: keyof typeof filters,
    value: string | undefined
  ) => {
    setFilters({ [key]: value })
  }

  const handleReset = () => {
    setSearchQuery('')
    resetFilters()
  }

  return {
    filters,
    searchQuery,
    handleSearch,
    handleFilterChange,
    handleReset,
  }
}
