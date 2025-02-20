import { Outlet } from 'react-router'

export default function Auth() {
  return (
    <main className='flex min-h-screen items-center justify-center bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9]'>
      <div className='relative w-full max-w-md'>
        {/* Decorative elements */}
        <div className='absolute -top-12 -left-12 text-[#517B3C]/10'>
          <svg className='h-24 w-24' viewBox='0 0 24 24' fill='currentColor'>
            <path d='M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z' />
          </svg>
        </div>
        <div className='absolute -right-12 -bottom-12 text-[#517B3C]/10'>
          <svg className='h-24 w-24' viewBox='0 0 24 24' fill='currentColor'>
            <path d='M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z' />
          </svg>
        </div>
        <Outlet />
      </div>
    </main>
  )
}
