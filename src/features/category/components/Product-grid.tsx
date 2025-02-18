import { useEffect, useState } from 'react'

interface Product {
  id: number
  name: string
  price: number
  image: string
}

interface ProductGridProps {
  category: {
    id: number
    name: string
    featuredProducts: number[]
  }
}

export default function ProductGrid({ category }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch products based on category's featuredProducts array
        const response = await fetch(`http://localhost:3000/products?categoryId=${category.id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        const data: Product[] = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [category.id])

  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => (
        <div key={product.id} className='rounded-md border p-4'>
          <img src={product.image} alt={product.name} className='mb-2 h-48 w-full rounded-md object-cover' />
          <h3 className='text-lg font-semibold'>{product.name}</h3>
          <p className='text-gray-600'>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  )
}
