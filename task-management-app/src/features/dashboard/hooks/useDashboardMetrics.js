import { useEffect, useState } from 'react';
import { tasksApi } from '@/features/tasks/api';
import { calculateMetrics, getTasksByCategory, getTasksByStatus, getRecentTasks, } from '../utils';
export function useDashboardMetrics() {
    const [tasks, setTasks] = useState([]);
    const [metrics, setMetrics] = useState(null);
    const [categoryData, setCategoryData] = useState([]);
    const [statusData, setStatusData] = useState([]);
    const [recentTasks, setRecentTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function fetchDashboardData() {
            setIsLoading(true);
            setError(null);
            try {
                // Fetch all tasks for dashboard (no pagination)
                const response = await tasksApi.getTasks({}, { field: 'createdAt', order: 'desc' }, { page: 1, pageSize: 1000 });
                const allTasks = response.tasks;
                setTasks(allTasks);
                setMetrics(calculateMetrics(allTasks));
                setCategoryData(getTasksByCategory(allTasks));
                setStatusData(getTasksByStatus(allTasks));
                setRecentTasks(getRecentTasks(allTasks, 5));
            }
            catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load data');
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchDashboardData();
    }, []);
    return {
        tasks,
        metrics,
        categoryData,
        statusData,
        recentTasks,
        isLoading,
        error,
    };
}
