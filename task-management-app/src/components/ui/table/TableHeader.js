import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
export const TableHeader = forwardRef(({ className, ...props }, ref) => (_jsx("thead", { ref: ref, className: cn('[&_tr]:border-b', className), ...props })));
TableHeader.displayName = 'TableHeader';
