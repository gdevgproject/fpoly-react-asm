export default function ProductCategories() {
  const categories = [
    {
      id: 1,
      name: 'garten spaten',
      image:
        'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=800&width=600'
    },
    {
      id: 2,
      name: 'sand',
      image:
        'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=400&width=400'
    },
    {
      id: 3,
      name: 'pflanzer',
      image:
        'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=400&width=400'
    }
  ]

  return (
    <section className='container mx-auto max-w-7xl px-4 py-12'>
      <div className='grid auto-rows-[300px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {categories.map((category, index) => (
          <div
            key={category.id}
            className={`relative overflow-hidden rounded-lg ${
              index === 0 ? 'md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-2' : ''
            }`}
          >
            <div className='absolute inset-0'>
              <img
                src={category.image || '/placeholder.svg'}
                alt={category.name}
                className='h-full w-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-b from-black/10 to-black/30'>
                <div className='absolute right-0 bottom-0 left-0'>
                  <div className='bg-black/20 p-4 backdrop-blur-[2px]'>
                    <h3 className='text-xl font-medium text-white'>{category.name}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
