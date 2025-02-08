import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from '@/utils/i18n/translations'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()
  const { t } = useTranslation(router.locale)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          {t('cookie.message')}{' '}
          <a href="/privacy" className="text-primary hover:underline">
            {t('cookie.privacy')}
          </a>
          .
        </p>
        <button
          onClick={acceptCookies}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
        >
          {t('cookie.accept')}
        </button>
      </div>
    </div>
  )
}
