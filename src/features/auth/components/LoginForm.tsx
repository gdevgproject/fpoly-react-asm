import { useState } from 'react'
import { useNavigate } from 'react-router'

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
    <div className='mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md'>
      <h2 className='mb-4 text-2xl font-bold'>Login</h2>
      {error && <div className='mb-4 text-sm text-red-500'>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='username'>
            Username
          </label>
          <input
            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            id='username'
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
            type='submit'
          >
            Sign In
          </button>
          <a
            className='inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800'
            href='/forgot-password'
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  )
}
