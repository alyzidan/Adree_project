import { jsx as _jsx } from "react/jsx-runtime";
import * as ToastPrimitive from '@radix-ui/react-toast';
import { cn } from '@/lib/utils';
export function ToastDescription({ className, ...props }) {
    return (_jsx(ToastPrimitive.Description, { className: cn('text-sm opacity-90', className), ...props }));
}
