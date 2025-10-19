import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
const Card = forwardRef(({ className, variant = 'default', padding = 'md', hoverable = false, children, ...props }, ref) => {
    const baseStyles = 'rounded-xl bg-white transition-all';
    const variants = {
        default: 'border border-neutral-200',
        bordered: 'border-2 border-neutral-300',
        elevated: 'shadow-lg',
    };
    const paddings = {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    };
    const hoverStyles = hoverable
        ? 'hover:shadow-md hover:border-neutral-300 cursor-pointer'
        : '';
    return (_jsx("div", { ref: ref, className: cn(baseStyles, variants[variant], paddings[padding], hoverStyles, className), ...props, children: children }));
});
Card.displayName = 'Card';
export const CardHeader = forwardRef(({ className, divider = false, children, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn('mb-4', divider && 'border-b border-neutral-200 pb-4', className), ...props, children: children }));
});
CardHeader.displayName = 'CardHeader';
export const CardTitle = forwardRef(({ className, as: Component = 'h3', children, ...props }, ref) => {
    return (_jsx(Component, { ref: ref, className: cn('text-lg font-semibold text-neutral-900', className), ...props, children: children }));
});
CardTitle.displayName = 'CardTitle';
export const CardDescription = forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("p", { ref: ref, className: cn('text-sm text-neutral-600', className), ...props, children: children }));
});
CardDescription.displayName = 'CardDescription';
export const CardContent = forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn('', className), ...props, children: children }));
});
CardContent.displayName = 'CardContent';
export const CardFooter = forwardRef(({ className, divider = false, children, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn('mt-4', divider && 'border-t border-neutral-200 pt-4', className), ...props, children: children }));
});
CardFooter.displayName = 'CardFooter';
export default Card;
