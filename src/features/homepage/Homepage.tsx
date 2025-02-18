import BestSellers from '@/features/homepage/components/Best-sellers'
import MainCategories from '@/features/homepage/components/Main-categories'
import ProductCategories from '@/features/homepage/components/Product-categories'
import Newsletter from '@/ui/newsletter'
import Hero from './components/Hero'
import ProductList from './components/ProductList'
export default function HomePage() {
  return (
    <main className='min-h-screen bg-[#F9F9F9]'>
      <Hero />
      <BestSellers />
      <ProductList />
      <ProductCategories />
      <MainCategories />
      <Newsletter />
    </main>
  )
}
