import { lazy } from 'react'
import { RouteObject, Navigate } from 'react-router-dom'

// Lazy load pages for code splitting
const DashboardPage = lazy(() => import('@/features/dashboard/DashboardPage'))
const TasksPage = lazy(() => import('@/features/tasks/TasksPage'))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '/tasks',
    element: <TasksPage />,
  },
  {
    path: '*',
    element: (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral-900">404</h1>
          <p className="mt-2 text-neutral-600">Page not found</p>
        </div>
      </div>
    ),
  },
]
