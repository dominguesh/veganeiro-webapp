import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslation } from '@/utils/i18n/translations'
import Navigation from './Navigation'
import { useTheme } from 'next-themes'

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
  const router = useRouter()
  const { t } = useTranslation(router.locale)
  const { theme, setTheme } = useTheme()

  return (
    <header className={`w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">Veganeiro</span>
          </Link>

          <Navigation />

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 rounded-lg hover:bg-secondary"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              )}
            </button>
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
