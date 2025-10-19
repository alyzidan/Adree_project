import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
function EmptyState({ icon, title, description, action, className, }) {
    return (_jsxs("div", { className: cn('flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-50 p-10 p-12 text-center', className), children: [icon && (_jsx("div", { className: "mb-4 text-neutral-400", "aria-hidden": "true", children: icon })), _jsx("h3", { className: "mb-2 text-lg font-semibold text-neutral-900", children: title }), description && (_jsx("p", { className: "mb-6 max-w-sm text-sm text-neutral-600", children: description })), action && _jsx("div", { children: action })] }));
}
export default EmptyState;
