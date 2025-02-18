import { useState } from 'react'
import { useNavigate } from 'react-router'

export default function RegisterForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!username || !password || !email) {
      setError('All fields are required')
      return
    }

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, email })
      })

      if (response.ok) {
        navigate('/login')
      } else {
        setError('Registration failed')
      }
    } catch (err) {
      setError('Registration failed')
    }
  }

  return (
    <div className='mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md'>
      <h2 className='mb-4 text-2xl font-bold'>Register</h2>
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
            className='focus:shadow-outline rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 focus:outline-none'
            type='submit'
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}
