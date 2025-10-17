export const APP_NAME = 'Task Management'

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  TASKS: '/tasks',
} as const

export const NAV_ITEMS = [
  {
    name: 'Dashboard',
    path: ROUTES.DASHBOARD,
    icon: 'LayoutDashboard',
  },
  {
    name: 'Tasks',
    path: ROUTES.TASKS,
    icon: 'CheckSquare',
  },
] as const
