import { ReactNode } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import CookieConsent from '@/components/shared/CookieConsent'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      {children}
      <Footer />
      <CookieConsent />
    </div>
  )
}
