import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalFooter, } from '@/components/ui/modal/index';
import Button from '@/components/ui/button/Button';
function ConfirmDialog({ open, onOpenChange, title, description, confirmText = 'Confirm', cancelText = 'Cancel', onConfirm, onCancel, variant = 'default', icon, isLoading = false, }) {
    const handleConfirm = () => {
        onConfirm();
        if (!isLoading) {
            onOpenChange(false);
        }
    };
    const handleCancel = () => {
        if (onCancel) {
            onCancel();
        }
        onOpenChange(false);
    };
    return (_jsxs(Modal, { open: open, onOpenChange: onOpenChange, size: "sm", children: [_jsxs(ModalHeader, { children: [icon && _jsx("div", { className: "mb-4 text-neutral-400", children: icon }), _jsx(ModalTitle, { children: title }), description && _jsx(ModalDescription, { children: description })] }), _jsxs(ModalFooter, { children: [_jsx(Button, { variant: "outline", onClick: handleCancel, disabled: isLoading, children: cancelText }), _jsx(Button, { variant: variant === 'destructive' ? 'destructive' : 'primary', onClick: handleConfirm, isLoading: isLoading, children: confirmText })] })] }));
}
export default ConfirmDialog;
