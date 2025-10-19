import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Clock, User, Calendar } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, } from '.';
import Button from '../button/Button';
import Badge from '../badge/Badge';
const meta = {
    title: 'UI/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (_jsx("div", { className: "w-96", children: _jsx(Story, {}) })),
    ],
};
export default meta;
export const Default = {
    render: () => (_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Card Title" }), _jsx(CardDescription, { children: "Card description goes here" })] }), _jsx(CardContent, { children: _jsx("p", { className: "text-sm text-neutral-700", children: "This is the card content. You can put any content here." }) })] })),
};
export const Bordered = {
    render: () => (_jsxs(Card, { variant: "bordered", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Bordered Card" }), _jsx(CardDescription, { children: "With thicker border" })] }), _jsx(CardContent, { children: _jsx("p", { className: "text-sm text-neutral-700", children: "Content goes here" }) })] })),
};
export const Elevated = {
    render: () => (_jsxs(Card, { variant: "elevated", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Elevated Card" }), _jsx(CardDescription, { children: "With shadow effect" })] }), _jsx(CardContent, { children: _jsx("p", { className: "text-sm text-neutral-700", children: "Content goes here" }) })] })),
};
export const Hoverable = {
    render: () => (_jsxs(Card, { hoverable: true, children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Hoverable Card" }), _jsx(CardDescription, { children: "Hover to see effect" })] }), _jsx(CardContent, { children: _jsx("p", { className: "text-sm text-neutral-700", children: "This card has hover effects and appears clickable." }) })] })),
};
export const WithDividers = {
    render: () => (_jsxs(Card, { children: [_jsxs(CardHeader, { divider: true, children: [_jsx(CardTitle, { children: "Card with Dividers" }), _jsx(CardDescription, { children: "Header and footer are separated" })] }), _jsx(CardContent, { children: _jsx("p", { className: "text-sm text-neutral-700", children: "Main content area" }) }), _jsx(CardFooter, { divider: true, children: _jsx(Button, { size: "sm", children: "Action" }) })] })),
};
export const TaskCard = {
    render: () => (_jsxs(Card, { hoverable: true, children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { className: "flex-1", children: [_jsx(CardTitle, { children: "Implement user authentication" }), _jsx(CardDescription, { className: "mt-1", children: "Add JWT-based authentication to the API" })] }), _jsx(Badge, { variant: "primary", dot: true, children: "In Progress" })] }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center gap-2 text-sm text-neutral-600", children: [_jsx(User, { className: "h-4 w-4" }), _jsx("span", { children: "Assigned to John Doe" })] }), _jsxs("div", { className: "flex items-center gap-2 text-sm text-neutral-600", children: [_jsx(Calendar, { className: "h-4 w-4" }), _jsx("span", { children: "Due: Dec 25, 2024" })] }), _jsxs("div", { className: "flex items-center gap-2 text-sm text-neutral-600", children: [_jsx(Clock, { className: "h-4 w-4" }), _jsx("span", { children: "8 hours estimated" })] })] }) }), _jsx(CardFooter, { divider: true, children: _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { size: "sm", variant: "outline", children: "View Details" }), _jsx(Button, { size: "sm", children: "Edit" })] }) })] })),
};
export const StatCard = {
    render: () => (_jsx(Card, { variant: "elevated", children: _jsx(CardContent, { children: _jsxs("div", { className: "space-y-2", children: [_jsx("p", { className: "text-sm font-medium text-neutral-600", children: "Total Tasks" }), _jsx("p", { className: "text-3xl font-bold text-neutral-900", children: "42" }), _jsxs("div", { className: "flex items-center gap-1 text-xs text-success-600", children: [_jsx("span", { children: "\u2191 12%" }), _jsx("span", { className: "text-neutral-500", children: "from last week" })] })] }) }) })),
};
export const AllVariants = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-6", children: [_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Default Card" }), _jsx(CardDescription, { children: "Standard appearance" })] }), _jsx(CardContent, { children: _jsx("p", { className: "text-sm text-neutral-700", children: "Content" }) })] }), _jsx(Card, { variant: "bordered", children: _jsx(CardHeader, { children: _jsx(CardTitle, { children: "Bordered Card" }) }) }), _jsx(Card, { variant: "elevated", children: _jsx(CardHeader, { children: _jsx(CardTitle, { children: "Elevated Card" }) }) }), _jsx(Card, { hoverable: true, children: _jsx(CardHeader, { children: _jsx(CardTitle, { children: "Hoverable Card" }) }) })] })),
};
