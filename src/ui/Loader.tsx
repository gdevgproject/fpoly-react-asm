export default function Loader() {
  return (
    <div className='absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm'>
      <svg
        className='mr-3 -ml-1 h-10 w-10 animate-spin text-blue-500'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
      >
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8v8H4z' />
      </svg>
    </div>
  )
}
