import { Task } from '@/features/tasks/types'
import { TASK_STATUS, TASK_CATEGORY, TASK_PRIORITY } from '@/lib/constants'

function randomDate(start: Date, end: Date): string {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  ).toISOString()
}

// Sample assignees
const assignees = [
  'John Doe',
  'Jane Smith',
  'Mike Johnson',
  'Sarah Williams',
  'Tom Brown',
  'Emma Davis',
  'Alex Wilson',
  'Lisa Anderson',
]

// Sample task titles by category
const taskTitles: Record<string, string[]> = {
  [TASK_CATEGORY.DEVELOPMENT]: [
    'Implement user authentication',
    'Build REST API endpoints',
    'Optimize database queries',
    'Fix production bugs',
    'Refactor legacy code',
    'Add unit tests',
    'Setup CI/CD pipeline',
    'Implement feature flags',
  ],
  [TASK_CATEGORY.DESIGN]: [
    'Create landing page mockups',
    'Design mobile app UI',
    'Update brand guidelines',
    'Create icon set',
    'Design email templates',
    'Wireframe user flows',
    'Conduct user research',
    'Create design system',
  ],
  [TASK_CATEGORY.MARKETING]: [
    'Plan social media campaign',
    'Write blog posts',
    'Create marketing materials',
    'Analyze campaign metrics',
    'SEO optimization',
    'Email newsletter design',
    'Content calendar planning',
    'Market research analysis',
  ],
  [TASK_CATEGORY.SALES]: [
    'Prepare sales presentation',
    'Follow up with leads',
    'Update CRM data',
    'Client meeting preparation',
    'Proposal drafting',
    'Sales forecast analysis',
    'Competitor analysis',
    'Demo preparation',
  ],
  [TASK_CATEGORY.SUPPORT]: [
    'Resolve customer tickets',
    'Update documentation',
    'Create FAQ section',
    'Handle escalated issues',
    'Train support team',
    'Improve response time',
    'Customer feedback analysis',
    'Knowledge base updates',
  ],
  [TASK_CATEGORY.OTHER]: [
    'Team meeting notes',
    'Office equipment setup',
    'Onboarding new employee',
    'Quarterly planning',
    'Budget review',
    'Process documentation',
    'License renewals',
    'Workspace organization',
  ],
}

export function generateMockTasks(count: number = 30): Task[] {
  const tasks: Task[] = []
  const now = new Date()
  const threeMonthsAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000)
  const oneMonthFromNow = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000)

  const statuses = Object.values(TASK_STATUS)
  const categories = Object.values(TASK_CATEGORY)
  const priorities = Object.values(TASK_PRIORITY)

  for (let i = 0; i < count; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)]
    const titles = taskTitles[category]
    const title = titles[Math.floor(Math.random() * titles.length)]
    const status = statuses[Math.floor(Math.random() * statuses.length)]
    const priority = priorities[Math.floor(Math.random() * priorities.length)]

    const createdAt = randomDate(threeMonthsAgo, now)
    const updatedAt = randomDate(new Date(createdAt), now)
    const hasDueDate = Math.random() > 0.3
    const hasAssignee = Math.random() > 0.2
    const hasDescription = Math.random() > 0.4

    tasks.push({
      id: `task-${i + 1}`,
      title: `${title} #${i + 1}`,
      description: hasDescription
        ? `Detailed description for ${title.toLowerCase()}. This task requires careful attention and proper execution.`
        : undefined,
      status,
      category,
      priority,
      assignee: hasAssignee
        ? assignees[Math.floor(Math.random() * assignees.length)]
        : undefined,
      dueDate: hasDueDate ? randomDate(now, oneMonthFromNow) : undefined,
      estimatedHours: Math.round((Math.random() * 20 + 1) * 2) / 2,
      createdAt,
      updatedAt,
    })
  }

  return tasks.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
}

// Initial mock tasks
export const mockTasks = generateMockTasks(30)
