import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
const CardFooter = forwardRef(({ className, divider = false, children, ...props }, ref) => (_jsx("div", { ref: ref, className: cn('mt-4', divider && 'border-t border-neutral-200 pt-4', className), ...props, children: children })));
CardFooter.displayName = 'CardFooter';
export default CardFooter;
