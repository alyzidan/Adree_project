import { useState } from 'react'
import { Pencil, Trash2, Calendar, Clock, User } from 'lucide-react'
import Card, { CardContent } from '@/components/ui/card/Card'
import Badge from '@/components/ui/badge/Badge'
import Button from '@/components/ui/button/Button'
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

interface TaskCardsProps {
  tasks: Task[]
}

function TaskCards({ tasks }: TaskCardsProps) {
  const [editingTask, setEditingTask] = useState<Task | null>(null)
  const [deletingTaskId, setDeletingTaskId] = useState<string | null>(null)

  return (
    <>
      <div className="space-y-3">
        {tasks.map((task) => (
          <Card key={task.id} hoverable>
            <CardContent className="p-4">
              {/* Header */}
              <div className="mb-3 flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-neutral-900">
                    {task.title}
                  </h3>
                  {task.description && (
                    <p className="mt-1 line-clamp-2 text-sm text-neutral-600">
                      {task.description}
                    </p>
                  )}
                </div>
                <Badge variant={STATUS_COLORS[task.status]} dot size="sm">
                  {TASK_STATUS_LABELS[task.status]}
                </Badge>
              </div>

              {/* Info Grid */}
              <div className="space-y-2 border-t border-neutral-100 pt-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500">Category</span>
                  <span className="font-medium text-neutral-900">
                    {TASK_CATEGORY_LABELS[task.category]}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500">Priority</span>
                  <Badge variant={PRIORITY_COLORS[task.priority]} size="sm">
                    {TASK_PRIORITY_LABELS[task.priority]}
                  </Badge>
                </div>

                {task.assignee && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-500">Assignee</span>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3 text-neutral-400" />
                      <span className="text-neutral-900">{task.assignee}</span>
                    </div>
                  </div>
                )}

                {task.dueDate && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-500">Due Date</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-neutral-400" />
                      <span className="text-neutral-900">
                        {formatDate(task.dueDate)}
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500">Estimated</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-neutral-400" />
                    <span className="text-neutral-900">
                      {task.estimatedHours}h
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-4 flex gap-2 border-t border-neutral-100 pt-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => setEditingTask(task)}
                  leftIcon={<Pencil className="h-4 w-4" />}
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  className="flex-1"
                  onClick={() => setDeletingTaskId(task.id)}
                  leftIcon={<Trash2 className="h-4 w-4" />}
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
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

export default TaskCards
