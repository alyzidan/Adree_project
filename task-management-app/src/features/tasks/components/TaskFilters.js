import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { X } from 'lucide-react';
import Select from '@/components/ui/select/Select';
import Button from '@/components/ui/button/Button';
import { useTaskFilters } from '../hooks';
import { TASK_STATUS, TASK_STATUS_LABELS, TASK_CATEGORY, TASK_CATEGORY_LABELS, TASK_PRIORITY, TASK_PRIORITY_LABELS, } from '@/lib/constants';
function TaskFilters() {
    const { filters, handleFilterChange, handleReset } = useTaskFilters();
    const statusOptions = [
        { value: 'all', label: 'All Statuses' },
        ...Object.values(TASK_STATUS).map((status) => ({
            value: status,
            label: TASK_STATUS_LABELS[status],
        })),
    ];
    const categoryOptions = [
        { value: 'all', label: 'All Categories' },
        ...Object.values(TASK_CATEGORY).map((category) => ({
            value: category,
            label: TASK_CATEGORY_LABELS[category],
        })),
    ];
    const priorityOptions = [
        { value: 'all', label: 'All Priorities' },
        ...Object.values(TASK_PRIORITY).map((priority) => ({
            value: priority,
            label: TASK_PRIORITY_LABELS[priority],
        })),
    ];
    const hasActiveFilters = filters.status !== 'all' ||
        filters.category !== 'all' ||
        filters.priority !== 'all' ||
        filters.search;
    return (_jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [_jsx("div", { className: "w-full sm:w-auto sm:min-w-[160px]", children: _jsx(Select, { options: statusOptions, value: filters.status || 'all', onValueChange: (value) => handleFilterChange('status', value), placeholder: "Status" }) }), _jsx("div", { className: "w-full sm:w-auto sm:min-w-[160px]", children: _jsx(Select, { options: categoryOptions, value: filters.category || 'all', onValueChange: (value) => handleFilterChange('category', value), placeholder: "Category" }) }), _jsx("div", { className: "w-full sm:w-auto sm:min-w-[160px]", children: _jsx(Select, { options: priorityOptions, value: filters.priority || 'all', onValueChange: (value) => handleFilterChange('priority', value), placeholder: "Priority" }) }), hasActiveFilters && (_jsx(Button, { variant: "ghost", size: "sm", onClick: handleReset, leftIcon: _jsx(X, { className: "h-4 w-4" }), children: "Reset" }))] }));
}
export default TaskFilters;
