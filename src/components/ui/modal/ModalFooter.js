import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
export function ModalFooter({ children, className }) {
    return (_jsx("div", { className: cn('mt-6 flex justify-end gap-3', className), children: children }));
}
