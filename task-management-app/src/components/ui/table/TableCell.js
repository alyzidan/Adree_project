import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
export const TableCell = forwardRef(({ className, ...props }, ref) => (_jsx("td", { ref: ref, className: cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className), ...props })));
TableCell.displayName = 'TableCell';
