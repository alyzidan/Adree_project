import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalBody, } from '../../../components/ui/modal';
import TaskForm from './TaskForm';
import { useTaskMutations } from '../hooks';
function TaskModal({ open, onOpenChange, mode, task }) {
    const { createTask, updateTask, isCreating, isUpdating } = useTaskMutations();
    const isLoading = isCreating || isUpdating;
    const handleSubmit = async (data) => {
        try {
            if (mode === 'create') {
                await createTask(data);
            }
            else if (mode === 'edit' && task) {
                await updateTask(task.id, data);
            }
            onOpenChange(false);
        }
        catch (error) {
            // Error handling is done in useTaskMutations
            console.error('Form submission error:', error);
        }
    };
    const handleCancel = () => {
        onOpenChange(false);
    };
    return (_jsxs(Modal, { open: open, onOpenChange: onOpenChange, size: "lg", children: [_jsxs(ModalHeader, { children: [_jsx(ModalTitle, { children: mode === 'create' ? 'Create New Task' : 'Edit Task' }), _jsx(ModalDescription, { children: mode === 'create'
                            ? 'Fill in the details below to create a new task.'
                            : 'Update the task information below.' })] }), _jsx(ModalBody, { children: _jsx(TaskForm, { onSubmit: handleSubmit, onCancel: handleCancel, defaultValues: task, isLoading: isLoading }) })] }));
}
export default TaskModal;
