import type { Meta, StoryObj } from '@storybook/react'
import Badge from './Badge'

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Completed',
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Cancelled',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Urgent',
  },
}

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    children: 'To Do',
  },
}

export const WithDot: Story = {
  args: {
    variant: 'primary',
    dot: true,
    children: 'In Progress',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large',
  },
}

export const TaskStatuses: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="neutral" dot>
        To Do
      </Badge>
      <Badge variant="primary" dot>
        In Progress
      </Badge>
      <Badge variant="success" dot>
        Completed
      </Badge>
      <Badge variant="danger" dot>
        Cancelled
      </Badge>
    </div>
  ),
}

export const TaskPriorities: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="neutral">Low</Badge>
      <Badge variant="primary">Medium</Badge>
      <Badge variant="warning">High</Badge>
      <Badge variant="danger">Urgent</Badge>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-neutral-700">Variants</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="neutral">Neutral</Badge>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-neutral-700">Sizes</h3>
        <div className="flex flex-wrap items-center gap-2">
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
          <Badge size="lg">Large</Badge>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-neutral-700">With Dots</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="primary" dot>
            With Dot
          </Badge>
          <Badge variant="success" dot>
            Active
          </Badge>
          <Badge variant="danger" dot>
            Error
          </Badge>
        </div>
      </div>
    </div>
  ),
}
