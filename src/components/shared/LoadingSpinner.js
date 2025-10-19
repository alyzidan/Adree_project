import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
function LoadingSpinner({ size = 'md', className }) {
    const sizes = {
        sm: 'h-4 w-4 border-2',
        md: 'h-8 w-8 border-3',
        lg: 'h-12 w-12 border-4',
    };
    return (_jsx("div", { className: cn('animate-spin rounded-full border-primary-200 border-t-primary-600', sizes[size], className), role: "status", "aria-label": "Loading", children: _jsx("span", { className: "sr-only", children: "Loading..." }) }));
}
export default LoadingSpinner;
