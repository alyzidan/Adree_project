import { jsx as _jsx } from "react/jsx-runtime";
import * as ToastPrimitive from '@radix-ui/react-toast';
import { cn } from '@/lib/utils';
export function ToastViewport({ className, ...props }) {
    return (_jsx(ToastPrimitive.Viewport, { className: cn('fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]', className), ...props }));
}
