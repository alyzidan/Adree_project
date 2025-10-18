import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('mt-4 text-sm text-neutral-500', className)}
    {...props}
  />
))

TableCaption.displayName = 'TableCaption'
