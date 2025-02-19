# Veganeiro Web App 🌱
<!-->
[![Next.js](https://img.shields.io/badge/Next.js-13.5.6-black)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-blue)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
-->
> O Lado Maneiro do Mundo Vegano - The Cool Side of the Vegan World

Veganeiro is a comprehensive vegan lifestyle platform providing tools, resources, and community features to support people at different stages of their vegan journey. This project aims to make the transition to veganism accessible and enjoyable for everyone.

## 🚀 Current Status

**Phase 1: Landing Page and Authentication** - ✅ Completed

### Recent Updates
- Fixed dependency versions:
  - TailwindCSS updated to v3.4.1
  - PostCSS updated to v8.4.35
- Implemented core pages with improved accessibility
- Added responsive navigation and proper ARIA attributes
- Added secure HTTPS support with Cloudflare SSL

[View detailed changelog](CHANGELOG.md)

## 🛠️ Tech Stack

- **Frontend**:
  - Next.js 13
  - TypeScript
  - TailwindCSS
  - Shadcn UI
  - Zustand (State Management)

- **Development Tools**:
  - ESLint
  - Prettier
  - PostCSS
  - Husky (Git Hooks)

## 📋 Prerequisites

- Node.js (v16 or higher)
- Yarn package manager
- Git
- Docker and Docker Compose

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/veganeiro.git
cd veganeiro
```

2. **Install dependencies**
```bash
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

4. **Start the development server**
```bash
yarn dev
```

Visit `http://localhost:3000` to see the application.

## 🌐 Deployment

The project uses GitHub Actions for automated deployments to staging and production environments. Each environment requires specific secrets to be set in the GitHub repository settings.

### Required Secrets

#### Staging Environment (Moon 🌕)
- `STAGING_HOST`: Staging server hostname
- `STAGING_USERNAME`: SSH username for staging server
- `STAGING_SSH_KEY`: SSH private key for staging server access
- `STAGING_SSL_CERT`: Cloudflare SSL certificate for staging
- `STAGING_SSL_KEY`: Cloudflare SSL private key for staging

#### Production Environment (Earth 🌍)
- `PRODUCTION_HOST`: Production server hostname
- `PRODUCTION_USERNAME`: SSH username for production server
- `PRODUCTION_SSH_KEY`: SSH private key for production server access
- `PRODUCTION_SSL_CERT`: Cloudflare SSL certificate for production
- `PRODUCTION_SSL_KEY`: Cloudflare SSL private key for production

### Deployment Process
1. Changes pushed to the `moon` branch trigger staging deployment
2. After testing in staging, merge to `earth` branch for production deployment
3. SSL certificates are securely handled via GitHub secrets

### SSL Certificate Setup
1. Obtain SSL certificate and private key from Cloudflare
2. Add them as secrets in GitHub repository settings
3. Never commit SSL certificates or private keys to the repository

## 🏗️ Project Structure

```
veganeiro/
├── src/
│   ├── app/                # Next.js app directory
│   ├── components/         # Reusable components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── styles/             # Global styles
│   └── types/              # TypeScript types
├── public/                 # Static files
└── ...config files
```

## 🎯 Features

### Implemented ✅
- Responsive landing page
- Authentication UI
- Newsletter signup
- Dark mode support
- Bilingual support (PT/EN)
- Accessibility improvements
- HTTPS with Cloudflare SSL

### Coming Soon 🚧
- User authentication flow
- Recipe management
- Health tracking
- Community features

## 🧪 Testing

```bash
# Run unit tests
yarn test

# Run e2e tests
yarn test:e2e

# Run linting
yarn lint
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Documentation

- [Project Wiki](../../wiki)
- [API Documentation](../../wiki/api)
- [Development Guide](../../wiki/development)

## 🌟 AI-Assisted Development

This project is being developed using AI assistance through the Anthropic API and Claude (Opus and Sonnet models), showcasing modern development practices and AI-human collaboration. Learn more about our [AI development process](../../wiki/ai-development).

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Acknowledgments

- Special thanks to all contributors
- Anthropic for Claude AI assistance
- The open-source community

## 📬 Contact

[Heraldo Domingues] - [@veganeiro.bsky.social](https://bsky.app/profile/veganeiro.bsky.social) - contact@veganeiro.com

Project Link: [https://github.com/dominguesh/veganeiro](https://github.com/dominguesh/veganeiro)

---

<p align="center">Made with 💚 for the vegan community</p>
