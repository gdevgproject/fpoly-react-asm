import ProductGallery from '@/features/product/components/Product-gallery'
import ProductInfo from '@/features/product/components/Product-info'
import ProductReviews from '@/features/product/components/Product-reviews'
import ProductTabs from '@/features/product/components/Product-tabs'

export default function ProductPage() {
  return (
    <main className='min-h-screen bg-white py-12'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
          <ProductGallery />
          <ProductInfo />
        </div>
        <ProductTabs />
        <ProductReviews />
      </div>
    </main>
  )
}
