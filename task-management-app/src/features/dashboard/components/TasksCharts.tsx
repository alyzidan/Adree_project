import Card, {
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card/Card'
import CategoryChart from './CategoryChart'
import StatusChart from './StatusChart'
import { useDashboardMetrics } from '../hooks'
import LoadingSpinner from '@/components/shared/LoadingSpinner'

function TasksCharts() {
  const { categoryData, statusData, isLoading } = useDashboardMetrics()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Tasks by Category */}
      <Card>
        <CardHeader>
          <CardTitle>Tasks by Category</CardTitle>
        </CardHeader>
        <CardContent>
          {categoryData.length > 0 ? (
            <CategoryChart data={categoryData} />
          ) : (
            <p className="py-12 text-center text-neutral-500">
              No data available
            </p>
          )}
        </CardContent>
      </Card>

      {/* Tasks by Status */}
      <Card>
        <CardHeader>
          <CardTitle>Tasks by Status</CardTitle>
        </CardHeader>
        <CardContent>
          {statusData.length > 0 ? (
            <StatusChart data={statusData} />
          ) : (
            <p className="py-12 text-center text-neutral-500">
              No data available
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default TasksCharts
