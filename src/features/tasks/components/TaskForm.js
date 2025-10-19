import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createTaskSchema } from '../schema';
import Input from '@/components/ui/input/Input';
import Select from '@/components/ui/select/Select';
import Button from '@/components/ui/button/Button';
import { TASK_STATUS, TASK_STATUS_LABELS, TASK_CATEGORY, TASK_CATEGORY_LABELS, TASK_PRIORITY, TASK_PRIORITY_LABELS, } from '@/lib/constants';
function TaskForm({ onSubmit, onCancel, defaultValues, isLoading = false, }) {
    const { register, handleSubmit, setValue, watch, formState: { errors }, } = useForm({
        resolver: zodResolver(createTaskSchema),
        defaultValues: defaultValues
            ? {
                title: defaultValues.title || '',
                description: defaultValues.description || '',
                status: defaultValues.status || TASK_STATUS.TODO,
                category: defaultValues.category || TASK_CATEGORY.OTHER,
                priority: defaultValues.priority || TASK_PRIORITY.MEDIUM,
                assignee: defaultValues.assignee || '',
                dueDate: defaultValues.dueDate || '',
                estimatedHours: defaultValues.estimatedHours || 0,
            }
            : {
                status: TASK_STATUS.TODO,
                category: TASK_CATEGORY.OTHER,
                priority: TASK_PRIORITY.MEDIUM,
                estimatedHours: 0,
            },
    });
    const statusOptions = Object.values(TASK_STATUS).map((status) => ({
        value: status,
        label: TASK_STATUS_LABELS[status],
    }));
    const categoryOptions = Object.values(TASK_CATEGORY).map((category) => ({
        value: category,
        label: TASK_CATEGORY_LABELS[category],
    }));
    const priorityOptions = Object.values(TASK_PRIORITY).map((priority) => ({
        value: priority,
        label: TASK_PRIORITY_LABELS[priority],
    }));
    return (_jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4", children: [_jsx(Input, { label: "Task Title", placeholder: "Enter task title", error: errors.title?.message, ...register('title'), disabled: isLoading }), _jsxs("div", { children: [_jsx("label", { htmlFor: "description-field", className: "mb-2 block text-sm font-medium text-neutral-700", children: "Description" }), _jsx("textarea", { id: "description-field", className: "flex min-h-[80px] w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm transition-colors placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50", placeholder: "Enter task description (optional)", ...register('description'), disabled: isLoading }), errors.description && (_jsx("p", { className: "mt-1.5 text-sm text-danger-600", children: errors.description.message }))] }), _jsx(Select, { label: "Status", options: statusOptions, value: watch('status'), onValueChange: (value) => setValue('status', value), error: errors.status?.message, disabled: isLoading }), _jsx(Select, { label: "Category", options: categoryOptions, value: watch('category'), onValueChange: (value) => setValue('category', value), error: errors.category?.message, disabled: isLoading }), _jsx(Select, { label: "Priority", options: priorityOptions, value: watch('priority'), onValueChange: (value) => setValue('priority', value), error: errors.priority?.message, disabled: isLoading }), _jsx(Input, { label: "Assignee (optional)", placeholder: "Enter assignee name", error: errors.assignee?.message, ...register('assignee'), disabled: isLoading }), _jsx(Input, { label: "Due Date (optional)", type: "date", error: errors.dueDate?.message, ...register('dueDate'), disabled: isLoading }), _jsx(Input, { label: "Estimated Hours", type: "number", placeholder: "0", step: "0.5", min: "0", error: errors.estimatedHours?.message, ...register('estimatedHours', { valueAsNumber: true }), disabled: isLoading }), _jsxs("div", { className: "flex justify-end gap-3 pt-4", children: [_jsx(Button, { type: "button", variant: "outline", onClick: onCancel, disabled: isLoading, children: "Cancel" }), _jsx(Button, { type: "submit", isLoading: isLoading, children: defaultValues ? 'Update Task' : 'Create Task' })] })] }));
}
export default TaskForm;
