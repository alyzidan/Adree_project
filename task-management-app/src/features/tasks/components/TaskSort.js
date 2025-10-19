import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowUp, ArrowDown } from 'lucide-react';
import Select from '@/components/ui/select/Select';
import Button from '@/components/ui/button/Button';
import { useTasks } from '../hooks';
function TaskSort() {
    const { sort, setSort } = useTasks();
    const sortOptions = [
        { value: 'createdAt', label: 'Date Created' },
        { value: 'updatedAt', label: 'Date Updated' },
        { value: 'title', label: 'Title' },
        { value: 'dueDate', label: 'Due Date' },
        { value: 'estimatedHours', label: 'Estimated Hours' },
        { value: 'priority', label: 'Priority' },
    ];
    const toggleOrder = () => {
        setSort({
            ...sort,
            order: sort.order === 'asc' ? 'desc' : 'asc',
        });
    };
    const handleFieldChange = (value) => {
        setSort({
            field: value,
            order: sort.order,
        });
    };
    return (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-48", children: _jsx(Select, { options: sortOptions, value: sort.field, onValueChange: handleFieldChange, placeholder: "Sort by" }) }), _jsx(Button, { variant: "outline", size: "sm", onClick: toggleOrder, title: sort.order === 'asc' ? 'Ascending' : 'Descending', children: sort.order === 'asc' ? (_jsx(ArrowUp, { className: "h-4 w-4" })) : (_jsx(ArrowDown, { className: "h-4 w-4" })) })] }));
}
export default TaskSort;
