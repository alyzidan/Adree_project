import { jsx as _jsx } from "react/jsx-runtime";
import * as ToastPrimitive from '@radix-ui/react-toast';
import { cn } from '@/lib/utils';
export function Toast({ className, variant = 'default', ...props }) {
    const variants = {
        default: 'border-neutral-200 bg-white text-neutral-900',
        success: 'border-success-200 bg-success-50 text-success-900',
        error: 'border-danger-200 bg-danger-50 text-danger-900',
        warning: 'border-warning-200 bg-warning-50 text-warning-900',
    };
    return (_jsx(ToastPrimitive.Root, { className: cn('group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-lg border p-4 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full', variants[variant], className), ...props }));
}
