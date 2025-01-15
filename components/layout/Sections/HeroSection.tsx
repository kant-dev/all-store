import { Button } from '@/components/ui/button'
import React from 'react'

export default function HeroSection() {
  return (
    <section className='w-full flex justify-center bg-gradient-to-br from-blue-300 via-blue-500 to-blue-600 '>
      <div className="container flex flex-col  items-center justify-center space-y-4 py-16 text-center md:py-36 lg:py-40">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
          Discover Amazing Products
        </h1>
        <p className=" text-white md:text-3xl text-xl max-w-[400px] lg:max-w-max mb-8 ">
          Shop the latest trends and find incredible deals on our curated collection of products.
        </p>
        <div className="flex flex-col gap-6 min-[400px]:flex-row py-6">
          <Button className='text-xl  px-10 py-6 rounded-sm'>Shop Now</Button>
          <Button  className='text-xl px-10 py-6 bg-white text-black hover:text-[#fafaf9] rounded-sm'>View Deals</Button>
        </div>
      </div>
    </section>
  )
}
