import * as ToastPrimitive from '@radix-ui/react-toast'
import { cn } from '@/lib/utils'

export function ToastDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>) {
  return (
    <ToastPrimitive.Description
      className={cn('text-sm opacity-90', className)}
      {...props}
    />
  )
}
