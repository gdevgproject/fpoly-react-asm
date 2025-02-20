import { Navigate } from 'react-router'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const user = localStorage.getItem('user')
  const parsedUser = user ? JSON.parse(user) : null

  if (!parsedUser || parsedUser.role !== 'admin') {
    return <Navigate to='/' replace />
  }

  return <>{children}</>
}
