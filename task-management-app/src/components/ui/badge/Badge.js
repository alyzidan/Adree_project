import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
function Badge({ className, variant = 'neutral', size = 'md', dot = false, children, ...props }) {
    const baseStyles = 'inline-flex items-center gap-1.5 rounded-full font-medium transition-colors';
    const variants = {
        primary: 'bg-primary-100 text-primary-700',
        secondary: 'bg-secondary-100 text-secondary-700',
        success: 'bg-success-100 text-success-700',
        danger: 'bg-danger-100 text-danger-700',
        warning: 'bg-warning-100 text-warning-700',
        neutral: 'bg-neutral-100 text-neutral-700',
    };
    const sizes = {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-2.5 py-1 text-sm',
        lg: 'px-3 py-1.5 text-base',
    };
    const dotColors = {
        primary: 'bg-primary-600',
        secondary: 'bg-secondary-600',
        success: 'bg-success-600',
        danger: 'bg-danger-600',
        warning: 'bg-warning-600',
        neutral: 'bg-neutral-600',
    };
    return (_jsxs("span", { className: cn(baseStyles, variants[variant], sizes[size], className), ...props, children: [dot && (_jsx("span", { className: cn('h-1.5 w-1.5 rounded-full', dotColors[variant]), "aria-hidden": "true" })), children] }));
}
export default Badge;
