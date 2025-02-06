export default function Sidebar() {
  const categories = ['Square Pots', 'Round Pots', 'Coasters', 'Plant Bowls']

  return (
    <div className='space-y-8'>
      <div>
        <h2 className='mb-4 text-xl font-semibold text-[#4A5842]'>Kategorien</h2>
        <div className='space-y-2'>
          {categories.map((category) => (
            <label key={category} className='flex items-center gap-2'>
              <input type='checkbox' className='rounded border-gray-300 text-[#517B3C] focus:ring-[#517B3C]' />
              <span className='text-sm text-gray-700'>{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div className='overflow-hidden rounded-lg'>
        <img
          src='https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=300&width=300'
          alt='Grow your own favourite plant'
          className='h-full w-full object-cover brightness-75 filter'
        />
      </div>
      <div className='relative -mt-20'>
        <div className='absolute inset-0 bg-black' />
        <div className='absolute top-[-80px] right-0 left-0 flex flex-col items-center'>
          <h3 className='mb-4 text-center text-xl font-bold text-white'>Grow your own favourite plant</h3>
          <button className='rounded bg-[#517B3C] px-3 py-1.5 text-sm font-semibold text-white hover:bg-[#3d6230]'>
            Shop Now
          </button>
        </div>
      </div>

      <div className='mt-30'>
        <h2 className='mb-4 text-xl font-semibold text-[#4A5842]'>Filter By Price</h2>
        <div className='space-y-4'>
          <div className='flex items-center justify-between text-sm'>
            <span>From $0 to $8000</span>
            <button className='text-[#517B3C]'>Filter</button>
          </div>
          <input type='range' min='0' max='8000' className='h-2 w-full appearance-none rounded-lg bg-[#517B3C]' />
        </div>
      </div>

      <div>
        <h2 className='mb-4 text-xl font-semibold text-[#4A5842]'>Filter By Size</h2>
        <div className='space-y-4'>
          <div className='flex items-center justify-between text-sm'>
            <span>2 mm by 50</span>
            <button className='text-[#517B3C]'>Filter</button>
          </div>
          <input type='range' min='0' max='100' className='h-2 w-full appearance-none rounded-lg bg-[#517B3C]' />
        </div>
      </div>
    </div>
  )
}
