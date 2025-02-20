import { useState } from 'react'
import { Link, useNavigate } from 'react-router'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  interface User {
    username: string
    password: string
    role: 'admin' | 'user'
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    try {
      const response = await fetch('http://localhost:3000/users')
      const users: User[] = await response.json()

      const user = users.find((u) => u.username === username && u.password === password)

      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
        navigate(user.role === 'admin' ? '/admin/categories' : '/')
      } else {
        setError('Invalid username or password')
      }
    } catch (err) {
      setError('Login failed')
    }
  }

  return (
    <div className='w-full rounded-lg bg-white p-8 shadow-xl'>
      <div className='mb-6 text-center'>
        <h1 className='text-2xl font-bold text-gray-900'>Welcome back</h1>
        <p className='mt-2 text-sm text-gray-600'>Please sign in to your account</p>
      </div>

      {error && <div className='mb-4 rounded-md bg-red-50 p-3 text-sm text-red-500'>{error}</div>}

      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700' htmlFor='username'>
            Username
          </label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-green-500 focus:ring-green-500 focus:outline-none'
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700' htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-green-500 focus:ring-green-500 focus:outline-none'
            required
          />
        </div>

        <button
          type='submit'
          className='w-full rounded-md bg-[#517B3C] px-4 py-2 text-white transition-colors hover:bg-[#446832] focus:ring-2 focus:ring-[#517B3C] focus:ring-offset-2 focus:outline-none'
        >
          Sign in
        </button>
      </form>

      <div className='mt-6 flex items-center justify-between'>
        <Link to='/auth/register' className='text-sm text-[#517B3C] hover:text-[#446832]'>
          Create an account
        </Link>
        <Link to='/auth/forgot-password' className='text-sm text-[#517B3C] hover:text-[#446832]'>
          Forgot password?
        </Link>
      </div>
    </div>
  )
}
