import Footer from '@/components/layout/Footer/Footer'
import Header from '@/components/layout/Header/Header'
import FilteredProducts from '@/components/layout/Sections/FilteredProducts'
import { getAllProducts, getCategories } from '@/services/getProducts'
import { Product } from '@/types/Product'
import React from 'react'

export default  async function page() {

  const products: Product[] = await getAllProducts();
  const categories = await getCategories();

  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      <Header />
      <FilteredProducts categories={categories} products={products} />
      <Footer />
    </div>
  )
}
