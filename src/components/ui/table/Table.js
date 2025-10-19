import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
export const Table = forwardRef(({ className, responsive = true, ...props }, ref) => {
    if (responsive) {
        return (_jsx("div", { className: "relative w-full overflow-auto rounded-lg border border-neutral-200", children: _jsx("table", { ref: ref, className: cn('w-full caption-bottom text-sm', className), ...props }) }));
    }
    return (_jsx("table", { ref: ref, className: cn('w-full caption-bottom text-sm', className), ...props }));
});
Table.displayName = 'Table';
