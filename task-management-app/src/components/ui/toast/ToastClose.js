import { jsx as _jsx } from "react/jsx-runtime";
import * as ToastPrimitive from '@radix-ui/react-toast';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
export function ToastClose({ className, ...props }) {
    return (_jsx(ToastPrimitive.Close, { className: cn('absolute right-2 top-2 rounded-md p-1 text-neutral-500 opacity-0 transition-opacity hover:text-neutral-900 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100', className), "toast-close": "", ...props, children: _jsx(X, { className: "h-4 w-4" }) }));
}
