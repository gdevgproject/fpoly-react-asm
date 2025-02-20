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
    formState: { errors }
  } = useForm<RegisterFormInputs>()

  const onSubmit = async (data: RegisterFormInputs) => {
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          username: data.username,
          role: 'user'
        })
      })

      if (response.ok) {
        toast.success('Registration successful!')
        navigate('/auth/login')
      } else {
        const errorData = await response.json()
        toast.error(errorData.message || 'Registration failed')
      }
    } catch (err) {
      toast.error('Registration failed')
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
            {...register('username', { required: 'Username is required' })}
            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2'
          />
          {errors.username && <p className='mt-1 text-sm text-red-500'>{errors.username.message}</p>}
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>Email</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2'
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
            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2'
          />
          {errors.password && <p className='mt-1 text-sm text-red-500'>{errors.password.message}</p>}
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>Confirm Password</label>
          <input
            type='password'
            {...register('confirmPassword', {
              validate: (val: string) => {
                if (!val) {
                  return 'Confirm Password is required'
                }
                if (watch('password') !== val) {
                  return 'Passwords do not match'
                }
              }
            })}
            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2'
          />
          {errors.confirmPassword && <p className='mt-1 text-sm text-red-500'>{errors.confirmPassword.message}</p>}
        </div>

        <button type='submit' className='w-full rounded-md bg-[#517B3C] px-4 py-2 text-white'>
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
