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

export const TASK_STATUS = {
  TODO: 'todo',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const

export const TASK_STATUS_LABELS = {
  [TASK_STATUS.TODO]: 'To Do',
  [TASK_STATUS.IN_PROGRESS]: 'In Progress',
  [TASK_STATUS.COMPLETED]: 'Completed',
  [TASK_STATUS.CANCELLED]: 'Cancelled',
} as const

export const TASK_CATEGORY = {
  DEVELOPMENT: 'development',
  DESIGN: 'design',
  MARKETING: 'marketing',
  SALES: 'sales',
  SUPPORT: 'support',
  OTHER: 'other',
} as const

export const TASK_CATEGORY_LABELS = {
  [TASK_CATEGORY.DEVELOPMENT]: 'Development',
  [TASK_CATEGORY.DESIGN]: 'Design',
  [TASK_CATEGORY.MARKETING]: 'Marketing',
  [TASK_CATEGORY.SALES]: 'Sales',
  [TASK_CATEGORY.SUPPORT]: 'Support',
  [TASK_CATEGORY.OTHER]: 'Other',
} as const

export const TASK_PRIORITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  URGENT: 'urgent',
} as const

export const TASK_PRIORITY_LABELS = {
  [TASK_PRIORITY.LOW]: 'Low',
  [TASK_PRIORITY.MEDIUM]: 'Medium',
  [TASK_PRIORITY.HIGH]: 'High',
  [TASK_PRIORITY.URGENT]: 'Urgent',
} as const

export const STATUS_COLORS = {
  [TASK_STATUS.TODO]: 'neutral',
  [TASK_STATUS.IN_PROGRESS]: 'primary',
  [TASK_STATUS.COMPLETED]: 'success',
  [TASK_STATUS.CANCELLED]: 'danger',
} as const

export const PRIORITY_COLORS = {
  [TASK_PRIORITY.LOW]: 'neutral',
  [TASK_PRIORITY.MEDIUM]: 'primary',
  [TASK_PRIORITY.HIGH]: 'warning',
  [TASK_PRIORITY.URGENT]: 'danger',
} as const
