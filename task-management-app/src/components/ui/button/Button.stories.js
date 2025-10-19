import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Plus, ArrowRight } from 'lucide-react';
import Button from './Button';
const meta = {
    title: 'UI/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'ghost', 'destructive', 'outline'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        isLoading: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
    },
};
export default meta;
export const Primary = {
    args: {
        variant: 'primary',
        children: 'Button',
    },
};
export const Secondary = {
    args: {
        variant: 'secondary',
        children: 'Button',
    },
};
export const Ghost = {
    args: {
        variant: 'ghost',
        children: 'Button',
    },
};
export const Destructive = {
    args: {
        variant: 'destructive',
        children: 'Delete',
    },
};
export const Outline = {
    args: {
        variant: 'outline',
        children: 'Button',
    },
};
export const Small = {
    args: {
        size: 'sm',
        children: 'Small Button',
    },
};
export const Large = {
    args: {
        size: 'lg',
        children: 'Large Button',
    },
};
export const WithLeftIcon = {
    args: {
        leftIcon: _jsx(Plus, { className: "h-4 w-4" }),
        children: 'Add Task',
    },
};
export const WithRightIcon = {
    args: {
        rightIcon: _jsx(ArrowRight, { className: "h-4 w-4" }),
        children: 'Next',
    },
};
export const Loading = {
    args: {
        isLoading: true,
        children: 'Loading...',
    },
};
export const Disabled = {
    args: {
        disabled: true,
        children: 'Disabled',
    },
};
export const AllVariants = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { variant: "primary", children: "Primary" }), _jsx(Button, { variant: "secondary", children: "Secondary" }), _jsx(Button, { variant: "ghost", children: "Ghost" }), _jsx(Button, { variant: "destructive", children: "Destructive" }), _jsx(Button, { variant: "outline", children: "Outline" })] }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { size: "sm", children: "Small" }), _jsx(Button, { size: "md", children: "Medium" }), _jsx(Button, { size: "lg", children: "Large" })] }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { leftIcon: _jsx(Plus, { className: "h-4 w-4" }), children: "With Icon" }), _jsx(Button, { isLoading: true, children: "Loading" }), _jsx(Button, { disabled: true, children: "Disabled" })] })] })),
};
