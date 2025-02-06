export default function Newsletter() {
  return (
    <section className='container mx-auto max-w-7xl px-4 py-16'>
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-3xl font-semibold text-[#4A5842]'>
          Subscribe<span className='text-2xl'>*</span>
        </h2>
        <h3 className='mb-6 text-3xl font-semibold text-[#4A5842]'>— Our Newsletter</h3>
        <p className='mb-8 text-gray-600'>
          Get weekly updates about our products in your email, no spam guaranteed we promise{' '}
          <span role='img' aria-label='promise'>
            ✌️
          </span>
        </p>
        <form
          className='flex gap-2'
          onSubmit={(e) => {
            e.preventDefault()
            console.log('Form submitted')
          }}
        >
          <input
            type='email'
            placeholder='youremail@gmail.com'
            className='flex-1 rounded-md border border-gray-300 px-4 py-2 focus:border-[#517B3C] focus:ring-1 focus:ring-[#517B3C] focus:outline-none'
          />
          <button
            type='submit'
            className='rounded-md bg-[#4A5842] px-6 py-2 text-white transition-colors hover:bg-[#3A4632]'
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  )
}
