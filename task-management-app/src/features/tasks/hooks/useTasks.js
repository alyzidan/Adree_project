import { useEffect, useRef } from 'react';
import { useTasksStore } from '../store';
export function useTasks() {
    const { tasks, total, pagination, totalPages, filters, sort, isLoading, error, fetchTasks, setFilters, setSort, setPagination, resetFilters, clearError, } = useTasksStore();
    const hasFetched = useRef(false);
    // Fetch tasks only once on mount
    useEffect(() => {
        if (!hasFetched.current) {
            hasFetched.current = true;
            fetchTasks();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
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
        refetch: fetchTasks,
    };
}
