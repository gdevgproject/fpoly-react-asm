import { Link } from 'react-router'

export default function MainCategories() {
  const categories = [
    {
      id: 1,
      name: 'Lighting',
      items: '30 items',
      image:
        'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=400&width=400'
    },
    {
      id: 2,
      name: 'Fertilizers',
      items: '20 items',
      image:
        'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=400&width=400'
    },
    {
      id: 3,
      name: 'Soil & Substrates',
      items: '20 items',
      image:
        'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=400&width=400'
    },
    {
      id: 4,
      name: 'Irrigation',
      items: '20 items',
      image:
        'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=400&width=400'
    },
    {
      id: 5,
      name: 'Pots & Containers',
      items: '20 items',
      image:
        'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=400&width=400'
    },
    {
      id: 6,
      name: 'Grow Box',
      items: '20 items',
      image:
        'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=400&width=400'
    },
    {
      id: 7,
      name: 'Plants & Gardening',
      items: '30 items',
      image:
        'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=400&width=400'
    },
    {
      id: 8,
      name: 'Ventilation & Air Conditioning',
      items: '20 items',
      image:
        'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=400&width=400'
    }
  ]

  return (
    <section className='container mx-auto max-w-7xl px-4 py-12'>
      <h2 className='mb-8 text-2xl font-semibold text-[#4A5842]'>Categories</h2>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {categories.map((category) => (
          <Link to='/category' key={category.id} className='group relative overflow-hidden rounded-lg'>
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
          </Link>
        ))}
      </div>
    </section>
  )
}
