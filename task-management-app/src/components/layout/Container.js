import { jsx as _jsx } from "react/jsx-runtime";
function Container({ children, className = '' }) {
    return (_jsx("div", { className: `container mx-auto px-4 sm:px-6 lg:px-8 ${className}`, children: children }));
}
export default Container;
