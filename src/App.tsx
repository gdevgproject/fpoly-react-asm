import { createBrowserRouter, RouterProvider } from 'react-router'
import Category from './features/category/category'
import Homepage from './features/homepage/homepage'
import Product from './features/product/product'
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
