import { createBrowserRouter, RouterProvider } from 'react-router'
import ProtectedRoute from './components/ProtectedRoute'
import AdminCategories from './admin/AdminCategories'
import AdminLayout from './admin/AdminLayout'
import AdminProducts from './admin/AdminProducts'
import Auth from './features/auth/Auth'
import ForgotPasswordForm from './features/auth/components/ForgotPasswordForm'
import LoginForm from './features/auth/components/LoginForm'
import RegisterForm from './features/auth/components/RegisterForm'
import Category from './features/category/Category'
import Homepage from './features/homepage/Homepage'
import Product from './features/product/Product'
import AppLayout from './ui/AppLayout'
import Error from './ui/Error'

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Homepage />
        },
        {
          path: '/category/:id',
          element: <Category />
        },
        {
          path: '/product/:id',
          element: <Product />
        }
      ]
    },
    {
      path: '/admin',
      element: (
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: 'categories',
          element: <AdminCategories />
        },
        {
          path: 'products',
          element: <AdminProducts />
        }
      ]
    },
    {
      path: '/auth',
      element: <Auth />,
      children: [
        {
          path: 'login',
          element: <LoginForm />
        },
        {
          path: 'register',
          element: <RegisterForm />
        },
        {
          path: 'forgot-password',
          element: <ForgotPasswordForm />
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}
