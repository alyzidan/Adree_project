import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  responsive?: boolean
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ className, responsive = true, ...props }, ref) => {
    if (responsive) {
      return (
        <div className="relative w-full overflow-auto rounded-lg border border-neutral-200">
          <table
            ref={ref}
            className={cn('w-full caption-bottom text-sm', className)}
            {...props}
          />
        </div>
      )
    }

    return (
      <table
        ref={ref}
        className={cn('w-full caption-bottom text-sm', className)}
        {...props}
      />
    )
  }
)

Table.displayName = 'Table'
