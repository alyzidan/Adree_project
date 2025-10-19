import { TASK_STATUS } from '@/lib/constants';
export function calculateMetrics(tasks) {
    const now = new Date();
    const totalTasks = tasks.length;
    const openTasks = tasks.filter((t) => t.status === TASK_STATUS.TODO || t.status === TASK_STATUS.IN_PROGRESS).length;
    const completedTasks = tasks.filter((t) => t.status === TASK_STATUS.COMPLETED).length;
    const cancelledTasks = tasks.filter((t) => t.status === TASK_STATUS.CANCELLED).length;
    const totalHours = tasks.reduce((sum, task) => sum + task.estimatedHours, 0);
    const averageEstimatedHours = totalTasks > 0 ? Math.round((totalHours / totalTasks) * 10) / 10 : 0;
    const overdueTasks = tasks.filter((task) => {
        if (!task.dueDate)
            return false;
        if (task.status === TASK_STATUS.COMPLETED)
            return false;
        return new Date(task.dueDate) < now;
    }).length;
    const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    return {
        totalTasks,
        openTasks,
        completedTasks,
        cancelledTasks,
        averageEstimatedHours,
        overdueTasks,
        completionRate,
    };
}
export function getTasksByCategory(tasks) {
    const categoryMap = new Map();
    tasks.forEach((task) => {
        const count = categoryMap.get(task.category) || 0;
        categoryMap.set(task.category, count + 1);
    });
    return Array.from(categoryMap.entries())
        .map(([category, count]) => ({ category, count }))
        .sort((a, b) => b.count - a.count);
}
export function getTasksByStatus(tasks) {
    const statusMap = new Map();
    tasks.forEach((task) => {
        const count = statusMap.get(task.status) || 0;
        statusMap.set(task.status, count + 1);
    });
    return Array.from(statusMap.entries())
        .map(([status, count]) => ({ status, count }))
        .sort((a, b) => b.count - a.count);
}
export function getRecentTasks(tasks, limit = 5) {
    return [...tasks]
        .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
        .slice(0, limit);
}
