import { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export default function Modal({
  open,
  onOpenChange,
  children,
  size = 'md',
}: ModalProps) {
  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full mx-4',
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay
          className={cn(
            'fixed inset-0 z-40 bg-black/50 backdrop-blur-sm',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0'
          )}
        />

        {/* Modal Content */}
        <Dialog.Content
          className={cn(
            'fixed left-1/2 top-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2',
            'rounded-2xl border border-neutral-200 bg-white p-6 shadow-2xl',
            'duration-200 ease-out focus:outline-none',

            'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
            'data-[state=open]:slide-in-from-top-1/3',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
            sizes[size]
          )}
        >
          {children}

          {/* Close button */}
          <Dialog.Close
            className={cn(
              'absolute right-4 top-4 rounded-lg p-1 text-neutral-400 transition-colors',
              'hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2'
            )}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
