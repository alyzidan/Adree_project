import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useTasks } from '../hooks';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import EmptyState from '@/components/shared/EmptyState';
import { FileText } from 'lucide-react';
import TaskTable from './TaskTable';
import TaskCards from './TaskCards';
import TaskPagination from './TaskPagination';
function TaskList() {
    const { tasks, isLoading, error, total } = useTasks();
    if (error) {
        return (_jsx("div", { className: "rounded-lg border-2 border-danger-200 bg-danger-50 p-8 text-center", children: _jsxs("p", { className: "text-danger-900", children: ["Error: ", error] }) }));
    }
    if (isLoading && tasks.length === 0) {
        return (_jsx("div", { className: "flex min-h-[400px] items-center justify-center", children: _jsx(LoadingSpinner, { size: "lg" }) }));
    }
    if (!isLoading && tasks.length === 0) {
        return (_jsx(EmptyState, { icon: _jsx(FileText, { className: "h-12 w-12" }), title: "No tasks found", description: "Try adjusting your filters or create a new task to get started." }));
    }
    return (_jsxs("div", { className: "space-y-4", children: [_jsx("div", { className: "hidden md:block", children: _jsx(TaskTable, { tasks: tasks }) }), _jsx("div", { className: "md:hidden", children: _jsx(TaskCards, { tasks: tasks }) }), total > 0 && _jsx(TaskPagination, {})] }));
}
export default TaskList;
