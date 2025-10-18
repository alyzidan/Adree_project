import type { Meta, StoryObj } from '@storybook/react'
import { Toaster } from './Toaster'
import { toast } from './useToast'
import Button from '../button/Button'

const meta = {
  title: 'UI/Toast',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div>
      <Button
        onClick={() => {
          toast({
            title: 'Notification',
            description: 'This is a default toast notification.',
          })
        }}
      >
        Show Toast
      </Button>
      <Toaster />
    </div>
  ),
}

export const Success: Story = {
  render: () => (
    <div>
      <Button
        onClick={() => {
          toast({
            variant: 'success',
            title: 'Success!',
            description: 'Your task has been created successfully.',
          })
        }}
      >
        Show Success
      </Button>
      <Toaster />
    </div>
  ),
}

export const Error: Story = {
  render: () => (
    <div>
      <Button
        onClick={() => {
          toast({
            variant: 'error',
            title: 'Error',
            description: 'Something went wrong. Please try again.',
          })
        }}
      >
        Show Error
      </Button>
      <Toaster />
    </div>
  ),
}

export const Warning: Story = {
  render: () => (
    <div>
      <Button
        onClick={() => {
          toast({
            variant: 'warning',
            title: 'Warning',
            description: 'This action cannot be undone.',
          })
        }}
      >
        Show Warning
      </Button>
      <Toaster />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button
        onClick={() => {
          toast({
            title: 'Default Toast',
            description: 'This is a default notification.',
          })
        }}
      >
        Default
      </Button>
      <Button
        onClick={() => {
          toast({
            variant: 'success',
            title: 'Success!',
            description: 'Operation completed successfully.',
          })
        }}
      >
        Success
      </Button>
      <Button
        onClick={() => {
          toast({
            variant: 'error',
            title: 'Error!',
            description: 'An error occurred.',
          })
        }}
      >
        Error
      </Button>
      <Button
        onClick={() => {
          toast({
            variant: 'warning',
            title: 'Warning!',
            description: 'Please be careful.',
          })
        }}
      >
        Warning
      </Button>
      <Toaster />
    </div>
  ),
}
