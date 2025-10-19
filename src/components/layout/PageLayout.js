import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from './Header';
function PageLayout({ children }) {
    return (_jsxs("div", { className: "min-h-screen bg-neutral-50", children: [_jsx(Header, {}), _jsx("main", { className: "py-8", children: children })] }));
}
export default PageLayout;
