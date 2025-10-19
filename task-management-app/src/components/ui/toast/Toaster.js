import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Toast } from './Toast';
import { ToastClose } from './ToastClose';
import { ToastDescription } from './ToastDescription';
import { ToastProvider } from './ToastProvider';
import { ToastTitle } from './ToastTitle';
import { ToastViewport } from './ToastViewport';
import { useToast } from './useToast';
export function Toaster() {
    const { toasts } = useToast();
    return (_jsxs(ToastProvider, { children: [toasts.map(function ({ id, title, description, action, ...props }) {
                return (_jsxs(Toast, { ...props, children: [_jsxs("div", { className: "grid gap-1", children: [title && _jsx(ToastTitle, { children: title }), description && (_jsx(ToastDescription, { children: description }))] }), action, _jsx(ToastClose, {})] }, id));
            }), _jsx(ToastViewport, {})] }));
}
