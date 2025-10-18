import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, as: Component = 'h3', children, ...props }, ref) => (
    <Component
      ref={ref}
      className={cn('text-lg font-semibold text-neutral-900', className)}
      {...props}
    >
      {children}
    </Component>
  )
)

CardTitle.displayName = 'CardTitle'
export default CardTitle
