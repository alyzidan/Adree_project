import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'
import Select from '@/components/ui/select/Select'
import Button from '@/components/ui/button/Button'
import { useTasks } from '../hooks'
import { Task } from '../types'

function TaskSort() {
  const { sort, setSort } = useTasks()

  const sortOptions = [
    { value: 'createdAt', label: 'Date Created' },
    { value: 'updatedAt', label: 'Date Updated' },
    { value: 'title', label: 'Title' },
    { value: 'dueDate', label: 'Due Date' },
    { value: 'estimatedHours', label: 'Estimated Hours' },
    { value: 'priority', label: 'Priority' },
  ]

  const toggleOrder = () => {
    setSort({
      ...sort,
      order: sort.order === 'asc' ? 'desc' : 'asc',
    })
  }

  const handleFieldChange = (value: string) => {
    setSort({
      field: value as keyof Task,
      order: sort.order,
    })
  }

  return (
    <div className="flex items-center gap-2">
      <div className="w-48">
        <Select
          options={sortOptions}
          value={sort.field}
          onValueChange={handleFieldChange}
          placeholder="Sort by"
        />
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={toggleOrder}
        title={sort.order === 'asc' ? 'Ascending' : 'Descending'}
      >
        {sort.order === 'asc' ? (
          <ArrowUp className="h-4 w-4" />
        ) : (
          <ArrowDown className="h-4 w-4" />
        )}
      </Button>
    </div>
  )
}

export default TaskSort
