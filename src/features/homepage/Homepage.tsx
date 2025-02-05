import BestSellers from '@/features/homepage/components/best-sellers'
import MainCategories from '@/features/homepage/components/main-categories'
import Newsletter from '@/features/homepage/components/newsletter'
import ProductCategories from '@/features/homepage/components/product-categories'

export default function HomePage() {
  return (
    <main className='min-h-screen bg-[#F9F9F9]'>
      <BestSellers />
      <ProductCategories />
      <MainCategories />
      <Newsletter />
    </main>
  )
}
