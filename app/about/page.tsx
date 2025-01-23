import AboutCards from '@/components/layout/Cards/AboutCards'
import SwiperCarousel from '@/components/layout/Carousel/SwiperCarousel'
import Footer from '@/components/layout/Footer/Footer'
import Header from '@/components/layout/Header/Header'
import AboutHistory from '@/components/layout/Sections/AboutHistory'
import React from 'react'

export default function page() {
  return (
    <div>
      <Header/>
      <div className='w-full flex flex-col items-center relative'>
        <SwiperCarousel/>
        <div className='container flex flex-col absolute z-10 top-6 lg:top-[40%] justify-center items-center gap-y-2'>
          <h2 className='text-center text-4xl lg:text-6xl font-bold text-white'>About All Store</h2>
          <p className='text-center max-w-[25rem] text-lg lg:text-2xl text-white lg:max-w-[40rem] '>Your trusted destination for quality products and exceptional shopping experiences.</p>
        </div>
      </div>
      <AboutCards/>
      <AboutHistory/>
      <Footer/>
    </div>
  )
}
