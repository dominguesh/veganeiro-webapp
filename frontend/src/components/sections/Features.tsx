import { useRouter } from 'next/router'
import { useTranslation } from '@/utils/i18n/translations'
import { Utensils, Users, BookOpen, Wrench } from 'lucide-react'
import Card from '@/components/shared/Card'

export default function Features() {
  const router = useRouter()
  const { t } = useTranslation(router.locale)

  const features = [
    {
      icon: Utensils,
      titleKey: 'features.recipes.title',
      descriptionKey: 'features.recipes.description',
    },
    {
      icon: Users,
      titleKey: 'features.community.title',
      descriptionKey: 'features.community.description',
    },
    {
      icon: BookOpen,
      titleKey: 'features.education.title',
      descriptionKey: 'features.education.description',
    },
    {
      icon: Wrench,
      titleKey: 'features.tools.title',
      descriptionKey: 'features.tools.description',
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">{t('features.title')}</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('features.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card
            key={index}
            icon={feature.icon}
            title={t(feature.titleKey)}
            description={t(feature.descriptionKey)}
          />
        ))}
      </div>
    </div>
  )
}
