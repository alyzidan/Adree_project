import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { tasksApi } from './api';
const initialFilters = {
    status: 'all',
    category: 'all',
    priority: 'all',
};
const initialSort = {
    field: 'createdAt',
    order: 'desc',
};
const initialPagination = {
    page: 1,
    pageSize: 10,
};
export const useTasksStore = create()(devtools((set, get) => ({
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
        const state = get();
        // Prevent duplicate requests
        if (state.isLoading) {
            console.log('⏸Already loading, skipping duplicate request');
            return;
        }
        set({ isLoading: true, error: null });
        try {
            const { filters, sort, pagination } = get();
            console.log('Fetching tasks with:', { filters, sort, pagination });
            const response = await tasksApi.getTasks(filters, sort, pagination);
            console.log('Tasks fetched:', response.tasks.length);
            set({
                tasks: response.tasks,
                total: response.total,
                totalPages: response.totalPages,
                isLoading: false,
            });
        }
        catch (error) {
            console.error(' Fetch error:', error);
            set({
                error: error instanceof Error ? error.message : 'Failed to fetch tasks',
                isLoading: false,
            });
        }
    },
    // Fetch single task
    fetchTask: async (id) => {
        set({ isLoading: true, error: null });
        try {
            const task = await tasksApi.getTask(id);
            set({ selectedTask: task, isLoading: false });
        }
        catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Failed to fetch task',
                isLoading: false,
            });
        }
    },
    // Create task
    createTask: async (input) => {
        set({ isCreating: true, error: null });
        try {
            const newTask = await tasksApi.createTask(input);
            set({ isCreating: false });
            // Refresh to sync with server
            await get().fetchTasks();
            return newTask;
        }
        catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Failed to create task',
                isCreating: false,
            });
            throw error;
        }
    },
    // Update task
    updateTask: async (id, input) => {
        set({ isUpdating: true, error: null });
        try {
            const updatedTask = await tasksApi.updateTask(id, input);
            set({ isUpdating: false });
            // Refresh to sync with server
            await get().fetchTasks();
            return updatedTask;
        }
        catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Failed to update task',
                isUpdating: false,
            });
            throw error;
        }
    },
    // Delete task
    deleteTask: async (id) => {
        set({ isDeleting: true, error: null });
        try {
            await tasksApi.deleteTask(id);
            set({ isDeleting: false });
            // Refresh to sync with server
            await get().fetchTasks();
        }
        catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Failed to delete task',
                isDeleting: false,
            });
            throw error;
        }
    },
    // Set filters
    setFilters: (newFilters) => {
        set((state) => ({
            filters: { ...state.filters, ...newFilters },
            pagination: { ...state.pagination, page: 1 },
        }));
        // Debounce the fetch slightly
        setTimeout(() => {
            get().fetchTasks();
        }, 100);
    },
    // Set sort
    setSort: (sort) => {
        set({ sort });
        setTimeout(() => {
            get().fetchTasks();
        }, 100);
    },
    // Set pagination
    setPagination: (newPagination) => {
        set((state) => ({
            pagination: { ...state.pagination, ...newPagination },
        }));
        setTimeout(() => {
            get().fetchTasks();
        }, 100);
    },
    // Reset filters
    resetFilters: () => {
        set({
            filters: initialFilters,
            pagination: initialPagination,
        });
        setTimeout(() => {
            get().fetchTasks();
        }, 100);
    },
    // Clear error
    clearError: () => {
        set({ error: null });
    },
}), {
    name: 'tasks-store',
    enabled: true,
}));
if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;
    window.tasksStore = useTasksStore;
}
