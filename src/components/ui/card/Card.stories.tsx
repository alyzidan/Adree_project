import type { Meta, StoryObj } from '@storybook/react'
import { Clock, User, Calendar } from 'lucide-react'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '.'
import Button from '../button/Button'
import Badge from '../badge/Badge'

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-700">
          This is the card content. You can put any content here.
        </p>
      </CardContent>
    </Card>
  ),
}

export const Bordered: Story = {
  render: () => (
    <Card variant="bordered">
      <CardHeader>
        <CardTitle>Bordered Card</CardTitle>
        <CardDescription>With thicker border</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-700">Content goes here</p>
      </CardContent>
    </Card>
  ),
}

export const Elevated: Story = {
  render: () => (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
        <CardDescription>With shadow effect</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-700">Content goes here</p>
      </CardContent>
    </Card>
  ),
}

export const Hoverable: Story = {
  render: () => (
    <Card hoverable>
      <CardHeader>
        <CardTitle>Hoverable Card</CardTitle>
        <CardDescription>Hover to see effect</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-700">
          This card has hover effects and appears clickable.
        </p>
      </CardContent>
    </Card>
  ),
}

export const WithDividers: Story = {
  render: () => (
    <Card>
      <CardHeader divider>
        <CardTitle>Card with Dividers</CardTitle>
        <CardDescription>Header and footer are separated</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-700">Main content area</p>
      </CardContent>
      <CardFooter divider>
        <Button size="sm">Action</Button>
      </CardFooter>
    </Card>
  ),
}

export const TaskCard: Story = {
  render: () => (
    <Card hoverable>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle>Implement user authentication</CardTitle>
            <CardDescription className="mt-1">
              Add JWT-based authentication to the API
            </CardDescription>
          </div>
          <Badge variant="primary" dot>
            In Progress
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <User className="h-4 w-4" />
            <span>Assigned to John Doe</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Calendar className="h-4 w-4" />
            <span>Due: Dec 25, 2024</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Clock className="h-4 w-4" />
            <span>8 hours estimated</span>
          </div>
        </div>
      </CardContent>
      <CardFooter divider>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            View Details
          </Button>
          <Button size="sm">Edit</Button>
        </div>
      </CardFooter>
    </Card>
  ),
}

export const StatCard: Story = {
  render: () => (
    <Card variant="elevated">
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm font-medium text-neutral-600">Total Tasks</p>
          <p className="text-3xl font-bold text-neutral-900">42</p>
          <div className="flex items-center gap-1 text-xs text-success-600">
            <span>↑ 12%</span>
            <span className="text-neutral-500">from last week</span>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
          <CardDescription>Standard appearance</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-neutral-700">Content</p>
        </CardContent>
      </Card>

      <Card variant="bordered">
        <CardHeader>
          <CardTitle>Bordered Card</CardTitle>
        </CardHeader>
      </Card>

      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Elevated Card</CardTitle>
        </CardHeader>
      </Card>

      <Card hoverable>
        <CardHeader>
          <CardTitle>Hoverable Card</CardTitle>
        </CardHeader>
      </Card>
    </div>
  ),
}
