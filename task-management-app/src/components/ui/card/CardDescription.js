import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
const CardDescription = forwardRef(({ className, children, ...props }, ref) => (_jsx("p", { ref: ref, className: cn('text-sm text-neutral-600', className), ...props, children: children })));
CardDescription.displayName = 'CardDescription';
export default CardDescription;
