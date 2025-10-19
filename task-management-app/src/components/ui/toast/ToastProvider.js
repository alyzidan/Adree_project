import { jsx as _jsx } from "react/jsx-runtime";
import * as ToastPrimitive from '@radix-ui/react-toast';
export function ToastProvider({ ...props }) {
    return _jsx(ToastPrimitive.Provider, { ...props });
}
