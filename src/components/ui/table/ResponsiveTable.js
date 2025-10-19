import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
export function ResponsiveTable({ children, className }) {
    return (_jsxs("div", { className: cn('w-full', className), children: [_jsx("div", { className: "hidden overflow-x-auto rounded-lg border border-neutral-200 md:block", children: children }), _jsx("div", { className: "md:hidden", children: children })] }));
}
