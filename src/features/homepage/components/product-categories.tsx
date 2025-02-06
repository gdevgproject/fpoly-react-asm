import { Link } from 'react-router'

export default function ProductCategories() {
  const categories = [
    {
      id: 1,
      name: 'Garden Spade',
      image:
        'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=800&width=600'
    },
    {
      id: 2,
      name: 'Sand',
      image:
        'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=400&width=400'
    },
    {
      id: 3,
      name: 'Planter',
      image:
        'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=400&width=400'
    }
  ]

  return (
    <section className='container mx-auto max-w-7xl px-4 py-12'>
      <div className='grid auto-rows-[300px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {categories.map((category, index) => (
          <Link
            key={category.id}
            to={`/category`}
            className={`group relative overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${
              index === 0 ? 'md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-2' : ''
            }`}
          >
            <div className='absolute inset-0'>
              <img
                src={category.image || '/placeholder.svg'}
                alt={category.name}
                className='h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 transition-opacity duration-300 group-hover:opacity-90'>
                <div className='absolute right-0 bottom-0 left-0 translate-y-0 transition-transform duration-300 group-hover:-translate-y-2'>
                  <div className='bg-black/40 p-4 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/50'>
                    <h3 className='text-xl font-medium text-white'>{category.name}</h3>
                    <p className='mt-1 text-sm text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                      Click to explore →
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
