import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useTasks } from './useTasks';
import { useTasksStore } from '../store';
describe('useTasks', () => {
    beforeEach(() => {
        // Reset store before each test
        useTasksStore.setState({
            tasks: [],
            total: 0,
            isLoading: false,
            error: null,
        });
    });
    it('should fetch tasks on mount', async () => {
        const { result } = renderHook(() => useTasks());
        expect(result.current.isLoading).toBe(true);
        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });
    });
    it('should handle filters', async () => {
        const { result } = renderHook(() => useTasks());
        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });
        result.current.setFilters({ status: 'completed' });
        await waitFor(() => {
            expect(result.current.filters.status).toBe('completed');
        });
    });
});
