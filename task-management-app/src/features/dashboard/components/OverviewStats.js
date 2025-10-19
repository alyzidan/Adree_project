import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckCircle2, Clock, FolderKanban, AlertCircle } from 'lucide-react';
import MetricCard from './MetricCard';
import { useDashboardMetrics } from '../hooks';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
function OverviewStats() {
    const { metrics, isLoading } = useDashboardMetrics();
    if (isLoading) {
        return (_jsx("div", { className: "flex items-center justify-center py-12", children: _jsx(LoadingSpinner, { size: "lg" }) }));
    }
    if (!metrics)
        return null;
    return (_jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4", children: [_jsx(MetricCard, { title: "Total Tasks", value: metrics.totalTasks, icon: _jsx(FolderKanban, { className: "h-6 w-6" }), color: "primary" }), _jsx(MetricCard, { title: "Completed", value: metrics.completedTasks, icon: _jsx(CheckCircle2, { className: "h-6 w-6" }), color: "success", trend: metrics.totalTasks > 0
                    ? {
                        value: metrics.completionRate,
                        isPositive: metrics.completionRate >= 50,
                    }
                    : undefined }), _jsx(MetricCard, { title: "Avg. Hours", value: `${metrics.averageEstimatedHours}h`, icon: _jsx(Clock, { className: "h-6 w-6" }), color: "warning" }), _jsx(MetricCard, { title: "Overdue", value: metrics.overdueTasks, icon: _jsx(AlertCircle, { className: "h-6 w-6" }), color: metrics.overdueTasks > 0 ? 'danger' : 'neutral' })] }));
}
export default OverviewStats;
