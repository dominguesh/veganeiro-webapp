import { useRouter } from 'next/router'
import { useTranslation } from '@/utils/i18n/translations'

export default function Navigation() {
  const router = useRouter()
  const { t } = useTranslation(router.locale)

  const navigation = [
    {
      name: t('nav.features'),
      href: '#features',
    },
    {
      name: t('nav.about'),
      href: '#about',
    },
    {
      name: t('nav.future'),
      href: '#future',
    },
    {
      name: t('nav.contact'),
      href: '#contact',
    },
  ]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navigation.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className="text-sm font-medium transition-colors hover:text-primary text-foreground/60"
        >
          {item.name}
        </a>
      ))}
    </nav>
  )
}
