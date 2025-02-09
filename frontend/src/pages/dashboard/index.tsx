import { useRouter } from 'next/router'
import { useTranslation } from '@/utils/i18n/translations'

export default function DashboardPage() {
  const router = useRouter()
  const { t } = useTranslation(router.locale)

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="mt-2 text-muted-foreground">
            Welcome to your personal dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder cards for dashboard content */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="p-6 rounded-lg border bg-card text-card-foreground hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p className="text-muted-foreground">
                Dashboard features are under development
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
