import { useState } from 'react'

interface Product {
  id: number
  name: string
  images: string[]
  // ...other properties
}

export default function ProductGallery({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className='space-y-4'>
      {/* Main large image */}
      <div className='aspect-square overflow-hidden rounded-lg border bg-gray-100'>
        <img
          src={product.images[selectedImage]}
          alt={product.name}
          className='h-full w-full object-cover object-center'
        />
      </div>

      {/* Thumbnail images */}
      <div className='grid grid-cols-4 gap-4'>
        {product.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square overflow-hidden rounded-lg border bg-gray-100 ${
              selectedImage === index ? 'ring-2 ring-green-500' : ''
            }`}
          >
            <img
              src={image}
              alt={`${product.name} view ${index + 1}`}
              className='h-full w-full object-cover object-center'
            />
          </button>
        ))}
      </div>
    </div>
  )
}
