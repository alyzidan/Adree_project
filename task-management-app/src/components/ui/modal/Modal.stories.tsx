import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
} from './'
import Button from '../button/Button'
import Input from '../input/Input'

const meta = {
  title: 'UI/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

// ✅ Default
export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onOpenChange={setOpen}>
          <ModalHeader>
            <ModalTitle>Modal Title</ModalTitle>
            <ModalDescription>
              This is a modal description. It provides context about what this
              modal is for.
            </ModalDescription>
          </ModalHeader>
          <ModalBody>
            <p className="text-sm text-neutral-700">
              This is the modal content. You can put any content here.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
}

// ✅ Small
export const Small: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Small Modal</Button>
        <Modal open={open} onOpenChange={setOpen} size="sm">
          <ModalHeader>
            <ModalTitle>Small Modal</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p className="text-sm text-neutral-700">This is a small modal.</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
}

// ✅ Large
export const Large: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Large Modal</Button>
        <Modal open={open} onOpenChange={setOpen} size="lg">
          <ModalHeader>
            <ModalTitle>Large Modal</ModalTitle>
            <ModalDescription>
              This modal has more space for content.
            </ModalDescription>
          </ModalHeader>
          <ModalBody>
            <div className="space-y-4">
              <p className="text-sm text-neutral-700">
                This is a large modal with more content space.
              </p>
              <p className="text-sm text-neutral-700">
                You can include multiple paragraphs or complex layouts here.
              </p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Save</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
}

// ✅ With Form
export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Create Task</Button>
        <Modal open={open} onOpenChange={setOpen} size="md">
          <ModalHeader>
            <ModalTitle>Create New Task</ModalTitle>
            <ModalDescription>
              Fill in the details to create a new task.
            </ModalDescription>
          </ModalHeader>
          <ModalBody>
            <form className="space-y-4">
              <Input label="Task Title" placeholder="Enter task title" />
              <Input
                label="Description"
                placeholder="Enter description"
                type="text"
              />
              <Input label="Due Date" type="date" />
              <Input
                label="Estimated Hours"
                type="number"
                placeholder="0"
                min={0}
                step={0.5}
              />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Create Task</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
}

// ✅ Delete Confirmation
export const DeleteConfirmation: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button variant="destructive" onClick={() => setOpen(true)}>
          Delete Item
        </Button>
        <Modal open={open} onOpenChange={setOpen} size="sm">
          <ModalHeader>
            <ModalTitle>Delete Task?</ModalTitle>
            <ModalDescription>
              This action cannot be undone. This will permanently delete the
              task.
            </ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => setOpen(false)}>
              Delete
            </Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
}

// ✅ All Sizes
export const AllSizes: Story = {
  render: () => {
    const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md')
    const [open, setOpen] = useState(false)

    return (
      <>
        <div className="flex gap-2">
          {(['sm', 'md', 'lg', 'xl'] as const).map((s) => (
            <Button
              key={s}
              onClick={() => {
                setSize(s)
                setOpen(true)
              }}
            >
              {s.toUpperCase()}
            </Button>
          ))}
        </div>

        <Modal open={open} onOpenChange={setOpen} size={size}>
          <ModalHeader>
            <ModalTitle>{size.toUpperCase()} Modal</ModalTitle>
            <ModalDescription>This is a {size} sized modal.</ModalDescription>
          </ModalHeader>
          <ModalBody>
            <p className="text-sm text-neutral-700">Modal content goes here.</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
}
