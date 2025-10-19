import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function LoadingFallback() {
    return (_jsx("div", { className: "flex min-h-screen items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "size-12 animate-spin rounded-full border-4 border-primary-200 border-t-primary-600" }), _jsx("p", { className: "mt-4 text-neutral-600", children: "Loading..." })] }) }));
}
