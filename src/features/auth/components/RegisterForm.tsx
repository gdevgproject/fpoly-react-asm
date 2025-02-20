import { useState } from 'react'
import { Link, useNavigate } from 'react-router'

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validate form
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          role: 'user'
        })
      })

      if (response.ok) {
        navigate('/auth/login')
      } else {
        setError('Registration failed')
      }
    } catch (err) {
      setError('Registration failed')
    }
  }

  return (
    <div className='w-full rounded-lg bg-white p-8 shadow-xl'>
      <div className='mb-6 text-center'>
        <h1 className='text-2xl font-bold text-gray-900'>Create an account</h1>
        <p className='mt-2 text-sm text-gray-600'>Join us today</p>
      </div>

      {error && <div className='mb-4 rounded-md bg-red-50 p-3 text-sm text-red-500'>{error}</div>}

      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='mb-4'>
          <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='username'>
            Username
          </label>
          <input
            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            id='username'
            type='text'
            placeholder='Username'
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
        </div>
        <div className='mb-4'>
          <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='email'>
            Email
          </label>
          <input
            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            id='email'
            type='email'
            placeholder='Email'
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className='mb-6'>
          <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='password'>
            Password
          </label>
          <input
            className='focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            id='password'
            type='password'
            placeholder='Password'
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <div className='mb-6'>
          <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='confirmPassword'>
            Confirm Password
          </label>
          <input
            className='focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            id='confirmPassword'
            type='password'
            placeholder='Confirm Password'
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          />
        </div>
        <button
          type='submit'
          className='w-full rounded-md bg-[#517B3C] px-4 py-2 text-white transition-colors hover:bg-[#446832] focus:ring-2 focus:ring-[#517B3C] focus:ring-offset-2 focus:outline-none'
        >
          Register
        </button>
      </form>

      <div className='mt-6 text-center'>
        <Link to='/auth/login' className='text-sm text-[#517B3C] hover:text-[#446832]'>
          Already have an account? Sign in
        </Link>
      </div>
    </div>
  )
}
