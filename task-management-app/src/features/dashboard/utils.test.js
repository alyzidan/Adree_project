import { describe, it, expect } from 'vitest';
import { calculateMetrics, getTasksByCategory, getTasksByStatus } from './utils';
import { createMockTask, createMockTasks } from '@/test/helpers';
describe('calculateMetrics()', () => {
    it('should calculate metrics for empty array', () => {
        const metrics = calculateMetrics([]);
        expect(metrics.totalTasks).toBe(0);
        expect(metrics.completedTasks).toBe(0);
        expect(metrics.averageEstimatedHours).toBe(0);
        expect(metrics.completionRate).toBe(0);
    });
    it('should calculate correct total tasks', () => {
        const tasks = createMockTasks(5);
        const metrics = calculateMetrics(tasks);
        expect(metrics.totalTasks).toBe(5);
    });
    it('should calculate completed tasks correctly', () => {
        const tasks = [
            createMockTask({ status: 'completed' }),
            createMockTask({ status: 'completed' }),
            createMockTask({ status: 'todo' }),
        ];
        const metrics = calculateMetrics(tasks);
        expect(metrics.completedTasks).toBe(2);
        expect(metrics.completionRate).toBe(67); // 2/3 = 66.67 -> 67
    });
    it('should calculate average hours correctly', () => {
        const tasks = [
            createMockTask({ estimatedHours: 10 }),
            createMockTask({ estimatedHours: 20 }),
            createMockTask({ estimatedHours: 30 }),
        ];
        const metrics = calculateMetrics(tasks);
        expect(metrics.averageEstimatedHours).toBe(20);
    });
    it('should count overdue tasks correctly', () => {
        const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
        const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
        const tasks = [
            createMockTask({ dueDate: yesterday, status: 'todo' }), // overdue
            createMockTask({ dueDate: tomorrow, status: 'todo' }), // not overdue
            createMockTask({ dueDate: yesterday, status: 'completed' }), // completed, not counted
        ];
        const metrics = calculateMetrics(tasks);
        expect(metrics.overdueTasks).toBe(1);
    });
});
describe('getTasksByCategory()', () => {
    it('should group tasks by category', () => {
        const tasks = [
            createMockTask({ category: 'development' }),
            createMockTask({ category: 'development' }),
            createMockTask({ category: 'design' }),
        ];
        const result = getTasksByCategory(tasks);
        expect(result).toHaveLength(2);
        expect(result[0]).toEqual({ category: 'development', count: 2 });
        expect(result[1]).toEqual({ category: 'design', count: 1 });
    });
    it('should sort by count descending', () => {
        const tasks = [
            createMockTask({ category: 'design' }),
            createMockTask({ category: 'development' }),
            createMockTask({ category: 'development' }),
            createMockTask({ category: 'development' }),
        ];
        const result = getTasksByCategory(tasks);
        expect(result[0].category).toBe('development');
        expect(result[0].count).toBe(3);
    });
});
describe('getTasksByStatus()', () => {
    it('should group tasks by status', () => {
        const tasks = [
            createMockTask({ status: 'todo' }),
            createMockTask({ status: 'todo' }),
            createMockTask({ status: 'in_progress' }),
            createMockTask({ status: 'completed' }),
        ];
        const result = getTasksByStatus(tasks);
        expect(result).toHaveLength(3);
        expect(result.find((r) => r.status === 'todo')?.count).toBe(2);
    });
});
