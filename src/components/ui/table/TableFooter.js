import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
export const TableFooter = forwardRef(({ className, ...props }, ref) => (_jsx("tfoot", { ref: ref, className: cn('border-t bg-neutral-50 font-medium [&>tr]:last:border-b-0', className), ...props })));
TableFooter.displayName = 'TableFooter';
