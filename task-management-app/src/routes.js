import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
// Lazy load pages for code splitting
const DashboardPage = lazy(() => import('@/features/dashboard/DashboardPage'));
const TasksPage = lazy(() => import('@/features/tasks/TasksPage'));
const TestPage = lazy(() => import('@/features/tasks/TestPage'));
export const routes = [
    {
        path: '/',
        element: _jsx(Navigate, { to: "/dashboard", replace: true }),
    },
    {
        path: '/dashboard',
        element: _jsx(DashboardPage, {}),
    },
    {
        path: '/tasks',
        element: _jsx(TasksPage, {}),
    },
    ...(process.env.NODE_ENV === 'development'
        ? [
            {
                path: '/test',
                element: _jsx(TestPage, {}),
            },
        ]
        : []),
    {
        path: '*',
        element: (_jsx("div", { className: "flex min-h-screen items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-4xl font-bold text-neutral-900", children: "404" }), _jsx("p", { className: "mt-2 text-neutral-600", children: "Page not found" })] }) })),
    },
];
