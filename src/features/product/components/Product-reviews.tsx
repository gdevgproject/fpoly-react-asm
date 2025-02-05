export default function ProductReviews() {
  const reviews = [
    {
      id: 1,
      author: 'Aman gupta',
      rating: 5,
      content:
        "I've been using this cleanser for about five or six months now and my acne is almost completely gone. I really struggled for years with my skin and tried everything possible but this is the only thing that managed to clear up my skin. 100% recommend and will continue to use is for sure."
    }
  ]

  return (
    <div className='mt-12'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='flex items-center'>
            <img
              src='https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=100&width=100'
              alt='Product thumbnail'
              className='h-16 w-16 rounded-lg object-cover'
            />
            <div className='ml-4'>
              <div className='flex items-center gap-2'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className='h-5 w-5 fill-[#517B3C]' viewBox='0 0 20 20'>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                ))}
                <span className='text-lg font-medium text-[#517B3C]'>5.0</span>
                <span className='text-sm text-gray-500'>(388)</span>
              </div>
            </div>
          </div>
          <button className='rounded-md bg-[#517B3C] px-4 py-2 text-sm text-white hover:bg-[#446832]'>
            Write reviews
          </button>
        </div>
      </div>

      <div className='mt-8 space-y-8'>
        {reviews.map((review) => (
          <div key={review.id} className='border-b border-gray-200 pb-8'>
            <div className='flex items-center justify-between'>
              <h3 className='font-medium text-gray-900'>{review.author}</h3>
              <div className='flex'>
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className='h-4 w-4 fill-[#517B3C]' viewBox='0 0 20 20'>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                ))}
              </div>
            </div>
            <p className='mt-4 text-gray-600'>{review.content}</p>
          </div>
        ))}
      </div>

      <div className='mt-8 text-center'>
        <button className='rounded-md border border-[#517B3C] px-8 py-2 text-sm font-medium text-[#517B3C] hover:bg-[#517B3C] hover:text-white'>
          See all
        </button>
      </div>
    </div>
  )
}
