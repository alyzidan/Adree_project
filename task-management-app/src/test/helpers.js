// Generate mock task
export function createMockTask(overrides) {
    const now = new Date().toISOString();
    return {
        id: 'test-task-1',
        title: 'Test Task',
        description: 'Test description',
        status: 'todo',
        category: 'development',
        priority: 'medium',
        estimatedHours: 5,
        createdAt: now,
        updatedAt: now,
        ...overrides,
    };
}
// Generate multiple mock tasks
export function createMockTasks(count) {
    return Array.from({ length: count }, (_, i) => createMockTask({
        id: `test-task-${i + 1}`,
        title: `Test Task ${i + 1}`,
    }));
}
// Wait for async operations
export const waitFor = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
