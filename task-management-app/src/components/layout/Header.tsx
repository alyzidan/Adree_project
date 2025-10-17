import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, CheckSquare } from 'lucide-react'
import { APP_NAME, NAV_ITEMS } from '@/lib/constants'

const iconMap = {
  LayoutDashboard,
  CheckSquare,
}

function Header() {
  const location = useLocation()

  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold text-neutral-900 transition-colors hover:text-primary-600"
          >
            {APP_NAME}
          </Link>

          <nav className="flex gap-1">
            {NAV_ITEMS.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap]
              const isActive = location.pathname === item.path

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition-colors
                    ${
                      isActive
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                    }
                  `}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
