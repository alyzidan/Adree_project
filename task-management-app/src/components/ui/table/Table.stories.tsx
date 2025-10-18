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
