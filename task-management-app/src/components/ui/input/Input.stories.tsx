import type { Meta, StoryObj } from '@storybook/react'
import { Search, Mail, Lock, User } from 'lucide-react'
import Input from './Input'

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
  },
}

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    error: 'Please enter a valid email address',
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    helperText: 'Must be at least 3 characters',
  },
}

export const WithLeftIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search tasks...',
    leftIcon: <Search className="h-4 w-4" />,
  },
}

export const WithRightIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    rightIcon: <Mail className="h-4 w-4" />,
  },
}

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    leftIcon: <Lock className="h-4 w-4" />,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit',
    disabled: true,
  },
}

export const Number: Story = {
  args: {
    label: 'Estimated Hours',
    type: 'number',
    placeholder: '0',
    min: 0,
    step: 0.5,
  },
}

export const Date: Story = {
  args: {
    label: 'Due Date',
    type: 'date',
  },
}

export const AllStates: Story = {
  render: () => (
    <div className="flex w-full flex-col gap-6">
      <Input label="Default" placeholder="Enter text" />
      <Input
        label="With Icon"
        placeholder="Search..."
        leftIcon={<Search className="h-4 w-4" />}
      />
      <Input
        label="With Helper"
        placeholder="Username"
        helperText="Choose a unique username"
      />
      <Input
        label="With Error"
        placeholder="Email"
        error="Invalid email address"
      />
      <Input label="Disabled" placeholder="Cannot edit" disabled />
    </div>
  ),
}
