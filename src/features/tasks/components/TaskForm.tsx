import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createTaskSchema, CreateTaskSchema } from '../schema'
import Input from '@/components/ui/input/Input'
import Select from '@/components/ui/select/Select'
import Button from '@/components/ui/button/Button'
import { Task } from '../types'
import {
  TASK_STATUS,
  TASK_STATUS_LABELS,
  TASK_CATEGORY,
  TASK_CATEGORY_LABELS,
  TASK_PRIORITY,
  TASK_PRIORITY_LABELS,
} from '@/lib/constants'

interface TaskFormProps {
  onSubmit: (data: CreateTaskSchema) => void | Promise<void>
  onCancel: () => void
  defaultValues?: Partial<Task>
  isLoading?: boolean
}

function TaskForm({
  onSubmit,
  onCancel,
  defaultValues,
  isLoading = false,
}: TaskFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CreateTaskSchema>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: defaultValues
      ? {
          title: defaultValues.title || '',
          description: defaultValues.description || '',
          status: defaultValues.status || TASK_STATUS.TODO,
          category: defaultValues.category || TASK_CATEGORY.OTHER,
          priority: defaultValues.priority || TASK_PRIORITY.MEDIUM,
          assignee: defaultValues.assignee || '',
          dueDate: defaultValues.dueDate || '',
          estimatedHours: defaultValues.estimatedHours || 0,
        }
      : {
          status: TASK_STATUS.TODO,
          category: TASK_CATEGORY.OTHER,
          priority: TASK_PRIORITY.MEDIUM,
          estimatedHours: 0,
        },
  })

  const statusOptions = Object.values(TASK_STATUS).map((status) => ({
    value: status,
    label: TASK_STATUS_LABELS[status],
  }))

  const categoryOptions = Object.values(TASK_CATEGORY).map((category) => ({
    value: category,
    label: TASK_CATEGORY_LABELS[category],
  }))

  const priorityOptions = Object.values(TASK_PRIORITY).map((priority) => ({
    value: priority,
    label: TASK_PRIORITY_LABELS[priority],
  }))

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Title */}
      <Input
        label="Task Title"
        placeholder="Enter task title"
        error={errors.title?.message}
        {...register('title')}
        disabled={isLoading}
      />

      {/* Description */}
      <div>
        <label
          htmlFor="description-field"
          className="mb-2 block text-sm font-medium text-neutral-700"
        >
          Description
        </label>
        <textarea
          id="description-field"
          className="flex min-h-[80px] w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm transition-colors placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Enter task description (optional)"
          {...register('description')}
          disabled={isLoading}
        />
        {errors.description && (
          <p className="mt-1.5 text-sm text-danger-600">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Status */}
      <Select
        label="Status"
        options={statusOptions}
        value={watch('status')}
        onValueChange={(value) =>
          setValue('status', value as CreateTaskSchema['status'])
        }
        error={errors.status?.message}
        disabled={isLoading}
      />

      {/* Category */}
      <Select
        label="Category"
        options={categoryOptions}
        value={watch('category')}
        onValueChange={(value) =>
          setValue('category', value as CreateTaskSchema['category'])
        }
        error={errors.category?.message}
        disabled={isLoading}
      />

      {/* Priority */}
      <Select
        label="Priority"
        options={priorityOptions}
        value={watch('priority')}
        onValueChange={(value) =>
          setValue('priority', value as CreateTaskSchema['priority'])
        }
        error={errors.priority?.message}
        disabled={isLoading}
      />

      {/* Assignee */}
      <Input
        label="Assignee (optional)"
        placeholder="Enter assignee name"
        error={errors.assignee?.message}
        {...register('assignee')}
        disabled={isLoading}
      />

      {/* Due Date */}
      <Input
        label="Due Date (optional)"
        type="date"
        error={errors.dueDate?.message}
        {...register('dueDate')}
        disabled={isLoading}
      />

      {/* Estimated Hours */}
      <Input
        label="Estimated Hours"
        type="number"
        placeholder="0"
        step="0.5"
        min="0"
        error={errors.estimatedHours?.message}
        {...register('estimatedHours', { valueAsNumber: true })}
        disabled={isLoading}
      />

      {/* Form Actions */}
      <div className="flex justify-end gap-3 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isLoading}
        >
          Cancel
        </Button>
        <Button type="submit" isLoading={isLoading}>
          {defaultValues ? 'Update Task' : 'Create Task'}
        </Button>
      </div>
    </form>
  )
}

export default TaskForm
