import { jsx as _jsx } from "react/jsx-runtime";
import * as Dialog from '@radix-ui/react-dialog';
import { cn } from '@/lib/utils';
export function ModalTitle({ children, className }) {
    return (_jsx(Dialog.Title, { className: cn('text-xl font-semibold text-neutral-900', className), children: children }));
}
