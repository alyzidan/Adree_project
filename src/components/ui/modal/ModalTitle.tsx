import { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { cn } from '@/lib/utils'

export interface ModalTitleProps {
  children: ReactNode
  className?: string
}

export function ModalTitle({ children, className }: ModalTitleProps) {
  return (
    <Dialog.Title
      className={cn('text-xl font-semibold text-neutral-900', className)}
    >
      {children}
    </Dialog.Title>
  )
}
