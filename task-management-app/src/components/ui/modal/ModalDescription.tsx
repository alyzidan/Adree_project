import { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { cn } from '@/lib/utils'

export interface ModalDescriptionProps {
  children: ReactNode
  className?: string
}

export function ModalDescription({
  children,
  className,
}: ModalDescriptionProps) {
  return (
    <Dialog.Description
      className={cn('mt-2 text-sm text-neutral-600', className)}
    >
      {children}
    </Dialog.Description>
  )
}
