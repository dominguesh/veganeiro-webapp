import { useRouter } from 'next/router'
import { useTranslation } from '@/utils/i18n/translations'
import { Send } from 'lucide-react'

export default function Newsletter() {
  const router = useRouter()
  const { t } = useTranslation(router.locale)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter subscription
  }

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-primary-foreground">
          {t('newsletter.title')}
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8">
          {t('newsletter.description')}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder={t('newsletter.placeholder')}
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-white/20"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
          >
            <Send className="h-5 w-5" />
            {t('newsletter.button')}
          </button>
        </form>

        <p className="mt-4 text-sm text-primary-foreground/80">
          {t('newsletter.privacy')}
        </p>
      </div>
    </div>
  )
}
