import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

interface CardProps {
  title: string
  description: string
  icon: LucideIcon
  className?: string
}

export default function Card({ title, description, icon: Icon, className = '' }: CardProps) {
  return (
    <div className={`p-6 rounded-lg border bg-card text-card-foreground hover:shadow-lg transition-shadow ${className}`}>
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
