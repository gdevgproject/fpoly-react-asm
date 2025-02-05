export default function ProductCategories() {
  const categories = [
    {
      id: 1,
      name: 'garten spaten',
      image: '/placeholder.svg?height=600&width=800',
      large: true
    },
    {
      id: 2,
      name: 'sand',
      image: '/placeholder.svg?height=400&width=400'
    },
    {
      id: 3,
      name: 'pflanzer',
      image: '/placeholder.svg?height=400&width=400'
    },
    {
      id: 4,
      name: 'schlammkuchen',
      image: '/placeholder.svg?height=400&width=400'
    },
    {
      id: 5,
      name: 'klemmen',
      image: '/placeholder.svg?height=400&width=400'
    }
  ]

  return (
    <section className='container mx-auto max-w-7xl px-4 py-12'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {categories.map((category) => (
          <div
            key={category.id}
            className={`group relative overflow-hidden rounded-lg ${
              category.large ? 'md:col-span-2 md:row-span-2' : ''
            }`}
          >
            <div className='aspect-square md:aspect-auto md:h-full'>
              <img
                src={category.image || '/placeholder.svg'}
                alt={category.name}
                className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
              />
            </div>
            <div className='absolute inset-0 bg-black/20'>
              <h3 className='absolute bottom-4 left-4 text-xl font-medium text-white'>{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
