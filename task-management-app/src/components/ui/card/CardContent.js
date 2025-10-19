import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
const CardContent = forwardRef(({ className, children, ...props }, ref) => (_jsx("div", { ref: ref, className: cn('', className), ...props, children: children })));
CardContent.displayName = 'CardContent';
export default CardContent;
