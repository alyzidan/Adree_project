import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Select from './Select'

const meta = {
  title: 'UI/Select',
  component: Select,
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
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const sampleOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'mango', label: 'Mango' },
]

const taskStatusOptions = [
  { value: 'todo', label: 'To Do' },
  { value: 'in_progress', label: 'In Progress' },
  { value: 'completed', label: 'Completed' },
  { value: 'cancelled', label: 'Cancelled' },
]

const taskCategoryOptions = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'sales', label: 'Sales' },
  { value: 'support', label: 'Support' },
  { value: 'other', label: 'Other' },
]

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <Select
        options={sampleOptions}
        value={value}
        onValueChange={setValue}
        placeholder="Select a fruit"
      />
    )
  },
}

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <Select
        label="Favorite Fruit"
        options={sampleOptions}
        value={value}
        onValueChange={setValue}
        placeholder="Choose a fruit"
      />
    )
  },
}

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <Select
        label="Status"
        options={taskStatusOptions}
        value={value}
        onValueChange={setValue}
        error="Please select a status"
      />
    )
  },
}

export const WithHelperText: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <Select
        label="Category"
        options={taskCategoryOptions}
        value={value}
        onValueChange={setValue}
        helperText="Select the task category"
      />
    )
  },
}

export const Disabled: Story = {
  render: () => {
    return (
      <Select
        label="Disabled Select"
        options={sampleOptions}
        disabled
        placeholder="Cannot select"
      />
    )
  },
}

export const WithDisabledOptions: Story = {
  render: () => {
    const [value, setValue] = useState('')
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2 (disabled)', disabled: true },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4 (disabled)', disabled: true },
      { value: 'option5', label: 'Option 5' },
    ]

    return (
      <Select
        label="Select with Disabled Options"
        options={options}
        value={value}
        onValueChange={setValue}
      />
    )
  },
}

export const TaskStatus: Story = {
  render: () => {
    const [value, setValue] = useState('todo')
    return (
      <Select
        label="Task Status"
        options={taskStatusOptions}
        value={value}
        onValueChange={setValue}
      />
    )
  },
}

export const TaskCategory: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <Select
        label="Task Category"
        options={taskCategoryOptions}
        value={value}
        onValueChange={setValue}
        placeholder="Select category"
      />
    )
  },
}

export const AllStates: Story = {
  render: () => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')

    return (
      <div className="flex w-full flex-col gap-6">
        <Select
          label="Default"
          options={sampleOptions}
          value={value1}
          onValueChange={setValue1}
        />
        <Select
          label="With Helper"
          options={sampleOptions}
          value={value2}
          onValueChange={setValue2}
          helperText="Choose your favorite"
        />
        <Select
          label="With Error"
          options={sampleOptions}
          value={value3}
          onValueChange={setValue3}
          error="This field is required"
        />
        <Select
          label="Disabled"
          options={sampleOptions}
          disabled
          placeholder="Cannot select"
        />
      </div>
    )
  },
}
