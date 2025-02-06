import { useNavigate } from 'react-router'

function Error() {
  const navigate = useNavigate()
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6'>
      <h1 className='mb-4 text-4xl font-bold text-red-500'>Something went wrong 😢</h1>
      <button
        onClick={() => navigate(-1)}
        className='rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600'
      >
        &larr; Go back
      </button>
    </div>
  )
}

export default Error
