import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Card, { CardContent } from '@/components/ui/card/Card';
import { cn } from '@/lib/utils';
function MetricCard({ title, value, icon, trend, color = 'primary', className, }) {
    const colorClasses = {
        primary: 'bg-primary-100 text-primary-600',
        success: 'bg-success-100 text-success-600',
        danger: 'bg-danger-100 text-danger-600',
        warning: 'bg-warning-100 text-warning-600',
        neutral: 'bg-neutral-100 text-neutral-600',
    };
    return (_jsx(Card, { className: cn('transition-all hover:shadow-md', className), children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { className: "flex-1", children: [_jsx("p", { className: "text-sm font-medium text-neutral-600", children: title }), _jsx("p", { className: "mt-2 text-3xl font-bold text-neutral-900", children: value }), trend && (_jsxs("div", { className: "mt-2 flex items-center gap-1", children: [_jsxs("span", { className: cn('text-xs font-medium', trend.isPositive ? 'text-success-600' : 'text-danger-600'), children: [trend.isPositive ? '↑' : '↓', " ", Math.abs(trend.value), "%"] }), _jsx("span", { className: "text-xs text-neutral-500", children: "vs last week" })] }))] }), _jsx("div", { className: cn('rounded-lg p-3', colorClasses[color]), children: icon })] }) }) }));
}
export default MetricCard;
