import { ReactNode } from 'react'
import Card, { CardContent } from '@/components/ui/card/Card'
import { cn } from '@/lib/utils'

interface MetricCardProps {
  title: string
  value: string | number
  icon: ReactNode
  trend?: {
    value: number
    isPositive: boolean
  }
  color?: 'primary' | 'success' | 'danger' | 'warning' | 'neutral'
  className?: string
}

function MetricCard({
  title,
  value,
  icon,
  trend,
  color = 'primary',
  className,
}: MetricCardProps) {
  const colorClasses = {
    primary: 'bg-primary-100 text-primary-600',
    success: 'bg-success-100 text-success-600',
    danger: 'bg-danger-100 text-danger-600',
    warning: 'bg-warning-100 text-warning-600',
    neutral: 'bg-neutral-100 text-neutral-600',
  }

  return (
    <Card className={cn('transition-all hover:shadow-md', className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-neutral-600">{title}</p>
            <p className="mt-2 text-3xl font-bold text-neutral-900">{value}</p>
            {trend && (
              <div className="mt-2 flex items-center gap-1">
                <span
                  className={cn(
                    'text-xs font-medium',
                    trend.isPositive ? 'text-success-600' : 'text-danger-600'
                  )}
                >
                  {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
                </span>
                <span className="text-xs text-neutral-500">vs last week</span>
              </div>
            )}
          </div>
          <div className={cn('rounded-lg p-3', colorClasses[color])}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default MetricCard
