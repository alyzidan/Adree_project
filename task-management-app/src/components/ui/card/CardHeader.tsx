import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  divider?: boolean
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, divider = false, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'mb-4',
        divider && 'border-b border-neutral-200 pb-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)

CardHeader.displayName = 'CardHeader'
export default CardHeader
