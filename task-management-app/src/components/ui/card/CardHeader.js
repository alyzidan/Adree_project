import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
const CardHeader = forwardRef(({ className, divider = false, children, ...props }, ref) => (_jsx("div", { ref: ref, className: cn('mb-4', divider && 'border-b border-neutral-200 pb-4', className), ...props, children: children })));
CardHeader.displayName = 'CardHeader';
export default CardHeader;
