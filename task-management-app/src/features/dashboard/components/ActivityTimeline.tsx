import { Clock, Circle } from 'lucide-react'
import Card, {
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card/Card'
import Badge from '@/components/ui/badge/Badge'
import { useDashboardMetrics } from '../hooks'
import { formatRelativeTime } from '@/lib/utils'
import {
  STATUS_COLORS,
  TASK_STATUS_LABELS,
  TASK_CATEGORY_LABELS,
} from '@/lib/constants'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import EmptyState from '@/components/shared/EmptyState'

function ActivityTimeline() {
  const { recentTasks, isLoading } = useDashboardMetrics()

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-12">
            <LoadingSpinner />
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        {recentTasks.length === 0 ? (
          <EmptyState
            icon={<Clock className="h-8 w-8" />}
            title="No recent activity"
            description="Tasks will appear here as they are created or updated."
          />
        ) : (
          <div className="space-y-4">
            {recentTasks.map((task, index) => (
              <div key={task.id} className="flex gap-4">
                {/* Timeline indicator */}
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      index === 0 ? 'bg-primary-100' : 'bg-neutral-100'
                    }`}
                  >
                    <Circle
                      className={`h-3 w-3 ${
                        index === 0
                          ? 'fill-primary-600 text-primary-600'
                          : 'fill-neutral-400 text-neutral-400'
                      }`}
                    />
                  </div>
                  {index < recentTasks.length - 1 && (
                    <div className="w-px flex-1 bg-neutral-200" />
                  )}
                </div>

                {/* Task info */}
                <div className="flex-1 pb-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="font-medium text-neutral-900">
                        {task.title}
                      </p>
                      <p className="mt-1 text-sm text-neutral-600">
                        {TASK_CATEGORY_LABELS[task.category]}
                        {task.assignee && ` • ${task.assignee}`}
                      </p>
                    </div>
                    <Badge variant={STATUS_COLORS[task.status]} size="sm">
                      {TASK_STATUS_LABELS[task.status]}
                    </Badge>
                  </div>
                  <p className="mt-2 text-xs text-neutral-400">
                    {formatRelativeTime(task.updatedAt)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default ActivityTimeline
