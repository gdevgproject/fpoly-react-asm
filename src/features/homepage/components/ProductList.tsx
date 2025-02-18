import { useEffect, useState } from 'react'
import { Link } from 'react-router'

interface Product {
  id: number
  name: string
  subtitle: string
  price: string
  salePrice?: string
  sale?: boolean
  image: string
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <section className='container mx-auto max-w-7xl px-4 py-12'>
      <h2 className='mb-8 text-2xl font-semibold text-[#4A5842]'>Featured Products</h2>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
        {products.map((product) => (
          <Link key={product.id} to={`/product`} className='group relative'>
            {product.sale && (
              <span className='absolute top-2 right-2 bg-[#1F2937] px-2 py-1 text-xs text-white'>SALE</span>
            )}
            <div className='aspect-square overflow-hidden rounded-lg bg-gray-100'>
              <img
                src={product.image || '/placeholder.svg'}
                alt={product.name}
                className='h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105'
              />
            </div>
            <div className='mt-4 space-y-1'>
              <h3 className='text-lg font-medium'>{product.name}</h3>
              <p className='text-sm text-gray-600'>{product.subtitle}</p>
              <div className='flex gap-2'>
                {product.salePrice ? (
                  <>
                    <span className='text-gray-500 line-through'>{product.price}</span>
                    <span className='text-red-500'>{product.salePrice}</span>
                  </>
                ) : (
                  <span>{product.price}</span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
