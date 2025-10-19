import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Search, Mail, Lock, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { z } from 'zod';
import Input from './Input';
import React from 'react';
const meta = {
    title: 'UI/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (_jsx("div", { className: "w-80", children: _jsx(Story, {}) })),
    ],
};
export default meta;
export const Default = {
    args: {
        placeholder: 'Enter text...',
    },
};
export const WithLabel = {
    args: {
        label: 'Email',
        placeholder: 'Enter your email',
        type: 'email',
    },
};
export const WithError = {
    args: {
        label: 'Email',
        placeholder: 'Enter your email',
        type: 'email',
        error: 'Please enter a valid email address',
    },
};
export const WithHelperText = {
    args: {
        label: 'Username',
        placeholder: 'Enter username',
        helperText: 'Must be at least 3 characters',
    },
};
export const WithLeftIcon = {
    args: {
        label: 'Search',
        placeholder: 'Search tasks...',
        leftIcon: _jsx(Search, { className: "h-4 w-4" }),
    },
};
export const WithRightIcon = {
    args: {
        label: 'Email',
        placeholder: 'Enter your email',
        type: 'email',
        rightIcon: _jsx(Mail, { className: "h-4 w-4" }),
    },
};
export const Password = {
    args: {
        label: 'Password',
        type: 'password',
        placeholder: 'Enter password',
        leftIcon: _jsx(Lock, { className: "h-4 w-4" }),
    },
};
export const Disabled = {
    args: {
        label: 'Disabled Input',
        placeholder: 'Cannot edit',
        disabled: true,
    },
};
export const Number = {
    args: {
        label: 'Estimated Hours',
        type: 'number',
        placeholder: '0',
        min: 0,
        step: 0.5,
    },
};
export const Date = {
    args: {
        label: 'Due Date',
        type: 'date',
    },
};
// Zod Validation Example
const emailSchema = z.string().email('Invalid email address');
const EmailValidationWrapper = () => {
    const [email, setEmail] = React.useState('');
    const [error, setError] = React.useState('');
    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        const result = emailSchema.safeParse(value);
        setError(result.success ? '' : result.error.errors[0].message);
    };
    return (_jsx(Input, { label: "Email (with Zod validation)", placeholder: "Enter your email", type: "email", value: email, onChange: handleChange, error: error, leftIcon: _jsx(Mail, { className: "h-4 w-4" }), rightIcon: error ? _jsx(AlertCircle, { className: "h-4 w-4 text-red-500" }) : undefined }));
};
export const WithZodValidation = {
    render: () => _jsx(EmailValidationWrapper, {}),
};
const passwordSchema = z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number');
export const ComplexZodValidation = {
    render: () => {
        const [password, setPassword] = useState('');
        const [error, setError] = useState();
        const handleChange = (e) => {
            const value = e.target.value;
            setPassword(value);
            const result = passwordSchema.safeParse(value);
            setError(result.success ? undefined : result.error.errors[0].message);
        };
        return (_jsx(Input, { label: "Password (Complex validation)", type: "password", placeholder: "Enter strong password", value: password, onChange: handleChange, error: error, helperText: !error ? 'Min 8 chars with uppercase, lowercase & number' : undefined, leftIcon: _jsx(Lock, { className: "h-4 w-4" }), rightIcon: error ? (_jsx(AlertCircle, { className: "h-4 w-4 text-danger-500" })) : undefined }));
    },
};
export const AllStates = {
    render: () => (_jsxs("div", { className: "flex w-full flex-col gap-6", children: [_jsx(Input, { label: "Default", placeholder: "Enter text" }), _jsx(Input, { label: "With Icon", placeholder: "Search...", leftIcon: _jsx(Search, { className: "h-4 w-4" }) }), _jsx(Input, { label: "With Helper", placeholder: "Username", helperText: "Choose a unique username" }), _jsx(Input, { label: "With Error", placeholder: "Email", error: "Invalid email address" }), _jsx(Input, { label: "Disabled", placeholder: "Cannot edit", disabled: true })] })),
};
