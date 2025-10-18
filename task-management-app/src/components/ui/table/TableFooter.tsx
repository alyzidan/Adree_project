import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export const TableFooter = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'border-t bg-neutral-50 font-medium [&>tr]:last:border-b-0',
      className
    )}
    {...props}
  />
))

TableFooter.displayName = 'TableFooter'
