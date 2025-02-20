import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'

interface Product {
  id: number
  name: string
  price: number
  image: string
  categoryId: number
}

export default function SearchDropdown() {
  const [query, setQuery] = useState('')
  const [products, setProducts] = useState<Product[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      if (query.trim().length < 2) {
        setProducts([])
        return
      }

      try {
        const response = await fetch(`http://localhost:3000/products?q=${query}`)
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    const debounceTimer = setTimeout(() => {
      fetchProducts()
    }, 300)

    return () => clearTimeout(debounceTimer)
  }, [query])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={dropdownRef} className='relative w-full max-w-2xl'>
      <div className='group relative'>
        <input
          type='search'
          placeholder='Search for products...'
          className='w-full rounded-md border-2 border-transparent bg-white py-2 pr-10 pl-4 text-gray-900 transition-all duration-300 ease-in-out placeholder:text-gray-500 focus:border-[#517B3C] focus:ring-2 focus:ring-[#517B3C]/20 focus:outline-none'
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
        />
        <button className='absolute top-0 right-0 bottom-0 px-3 text-gray-500 transition-colors duration-200 hover:text-[#517B3C]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-5 w-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
          </svg>
        </button>
      </div>

      {/* Search Results Dropdown */}
      {isOpen && query.trim().length >= 2 && (
        <div className='absolute top-full left-0 z-50 mt-1 w-full rounded-md bg-white py-2 shadow-lg'>
          {products.length > 0 ? (
            <div className='max-h-96 overflow-y-auto'>
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className='flex items-center gap-4 px-4 py-3 transition-colors hover:bg-gray-50'
                  onClick={() => setIsOpen(false)}
                >
                  <img src={product.image} alt={product.name} className='h-12 w-12 rounded-md object-cover' />
                  <div>
                    <h3 className='font-medium text-gray-900'>{product.name}</h3>
                    <p className='text-sm text-gray-600'>${product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className='px-4 py-3 text-sm text-gray-500'>No products found</div>
          )}
        </div>
      )}
    </div>
  )
}
