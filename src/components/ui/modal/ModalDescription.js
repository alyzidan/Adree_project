import { jsx as _jsx } from "react/jsx-runtime";
import * as Dialog from '@radix-ui/react-dialog';
import { cn } from '@/lib/utils';
export function ModalDescription({ children, className, }) {
    return (_jsx(Dialog.Description, { className: cn('mt-2 text-sm text-neutral-600', className), children: children }));
}
