import { Product } from '@/types/Product'
import React from 'react'
import FilterCategories from '../Filters/FilterCategories'

type FilteredProps = {
  products: Product[],
  categories: string[],
}

export default function FilteredProducts({products, categories} : FilteredProps) {
  return (
    <section className='w-full p-4 flex justify-center'>
      <div className='container'>
        <h2 className='text-3xl font-bold tracking-tight mb-4 lg:mb-8'>Products in stock</h2>
          <FilterCategories categories={categories} products={products}/>
      </div>
    </section>
  )
}
