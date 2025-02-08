import { useRouter } from 'next/router'
import Image from 'next/image'
import { useTranslation } from '@/utils/i18n/translations'

export default function About() {
  const router = useRouter()
  const { t } = useTranslation(router.locale)

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">{t('about.title')}</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('about.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="/images/banner-2.jpg"
            alt="Our Journey"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('about.story')}
          </p>
          <p className="text-lg leading-relaxed">
            {t('about.mission')}
          </p>
          <div className="relative aspect-[16/9] w-full mt-8 lg:mt-12">
            <Image
              src="/images/banner-3.jpg"
              alt="Our Kitchen"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-xl text-primary font-medium">
          {t('about.join')}
        </p>
      </div>
    </div>
  )
}
