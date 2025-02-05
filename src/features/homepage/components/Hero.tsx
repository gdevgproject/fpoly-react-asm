'use client'

import { useState } from 'react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: 'Wir kümmern uns um Ihre schöner Garten und Haus',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      image:
        'https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
    // Add more slides as needed
  ]

  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9]'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='relative flex min-h-[600px] items-center'>
          {/* Left Content */}
          <div className='relative z-10 max-w-xl py-16'>
            <h1 className='text-4xl leading-tight font-bold text-[#2C1810] md:text-5xl lg:text-6xl'>
              {slides[currentSlide].title}
            </h1>
            <p className='mt-6 text-lg text-gray-700'>{slides[currentSlide].description}</p>
            <button className='mt-8 rounded-md border-2 border-[#517B3C] bg-transparent px-8 py-3 text-[#517B3C] transition-all hover:bg-[#517B3C] hover:text-white focus:ring-2 focus:ring-[#517B3C] focus:ring-offset-2 focus:outline-none'>
              Lern mehr
            </button>

            {/* Decorative Elements */}
            <div className='absolute -top-4 right-0 text-[#517B3C]/10'>
              <svg className='h-24 w-24' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z' />
              </svg>
            </div>
            <div className='absolute bottom-0 left-12 text-[#517B3C]/10'>
              <svg className='h-16 w-16' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z' />
              </svg>
            </div>
          </div>

          {/* Right Image with Mask */}
          <div className='absolute top-0 right-0 hidden h-full w-1/2 md:block'>
            <div className='relative h-full w-full'>
              {/* Image with Mask */}
              <div className='absolute inset-0'>
                <div className='relative h-full w-full overflow-hidden'>
                  <div
                    className='absolute inset-0 bg-cover bg-center'
                    style={{
                      backgroundImage: `url(${slides[currentSlide].image})`,
                      clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)'
                    }}
                  >
                    {/* Gradient Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-r from-[#E8F5E9]/80 to-transparent' />
                  </div>
                </div>
              </div>

              {/* Decorative Leaf */}
              <div className='absolute top-1/4 -left-12 text-[#517B3C]/20'>
                <svg className='h-24 w-24' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z' />
                </svg>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className='absolute bottom-8 left-4 flex items-center space-x-4'>
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
              className='group relative flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-[#517B3C] shadow-lg backdrop-blur-sm transition-all hover:bg-[#517B3C] hover:text-white focus:ring-2 focus:ring-[#517B3C] focus:ring-offset-2 focus:outline-none'
            >
              <span className='sr-only'>Previous slide</span>
              <svg
                className='h-6 w-6 transition-transform group-hover:-translate-x-0.5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
              </svg>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
              className='group relative flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-[#517B3C] shadow-lg backdrop-blur-sm transition-all hover:bg-[#517B3C] hover:text-white focus:ring-2 focus:ring-[#517B3C] focus:ring-offset-2 focus:outline-none'
            >
              <span className='sr-only'>Next slide</span>
              <svg
                className='h-6 w-6 transition-transform group-hover:translate-x-0.5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
