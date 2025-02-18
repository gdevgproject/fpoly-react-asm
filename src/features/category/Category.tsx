import CategoryHero from '@/features/category/components/Category-hero'
import CategoryTabs from '@/features/category/components/Category-tabs'
import ProductGrid from '@/features/category/components/Product-grid'
import Sidebar from '@/features/category/components/Sidebar'
import Newsletter from '@/ui/newsletter'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router' // Import useParams

interface CategoryType {
  id: number
  name: string
  image: string
  description: string
  featuredProducts: number[]
}

export default function Category() {
  const [category, setCategory] = useState<CategoryType | null>(null)
  const { id } = useParams() // Get category ID from URL

  useEffect(() => {
    // Fetch category data based on the ID from the URL
    const fetchCategory = async () => {
      try {
        const response = await fetch(`http://localhost:3000/categories/${id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch category')
        }
        const data: CategoryType = await response.json()
        setCategory(data)
      } catch (error) {
        console.error('Error fetching category:', error)
      }
    }

    fetchCategory()
  }, [id]) // Add 'id' to the dependency array

  if (!category) {
    return <div>Loading...</div>
  }

  return (
    <main>
      <CategoryHero category={category} />
      <CategoryTabs />
      <div className='container mx-auto max-w-7xl px-4 py-8'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-4'>
          <div className='lg:col-span-3'>
            <ProductGrid category={category} />
          </div>
          <aside className='lg:col-span-1'>
            <Sidebar />
          </aside>
        </div>
        <Newsletter />
      </div>
    </main>
  )
}
