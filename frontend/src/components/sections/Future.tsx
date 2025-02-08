import { useRouter } from 'next/router'
import { useTranslation } from '@/utils/i18n/translations'
import { Smartphone, Sparkles, Users, LineChart } from 'lucide-react'
import Card from '@/components/shared/Card'

export default function Future() {
  const router = useRouter()
  const { t } = useTranslation(router.locale)

  const futureFeatures = [
    {
      icon: Smartphone,
      titleKey: 'future.mobile.title',
      descriptionKey: 'future.mobile.description',
    },
    {
      icon: Sparkles,
      titleKey: 'future.ai.title',
      descriptionKey: 'future.ai.description',
    },
    {
      icon: Users,
      titleKey: 'future.social.title',
      descriptionKey: 'future.social.description',
    },
    {
      icon: LineChart,
      titleKey: 'future.nutrition.title',
      descriptionKey: 'future.nutrition.description',
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">{t('future.title')}</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('future.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {futureFeatures.map((feature, index) => (
          <div
            key={index}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <Card
              icon={feature.icon}
              title={t(feature.titleKey)}
              description={t(feature.descriptionKey)}
              className="relative bg-card h-full transform transition duration-300 group-hover:-translate-y-1"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
