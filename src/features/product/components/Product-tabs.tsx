import { useState } from 'react'

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState('description')

  return (
    <div className='mt-12'>
      <div className='border-b border-gray-200'>
        <nav className='-mb-px flex gap-8'>
          {['Description', 'About'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`border-b-2 py-4 text-sm font-medium ${
                activeTab === tab.toLowerCase()
                  ? 'border-[#517B3C] text-[#517B3C]'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
      <div className='py-8'>
        {activeTab === 'description' && (
          <div className='prose max-w-none'>
            <h2 className='text-xl font-medium text-[#517B3C]'>Description</h2>
            <p className='mt-4 text-gray-600'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled i
            </p>
          </div>
        )}
        {activeTab === 'about' && (
          <div className='prose max-w-none'>
            <h2 className='text-xl font-medium text-[#517B3C]'>About</h2>
            <p className='mt-4 text-gray-600'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled i
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
