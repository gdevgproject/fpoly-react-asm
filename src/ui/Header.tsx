import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState<string | null>(null)

  const menuItems = [
    {
      title: 'Beleuchtung',
      items: ['LED Grow Lights', 'HPS Lampen', 'Komplettsets', 'Zeitschaltuhren', 'Reflektoren', 'Leuchtmittel']
    },
    {
      title: 'Growbox',
      items: ['Growboxen', 'Growbox Komplettsets', 'Growbox Zubehör', 'Growzelte', 'Growschränke']
    },
    {
      title: 'Dünger',
      items: ['Basis Dünger', 'Spezial Dünger', 'Bio Dünger', 'Booster', 'pH Regulierung']
    },
    {
      title: 'Erde & Substrate',
      items: ['Erde', 'Kokos', 'Hydro Substrate', 'Perlite', 'Vermiculite']
    },
    {
      title: 'Töpfe & Behälter',
      items: ['Eckige Töpfe', 'Runde Töpfe', 'Untersetzer', 'Pflanzschalen', 'Anzuchttöpfe']
    },
    {
      title: 'Bewässerung',
      items: ['Bewässerungssysteme', 'Pumpen', 'Schläuche', 'Timer', 'Tanks']
    },
    {
      title: 'Pflanzen & Gärtnern',
      items: ['Samen', 'Stecklinge', 'Werkzeuge', 'Messgeräte', 'Pflanzenpflege']
    },
    {
      title: 'Lüftung & Klimaanlage',
      items: ['Ventilatoren', 'Filter', 'Klimageräte', 'Luftbefeuchter', 'Abluft Sets']
    }
  ]

  return (
    <header className='bg-[#517B3C] text-white'>
      {/* Top Bar */}
      <div className='container mx-auto max-w-7xl px-4 py-4'>
        <div className='flex items-center justify-between gap-4'>
          {/* Search Bar */}
          <div className='mx-auto max-w-2xl flex-1'>
            <div className='relative'>
              <input
                type='search'
                placeholder='Suchen Sie nach Produkten, Marken und mehr'
                className='w-full rounded-md border-0 bg-white py-2 pr-10 pl-4 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-[#517B3C]'
              />
              <button className='absolute top-0 right-0 bottom-0 px-3 text-gray-500'>
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
          </div>

          {/* Right Section */}
          <div className='flex items-center gap-6'>
            {/* Language Selector */}
            <div className='flex items-center gap-1'>
              <span>En</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-4 w-4'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
              </svg>
            </div>

            {/* Account */}
            <button className='flex items-center gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                />
              </svg>
              <span>Account</span>
            </button>

            {/* Cart */}
            <button className='flex items-center gap-2'>
              <div className='relative'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                  />
                </svg>
                <span className='absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs'>
                  1
                </span>
              </div>
              <span>Cart</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className='border-t border-[#5c8746] bg-[#517B3C]'>
        <div className='container mx-auto max-w-7xl px-4'>
          <ul className='flex'>
            {menuItems.map((item) => (
              <li key={item.title} className='relative'>
                <button
                  onClick={() => setIsOpen(isOpen === item.title ? null : item.title)}
                  className='flex items-center gap-1 px-4 py-3 hover:bg-[#5c8746] focus:bg-[#5c8746]'
                >
                  {item.title}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-4 w-4'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                  </svg>
                </button>
                {isOpen === item.title && (
                  <div className='absolute top-full left-0 z-50 w-48 bg-white py-2 shadow-lg'>
                    {item.items.map((subItem) => (
                      <a key={subItem} href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
