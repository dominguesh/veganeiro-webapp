import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslation } from '@/utils/i18n/translations'

export default function Navigation() {
  const router = useRouter()
  const { t } = useTranslation(router.locale)

  const navigation = [
    {
      name: t('nav.recipes'),
      href: '/recipes',
    },
    {
      name: t('nav.community'),
      href: '/community',
    },
    {
      name: t('nav.health'),
      href: '/health',
    },
    {
      name: t('nav.about'),
      href: '/about',
    },
  ]

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-sm font-medium transition-colors hover:text-primary ${
            router.pathname === item.href
              ? 'text-primary'
              : 'text-foreground/60'
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
