import { useRouter } from 'next/router'
import { useTranslation } from '@/utils/i18n/translations'
import { useState } from 'react'
import Input from '@/components/shared/Input'

export default function ForgotPasswordPage() {
  const router = useRouter()
  const { t } = useTranslation(router.locale)
  const [isLoading, setIsLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // TODO: Implement password reset logic
    setEmailSent(true)
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Reset Password</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {emailSent
              ? "We've sent you an email with instructions to reset your password."
              : "Enter your email address and we'll send you a link to reset your password."}
          </p>
        </div>

        {!emailSent && (
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
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Loading...' : 'Send Reset Link'}
              </button>
            </div>
          </form>
        )}

        <div className="text-center">
          <button
            onClick={() => router.push('/auth/login')}
            className="text-sm text-primary hover:text-primary/90"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  )
}
