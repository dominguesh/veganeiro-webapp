import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from '@/utils/i18n/translations'

export default function Footer() {
  const router = useRouter()
  const { t } = useTranslation(router.locale)

  return (
    <footer className="bg-background border-t py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Veganeiro</h3>
            <p className="text-muted-foreground text-sm">
              {t('footer.about')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.features')}
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="#future" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.future')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                contato@veganeiro.com
              </li>
              <li className="text-muted-foreground">
                São Paulo, Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Veganeiro. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}
