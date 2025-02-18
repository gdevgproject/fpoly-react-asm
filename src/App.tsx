import { createBrowserRouter, RouterProvider } from 'react-router'
import AdminCategories from './admin/AdminCategories'
import AdminLayout from './admin/AdminLayout'
import AdminProducts from './admin/AdminProducts'
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
      element: <AdminLayout />,
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
    }
  ])
  return <RouterProvider router={router} />
}
