import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslation } from '@/utils/i18n/translations'
import { Github, Twitter, Instagram } from 'lucide-react'

interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  const router = useRouter()
  const { t } = useTranslation(router.locale)

  const footerLinks = {
    company: [
      { name: t('footer.about'), href: '/about' },
      { name: t('footer.careers'), href: '/careers' },
      { name: t('footer.press'), href: '/press' },
    ],
    resources: [
      { name: t('nav.recipes'), href: '/recipes' },
      { name: t('nav.community'), href: '/community' },
      { name: t('nav.health'), href: '/health' },
      { name: t('footer.blog'), href: '/blog' },
      { name: t('footer.guides'), href: '/guides' },
    ],
    legal: [
      { name: t('footer.privacy'), href: '/privacy-policy' },
      { name: t('footer.terms'), href: '/terms' },
      { name: t('footer.cookies'), href: '/cookie-policy' },
    ],
  }

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/veganeiro',
      icon: Github,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/veganeiro',
      icon: Twitter,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/veganeiro',
      icon: Instagram,
    },
  ]

  return (
    <footer className={`w-full border-t bg-background py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">Veganeiro</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">{t('footer.company')}</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">{t('footer.resources')}</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">{t('footer.legal')}</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Veganeiro. {t('footer.rights')}
          </p>

          <div className="mt-4 flex space-x-6 md:mt-0">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
