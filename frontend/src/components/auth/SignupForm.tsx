import { useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from '@/utils/i18n/translations'
import Input from '@/components/shared/Input'
import { signup } from '@/utils/authService'
import { validateEmail, validatePassword } from '@/utils/validation'

export default function SignupForm() {
  const router = useRouter()
  const { t } = useTranslation(router.locale)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors([])
    
    const email = (e.target as HTMLFormElement).email.value
    const password = (e.target as HTMLFormElement).password.value
    
    // Validate email
    if (!validateEmail(email)) {
      setErrors(prev => [...prev, 'Please enter a valid email address'])
      return
    }
    
    // Validate password
    const passwordValidation = validatePassword(password)
    if (!passwordValidation.isValid) {
      setErrors(prev => [...prev, ...passwordValidation.errors])
      return
    }
    
    setIsLoading(true)
    try {
      const response = await signup({
        email,
        password,
      });
      if (response) {
        router.push('/auth/login'); // Redirect to login page on success
      }
    } catch (error: any) {
      console.error('Signup failed:', error);
      setErrors(prev => [...prev, error.response?.data?.message || 'Signup failed. Please try again.']);
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
          id="name"
          name="name"
          type="text"
          label="Name"
          required
          disabled={isLoading}
          autoComplete="name"
        />
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
          autoComplete="new-password"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Loading...' : t('nav.signup')}
        </button>
      </div>
    </form>
  )
}
