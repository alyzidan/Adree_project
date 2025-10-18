import { useEffect, useState } from 'react'
import { useTasksStore } from './store'
import Button from '@/components/ui/button/Button'
import Card, {
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card/Card'
import Badge from '@/components/ui/badge/Badge'
import LoadingSpinner from '@/components/shared/LoadingSpinner'

function TestPage() {
  const { tasks, total, isLoading, error, fetchTasks, createTask, deleteTask } =
    useTasksStore()

  const [testLog, setTestLog] = useState<string[]>([])

  useEffect(() => {
    log('Component mounted')
    fetchTasks()
  }, [fetchTasks])

  const log = (message: string) => {
    setTestLog((prev) => [
      ...prev,
      `${new Date().toLocaleTimeString()}: ${message}`,
    ])
    console.log(message)
  }

  const handleCreateTest = async () => {
    log('Creating test task...')
    try {
      await createTask({
        title: 'Test Task - ' + new Date().toLocaleTimeString(),
        description: 'Auto-generated test task',
        status: 'todo',
        category: 'development',
        priority: 'medium',
        estimatedHours: 5,
      })
    } catch (err) {
      log(err as string)
    }
  }

  const handleDeleteFirst = async () => {
    if (tasks.length === 0) {
      return
    }
    log('Deleting first task...')
    try {
      await deleteTask(tasks[0].id)
    } catch (err) {
      log(err as string)
    }
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-6 text-3xl font-bold">Store Test Page</h1>

      {/* State Info */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Store State</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-medium">Total Tasks:</span>
              <Badge>{total}</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Loading:</span>
              <Badge variant={isLoading ? 'warning' : 'success'}>
                {isLoading ? 'Yes' : 'No'}
              </Badge>
            </div>
            {error && (
              <div className="flex items-center gap-2">
                <span className="font-medium">Error:</span>
                <Badge variant="danger">{error}</Badge>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button onClick={fetchTasks} disabled={isLoading}>
              Fetch Tasks
            </Button>
            <Button onClick={handleCreateTest} disabled={isLoading}>
              Create Test Task
            </Button>
            <Button
              onClick={handleDeleteFirst}
              variant="destructive"
              disabled={isLoading}
            >
              Delete First Task
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tasks List */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Tasks ({tasks.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center p-8">
              <LoadingSpinner />
            </div>
          ) : (
            <div className="space-y-2">
              {tasks.slice(0, 5).map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div>
                    <p className="font-medium">{task.title}</p>
                    <p className="text-sm text-neutral-500">{task.id}</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="primary">{task.status}</Badge>
                    <Badge variant="secondary">{task.category}</Badge>
                  </div>
                </div>
              ))}
              {tasks.length > 5 && (
                <p className="text-center text-sm text-neutral-500">
                  ... and {tasks.length - 5} more
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Test Log */}
      <Card>
        <CardHeader>
          <CardTitle>Test Log</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="max-h-64 overflow-y-auto rounded bg-neutral-900 p-4 font-mono text-xs text-green-400">
            {testLog.map((log, i) => (
              <div key={i}>{log}</div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default TestPage
