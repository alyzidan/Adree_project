import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
export function ModalBody({ children, className }) {
    return _jsx("div", { className: cn('py-4', className), children: children });
}
