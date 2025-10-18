import { CheckCircle2, Clock, FolderKanban, AlertCircle } from 'lucide-react'
import MetricCard from './MetricCard'
import { useDashboardMetrics } from '../hooks'
import LoadingSpinner from '@/components/shared/LoadingSpinner'

function OverviewStats() {
  const { metrics, isLoading } = useDashboardMetrics()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  if (!metrics) return null

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {/* Total Tasks */}
      <MetricCard
        title="Total Tasks"
        value={metrics.totalTasks}
        icon={<FolderKanban className="h-6 w-6" />}
        color="primary"
      />

      {/* Completed Tasks */}
      <MetricCard
        title="Completed"
        value={metrics.completedTasks}
        icon={<CheckCircle2 className="h-6 w-6" />}
        color="success"
        trend={
          metrics.totalTasks > 0
            ? {
                value: metrics.completionRate,
                isPositive: metrics.completionRate >= 50,
              }
            : undefined
        }
      />

      {/* Average Hours */}
      <MetricCard
        title="Avg. Hours"
        value={`${metrics.averageEstimatedHours}h`}
        icon={<Clock className="h-6 w-6" />}
        color="warning"
      />

      {/* Overdue Tasks */}
      <MetricCard
        title="Overdue"
        value={metrics.overdueTasks}
        icon={<AlertCircle className="h-6 w-6" />}
        color={metrics.overdueTasks > 0 ? 'danger' : 'neutral'}
      />
    </div>
  )
}

export default OverviewStats
