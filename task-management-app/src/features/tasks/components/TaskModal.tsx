import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
} from '../../../components/ui/modal'
import TaskForm from './TaskForm'
import { useTaskMutations } from '../hooks'
import { Task } from '../types'
import { CreateTaskSchema } from '../schema'

interface TaskModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  mode: 'create' | 'edit'
  task?: Task
}

function TaskModal({ open, onOpenChange, mode, task }: TaskModalProps) {
  const { createTask, updateTask, isCreating, isUpdating } = useTaskMutations()

  const isLoading = isCreating || isUpdating

  const handleSubmit = async (data: CreateTaskSchema) => {
    try {
      if (mode === 'create') {
        await createTask(data)
      } else if (mode === 'edit' && task) {
        await updateTask(task.id, data)
      }
      onOpenChange(false)
    } catch (error) {
      // Error handling is done in useTaskMutations
      console.error('Form submission error:', error)
    }
  }

  const handleCancel = () => {
    onOpenChange(false)
  }

  return (
    <Modal open={open} onOpenChange={onOpenChange} size="lg">
      <ModalHeader>
        <ModalTitle>
          {mode === 'create' ? 'Create New Task' : 'Edit Task'}
        </ModalTitle>
        <ModalDescription>
          {mode === 'create'
            ? 'Fill in the details below to create a new task.'
            : 'Update the task information below.'}
        </ModalDescription>
      </ModalHeader>
      <ModalBody>
        <TaskForm
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          defaultValues={task}
          isLoading={isLoading}
        />
      </ModalBody>
    </Modal>
  )
}

export default TaskModal
