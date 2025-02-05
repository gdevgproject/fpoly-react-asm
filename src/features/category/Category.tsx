import CategoryHero from '@/features/category/components/Category-hero'
import CategoryTabs from '@/features/category/components/Category-tabs'
import ProductGrid from '@/features/category/components/Product-grid'
import Sidebar from '@/features/category/components/Sidebar'

import Newsletter from '@/ui/newsletter'

export default function Category() {
  return (
    <main>
      <CategoryHero />
      <CategoryTabs />
      <div className='container mx-auto max-w-7xl px-4 py-8'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-4'>
          <div className='lg:col-span-3'>
            <ProductGrid />
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
