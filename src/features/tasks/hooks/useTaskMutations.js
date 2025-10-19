import { useTasksStore } from '../store';
import { toast } from '@/components/ui/toast';
export function useTaskMutations() {
    const { isCreating, isUpdating, isDeleting, createTask, updateTask, deleteTask, } = useTasksStore();
    const handleCreate = async (input) => {
        try {
            const task = await createTask(input);
            toast({
                variant: 'success',
                title: 'Success',
                description: 'Task created successfully',
            });
            return task;
        }
        catch (error) {
            toast({
                variant: 'error',
                title: 'Error',
                description: 'Failed to create task',
            });
            throw error;
        }
    };
    const handleUpdate = async (id, input) => {
        try {
            const task = await updateTask(id, input);
            toast({
                variant: 'success',
                title: 'Success',
                description: 'Task updated successfully',
            });
            return task;
        }
        catch (error) {
            toast({
                variant: 'error',
                title: 'Error',
                description: 'Failed to update task',
            });
            throw error;
        }
    };
    const handleDelete = async (id) => {
        try {
            await deleteTask(id);
            toast({
                variant: 'success',
                title: 'Success',
                description: 'Task deleted successfully',
            });
        }
        catch (error) {
            toast({
                variant: 'error',
                title: 'Error',
                description: 'Failed to delete task',
            });
            throw error;
        }
    };
    return {
        isCreating,
        isUpdating,
        isDeleting,
        createTask: handleCreate,
        updateTask: handleUpdate,
        deleteTask: handleDelete,
    };
}
