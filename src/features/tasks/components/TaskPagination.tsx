import { ChevronLeft, ChevronRight } from 'lucide-react'
import Button from '@/components/ui/button/Button'
import Select from '@/components/ui/select/Select'
import { useTasks } from '../hooks'

function TaskPagination() {
  const { pagination, totalPages, total, setPagination } = useTasks()

  const pageSizeOptions = [
    { value: '5', label: '5 per page' },
    { value: '10', label: '10 per page' },
    { value: '20', label: '20 per page' },
    { value: '50', label: '50 per page' },
  ]

  const handlePrevious = () => {
    if (pagination.page > 1) {
      setPagination({ page: pagination.page - 1 })
    }
  }

  const handleNext = () => {
    if (pagination.page < totalPages) {
      setPagination({ page: pagination.page + 1 })
    }
  }

  const handlePageSizeChange = (value: string) => {
    setPagination({ pageSize: parseInt(value), page: 1 })
  }

  const startItem = (pagination.page - 1) * pagination.pageSize + 1
  const endItem = Math.min(pagination.page * pagination.pageSize, total)

  return (
    <div className="flex flex-col items-center justify-between gap-4 rounded-lg border border-neutral-200 bg-white p-4 sm:flex-row">
      {/* Results Info */}
      <div className="text-sm text-neutral-600">
        Showing{' '}
        <span className="font-medium text-neutral-900">{startItem}</span> to{' '}
        <span className="font-medium text-neutral-900">{endItem}</span> of{' '}
        <span className="font-medium text-neutral-900">{total}</span> results
      </div>

      <div className="flex items-center gap-4">
        {/* Page Size Selector */}
        <div className="w-36">
          <Select
            options={pageSizeOptions}
            value={pagination.pageSize.toString()}
            onValueChange={handlePageSizeChange}
          />
        </div>

        {/* Page Navigation */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrevious}
            disabled={pagination.page === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-1">
            <span className="text-sm text-neutral-600">Page</span>
            <span className="text-sm font-medium text-neutral-900">
              {pagination.page}
            </span>
            <span className="text-sm text-neutral-600">of</span>
            <span className="text-sm font-medium text-neutral-900">
              {totalPages}
            </span>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleNext}
            disabled={pagination.page === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TaskPagination
