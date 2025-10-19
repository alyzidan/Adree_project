import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
export const TableRow = forwardRef(({ className, ...props }, ref) => (_jsx("tr", { ref: ref, className: cn('border-b transition-colors hover:bg-neutral-50 data-[state=selected]:bg-neutral-100', className), ...props })));
TableRow.displayName = 'TableRow';
