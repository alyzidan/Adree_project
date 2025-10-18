import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface ResponsiveTableProps {
  children: ReactNode
  className?: string
}

export function ResponsiveTable({ children, className }: ResponsiveTableProps) {
  return (
    <div className={cn('w-full', className)}>
      {/* Desktop View */}
      <div className="hidden overflow-x-auto rounded-lg border border-neutral-200 md:block">
        {children}
      </div>

      {/* Mobile View - Will be handled by parent component */}
      <div className="md:hidden">{children}</div>
    </div>
  )
}
