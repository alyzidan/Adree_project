import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Clock, Circle } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent, } from '@/components/ui/card/Card';
import Badge from '@/components/ui/badge/Badge';
import { useDashboardMetrics } from '../hooks';
import { formatRelativeTime } from '@/lib/utils';
import { STATUS_COLORS, TASK_STATUS_LABELS, TASK_CATEGORY_LABELS, } from '@/lib/constants';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import EmptyState from '@/components/shared/EmptyState';
function ActivityTimeline() {
    const { recentTasks, isLoading } = useDashboardMetrics();
    if (isLoading) {
        return (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Recent Activity" }) }), _jsx(CardContent, { children: _jsx("div", { className: "flex items-center justify-center py-12", children: _jsx(LoadingSpinner, {}) }) })] }));
    }
    return (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Recent Activity" }) }), _jsx(CardContent, { children: recentTasks.length === 0 ? (_jsx(EmptyState, { icon: _jsx(Clock, { className: "h-8 w-8" }), title: "No recent activity", description: "Tasks will appear here as they are created or updated." })) : (_jsx("div", { className: "space-y-4", children: recentTasks.map((task, index) => (_jsxs("div", { className: "flex gap-4", children: [_jsxs("div", { className: "flex flex-col items-center", children: [_jsx("div", { className: `flex h-8 w-8 items-center justify-center rounded-full ${index === 0 ? 'bg-primary-100' : 'bg-neutral-100'}`, children: _jsx(Circle, { className: `h-3 w-3 ${index === 0
                                                ? 'fill-primary-600 text-primary-600'
                                                : 'fill-neutral-400 text-neutral-400'}` }) }), index < recentTasks.length - 1 && (_jsx("div", { className: "w-px flex-1 bg-neutral-200" }))] }), _jsxs("div", { className: "flex-1 pb-6", children: [_jsxs("div", { className: "flex items-start justify-between gap-4", children: [_jsxs("div", { className: "flex-1", children: [_jsx("p", { className: "font-medium text-neutral-900", children: task.title }), _jsxs("p", { className: "mt-1 text-sm text-neutral-600", children: [TASK_CATEGORY_LABELS[task.category], task.assignee && ` • ${task.assignee}`] })] }), _jsx(Badge, { variant: STATUS_COLORS[task.status], size: "sm", children: TASK_STATUS_LABELS[task.status] })] }), _jsx("p", { className: "mt-2 text-xs text-neutral-400", children: formatRelativeTime(task.updatedAt) })] })] }, task.id))) })) })] }));
}
export default ActivityTimeline;
