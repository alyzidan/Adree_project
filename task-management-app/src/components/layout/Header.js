import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, CheckSquare } from 'lucide-react';
import { APP_NAME, NAV_ITEMS } from '@/lib/constants';
const iconMap = {
    LayoutDashboard,
    CheckSquare,
};
function Header() {
    const location = useLocation();
    return (_jsx("header", { className: "border-b border-neutral-200 bg-white", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "flex h-16 items-center justify-between", children: [_jsx(Link, { to: "/", className: "text-xl font-bold text-neutral-900 transition-colors hover:text-primary-600", children: APP_NAME }), _jsx("nav", { className: "flex gap-1", children: NAV_ITEMS.map((item) => {
                            const Icon = iconMap[item.icon];
                            const isActive = location.pathname === item.path;
                            return (_jsxs(Link, { to: item.path, className: `
                    flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition-colors
                    ${isActive
                                    ? 'bg-primary-50 text-primary-700'
                                    : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'}
                  `, children: [_jsx(Icon, { className: "h-5 w-5" }), _jsx("span", { children: item.name })] }, item.path));
                        }) })] }) }) }));
}
export default Header;
