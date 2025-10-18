import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface TableCardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function TableCard({ children, className, onClick }: TableCardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-neutral-200 bg-white p-4 shadow-sm transition-all hover:shadow-md md:hidden',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export interface TableCardRowProps {
  label: string
  value: ReactNode
  className?: string
}

export function TableCardRow({ label, value, className }: TableCardRowProps) {
  return (
    <div className={cn('flex items-center justify-between py-2', className)}>
      <span className="text-sm font-medium text-neutral-600">{label}</span>
      <span className="text-sm text-neutral-900">{value}</span>
    </div>
  )
}
