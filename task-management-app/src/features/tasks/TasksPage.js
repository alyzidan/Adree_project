import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/button/Button';
import { Plus, SlidersHorizontal } from 'lucide-react';
import TaskList from './components/TaskList';
import TaskFilters from './components/TaskFilters';
import TaskSearch from './components/TaskSearch';
import TaskSort from './components/TaskSort';
import TaskModal from './components/TaskModal';
import { useTasks } from './hooks';
import Badge from '@/components/ui/badge/Badge';
function TasksPage() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const { total, filters } = useTasks();
    const hasActiveFilters = filters.status !== 'all' ||
        filters.category !== 'all' ||
        filters.priority !== 'all' ||
        filters.search;
    return (_jsxs(Container, { children: [_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("h1", { className: "text-3xl font-bold text-neutral-900", children: "Tasks" }), _jsx(Badge, { variant: "primary", children: total })] }), _jsx("p", { className: "mt-2 text-neutral-600", children: "Manage and track your tasks efficiently" })] }), _jsxs(Button, { leftIcon: _jsx(Plus, { className: "h-4 w-4" }), onClick: () => setIsCreateModalOpen(true), children: [_jsx("span", { className: "hidden sm:inline", children: "Add Task" }), _jsx("span", { className: "sm:hidden", children: "Add" })] })] }), _jsx(TaskSearch, {}), _jsxs("div", { className: "flex items-center justify-between lg:hidden", children: [_jsxs(Button, { variant: "outline", size: "sm", onClick: () => setShowFilters(!showFilters), leftIcon: _jsx(SlidersHorizontal, { className: "h-4 w-4" }), children: ["Filters ", hasActiveFilters && '(Active)'] }), _jsx(TaskSort, {})] }), _jsxs("div", { className: "hidden items-center justify-between lg:flex", children: [_jsx(TaskFilters, {}), _jsx(TaskSort, {})] }), showFilters && (_jsx("div", { className: "lg:hidden", children: _jsx(TaskFilters, {}) })), _jsx(TaskList, {})] }), _jsx(TaskModal, { open: isCreateModalOpen, onOpenChange: setIsCreateModalOpen, mode: "create" })] }));
}
export default TasksPage;
