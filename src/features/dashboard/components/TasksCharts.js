import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Card, { CardHeader, CardTitle, CardContent, } from '@/components/ui/card/Card';
import CategoryChart from './CategoryChart';
import StatusChart from './StatusChart';
import { useDashboardMetrics } from '../hooks';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
function TasksCharts() {
    const { categoryData, statusData, isLoading } = useDashboardMetrics();
    if (isLoading) {
        return (_jsx("div", { className: "flex items-center justify-center py-12", children: _jsx(LoadingSpinner, { size: "lg" }) }));
    }
    return (_jsxs("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-2", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Tasks by Category" }) }), _jsx(CardContent, { children: categoryData.length > 0 ? (_jsx(CategoryChart, { data: categoryData })) : (_jsx("p", { className: "py-12 text-center text-neutral-500", children: "No data available" })) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Tasks by Status" }) }), _jsx(CardContent, { children: statusData.length > 0 ? (_jsx(StatusChart, { data: statusData })) : (_jsx("p", { className: "py-12 text-center text-neutral-500", children: "No data available" })) })] })] }));
}
export default TasksCharts;
