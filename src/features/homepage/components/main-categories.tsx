export default function MainCategories() {
  const categories = [
    {
      id: 1,
      name: 'Beleuchtung',
      items: '30 items',
      image: '/placeholder.svg?height=400&width=400'
    },
    {
      id: 2,
      name: 'Dünger',
      items: '20 items',
      image: '/placeholder.svg?height=400&width=400'
    },
    {
      id: 3,
      name: 'Erde & Substrate',
      items: '20 items',
      image: '/placeholder.svg?height=400&width=400'
    },
    {
      id: 4,
      name: 'Bewässerung',
      items: '20 items',
      image: '/placeholder.svg?height=400&width=400'
    },
    {
      id: 5,
      name: 'Töpfe & Behälter',
      items: '20 items',
      image: '/placeholder.svg?height=400&width=400'
    },
    {
      id: 6,
      name: 'Growbox',
      items: '20 items',
      image: '/placeholder.svg?height=400&width=400'
    },
    {
      id: 7,
      name: 'Pflanzen & Gärtnern',
      items: '30 items',
      image: '/placeholder.svg?height=400&width=400'
    },
    {
      id: 8,
      name: 'Lüftung & Klimaanlage',
      items: '20 items',
      image: '/placeholder.svg?height=400&width=400'
    }
  ]

  return (
    <section className='container mx-auto max-w-7xl px-4 py-12'>
      <h2 className='mb-8 text-2xl font-semibold text-[#4A5842]'>Kategorien</h2>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {categories.map((category) => (
          <div key={category.id} className='group relative overflow-hidden rounded-lg'>
            <div className='aspect-square'>
              <img
                src={category.image || '/placeholder.svg'}
                alt={category.name}
                className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
              />
            </div>
            <div className='absolute inset-0 bg-black/30 p-4 text-white'>
              <div className='flex h-full flex-col justify-end'>
                <h3 className='text-xl font-medium'>{category.name}</h3>
                <p className='text-sm opacity-90'>{category.items}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
