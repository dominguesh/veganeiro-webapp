import { useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from '@/utils/i18n/translations'
import Input from '@/components/shared/Input'

export default function SignupForm() {
  const router = useRouter()
  const { t } = useTranslation(router.locale)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // TODO: Implement signup logic
    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="space-y-4">
        <Input
          id="name"
          name="name"
          type="text"
          label="Name"
          required
          disabled={isLoading}
          autoComplete="name"
        />
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          required
          disabled={isLoading}
          autoComplete="email"
        />
        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          required
          disabled={isLoading}
          autoComplete="new-password"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Loading...' : t('nav.signup')}
        </button>
      </div>
    </form>
  )
}
