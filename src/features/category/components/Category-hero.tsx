export default function CategoryHero() {
  return (
    <section className='bg-gradient-to-r from-[#C5E1A5] to-[#AED581] py-12'>
      <div className='container mx-auto max-w-7xl px-4'>
        <nav className='mb-4'>
          <ol className='flex items-center space-x-2 text-sm'>
            <li>
              <a href='/' className='text-[#517B3C] hover:underline'>
                Home
              </a>
            </li>
            <li className='text-gray-500'>/</li>
            <li className='text-gray-700'>Töpfe & Behälter</li>
          </ol>
        </nav>
        <h1 className='text-4xl font-semibold text-[#4A5842]'>Töpfe & Behälter</h1>
      </div>
    </section>
  )
}
