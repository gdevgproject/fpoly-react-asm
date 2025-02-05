export default function BestSellers() {
  const products = [
    {
      id: 1,
      name: 'Growbox',
      subtitle: 'Dress',
      price: '$ 963.85',
      image:
        'https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D?height=400&width=400'
    },
    {
      id: 2,
      name: 'Töpfe',
      subtitle: '5 By 5 Pots For Planting',
      price: '$ 6130.00',
      image:
        'https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D?height=400&width=400'
    },
    {
      id: 3,
      name: 'Lichthänger-Set',
      subtitle: 'Light-Hanger Set',
      price: '$ 753.00',
      image:
        'https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D?height=400&width=400'
    },
    {
      id: 4,
      name: 'Licht',
      subtitle: 'Dress',
      price: '$ 2364.00',
      salePrice: '$ 1155.00',
      sale: true,
      image:
        'https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D?height=400&width=400'
    }
  ]

  return (
    <section className='container mx-auto max-w-7xl px-4 py-12'>
      <h2 className='mb-8 text-2xl font-semibold text-[#4A5842]'>Best Sellers</h2>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
        {products.map((product) => (
          <div key={product.id} className='group relative'>
            {product.sale && (
              <span className='absolute top-2 right-2 bg-[#1F2937] px-2 py-1 text-xs text-white'>SALE</span>
            )}
            <div className='aspect-square overflow-hidden rounded-lg bg-gray-100'>
              <img
                src={product.image || '/placeholder.svg'}
                alt={product.name}
                className='h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105'
              />
            </div>
            <div className='mt-4 space-y-1'>
              <h3 className='text-lg font-medium'>{product.name}</h3>
              <p className='text-sm text-gray-600'>{product.subtitle}</p>
              <div className='flex gap-2'>
                {product.salePrice ? (
                  <>
                    <span className='text-gray-500 line-through'>{product.price}</span>
                    <span className='text-red-500'>{product.salePrice}</span>
                  </>
                ) : (
                  <span>{product.price}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
