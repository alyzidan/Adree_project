import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalBody, ModalFooter, } from './';
import Button from '../button/Button';
import Input from '../input/Input';
const meta = {
    title: 'UI/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    render: () => {
        const [open, setOpen] = useState(false);
        return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: () => setOpen(true), children: "Open Modal" }), _jsxs(Modal, { open: open, onOpenChange: setOpen, children: [_jsxs(ModalHeader, { children: [_jsx(ModalTitle, { children: "Modal Title" }), _jsx(ModalDescription, { children: "This is a modal description. It provides context about what this modal is for." })] }), _jsx(ModalBody, { children: _jsx("p", { className: "text-sm text-neutral-700", children: "This is the modal content. You can put any content here." }) }), _jsxs(ModalFooter, { children: [_jsx(Button, { variant: "outline", onClick: () => setOpen(false), children: "Cancel" }), _jsx(Button, { onClick: () => setOpen(false), children: "Confirm" })] })] })] }));
    },
};
export const Small = {
    render: () => {
        const [open, setOpen] = useState(false);
        return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: () => setOpen(true), children: "Open Small Modal" }), _jsxs(Modal, { open: open, onOpenChange: setOpen, size: "sm", children: [_jsx(ModalHeader, { children: _jsx(ModalTitle, { children: "Small Modal" }) }), _jsx(ModalBody, { children: _jsx("p", { className: "text-sm text-neutral-700", children: "This is a small modal." }) }), _jsx(ModalFooter, { children: _jsx(Button, { onClick: () => setOpen(false), children: "Close" }) })] })] }));
    },
};
export const Large = {
    render: () => {
        const [open, setOpen] = useState(false);
        return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: () => setOpen(true), children: "Open Large Modal" }), _jsxs(Modal, { open: open, onOpenChange: setOpen, size: "lg", children: [_jsxs(ModalHeader, { children: [_jsx(ModalTitle, { children: "Large Modal" }), _jsx(ModalDescription, { children: "This modal has more space for content." })] }), _jsx(ModalBody, { children: _jsxs("div", { className: "space-y-4", children: [_jsx("p", { className: "text-sm text-neutral-700", children: "This is a large modal with more content space." }), _jsx("p", { className: "text-sm text-neutral-700", children: "You can include multiple paragraphs or complex layouts here." })] }) }), _jsxs(ModalFooter, { children: [_jsx(Button, { variant: "outline", onClick: () => setOpen(false), children: "Cancel" }), _jsx(Button, { onClick: () => setOpen(false), children: "Save" })] })] })] }));
    },
};
export const WithForm = {
    render: () => {
        const [open, setOpen] = useState(false);
        return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: () => setOpen(true), children: "Create Task" }), _jsxs(Modal, { open: open, onOpenChange: setOpen, size: "md", children: [_jsxs(ModalHeader, { children: [_jsx(ModalTitle, { children: "Create New Task" }), _jsx(ModalDescription, { children: "Fill in the details to create a new task." })] }), _jsx(ModalBody, { children: _jsxs("form", { className: "space-y-4", children: [_jsx(Input, { label: "Task Title", placeholder: "Enter task title" }), _jsx(Input, { label: "Description", placeholder: "Enter description", type: "text" }), _jsx(Input, { label: "Due Date", type: "date" }), _jsx(Input, { label: "Estimated Hours", type: "number", placeholder: "0", min: 0, step: 0.5 })] }) }), _jsxs(ModalFooter, { children: [_jsx(Button, { variant: "outline", onClick: () => setOpen(false), children: "Cancel" }), _jsx(Button, { onClick: () => setOpen(false), children: "Create Task" })] })] })] }));
    },
};
export const DeleteConfirmation = {
    render: () => {
        const [open, setOpen] = useState(false);
        return (_jsxs(_Fragment, { children: [_jsx(Button, { variant: "destructive", onClick: () => setOpen(true), children: "Delete Item" }), _jsxs(Modal, { open: open, onOpenChange: setOpen, size: "sm", children: [_jsxs(ModalHeader, { children: [_jsx(ModalTitle, { children: "Delete Task?" }), _jsx(ModalDescription, { children: "This action cannot be undone. This will permanently delete the task." })] }), _jsxs(ModalFooter, { children: [_jsx(Button, { variant: "outline", onClick: () => setOpen(false), children: "Cancel" }), _jsx(Button, { variant: "destructive", onClick: () => setOpen(false), children: "Delete" })] })] })] }));
    },
};
export const AllSizes = {
    render: () => {
        const [size, setSize] = useState('md');
        const [open, setOpen] = useState(false);
        return (_jsxs(_Fragment, { children: [_jsx("div", { className: "flex gap-2", children: ['sm', 'md', 'lg', 'xl'].map((s) => (_jsx(Button, { onClick: () => {
                            setSize(s);
                            setOpen(true);
                        }, children: s.toUpperCase() }, s))) }), _jsxs(Modal, { open: open, onOpenChange: setOpen, size: size, children: [_jsxs(ModalHeader, { children: [_jsxs(ModalTitle, { children: [size.toUpperCase(), " Modal"] }), _jsxs(ModalDescription, { children: ["This is a ", size, " sized modal."] })] }), _jsx(ModalBody, { children: _jsx("p", { className: "text-sm text-neutral-700", children: "Modal content goes here." }) }), _jsx(ModalFooter, { children: _jsx(Button, { onClick: () => setOpen(false), children: "Close" }) })] })] }));
    },
};
