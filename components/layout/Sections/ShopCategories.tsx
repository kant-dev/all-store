import { getCategories } from '@/services/getProducts'
import React from 'react'
import ShopCategoriesCard from '../Cards/ShopCategoriesCard'


type CategoriesProps = {
  categories: string[]
}
export default async function ShopCategories() {
  
  const categories  = await getCategories()

  console.log(categories)

  return (
    <section className='w-full flex justify-center px-4 pt-12'>
      <div className="container px-4 lg:px-0">
        <h2 className='text-3xl font-bold tracking-tight mb-8'>Shop by Category</h2>

        <ShopCategoriesCard categories={categories}/>
      </div>
    </section>
  )
}
