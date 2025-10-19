import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { FileText, Trash2 } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';
import EmptyState from './EmptyState';
import ErrorBoundary from './ErrorBoundary';
import ConfirmDialog from './ConfirmDialog';
import Button from '@/components/ui/button/Button';
const meta = {
    title: 'Shared/Components',
    parameters: {
        layout: 'centered',
    },
};
export default meta;
export const Loading = {
    render: () => (_jsxs("div", { className: "flex flex-col items-center gap-8", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(LoadingSpinner, { size: "sm" }), _jsx(LoadingSpinner, { size: "md" }), _jsx(LoadingSpinner, { size: "lg" })] }), _jsxs("div", { className: "text-center", children: [_jsx(LoadingSpinner, { className: "mx-auto mb-2" }), _jsx("p", { className: "text-sm text-neutral-600", children: "Loading tasks..." })] })] })),
};
export const Empty = {
    render: () => (_jsx("div", { className: "w-[600px]", children: _jsx(EmptyState, { icon: _jsx(FileText, { className: "h-12 w-12" }), title: "No tasks yet", description: "Get started by creating your first task.", action: _jsx(Button, { children: "Create Task" }) }) })),
};
export const Error = {
    render: () => {
        const ThrowError = () => {
            throw new Error('This is a test error!');
        };
        return (_jsx("div", { className: "w-[600px]", children: _jsx(ErrorBoundary, { children: _jsx(Button, { onClick: () => _jsx(ThrowError, {}), children: "Trigger Error" }) }) }));
    },
};
export const Confirm = {
    render: () => {
        const [open, setOpen] = useState(false);
        const [isLoading, setIsLoading] = useState(false);
        const handleConfirm = () => {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                setOpen(false);
                alert('Confirmed!');
            }, 2000);
        };
        return (_jsxs(_Fragment, { children: [_jsx(Button, { variant: "destructive", onClick: () => setOpen(true), children: "Delete Task" }), _jsx(ConfirmDialog, { open: open, onOpenChange: setOpen, title: "Delete Task?", description: "This action cannot be undone. This will permanently delete the task.", confirmText: "Delete", cancelText: "Cancel", variant: "destructive", icon: _jsx(Trash2, { className: "h-12 w-12" }), onConfirm: handleConfirm, isLoading: isLoading })] }));
    },
};
