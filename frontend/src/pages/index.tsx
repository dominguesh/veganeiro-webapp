import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from '@/utils/i18n/translations'
import Features from '@/components/sections/Features'
import About from '@/components/sections/About'
import Future from '@/components/sections/Future'
import Newsletter from '@/components/sections/Newsletter'
import Contact from '@/components/sections/Contact'

export default function Home() {
  const router = useRouter()
  const { t } = useTranslation(router.locale)

  return (
    <>
      <Head>
        <title>Veganeiro - O Lado Maneiro do Mundo Vegano</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/banner-1.jpg"
              alt="Veganeiro Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors">
              {t('hero.cta')}
            </button>
          </div>
        </section>

        {/* Features Overview */}
        <section className="py-20 bg-background" id="features">
          <Features />
        </section>

        {/* About Our Journey */}
        <section className="py-20 bg-muted" id="about">
          <About />
        </section>

        {/* Future Features Preview */}
        <section className="py-20 bg-background" id="future">
          <Future />
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-primary text-primary-foreground" id="newsletter">
          <Newsletter />
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background mb-0" id="contact">
          <Contact />
        </section>
      </main>
    </>
  )
}
