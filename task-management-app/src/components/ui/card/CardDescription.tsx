import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-neutral-600', className)} {...props}>
    {children}
  </p>
))

CardDescription.displayName = 'CardDescription'
export default CardDescription
