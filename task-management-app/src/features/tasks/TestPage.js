import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useTasksStore } from './store';
import Button from '@/components/ui/button/Button';
import Card, { CardHeader, CardTitle, CardContent, } from '@/components/ui/card/Card';
import Badge from '@/components/ui/badge/Badge';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
function TestPage() {
    const { tasks, total, isLoading, error, fetchTasks, createTask, deleteTask } = useTasksStore();
    const [testLog, setTestLog] = useState([]);
    useEffect(() => {
        log('Component mounted');
        fetchTasks();
    }, [fetchTasks]);
    // local Helper log functions
    const log = (message) => {
        setTestLog((prev) => [
            ...prev,
            `${new Date().toLocaleTimeString()}: ${message}`,
        ]);
    };
    const handleCreateTest = async () => {
        log('Creating test task...');
        try {
            await createTask({
                title: 'Test Task - ' + new Date().toLocaleTimeString(),
                description: 'Auto-generated test task',
                status: 'todo',
                category: 'development',
                priority: 'medium',
                estimatedHours: 5,
            });
        }
        catch (err) {
            log(err);
        }
    };
    const handleDeleteFirst = async () => {
        if (tasks.length === 0) {
            return;
        }
        log('Deleting first task...');
        try {
            await deleteTask(tasks[0].id);
        }
        catch (err) {
            log(err);
        }
    };
    return (_jsxs("div", { className: "container mx-auto p-8", children: [_jsx("h1", { className: "mb-6 text-3xl font-bold", children: "Store Test Page" }), _jsxs(Card, { className: "mb-6", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Store State" }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "font-medium", children: "Total Tasks:" }), _jsx(Badge, { children: total })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "font-medium", children: "Loading:" }), _jsx(Badge, { variant: isLoading ? 'warning' : 'success', children: isLoading ? 'Yes' : 'No' })] }), error && (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "font-medium", children: "Error:" }), _jsx(Badge, { variant: "danger", children: error })] }))] }) })] }), _jsxs(Card, { className: "mb-6", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Actions" }) }), _jsx(CardContent, { children: _jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(Button, { onClick: fetchTasks, disabled: isLoading, children: "Fetch Tasks" }), _jsx(Button, { onClick: handleCreateTest, disabled: isLoading, children: "Create Test Task" }), _jsx(Button, { onClick: handleDeleteFirst, variant: "destructive", disabled: isLoading, children: "Delete First Task" })] }) })] }), _jsxs(Card, { className: "mb-6", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { children: ["Tasks (", tasks.length, ")"] }) }), _jsx(CardContent, { children: isLoading ? (_jsx("div", { className: "flex justify-center p-8", children: _jsx(LoadingSpinner, {}) })) : (_jsxs("div", { className: "space-y-2", children: [tasks.slice(0, 5).map((task) => (_jsxs("div", { className: "flex items-center justify-between rounded-lg border p-3", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium", children: task.title }), _jsx("p", { className: "text-sm text-neutral-500", children: task.id })] }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Badge, { variant: "primary", children: task.status }), _jsx(Badge, { variant: "secondary", children: task.category })] })] }, task.id))), tasks.length > 5 && (_jsxs("p", { className: "text-center text-sm text-neutral-500", children: ["... and ", tasks.length - 5, " more"] }))] })) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Test Log" }) }), _jsx(CardContent, { children: _jsx("div", { className: "max-h-64 overflow-y-auto rounded bg-neutral-900 p-4 font-mono text-xs text-green-400", children: testLog.map((log, i) => (_jsx("div", { children: log }, i))) }) })] })] }));
}
export default TestPage;
