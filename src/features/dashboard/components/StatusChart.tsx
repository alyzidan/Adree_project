import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { TASK_STATUS_LABELS } from '@/lib/constants'
import { StatusData } from '../utils'

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend)

interface StatusChartProps {
  data: StatusData[]
}

function StatusChart({ data }: StatusChartProps) {
  const chartData = {
    labels: data.map((item) => TASK_STATUS_LABELS[item.status]),
    datasets: [
      {
        label: 'Tasks',
        data: data.map((item) => item.count),
        backgroundColor: [
          'rgba(115, 115, 115, 0.8)', // todo - neutral
          'rgba(14, 165, 233, 0.8)', // in_progress - primary
          'rgba(34, 197, 94, 0.8)', // completed - success
          'rgba(239, 68, 68, 0.8)', // cancelled - danger
        ],
        borderColor: [
          'rgba(115, 115, 115, 1)',
          'rgba(14, 165, 233, 1)',
          'rgba(34, 197, 94, 1)',
          'rgba(239, 68, 68, 1)',
        ],
        borderWidth: 2,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          font: {
            size: 12,
          },
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        borderRadius: 8,
        titleFont: {
          size: 14,
          weight: 'bold' as const,
        },
        bodyFont: {
          size: 13,
        },
      },
    },
  }

  return (
    <div className="flex h-[300px] w-full items-center justify-center">
      <Doughnut data={chartData} options={options} />
    </div>
  )
}

export default StatusChart
