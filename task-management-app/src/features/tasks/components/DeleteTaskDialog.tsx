import { useState } from 'react'
import { Trash2 } from 'lucide-react'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import { useTaskMutations } from '../hooks'

interface DeleteTaskDialogProps {
  taskId: string
  onClose: () => void
}

function DeleteTaskDialog({ taskId, onClose }: DeleteTaskDialogProps) {
  const [open, setOpen] = useState(true)
  const { deleteTask, isDeleting } = useTaskMutations()

  const handleConfirm = async () => {
    try {
      await deleteTask(taskId)
      setOpen(false)
      onClose()
    } catch (error) {
      // Error handling is done in useTaskMutations
      console.error('Delete error:', error)
    }
  }

  const handleCancel = () => {
    setOpen(false)
    onClose()
  }

  return (
    <ConfirmDialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen)
        if (!isOpen) onClose()
      }}
      title="Delete Task?"
      description="This action cannot be undone. This will permanently delete the task and remove it from the system."
      confirmText="Delete"
      cancelText="Cancel"
      variant="destructive"
      icon={<Trash2 className="h-12 w-12" />}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
      isLoading={isDeleting}
    />
  )
}

export default DeleteTaskDialog
