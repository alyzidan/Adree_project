import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
const CardTitle = forwardRef(({ className, as: Component = 'h3', children, ...props }, ref) => (_jsx(Component, { ref: ref, className: cn('text-lg font-semibold text-neutral-900', className), ...props, children: children })));
CardTitle.displayName = 'CardTitle';
export default CardTitle;
