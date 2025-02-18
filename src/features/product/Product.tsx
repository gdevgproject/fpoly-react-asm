import ProductGallery from '@/features/product/components/Product-gallery'
import ProductInfo from '@/features/product/components/Product-info'
import ProductReviews from '@/features/product/components/Product-reviews'
import ProductTabs from '@/features/product/components/Product-tabs'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'

interface Product {
  id: number
  name: string
  price: number
  categoryId: number
  image: string
  quantity: number
}

export default function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch product')
        }
        const data: Product = await response.json()
        setProduct(data)
      } catch (error) {
        console.error('Error fetching product:', error)
      }
    }

    if (id) {
      fetchProduct()
    }
  }, [id])

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <main className='min-h-screen bg-white py-12'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
        <ProductTabs />
        <ProductReviews />
      </div>
    </main>
  )
}
