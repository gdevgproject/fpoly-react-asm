export default function CategoryTabs() {
  const categories = [
    {
      id: 'square-pots',
      name: 'Square Pots',
      image:
        'https://images.unsplash.com/photo-1599360889420-da1afaba9edc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=100&width=100'
    },
    {
      id: 'round-pots',
      name: 'Round Pots',
      image:
        'https://images.unsplash.com/photo-1599360889420-da1afaba9edc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=100&width=100'
    },
    {
      id: 'coasters',
      name: 'Coasters',
      image:
        'https://images.unsplash.com/photo-1599360889420-da1afaba9edc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=100&width=100'
    },
    {
      id: 'planting-bowls',
      name: 'Planting Bowls',
      image:
        'https://images.unsplash.com/photo-1599360889420-da1afaba9edc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=100&width=100'
    }
  ]

  return (
    <div className='container mx-auto max-w-7xl px-4 py-8'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {categories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className='group flex items-center gap-4 rounded-lg bg-[#E8F5E9] p-4 transition-colors hover:bg-[#C8E6C9]'
          >
            <img src={category.image || '/placeholder.svg'} alt='' className='h-16 w-16 rounded-lg object-cover' />
            <span className='text-lg font-medium text-[#4A5842]'>{category.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
