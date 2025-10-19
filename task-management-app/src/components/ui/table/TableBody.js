import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
export const TableBody = forwardRef(({ className, ...props }, ref) => (_jsx("tbody", { ref: ref, className: cn('[&_tr:last-child]:border-0', className), ...props })));
TableBody.displayName = 'TableBody';
