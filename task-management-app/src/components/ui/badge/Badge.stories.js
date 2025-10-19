import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Badge from './Badge';
const meta = {
    title: 'UI/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (_jsx("div", { className: "flex items-center justify-center p-8", children: _jsx(Story, {}) })),
    ],
};
export default meta;
export const Primary = {
    args: {
        variant: 'primary',
        children: 'Primary',
    },
};
export const Secondary = {
    args: {
        variant: 'secondary',
        children: 'Secondary',
    },
};
export const Success = {
    args: {
        variant: 'success',
        children: 'Completed',
    },
};
export const Danger = {
    args: {
        variant: 'danger',
        children: 'Cancelled',
    },
};
export const Warning = {
    args: {
        variant: 'warning',
        children: 'Urgent',
    },
};
export const Neutral = {
    args: {
        variant: 'neutral',
        children: 'To Do',
    },
};
export const WithDot = {
    args: {
        variant: 'primary',
        dot: true,
        children: 'In Progress',
    },
};
export const Small = {
    args: {
        size: 'sm',
        children: 'Small',
    },
};
export const Large = {
    args: {
        size: 'lg',
        children: 'Large',
    },
};
export const TaskStatuses = {
    render: () => (_jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(Badge, { variant: "neutral", dot: true, children: "To Do" }), _jsx(Badge, { variant: "primary", dot: true, children: "In Progress" }), _jsx(Badge, { variant: "success", dot: true, children: "Completed" }), _jsx(Badge, { variant: "danger", dot: true, children: "Cancelled" })] })),
};
export const TaskPriorities = {
    render: () => (_jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(Badge, { variant: "neutral", children: "Low" }), _jsx(Badge, { variant: "primary", children: "Medium" }), _jsx(Badge, { variant: "warning", children: "High" }), _jsx(Badge, { variant: "danger", children: "Urgent" })] })),
};
export const AllVariants = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("h3", { className: "text-sm font-medium text-neutral-700", children: "Variants" }), _jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(Badge, { variant: "primary", children: "Primary" }), _jsx(Badge, { variant: "secondary", children: "Secondary" }), _jsx(Badge, { variant: "success", children: "Success" }), _jsx(Badge, { variant: "danger", children: "Danger" }), _jsx(Badge, { variant: "warning", children: "Warning" }), _jsx(Badge, { variant: "neutral", children: "Neutral" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h3", { className: "text-sm font-medium text-neutral-700", children: "Sizes" }), _jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [_jsx(Badge, { size: "sm", children: "Small" }), _jsx(Badge, { size: "md", children: "Medium" }), _jsx(Badge, { size: "lg", children: "Large" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h3", { className: "text-sm font-medium text-neutral-700", children: "With Dots" }), _jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(Badge, { variant: "primary", dot: true, children: "With Dot" }), _jsx(Badge, { variant: "success", dot: true, children: "Active" }), _jsx(Badge, { variant: "danger", dot: true, children: "Error" })] })] })] })),
};
