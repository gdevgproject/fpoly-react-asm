import { useEffect, useState } from 'react'
import { Navigate } from 'react-router'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem('token')
      const user = localStorage.getItem('user')

      if (!token || !user) {
        setIsAuthenticated(false)
        return
      }

      try {
        const response = await fetch('http://localhost:3000/users/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        if (response.ok) {
          const userData = JSON.parse(user)
          setIsAuthenticated(userData.role === 'admin')
        } else {
          setIsAuthenticated(false)
          localStorage.removeItem('token')
          localStorage.removeItem('user')
        }
      } catch (error) {
        setIsAuthenticated(false)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      }
    }

    validateToken()
  }, [])

  if (isAuthenticated === null) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    return <Navigate to='/auth/login' replace />
  }

  return <>{children}</>
}
