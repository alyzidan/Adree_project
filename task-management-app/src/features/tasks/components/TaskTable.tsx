import { useState } from 'react'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table'
import Badge from '@/components/ui/badge/Badge'
import Button from '@/components/ui/button/Button'
import { Pencil, Trash2, Calendar, Clock } from 'lucide-react'
import { Task } from '../types'
import {
  STATUS_COLORS,
  PRIORITY_COLORS,
  TASK_STATUS_LABELS,
  TASK_CATEGORY_LABELS,
  TASK_PRIORITY_LABELS,
} from '@/lib/constants'
import { formatDate } from '@/lib/utils'
import TaskModal from './TaskModal'
import DeleteTaskDialog from './DeleteTaskDialog'

interface TaskTableProps {
  tasks: Task[]
}

function TaskTable({ tasks }: TaskTableProps) {
  const [editingTask, setEditingTask] = useState<Task | null>(null)
  const [deletingTaskId, setDeletingTaskId] = useState<string | null>(null)

  return (
    <>
      <div className="overflow-hidden rounded-lg border border-neutral-200">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Task</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Hours</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                {/* Title & Description */}
                <TableCell className="max-w-xs">
                  <div>
                    <p className="font-medium text-neutral-900">{task.title}</p>
                    {task.description && (
                      <p className="mt-1 line-clamp-1 text-sm text-neutral-500">
                        {task.description}
                      </p>
                    )}
                    {task.assignee && (
                      <p className="mt-1 text-xs text-neutral-400">
                        Assigned to: {task.assignee}
                      </p>
                    )}
                  </div>
                </TableCell>

                {/* Status */}
                <TableCell>
                  <Badge variant={STATUS_COLORS[task.status]} dot>
                    {TASK_STATUS_LABELS[task.status]}
                  </Badge>
                </TableCell>

                {/* Category */}
                <TableCell>
                  <span className="text-sm text-neutral-700">
                    {TASK_CATEGORY_LABELS[task.category]}
                  </span>
                </TableCell>

                {/* Priority */}
                <TableCell>
                  <Badge variant={PRIORITY_COLORS[task.priority]} size="sm">
                    {TASK_PRIORITY_LABELS[task.priority]}
                  </Badge>
                </TableCell>

                {/* Due Date */}
                <TableCell>
                  {task.dueDate ? (
                    <div className="flex items-center gap-1 text-sm text-neutral-600">
                      <Calendar className="h-3 w-3" />
                      {formatDate(task.dueDate)}
                    </div>
                  ) : (
                    <span className="text-sm text-neutral-400">—</span>
                  )}
                </TableCell>

                {/* Estimated Hours */}
                <TableCell>
                  <div className="flex items-center gap-1 text-sm text-neutral-600">
                    <Clock className="h-3 w-3" />
                    {task.estimatedHours}h
                  </div>
                </TableCell>

                {/* Actions */}
                <TableCell className="text-right">
                  <div className="flex justify-end gap-1">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setEditingTask(task)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setDeletingTaskId(task.id)}
                    >
                      <Trash2 className="h-4 w-4 text-danger-600" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Edit Modal */}
      {editingTask && (
        <TaskModal
          open={!!editingTask}
          onOpenChange={(open) => !open && setEditingTask(null)}
          mode="edit"
          task={editingTask}
        />
      )}

      {/* Delete Dialog */}
      {deletingTaskId && (
        <DeleteTaskDialog
          taskId={deletingTaskId}
          onClose={() => setDeletingTaskId(null)}
        />
      )}
    </>
  )
}

export default TaskTable
