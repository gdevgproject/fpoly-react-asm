import { useState } from 'react'
import { Link } from 'react-router'

export default function ProductGrid() {
  const [sortBy, setSortBy] = useState('newest')
  const [view, setView] = useState('default')

  const products = [
    {
      id: 1,
      name: 'Square cultivation pots',
      price: 38.0,
      originalPrice: 45.0,
      image:
        'https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=300&width=300',
      sale: true
    },
    {
      id: 2,
      name: 'Round plant pots',
      price: 28.0,
      image:
        'https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=300&width=300'
    },
    {
      id: 3,
      name: 'Square plant pots',
      price: 21.0,
      originalPrice: 45.0,
      image:
        'https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=300&width=300'
    },
    {
      id: 4,
      name: 'Ceramic Vase',
      price: 50.0,
      originalPrice: 60.0,
      image:
        'https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=300&width=300',
      sale: false
    },
    {
      id: 5,
      name: 'Wooden Tray',
      price: 35.0,
      image:
        'https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=300&width=300',
      sale: false
    },
    {
      id: 6,
      name: 'Glass Bottle',
      price: 25.0,
      image:
        'https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=300&width=300',
      sale: true
    }
  ]

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-2'>
            <span className='text-sm text-gray-600'>Sort By :</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className='rounded-md border-gray-300 py-1 pr-8 pl-3 text-sm focus:border-[#517B3C] focus:ring-[#517B3C]'
            >
              <option value='newest'>Newest</option>
              <option value='price-low'>Price: Low to High</option>
              <option value='price-high'>Price: High to Low</option>
            </select>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-sm text-gray-600'>Show :</span>
            <select
              value={view}
              onChange={(e) => setView(e.target.value)}
              className='rounded-md border-gray-300 py-1 pr-8 pl-3 text-sm focus:border-[#517B3C] focus:ring-[#517B3C]'
            >
              <option value='default'>Default</option>
              <option value='compact'>Compact</option>
              <option value='large'>Large</option>
            </select>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {products.map((product) => (
          <Link to='/product' key={product.id} className='group relative'>
            {product.sale && (
              <span className='absolute top-4 left-4 rounded bg-[#4A5842] px-2 py-1 text-xs text-white'>Sell</span>
            )}
            <div className='aspect-square overflow-hidden rounded-lg bg-gray-100'>
              <img
                src={product.image || '/placeholder.svg'}
                alt={product.name}
                className='h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105'
              />
            </div>
            <div className='mt-4 flex items-start justify-between'>
              <div>
                <h3 className='text-sm font-medium text-gray-900'>{product.name}</h3>
                <div className='mt-1 flex items-center gap-2'>
                  <span className='text-sm font-medium text-gray-900'>${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className='text-sm text-gray-500 line-through'>${product.originalPrice.toFixed(2)}</span>
                  )}
                </div>
              </div>
              <div className='flex gap-2'>
                <button className='rounded-full bg-white p-2 shadow-md hover:bg-gray-50'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-5 w-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                    />
                  </svg>
                </button>
                <button className='rounded-full bg-white p-2 shadow-md hover:bg-gray-50'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-5 w-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
