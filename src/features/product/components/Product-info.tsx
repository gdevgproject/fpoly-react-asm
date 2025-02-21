import { useState } from 'react'

interface Product {
  id: number
  name: string
  price: number
  quantity: number
  shortDescription: string
  fullDescription: string
  image: string
}

export default function ProductInfo({ product }: { product: Product }) {
  const [showFullDescription, setShowFullDescription] = useState(false)

  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold'>{product.name}</h1>
      <div className='text-xl font-semibold text-green-600'>${product.price.toLocaleString()}</div>

      {/* Short Description */}
      <p className='text-gray-600'>{product.shortDescription}</p>

      {/* Full Description */}
      <div className='prose max-w-none'>
        <p className='text-gray-700'>{showFullDescription ? product.fullDescription : product.shortDescription}</p>
        <button
          onClick={() => setShowFullDescription(!showFullDescription)}
          className='mt-2 text-green-600 hover:underline'
        >
          {showFullDescription ? 'See Less' : 'See More'}
        </button>
      </div>

      {/* Add to Cart Section */}
      <div className='border-t pt-6'>
        <div className='flex gap-4'>
          <input
            type='number'
            min='1'
            max={product.quantity}
            defaultValue='1'
            className='w-20 rounded border px-3 py-2'
          />
          <button className='rounded bg-green-600 px-6 py-2 text-white hover:bg-green-700'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
