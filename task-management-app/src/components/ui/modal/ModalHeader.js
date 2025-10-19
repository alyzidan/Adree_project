import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
export function ModalHeader({ children, className }) {
    return _jsx("div", { className: cn('mb-4 pr-8', className), children: children });
}
