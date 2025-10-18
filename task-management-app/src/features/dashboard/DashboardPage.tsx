import Container from '@/components/layout/Container'
import OverviewStats from './components/OverviewStats'
import TasksCharts from './components/TasksCharts'
import ActivityTimeline from './components/ActivityTimeline'

function DashboardPage() {
  return (
    <Container>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Dashboard</h1>
          <p className="mt-2 text-neutral-600">
            Overview of your tasks and performance metrics
          </p>
        </div>

        {/* Overview Stats */}
        <OverviewStats />

        {/* Charts Section */}
        <TasksCharts />

        {/* Activity Timeline */}
        <ActivityTimeline />
      </div>
    </Container>
  )
}

export default DashboardPage
