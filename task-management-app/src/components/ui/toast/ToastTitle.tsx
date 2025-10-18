import * as ToastPrimitive from '@radix-ui/react-toast'
import { cn } from '@/lib/utils'

export function ToastTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>) {
  return (
    <ToastPrimitive.Title
      className={cn('text-sm font-semibold', className)}
      {...props}
    />
  )
}
