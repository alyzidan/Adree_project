import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
const Select = forwardRef(({ value, onValueChange, options, placeholder = 'Select an option', label, error, helperText, disabled, id, }, ref) => {
    const selectId = id || `select-${Math.random().toString(36).substring(7)}`;
    return (_jsxs("div", { className: "w-full", children: [label && (_jsx("label", { htmlFor: selectId, className: "mb-2 block text-sm font-medium text-neutral-700", children: label })), _jsxs(SelectPrimitive.Root, { value: value, onValueChange: onValueChange, disabled: disabled, children: [_jsxs(SelectPrimitive.Trigger, { ref: ref, id: selectId, className: cn('flex h-10 w-full items-center justify-between rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50', error
                            ? 'border-danger-500 focus:ring-danger-500'
                            : 'focus:ring-primary-600'), "aria-invalid": error ? 'true' : 'false', "aria-describedby": error
                            ? `${selectId}-error`
                            : helperText
                                ? `${selectId}-helper`
                                : undefined, children: [_jsx(SelectPrimitive.Value, { placeholder: placeholder }), _jsx(SelectPrimitive.Icon, { children: _jsx(ChevronDown, { className: "h-4 w-4 text-neutral-500" }) })] }), _jsx(SelectPrimitive.Portal, { children: _jsx(SelectPrimitive.Content, { className: "relative z-50 min-w-[8rem] overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", position: "popper", sideOffset: 4, children: _jsx(SelectPrimitive.Viewport, { className: "p-1", children: options.map((option) => (_jsxs(SelectPrimitive.Item, { value: option.value, disabled: option.disabled, className: "relative flex w-full cursor-pointer select-none items-center rounded-md py-2 pl-8 pr-2 text-sm outline-none transition-colors hover:bg-neutral-100 focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50", children: [_jsx("span", { className: "absolute left-2 flex h-4 w-4 items-center justify-center", children: _jsx(SelectPrimitive.ItemIndicator, { children: _jsx(Check, { className: "h-4 w-4 text-primary-600" }) }) }), _jsx(SelectPrimitive.ItemText, { children: option.label })] }, option.value))) }) }) })] }), error && (_jsx("p", { id: `${selectId}-error`, className: "mt-1.5 text-sm text-danger-600", role: "alert", children: error })), helperText && !error && (_jsx("p", { id: `${selectId}-helper`, className: "mt-1.5 text-sm text-neutral-500", children: helperText }))] }));
});
Select.displayName = 'Select';
export default Select;
