import { useEffect, useState } from 'react'
import { Link } from 'react-router'

interface Product {
  id: number
  name: string
  subtitle: string
  price: number
  salePrice?: string
  sale?: boolean
  images: string[]
}

export default function BestSellers() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <section className='py-12'>
      <div className='container mx-auto max-w-7xl px-4'>
        <h2 className='mb-8 text-2xl font-semibold text-[#4A5842]'>Best Sellers</h2>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`} // Sửa từ /products/ thành /product/
              className='group overflow-hidden rounded-lg border bg-white p-4'
            >
              {product.sale && (
                <span className='absolute top-2 right-2 bg-[#1F2937] px-2 py-1 text-xs text-white'>SALE</span>
              )}
              <div className='aspect-square overflow-hidden rounded-lg'>
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className='h-full w-full object-cover object-center transition-transform group-hover:scale-105'
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
      </div>
    </section>
  )
}
