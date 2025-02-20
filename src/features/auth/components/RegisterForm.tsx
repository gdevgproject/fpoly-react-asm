import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router'

interface RegisterFormInputs {
  username: string
  email: string
  password: string
  confirmPassword: string
}

export default function RegisterForm() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<RegisterFormInputs>()

  const onSubmit = async (data: RegisterFormInputs) => {
    const loadingToast = toast.loading('Creating account...')

    try {
      // 1. Register user using json-server-auth endpoint
      const registerResponse = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          username: data.username,
          role: 'user' // Default role for new users
        })
      })

      if (!registerResponse.ok) {
        const errorData = await registerResponse.json()

        // Handle specific error cases
        if (registerResponse.status === 400) {
          if (errorData.message?.includes('email')) {
            throw new Error('Email already exists')
          }
          throw new Error(errorData.message)
        }

        throw new Error('Registration failed')
      }

      toast.dismiss(loadingToast)
      toast.success('Registration successful! Please login to continue.')
      navigate('/auth/login')
    } catch (error) {
      toast.dismiss(loadingToast)

      if (error instanceof Error) {
        switch (error.message) {
          case 'Email already exists':
            toast.error('This email is already registered')
            break
          case 'Password is too short':
            toast.error('Password must be at least 6 characters')
            break
          default:
            toast.error('Registration failed. Please try again.')
        }
      }

      console.error('Registration error:', error)
    }
  }

  return (
    <div className='w-full rounded-lg bg-white p-8 shadow-xl'>
      <div className='mb-6 text-center'>
        <h1 className='text-2xl font-bold text-gray-900'>Create an account</h1>
        <p className='mt-2 text-sm text-gray-600'>Join us today</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Username</label>
          <input
            type='text'
            {...register('username', {
              required: 'Username is required',
              minLength: {
                value: 3,
                message: 'Username must be at least 3 characters'
              }
            })}
            className={`mt-1 block w-full rounded-md border px-3 py-2 ${
              errors.username ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.username && <p className='mt-1 text-sm text-red-500'>{errors.username.message}</p>}
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>Email</label>
          <input
            type='email'
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

        <div>
          <label className='block text-sm font-medium text-gray-700'>Confirm Password</label>
          <input
            type='password'
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: (val: string) => {
                if (watch('password') !== val) {
                  return 'Passwords do not match'
                }
              }
            })}
            className={`mt-1 block w-full rounded-md border px-3 py-2 ${
              errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.confirmPassword && <p className='mt-1 text-sm text-red-500'>{errors.confirmPassword.message}</p>}
        </div>

        <button
          type='submit'
          disabled={isSubmitting}
          className='w-full rounded-md bg-[#517B3C] px-4 py-2 text-white transition-colors hover:bg-[#446832] disabled:opacity-50'
        >
          {isSubmitting ? 'Creating account...' : 'Create account'}
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
