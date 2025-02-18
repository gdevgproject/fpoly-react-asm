import { NavLink, Outlet } from 'react-router'

export default function AdminLayout() {
  return (
    <div className='flex h-screen bg-gray-50'>
      {/* Sidebar */}
      <div className='fixed top-0 left-0 h-full w-64 overflow-y-auto border-r border-gray-200 bg-white px-3 py-4'>
        <div className='mb-8'>
          <h1 className='text-2xl font-bold text-gray-800'>Admin Panel</h1>
        </div>
        <nav>
          <ul>
            <li className='mb-2'>
              <NavLink
                to='/admin/categories'
                className={({ isActive }) =>
                  `block rounded-md p-3 text-gray-700 hover:bg-gray-100 ${
                    isActive ? 'bg-green-100 font-medium text-green-700' : ''
                  }`
                }
              >
                Categories
              </NavLink>
            </li>
            <li className='mb-2'>
              <NavLink
                to='/admin/products'
                className={({ isActive }) =>
                  `block rounded-md p-3 text-gray-700 hover:bg-gray-100 ${
                    isActive ? 'bg-green-100 font-medium text-green-700' : ''
                  }`
                }
              >
                Products
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className='ml-64 flex-1 overflow-y-auto p-6'>
        <div className='rounded-md bg-white p-6 shadow-md'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
