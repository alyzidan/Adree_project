import { ReactNode } from 'react'
import Header from './Header'

interface PageLayoutProps {
  children: ReactNode
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main className="py-8">{children}</main>
    </div>
  )
}

export default PageLayout
