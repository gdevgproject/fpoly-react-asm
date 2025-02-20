import { useState } from 'react'
import { Link } from 'react-router'

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    try {
      // In a real app, you would call an API endpoint here
      // For now, we'll simulate success after a delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setStatus('success')
      setMessage('Password reset instructions have been sent to your email')
      setEmail('')
    } catch (err) {
      setStatus('error')
      setMessage('Failed to send reset instructions')
    }
  }

  return (
    <div className='w-full rounded-lg bg-white p-8 shadow-xl'>
      <div className='mb-6 text-center'>
        <h1 className='text-2xl font-bold text-gray-900'>Reset your password</h1>
        <p className='mt-2 text-sm text-gray-600'>We'll send you instructions via email</p>
      </div>

      {message && (
        <div
          className={`mb-4 rounded-md p-3 text-sm ${
            status === 'success' ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'
          }`}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700' htmlFor='email'>
            Email address
          </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-green-500 focus:ring-green-500 focus:outline-none'
            required
          />
        </div>

        <button
          type='submit'
          disabled={status === 'loading'}
          className='w-full rounded-md bg-[#517B3C] px-4 py-2 text-white transition-colors hover:bg-[#446832] focus:ring-2 focus:ring-[#517B3C] focus:ring-offset-2 focus:outline-none disabled:opacity-50'
        >
          {status === 'loading' ? 'Sending...' : 'Reset Password'}
        </button>
      </form>

      <div className='mt-6 text-center'>
        <Link to='/auth/login' className='text-sm text-[#517B3C] hover:text-[#446832]'>
          Back to login
        </Link>
      </div>
    </div>
  )
}
