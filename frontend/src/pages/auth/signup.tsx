import { useRouter } from 'next/router'
import { useTranslation } from '@/utils/i18n/translations'
import SignupForm from '@/components/auth/SignupForm'

export default function SignupPage() {
  const router = useRouter()
  const { t } = useTranslation(router.locale)

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">{t('nav.signup')}</h2>
        </div>
        <SignupForm />
      </div>
    </div>
  )
}
