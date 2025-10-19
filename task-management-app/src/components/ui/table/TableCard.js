import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
export function TableCard({ children, className, onClick }) {
    const handleKeyDown = (e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            onClick();
        }
    };
    return (_jsx("div", { className: cn('rounded-lg border border-neutral-200 bg-white p-4 shadow-sm transition-all hover:shadow-md md:hidden', onClick && 'cursor-pointer', className), onClick: onClick, onKeyDown: onClick ? handleKeyDown : undefined, role: onClick ? 'button' : undefined, tabIndex: onClick ? 0 : undefined, children: children }));
}
export function TableCardRow({ label, value, className }) {
    return (_jsxs("div", { className: cn('flex items-center justify-between py-2', className), children: [_jsx("span", { className: "text-sm font-medium text-neutral-600", children: label }), _jsx("span", { className: "text-sm text-neutral-900", children: value })] }));
}
