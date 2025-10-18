import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { TASK_CATEGORY_LABELS } from '@/lib/constants'
import { CategoryData } from '../utils'

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface CategoryChartProps {
  data: CategoryData[]
}

function CategoryChart({ data }: CategoryChartProps) {
  const chartData = {
    labels: data.map((item) => TASK_CATEGORY_LABELS[item.category]),
    datasets: [
      {
        label: 'Tasks',
        data: data.map((item) => item.count),
        backgroundColor: [
          'rgba(14, 165, 233, 0.8)', // primary
          'rgba(168, 85, 247, 0.8)', // secondary
          'rgba(34, 197, 94, 0.8)', // success
          'rgba(239, 68, 68, 0.8)', // danger
          'rgba(245, 158, 11, 0.8)', // warning
          'rgba(115, 115, 115, 0.8)', // neutral
        ],
        borderColor: [
          'rgba(14, 165, 233, 1)',
          'rgba(168, 85, 247, 1)',
          'rgba(34, 197, 94, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(115, 115, 115, 1)',
        ],
        borderWidth: 2,
        borderRadius: 8,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
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
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          font: {
            size: 12,
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
      x: {
        ticks: {
          font: {
            size: 12,
          },
        },
        grid: {
          display: false,
        },
      },
    },
  }

  return (
    <div className="h-[300px] w-full">
      <Bar data={chartData} options={options} />
    </div>
  )
}

export default CategoryChart
