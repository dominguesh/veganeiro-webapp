import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header className="sticky top-0 z-50" />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer className="shrink-0" />
    </div>
  )
}
