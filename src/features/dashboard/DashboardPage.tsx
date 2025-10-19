import Container from '@/components/layout/Container'
import OverviewStats from './components/OverviewStats'
import TasksCharts from './components/TasksCharts'
import ActivityTimeline from './components/ActivityTimeline'

function DashboardPage() {
  return (
    <Container>
      <div className="space-y-6 pb-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Dashboard</h1>
          <p className="mt-2 text-neutral-600">
            Overview of your tasks and performance metrics
          </p>
        </div>

        {/* Overview Stats */}
        <OverviewStats />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Charts - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <TasksCharts />
          </div>

          {/* Activity Timeline - Takes 1 column */}
          <div className="lg:col-span-1">
            <ActivityTimeline />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default DashboardPage
