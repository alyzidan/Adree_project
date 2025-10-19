import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Toaster } from './Toaster';
import { toast } from './useToast';
import Button from '../button/Button';
const meta = {
    title: 'UI/Toast',
    component: Toaster,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    render: () => (_jsxs("div", { children: [_jsx(Button, { onClick: () => {
                    toast({
                        title: 'Notification',
                        description: 'This is a default toast notification.',
                    });
                }, children: "Show Toast" }), _jsx(Toaster, {})] })),
};
export const Success = {
    render: () => (_jsxs("div", { children: [_jsx(Button, { onClick: () => {
                    toast({
                        variant: 'success',
                        title: 'Success!',
                        description: 'Your task has been created successfully.',
                    });
                }, children: "Show Success" }), _jsx(Toaster, {})] })),
};
export const Error = {
    render: () => (_jsxs("div", { children: [_jsx(Button, { onClick: () => {
                    toast({
                        variant: 'error',
                        title: 'Error',
                        description: 'Something went wrong. Please try again.',
                    });
                }, children: "Show Error" }), _jsx(Toaster, {})] })),
};
export const Warning = {
    render: () => (_jsxs("div", { children: [_jsx(Button, { onClick: () => {
                    toast({
                        variant: 'warning',
                        title: 'Warning',
                        description: 'This action cannot be undone.',
                    });
                }, children: "Show Warning" }), _jsx(Toaster, {})] })),
};
export const AllVariants = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsx(Button, { onClick: () => {
                    toast({
                        title: 'Default Toast',
                        description: 'This is a default notification.',
                    });
                }, children: "Default" }), _jsx(Button, { onClick: () => {
                    toast({
                        variant: 'success',
                        title: 'Success!',
                        description: 'Operation completed successfully.',
                    });
                }, children: "Success" }), _jsx(Button, { onClick: () => {
                    toast({
                        variant: 'error',
                        title: 'Error!',
                        description: 'An error occurred.',
                    });
                }, children: "Error" }), _jsx(Button, { onClick: () => {
                    toast({
                        variant: 'warning',
                        title: 'Warning!',
                        description: 'Please be careful.',
                    });
                }, children: "Warning" }), _jsx(Toaster, {})] })),
};
