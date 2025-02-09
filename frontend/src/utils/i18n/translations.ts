import { useRouter } from 'next/router'

const translations = {
  pt: {
    nav: {
      features: 'Recursos',
      about: 'Sobre',
      future: 'Futuro',
      contact: 'Contato',
      login: 'Entrar',
      signup: 'Cadastre-se',
      recipes: 'Receitas',
      community: 'Comunidade',
      health: 'Saúde',
    },
    hero: {
      title: 'O Lado Maneiro do Mundo Vegano',
      subtitle: 'Descubra receitas deliciosas, conecte-se com a comunidade e aprenda sobre um estilo de vida sustentável',
      cta: 'Começar Agora',
    },
    features: {
      title: 'O Que Oferecemos',
      subtitle: 'Explore todas as ferramentas e recursos disponíveis para sua jornada vegana',
      recipes: {
        title: 'Receitas Exclusivas',
        description: 'Centenas de receitas veganas deliciosas e fáceis de preparar',
      },
      community: {
        title: 'Comunidade Ativa',
        description: 'Conecte-se com outros veganos, compartilhe experiências e aprenda juntos',
      },
      education: {
        title: 'Conteúdo Educativo',
        description: 'Artigos, guias e recursos para aprender mais sobre veganismo',
      },
      tools: {
        title: 'Ferramentas Úteis',
        description: 'Calculadoras nutricionais, planejadores de refeições e mais',
      },
    },
    about: {
      title: 'Nossa História',
      subtitle: 'Conheça mais sobre nossa missão de tornar o veganismo acessível a todos',
      story: 'O Veganeiro nasceu da paixão por criar um espaço onde todos possam descobrir como o veganismo pode ser delicioso, divertido e gratificante.',
      mission: 'Nossa missão é desmistificar o veganismo e mostrar que é possível ter uma alimentação saborosa, nutritiva e consciente.',
      join: 'Junte-se a nós nessa jornada por um mundo mais sustentável e compassivo.',
    },
    future: {
      title: 'O Que Está Por Vir',
      subtitle: 'Estamos sempre trabalhando para trazer novidades incríveis',
      mobile: {
        title: 'App Mobile',
        description: 'Acesse suas receitas favoritas e conecte-se com a comunidade em qualquer lugar',
      },
      ai: {
        title: 'IA Assistente',
        description: 'Receba sugestões personalizadas de receitas baseadas em suas preferências',
      },
      social: {
        title: 'Rede Social',
        description: 'Compartilhe suas criações e inspire outros na comunidade',
      },
      nutrition: {
        title: 'Análise Nutricional',
        description: 'Acompanhe seus nutrientes e mantenha uma dieta equilibrada',
      },
    },
    newsletter: {
      title: 'Fique Por Dentro',
      description: 'Receba as melhores receitas e novidades do mundo vegano',
      placeholder: 'Seu melhor e-mail',
      button: 'Inscrever',
      privacy: 'Respeitamos sua privacidade e nunca compartilharemos seus dados',
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Estamos aqui para ajudar em sua jornada vegana',
      email: {
        title: 'E-mail',
      },
      social: {
        title: 'Redes Sociais',
      },
      location: {
        title: 'Localização',
        address: 'São Paulo, SP - Brasil',
      },
      form: {
        name: 'Nome',
        email: 'E-mail',
        message: 'Mensagem',
        submit: 'Enviar Mensagem',
      },
    },
    footer: {
      company: 'Empresa',
      about: 'Sobre',
      careers: 'Carreiras',
      press: 'Imprensa',
      resources: 'Recursos',
      blog: 'Blog',
      guides: 'Guias',
      recipes: 'Receitas',
      legal: 'Legal',
      privacy: 'Privacidade',
      terms: 'Termos',
      cookies: 'Cookies',
      tagline: 'Transformando o mundo, uma refeição vegana por vez.',
      rights: 'Todos os direitos reservados.',
    },
  },
  en: {
    nav: {
      features: 'Features',
      about: 'About',
      future: 'Future',
      contact: 'Contact',
      login: 'Login',
      signup: 'Sign Up',
      recipes: 'Recipes',
      community: 'Community',
      health: 'Health',
    },
    hero: {
      title: 'The Cool Side of the Vegan World',
      subtitle: 'Discover delicious recipes, connect with the community, and learn about a sustainable lifestyle',
      cta: 'Get Started',
    },
    features: {
      title: 'What We Offer',
      subtitle: 'Explore all the tools and resources available for your vegan journey',
      recipes: {
        title: 'Exclusive Recipes',
        description: 'Hundreds of delicious and easy-to-make vegan recipes',
      },
      community: {
        title: 'Active Community',
        description: 'Connect with other vegans, share experiences, and learn together',
      },
      education: {
        title: 'Educational Content',
        description: 'Articles, guides, and resources to learn more about veganism',
      },
      tools: {
        title: 'Useful Tools',
        description: 'Nutritional calculators, meal planners, and more',
      },
    },
    about: {
      title: 'Our Story',
      subtitle: 'Learn more about our mission to make veganism accessible to everyone',
      story: 'Veganeiro was born from the passion to create a space where everyone can discover how veganism can be delicious, fun, and rewarding.',
      mission: 'Our mission is to demystify veganism and show that it\'s possible to have a tasty, nutritious, and conscious diet.',
      join: 'Join us on this journey for a more sustainable and compassionate world.',
    },
    future: {
      title: 'What\'s Coming',
      subtitle: 'We\'re always working to bring amazing new features',
      mobile: {
        title: 'Mobile App',
        description: 'Access your favorite recipes and connect with the community anywhere',
      },
      ai: {
        title: 'AI Assistant',
        description: 'Get personalized recipe suggestions based on your preferences',
      },
      social: {
        title: 'Social Network',
        description: 'Share your creations and inspire others in the community',
      },
      nutrition: {
        title: 'Nutritional Analysis',
        description: 'Track your nutrients and maintain a balanced diet',
      },
    },
    newsletter: {
      title: 'Stay Updated',
      description: 'Receive the best recipes and news from the vegan world',
      placeholder: 'Your best email',
      button: 'Subscribe',
      privacy: 'We respect your privacy and will never share your data',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'We\'re here to help you on your vegan journey',
      email: {
        title: 'Email',
      },
      social: {
        title: 'Social Media',
      },
      location: {
        title: 'Location',
        address: 'São Paulo, SP - Brazil',
      },
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
      },
    },
    footer: {
      company: 'Company',
      about: 'About',
      careers: 'Careers',
      press: 'Press',
      resources: 'Resources',
      blog: 'Blog',
      guides: 'Guides',
      recipes: 'Recipes',
      legal: 'Legal',
      privacy: 'Privacy',
      terms: 'Terms',
      cookies: 'Cookies',
      tagline: 'Transforming the world, one vegan meal at a time.',
      rights: 'All rights reserved.',
    },
  },
}

export function useTranslation(locale: string | undefined) {
  const defaultLocale = 'pt'
  const currentLocale = locale || defaultLocale

  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations[currentLocale as keyof typeof translations]
    
    for (const k of keys) {
      if (value === undefined) return key
      value = value[k]
    }
    
    return value || key
  }

  return { t }
}
