interface Translations {
  [key: string]: {
    [key: string]: string
  }
}

export const translations: Translations = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.about': 'About',
    'nav.future': 'Future',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.title': 'The Cool Side of the Vegan World',
    'hero.subtitle': 'Discover a new perspective on vegan food, where flavor meets consciousness.',
    'hero.cta': 'Start Your Journey',

    // Features Section
    'features.title': 'Why Choose Veganeiro?',
    'features.subtitle': 'Discover what makes our platform unique',
    'features.recipes.title': 'Delicious Recipes',
    'features.recipes.description': 'Explore a variety of tasty vegan recipes that are easy to make and full of flavor.',
    'features.community.title': 'Vibrant Community',
    'features.community.description': 'Connect with like-minded people, share experiences, and get inspired by others.',
    'features.education.title': 'Educational Content',
    'features.education.description': 'Learn about nutrition, sustainability, and the benefits of a plant-based lifestyle.',
    'features.tools.title': 'Helpful Tools',
    'features.tools.description': 'Access meal planners, shopping lists, and nutritional information to make your journey easier.',

    // About Section
    'about.title': 'Our Family Journey',
    'about.subtitle': 'A story of transformation and discovery',
    'about.story': 'What started as a family experiment turned into a passionate mission to show that vegan food can be both delicious and accessible. Our journey began in our kitchen, experimenting with plant-based recipes that would satisfy even the most dedicated meat lovers.',
    'about.mission': 'Today, we\'re dedicated to sharing our discoveries and helping others find their own path to a more conscious and flavorful way of eating.',
    'about.join': 'Join us in making vegan food more approachable and enjoyable for everyone.',

    // Footer
    'footer.about': 'The Cool Side of the Vegan World - Transforming the way you see vegan food.',
    'footer.quickLinks': 'Quick Links',
    'footer.legal': 'Legal',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.rights': 'All rights reserved.',

    // Cookie Consent
    'cookie.message': 'We use cookies to improve your experience on our site. By continuing to browse, you agree to our',
    'cookie.privacy': 'Privacy Policy',
    'cookie.accept': 'Accept Cookies'
  },
  pt: {
    // Navigation
    'nav.features': 'Recursos',
    'nav.about': 'Sobre',
    'nav.future': 'Futuro',
    'nav.contact': 'Contato',

    // Hero Section
    'hero.title': 'O Lado Maneiro do Mundo Vegano',
    'hero.subtitle': 'Descubra uma nova perspectiva sobre a alimentação vegana, onde sabor e consciência se encontram.',
    'hero.cta': 'Comece sua jornada',

    // Features Section
    'features.title': 'Por que escolher o Veganeiro?',
    'features.subtitle': 'Descubra o que torna nossa plataforma única',
    'features.recipes.title': 'Receitas Deliciosas',
    'features.recipes.description': 'Explore uma variedade de receitas veganas saborosas, fáceis de fazer e cheias de sabor.',
    'features.community.title': 'Comunidade Vibrante',
    'features.community.description': 'Conecte-se com pessoas que compartilham dos mesmos ideais, troque experiências e inspire-se.',
    'features.education.title': 'Conteúdo Educativo',
    'features.education.description': 'Aprenda sobre nutrição, sustentabilidade e os benefícios de um estilo de vida plant-based.',
    'features.tools.title': 'Ferramentas Úteis',
    'features.tools.description': 'Acesse planejadores de refeições, listas de compras e informações nutricionais para facilitar sua jornada.',

    // About Section
    'about.title': 'Nossa Jornada Familiar',
    'about.subtitle': 'Uma história de transformação e descoberta',
    'about.story': 'O que começou como um experimento familiar se transformou em uma missão apaixonada de mostrar que a comida vegana pode ser deliciosa e acessível. Nossa jornada começou em nossa cozinha, experimentando receitas à base de plantas que satisfariam até os mais dedicados amantes de carne.',
    'about.mission': 'Hoje, nos dedicamos a compartilhar nossas descobertas e ajudar outros a encontrarem seu próprio caminho para uma forma mais consciente e saborosa de se alimentar.',
    'about.join': 'Junte-se a nós para tornar a comida vegana mais acessível e agradável para todos.',

    // Footer
    'footer.about': 'O Lado Maneiro do Mundo Vegano - Transformando a maneira como você vê a alimentação vegana.',
    'footer.quickLinks': 'Links Rápidos',
    'footer.legal': 'Legal',
    'footer.contact': 'Contato',
    'footer.privacy': 'Privacidade',
    'footer.terms': 'Termos',
    'footer.rights': 'Todos os direitos reservados.',

    // Cookie Consent
    'cookie.message': 'Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa',
    'cookie.privacy': 'Política de Privacidade',
    'cookie.accept': 'Aceitar Cookies'
  }
}

export function useTranslation(locale: string = 'pt') {
  return {
    t: (key: string) => translations[locale]?.[key] || key
  }
}
