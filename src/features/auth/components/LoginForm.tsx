import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router'

interface LoginFormInputs {
  email: string
  password: string
}

export default function LoginForm() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormInputs>()

  const onSubmit = async (data: LoginFormInputs) => {
    const loadingToast = toast.loading('Signing in...')

    try {
      const loginResponse = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      const loginData = await loginResponse.json()

      if (!loginResponse.ok) {
        throw new Error(loginData.message || 'Login failed')
      }

      if (!loginData.accessToken || !loginData.user) {
        throw new Error('Invalid response from server')
      }

      // Store user info and token
      localStorage.setItem('token', loginData.accessToken)
      localStorage.setItem('user', JSON.stringify(loginData.user))

      toast.dismiss(loadingToast)
      toast.success(`Welcome back, ${loginData.user.username}!`)

      // Redirect based on role
      if (loginData.user.role === 'admin') {
        navigate('/admin/categories')
      } else {
        navigate('/')
      }
    } catch (error) {
      toast.dismiss(loadingToast)

      if (error instanceof Error) {
        if (error.message.includes('password is incorrect')) {
          toast.error('Incorrect password')
        } else if (error.message.includes('cannot find user')) {
          toast.error('Email not found')
        } else if (error.message.includes('invalid email')) {
          toast.error('Invalid email format')
        } else {
          toast.error('Login failed. Please try again.')
        }
      }

      console.error('Login error:', error)
    }
  }

  return (
    <div className='w-full rounded-lg bg-white p-8 shadow-xl'>
      <div className='mb-6 text-center'>
        <h1 className='text-2xl font-bold text-gray-900'>Welcome back</h1>
        <p className='mt-2 text-sm text-gray-600'>Please sign in to your account</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Email</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address'
              }
            })}
            className={`mt-1 block w-full rounded-md border px-3 py-2 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && <p className='mt-1 text-sm text-red-500'>{errors.email.message}</p>}
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>Password</label>
          <input
            type='password'
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
              }
            })}
            className={`mt-1 block w-full rounded-md border px-3 py-2 ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.password && <p className='mt-1 text-sm text-red-500'>{errors.password.message}</p>}
        </div>

        <button
          type='submit'
          disabled={isSubmitting}
          className='w-full rounded-md bg-[#517B3C] px-4 py-2 text-white transition-colors hover:bg-[#446832] disabled:opacity-50'
        >
          {isSubmitting ? 'Signing in...' : 'Sign in'}
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
