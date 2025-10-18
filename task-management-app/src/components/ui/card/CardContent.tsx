import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props}>
      {children}
    </div>
  )
)

CardContent.displayName = 'CardContent'
export default CardContent
