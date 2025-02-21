import { Link } from 'react-router'

interface Product {
  id: number
  name: string
  price: number
  images: string[] // Thay đổi từ image sang images
}

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`} // Sửa từ /products/ thành /product/
          className='group overflow-hidden rounded-lg border bg-white p-4'
        >
          <div className='aspect-square overflow-hidden rounded-lg'>
            <img
              src={product.images[0]} // Sử dụng ảnh đầu tiên từ mảng
              alt={product.name}
              className='h-full w-full object-cover object-center transition-transform group-hover:scale-105'
            />
          </div>
          <h3 className='text-lg font-semibold'>{product.name}</h3>
          <p className='text-gray-600'>Price: ${product.price}</p>
        </Link>
      ))}
    </div>
  )
}
