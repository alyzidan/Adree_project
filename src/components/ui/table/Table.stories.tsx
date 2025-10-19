import type { Meta, StoryObj } from '@storybook/react'
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
  TableCard,
  TableCardRow,
} from './index'
import Badge from '../badge/Badge'
import Button from '../button/Button'

const meta = {
  title: 'UI/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of your recent tasks.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Task</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Hours</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Implement API</TableCell>
          <TableCell>
            <Badge variant="primary" dot>
              In Progress
            </Badge>
          </TableCell>
          <TableCell>Development</TableCell>
          <TableCell className="text-right">8.0</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Design Homepage</TableCell>
          <TableCell>
            <Badge variant="success" dot>
              Completed
            </Badge>
          </TableCell>
          <TableCell>Design</TableCell>
          <TableCell className="text-right">12.5</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Write Documentation</TableCell>
          <TableCell>
            <Badge variant="neutral" dot>
              To Do
            </Badge>
          </TableCell>
          <TableCell>Development</TableCell>
          <TableCell className="text-right">6.0</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Task</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Hours</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Task 1</TableCell>
          <TableCell>Completed</TableCell>
          <TableCell className="text-right">8.0</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Task 2</TableCell>
          <TableCell>In Progress</TableCell>
          <TableCell className="text-right">12.5</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Task 3</TableCell>
          <TableCell>To Do</TableCell>
          <TableCell className="text-right">6.0</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">26.5 hours</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

export const ResponsiveExample: Story = {
  render: () => {
    const tasks = [
      {
        id: 1,
        title: 'Implement API',
        status: 'In Progress',
        category: 'Development',
        hours: 8.0,
      },
      {
        id: 2,
        title: 'Design Homepage',
        status: 'Completed',
        category: 'Design',
        hours: 12.5,
      },
      {
        id: 3,
        title: 'Write Documentation',
        status: 'To Do',
        category: 'Development',
        hours: 6.0,
      },
    ]

    const getStatusBadge = (status: string) => {
      const variants: Record<string, 'primary' | 'success' | 'neutral'> = {
        'In Progress': 'primary',
        Completed: 'success',
        'To Do': 'neutral',
      }
      return (
        <Badge variant={variants[status]} dot>
          {status}
        </Badge>
      )
    }

    return (
      <div className="w-full max-w-4xl">
        {/* Desktop Table */}
        <div className="hidden md:block">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Task</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Hours</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell className="font-medium">{task.title}</TableCell>
                  <TableCell>{getStatusBadge(task.status)}</TableCell>
                  <TableCell>{task.category}</TableCell>
                  <TableCell className="text-right">{task.hours}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Cards */}
        <div className="flex flex-col gap-3 md:hidden">
          {tasks.map((task) => (
            <TableCard key={task.id}>
              <h3 className="mb-3 font-semibold text-neutral-900">
                {task.title}
              </h3>
              <TableCardRow
                label="Status"
                value={getStatusBadge(task.status)}
              />
              <TableCardRow label="Category" value={task.category} />
              <TableCardRow
                label="Hours"
                value={<span className="font-medium">{task.hours}</span>}
              />
            </TableCard>
          ))}
        </div>
      </div>
    )
  },
}

export const WithActions: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Task</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Due Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">
            Implement Authentication
          </TableCell>
          <TableCell>
            <Badge variant="primary">In Progress</Badge>
          </TableCell>
          <TableCell>Dec 25, 2024</TableCell>
          <TableCell className="text-right">
            <div className="flex justify-end gap-2">
              <Button size="sm" variant="ghost">
                Edit
              </Button>
              <Button size="sm" variant="destructive">
                Delete
              </Button>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Design Dashboard</TableCell>
          <TableCell>
            <Badge variant="success">Completed</Badge>
          </TableCell>
          <TableCell>Dec 20, 2024</TableCell>
          <TableCell className="text-right">
            <div className="flex justify-end gap-2">
              <Button size="sm" variant="ghost">
                Edit
              </Button>
              <Button size="sm" variant="destructive">
                Delete
              </Button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}
