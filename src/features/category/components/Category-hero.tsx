interface CategoryHeroProps {
  category: {
    id: number
    name: string
    image: string
    description: string
  }
}

export default function CategoryHero({ category }: CategoryHeroProps) {
  return (
    <section className='bg-gray-100 py-12'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-3xl font-semibold'>{category.name}</h1>
            <p className='mt-2 text-gray-600'>{category.description}</p>
          </div>
          <img src={category.image} alt={category.name} className='h-48 w-48 rounded-md object-cover' />
        </div>
      </div>
    </section>
  )
}
