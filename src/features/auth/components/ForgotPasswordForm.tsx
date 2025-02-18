import { useState } from 'react'

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')

    if (!email) {
      setMessage('Email is required')
      return
    }

    // In a real application, you would send a password reset email
    setMessage('Password reset link sent to your email address.')
  }

  return (
    <div className='mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md'>
      <h2 className='mb-4 text-2xl font-bold'>Forgot Password</h2>
      {message && <div className='mb-4 text-sm text-green-500'>{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='email'>
            Email
          </label>
          <input
            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            id='email'
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
            type='submit'
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  )
}
