import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption, TableCard, TableCardRow, } from './index';
import Badge from '../badge/Badge';
import Button from '../button/Button';
const meta = {
    title: 'UI/Table',
    component: Table,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    render: () => (_jsxs(Table, { children: [_jsx(TableCaption, { children: "A list of your recent tasks." }), _jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Task" }), _jsx(TableHead, { children: "Status" }), _jsx(TableHead, { children: "Category" }), _jsx(TableHead, { className: "text-right", children: "Hours" })] }) }), _jsxs(TableBody, { children: [_jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-medium", children: "Implement API" }), _jsx(TableCell, { children: _jsx(Badge, { variant: "primary", dot: true, children: "In Progress" }) }), _jsx(TableCell, { children: "Development" }), _jsx(TableCell, { className: "text-right", children: "8.0" })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-medium", children: "Design Homepage" }), _jsx(TableCell, { children: _jsx(Badge, { variant: "success", dot: true, children: "Completed" }) }), _jsx(TableCell, { children: "Design" }), _jsx(TableCell, { className: "text-right", children: "12.5" })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-medium", children: "Write Documentation" }), _jsx(TableCell, { children: _jsx(Badge, { variant: "neutral", dot: true, children: "To Do" }) }), _jsx(TableCell, { children: "Development" }), _jsx(TableCell, { className: "text-right", children: "6.0" })] })] })] })),
};
export const WithFooter = {
    render: () => (_jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Task" }), _jsx(TableHead, { children: "Status" }), _jsx(TableHead, { className: "text-right", children: "Hours" })] }) }), _jsxs(TableBody, { children: [_jsxs(TableRow, { children: [_jsx(TableCell, { children: "Task 1" }), _jsx(TableCell, { children: "Completed" }), _jsx(TableCell, { className: "text-right", children: "8.0" })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Task 2" }), _jsx(TableCell, { children: "In Progress" }), _jsx(TableCell, { className: "text-right", children: "12.5" })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Task 3" }), _jsx(TableCell, { children: "To Do" }), _jsx(TableCell, { className: "text-right", children: "6.0" })] })] }), _jsx(TableFooter, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { colSpan: 2, children: "Total" }), _jsx(TableCell, { className: "text-right", children: "26.5 hours" })] }) })] })),
};
export const ResponsiveExample = {
    render: () => {
        const tasks = [
            {
                id: 1,
                title: 'Implement API',
                status: 'In Progress',
                category: 'Development',
                hours: 8.0,
            },
            {
                id: 2,
                title: 'Design Homepage',
                status: 'Completed',
                category: 'Design',
                hours: 12.5,
            },
            {
                id: 3,
                title: 'Write Documentation',
                status: 'To Do',
                category: 'Development',
                hours: 6.0,
            },
        ];
        const getStatusBadge = (status) => {
            const variants = {
                'In Progress': 'primary',
                Completed: 'success',
                'To Do': 'neutral',
            };
            return (_jsx(Badge, { variant: variants[status], dot: true, children: status }));
        };
        return (_jsxs("div", { className: "w-full max-w-4xl", children: [_jsx("div", { className: "hidden md:block", children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Task" }), _jsx(TableHead, { children: "Status" }), _jsx(TableHead, { children: "Category" }), _jsx(TableHead, { className: "text-right", children: "Hours" })] }) }), _jsx(TableBody, { children: tasks.map((task) => (_jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-medium", children: task.title }), _jsx(TableCell, { children: getStatusBadge(task.status) }), _jsx(TableCell, { children: task.category }), _jsx(TableCell, { className: "text-right", children: task.hours })] }, task.id))) })] }) }), _jsx("div", { className: "flex flex-col gap-3 md:hidden", children: tasks.map((task) => (_jsxs(TableCard, { children: [_jsx("h3", { className: "mb-3 font-semibold text-neutral-900", children: task.title }), _jsx(TableCardRow, { label: "Status", value: getStatusBadge(task.status) }), _jsx(TableCardRow, { label: "Category", value: task.category }), _jsx(TableCardRow, { label: "Hours", value: _jsx("span", { className: "font-medium", children: task.hours }) })] }, task.id))) })] }));
    },
};
export const WithActions = {
    render: () => (_jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Task" }), _jsx(TableHead, { children: "Status" }), _jsx(TableHead, { children: "Due Date" }), _jsx(TableHead, { className: "text-right", children: "Actions" })] }) }), _jsxs(TableBody, { children: [_jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-medium", children: "Implement Authentication" }), _jsx(TableCell, { children: _jsx(Badge, { variant: "primary", children: "In Progress" }) }), _jsx(TableCell, { children: "Dec 25, 2024" }), _jsx(TableCell, { className: "text-right", children: _jsxs("div", { className: "flex justify-end gap-2", children: [_jsx(Button, { size: "sm", variant: "ghost", children: "Edit" }), _jsx(Button, { size: "sm", variant: "destructive", children: "Delete" })] }) })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-medium", children: "Design Dashboard" }), _jsx(TableCell, { children: _jsx(Badge, { variant: "success", children: "Completed" }) }), _jsx(TableCell, { children: "Dec 20, 2024" }), _jsx(TableCell, { className: "text-right", children: _jsxs("div", { className: "flex justify-end gap-2", children: [_jsx(Button, { size: "sm", variant: "ghost", children: "Edit" }), _jsx(Button, { size: "sm", variant: "destructive", children: "Delete" })] }) })] })] })] })),
};
