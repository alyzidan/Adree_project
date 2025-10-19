import { apiClient } from '@/lib/api';
export const tasksApi = {
    async getTasks(filters, sort, pagination) {
        const params = {};
        if (filters) {
            if (filters.status)
                params.status = filters.status;
            if (filters.category)
                params.category = filters.category;
            if (filters.priority)
                params.priority = filters.priority;
            if (filters.assignee)
                params.assignee = filters.assignee;
            if (filters.search)
                params.search = filters.search;
        }
        if (sort) {
            params.sortBy = sort.field;
            params.sortOrder = sort.order;
        }
        if (pagination) {
            params.page = pagination.page.toString();
            params.pageSize = pagination.pageSize.toString();
        }
        return apiClient.get('/tasks', params);
    },
    async getTask(id) {
        return apiClient.get(`/tasks/${id}`);
    },
    async createTask(input) {
        return apiClient.post('/tasks', input);
    },
    async updateTask(id, input) {
        return apiClient.put(`/tasks/${id}`, input);
    },
    async deleteTask(id) {
        return apiClient.delete(`/tasks/${id}`);
    },
};
