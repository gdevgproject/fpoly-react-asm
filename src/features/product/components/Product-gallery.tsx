import { useState } from 'react'

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=600&width=600',
    'https://images.unsplash.com/photo-1490370946242-34092dbf29f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D?height=600&width=600',
    'https://images.unsplash.com/photo-1669144457395-0ea4b03edaac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D?height=600&width=600'
  ]

  return (
    <div className='space-y-4'>
      <div className='aspect-square overflow-hidden rounded-lg bg-gray-100'>
        <img src={images[selectedImage] || '/placeholder.svg'} alt='Product' className='h-full w-full object-cover' />
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
