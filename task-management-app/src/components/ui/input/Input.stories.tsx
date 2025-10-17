import type { Meta, StoryObj } from '@storybook/react'
import { Search, Mail, Lock, User, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import { prefault, z } from 'zod'
import Input from './Input'
import React from 'react'

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

// Zod Validation Example
const emailSchema = z.string().email('Invalid email address')

const EmailValidationWrapper = () => {
  const [email, setEmail] = React.useState('')
  const [error, setError] = React.useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    const result = emailSchema.safeParse(value)
    setError(result.success ? '' : result.error.errors[0].message)
  }

  return (
    <Input
      label="Email (with Zod validation)"
      placeholder="Enter your email"
      type="email"
      value={email}
      onChange={handleChange}
      error={error}
      leftIcon={<Mail className="h-4 w-4" />}
      rightIcon={
        error ? <AlertCircle className="h-4 w-4 text-red-500" /> : undefined
      }
    />
  )
}

export const WithZodValidation = {
  render: () => <EmailValidationWrapper />,
}

const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')

export const ComplexZodValidation: Story = {
  render: () => {
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | undefined>()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setPassword(value)

      const result = passwordSchema.safeParse(value)
      setError(result.success ? undefined : result.error.errors[0].message)
    }

    return (
      <Input
        label="Password (Complex validation)"
        type="password"
        placeholder="Enter strong password"
        value={password}
        onChange={handleChange}
        error={error}
        helperText={
          !error ? 'Min 8 chars with uppercase, lowercase & number' : undefined
        }
        leftIcon={<Lock className="h-4 w-4" />}
        rightIcon={
          error ? (
            <AlertCircle className="h-4 w-4 text-danger-500" />
          ) : undefined
        }
      />
    )
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
