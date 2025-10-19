import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
const Input = forwardRef(({ className, type = 'text', label, error, helperText, leftIcon, rightIcon, disabled, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substring(7)}`;
    const baseStyles = 'flex h-10 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50';
    const errorStyles = error
        ? 'border-danger-500 focus-visible:ring-danger-500'
        : 'focus-visible:ring-primary-600';
    const paddingStyles = cn(leftIcon && 'pl-10', rightIcon && 'pr-10');
    return (_jsxs("div", { className: "w-full", children: [label && (_jsx("label", { htmlFor: inputId, className: "mb-2 block text-sm font-medium text-neutral-700", children: label })), _jsxs("div", { className: "relative", children: [leftIcon && (_jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500", children: leftIcon })), _jsx("input", { id: inputId, type: type, className: cn(baseStyles, errorStyles, paddingStyles, className), ref: ref, disabled: disabled, "aria-invalid": error ? 'true' : 'false', "aria-describedby": error
                            ? `${inputId}-error`
                            : helperText
                                ? `${inputId}-helper`
                                : undefined, ...props }), rightIcon && (_jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-500", children: rightIcon }))] }), error && (_jsx("p", { id: `${inputId}-error`, className: "mt-1.5 text-sm text-danger-600", role: "alert", children: error })), helperText && !error && (_jsx("p", { id: `${inputId}-helper`, className: "mt-1.5 text-sm text-neutral-500", children: helperText }))] }));
});
Input.displayName = 'Input';
export default Input;
