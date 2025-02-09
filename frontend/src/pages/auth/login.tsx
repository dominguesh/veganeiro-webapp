import { useRouter } from 'next/router'
import { useTranslation } from '@/utils/i18n/translations'
import { useState } from 'react'
import Input from '@/components/shared/Input'

export default function LoginPage() {
  const router = useRouter()
  const { t } = useTranslation(router.locale)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // TODO: Implement login logic
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">{t('nav.login')}</h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <Input
              id="email"
              name="email"
              type="email"
              label="Email"
              required
              disabled={isLoading}
            />
            <Input
              id="password"
              name="password"
              type="password"
              label="Password"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Loading...' : t('nav.login')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
