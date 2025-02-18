import { useState } from 'react'

interface ProductGalleryProps {
  product: {
    id: number
    name: string
    image: string
  }
}

export default function ProductGallery({ product }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [product.image] // Use product image

  return (
    <div className='space-y-4'>
      <div className='aspect-square overflow-hidden rounded-lg bg-gray-100'>
        <img
          src={images[selectedImage] || '/placeholder.svg'}
          alt={product.name}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='flex gap-4'>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square w-24 overflow-hidden rounded-lg border-2 ${
              selectedImage === index ? 'border-[#517B3C]' : 'border-transparent'
            }`}
          >
            <img
              src={image || '/placeholder.svg'}
              alt={`Product thumbnail ${index + 1}`}
              className='h-full w-full object-cover'
            />
          </button>
        ))}
      </div>
    </div>
  )
}
