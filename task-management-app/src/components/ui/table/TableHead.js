import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
export const TableHead = forwardRef(({ className, ...props }, ref) => (_jsx("th", { ref: ref, className: cn('h-12 px-4 text-left align-middle font-medium text-neutral-500 [&:has([role=checkbox])]:pr-0', className), ...props })));
TableHead.displayName = 'TableHead';
