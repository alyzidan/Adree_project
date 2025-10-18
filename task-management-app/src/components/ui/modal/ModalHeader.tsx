import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface ModalHeaderProps {
  children: ReactNode
  className?: string
}

export function ModalHeader({ children, className }: ModalHeaderProps) {
  return <div className={cn('mb-4 pr-8', className)}>{children}</div>
}
