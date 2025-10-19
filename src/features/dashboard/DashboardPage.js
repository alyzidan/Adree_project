import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Container from '@/components/layout/Container';
import OverviewStats from './components/OverviewStats';
import TasksCharts from './components/TasksCharts';
import ActivityTimeline from './components/ActivityTimeline';
function DashboardPage() {
    return (_jsx(Container, { children: _jsxs("div", { className: "space-y-6 pb-8", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold text-neutral-900", children: "Dashboard" }), _jsx("p", { className: "mt-2 text-neutral-600", children: "Overview of your tasks and performance metrics" })] }), _jsx(OverviewStats, {}), _jsxs("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-3", children: [_jsx("div", { className: "lg:col-span-2", children: _jsx(TasksCharts, {}) }), _jsx("div", { className: "lg:col-span-1", children: _jsx(ActivityTimeline, {}) })] })] }) }));
}
export default DashboardPage;
