import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslation } from '@/utils/i18n/translations'
import Navigation from './Navigation'

export default function Header() {
  const router = useRouter()
  const { t } = useTranslation(router.locale)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">Veganeiro</span>
          </Link>

          <Navigation />

          <div className="flex items-center space-x-4">
            <Link
              href="/auth/login"
              className="text-sm font-medium hover:text-primary"
            >
              {t('nav.login')}
            </Link>
            <Link
              href="/auth/signup"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              {t('nav.signup')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
