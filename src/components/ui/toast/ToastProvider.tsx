import * as ToastPrimitive from '@radix-ui/react-toast'

export function ToastProvider({
  ...props
}: React.ComponentPropsWithoutRef<typeof ToastPrimitive.Provider>) {
  return <ToastPrimitive.Provider {...props} />
}
