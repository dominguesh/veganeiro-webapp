/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React strict mode for development
    reactStrictMode: true,
    
    // Configure image domains for next/image
    images: {
      domains: ['localhost'],
      // Add more domains as needed for external images
    },
    
    // Configure environment variables
    env: {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000',
    },
    
    // Enable progressive web app features
    pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true,
    },
    
    // Configure webpack if needed
    webpack: (config, { isServer }) => {
      // Add custom webpack config here
      return config
    },
    
    // Configure headers for security
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block',
            },
          ],
        },
      ]
    },
  
    // Configure redirects if needed
    async redirects() {
      return []
    },
  }
  
  module.exports = nextConfig