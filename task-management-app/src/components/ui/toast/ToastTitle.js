import { jsx as _jsx } from "react/jsx-runtime";
import * as ToastPrimitive from '@radix-ui/react-toast';
import { cn } from '@/lib/utils';
export function ToastTitle({ className, ...props }) {
    return (_jsx(ToastPrimitive.Title, { className: cn('text-sm font-semibold', className), ...props }));
}
