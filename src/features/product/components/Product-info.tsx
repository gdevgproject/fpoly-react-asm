import { useState } from 'react'

interface ProductInfoProps {
  product: {
    id: number
    name: string
    price: number
  }
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(3)

  return (
    <div className='space-y-6'>
      <div>
        <p className='text-sm font-medium text-[#517B3C]'>PLANT</p>
        <h1 className='mt-2 text-3xl font-bold text-gray-900'>{product.name}</h1>
        <p className='mt-1 text-xl text-gray-900'>0.27 to 2 litres</p>
      </div>

      <p className='text-base text-gray-600'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the
      </p>

      <div className='flex items-end gap-4'>
        <div>
          <p className='text-3xl font-bold text-gray-900'>${product.price}</p>
          <p className='text-sm text-gray-500 line-through'>$250.00</p>
        </div>
        <span className='rounded-md bg-red-50 px-2 py-1 text-sm font-medium text-red-600'>50%</span>
      </div>

      <div className='flex items-center gap-4'>
        <div className='flex items-center rounded-md border'>
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className='px-4 py-2 text-gray-600 hover:text-gray-700'
          >
            -
          </button>
          <span className='w-12 text-center'>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)} className='px-4 py-2 text-gray-600 hover:text-gray-700'>
            +
          </button>
        </div>
        <button className='flex-1 rounded-md bg-[#517B3C] px-8 py-3 text-white hover:bg-[#446832]'>Add to cart</button>
      </div>
    </div>
  )
}
