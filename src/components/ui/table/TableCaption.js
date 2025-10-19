import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
export const TableCaption = forwardRef(({ className, ...props }, ref) => (_jsx("caption", { ref: ref, className: cn('mt-4 text-sm text-neutral-500', className), ...props })));
TableCaption.displayName = 'TableCaption';
