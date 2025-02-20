import { useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from '@/utils/i18n/translations'
import Input from '@/components/shared/Input'
import { login } from '@/utils/authService'
import { validateEmail } from '@/utils/validation'

export default function LoginForm() {
  const router = useRouter()
  const { t } = useTranslation(router.locale)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors([])
    
    const form = e.target as HTMLFormElement
    const email = form.elements.namedItem('email') as HTMLInputElement
    const password = form.elements.namedItem('password') as HTMLInputElement
    
    const emailValue = email.value
    const passwordValue = password.value
    
    // Validate email
    if (!validateEmail(emailValue)) {
      setErrors(prev => [...prev, 'Please enter a valid email address'])
      return
    }
    
    // Validate password is not empty
    if (!passwordValue) {
      setErrors(prev => [...prev, 'Please enter your password'])
      return
    }
    
    setIsLoading(true)
    try {
      const response = await login({
        email: emailValue,
        password: passwordValue,
      });
      if (response) {
        router.push('/landing'); // Redirect to landing page on success
      }
    } catch (error: any) {
      console.error('Login failed:', error);
      setErrors(prev => [...prev, error.response?.data?.message || 'Invalid email or password']);
    }
    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <ul className="list-disc list-inside text-sm text-red-600">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="space-y-4">
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          required
          disabled={isLoading}
          autoComplete="email"
        />
        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          required
          disabled={isLoading}
          autoComplete="current-password"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Loading...' : t('nav.login')}
        </button>
      </div>
    </form>
  )
}
