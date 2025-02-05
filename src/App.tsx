import { createBrowserRouter, RouterProvider } from 'react-router'
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
          path: '/category',
          element: <Category />
        },
        {
          path: '/product',
          element: <Product />
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}
