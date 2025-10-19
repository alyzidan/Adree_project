import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface ModalBodyProps {
  children: ReactNode
  className?: string
}

export function ModalBody({ children, className }: ModalBodyProps) {
  return <div className={cn('py-4', className)}>{children}</div>
}
