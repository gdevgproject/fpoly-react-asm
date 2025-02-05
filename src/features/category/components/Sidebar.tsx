export default function Sidebar() {
  const categories = ['Eckige Töpfe', 'Runde Töpfe', 'Untersetzer', 'Pflanzschalen']

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
          src='/placeholder.svg?height=300&width=300'
          alt='Grow your own favourite plant'
          className='h-full w-full object-cover'
        />
      </div>

      <div>
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
