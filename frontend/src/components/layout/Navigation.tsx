import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from '@/utils/i18n/translations'

export default function Navigation() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation(router.locale)

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const toggleLanguage = () => {
    const newLocale = router.locale === 'pt' ? 'en' : 'pt'
    router.push(router.pathname, router.asPath, { locale: newLocale })
  }

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            Veganeiro
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="hover:text-primary transition-colors">
              {t('nav.features')}
            </Link>
            <Link href="#about" className="hover:text-primary transition-colors">
              {t('nav.about')}
            </Link>
            <Link href="#future" className="hover:text-primary transition-colors">
              {t('nav.future')}
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors">
              {t('nav.contact')}
            </Link>
          </div>

          {/* Theme and Language Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded border hover:bg-muted transition-colors"
            >
              {router.locale === 'pt' ? 'EN' : 'PT'}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="#features"
              className="block hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.features')}
            </Link>
            <Link
              href="#about"
              className="block hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link
              href="#future"
              className="block hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.future')}
            </Link>
            <Link
              href="#contact"
              className="block hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
            <div className="flex items-center space-x-4 pt-4 border-t">
              <button
                onClick={toggleLanguage}
                className="px-3 py-1 rounded border hover:bg-muted transition-colors"
              >
                {router.locale === 'pt' ? 'EN' : 'PT'}
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 hover:bg-muted rounded-full transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
