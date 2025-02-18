import { Outlet } from 'react-router'

export default function Auth() {
  return (
    <main className='flex min-h-screen items-center justify-center bg-gray-100'>
      <Outlet />
    </main>
  )
}
