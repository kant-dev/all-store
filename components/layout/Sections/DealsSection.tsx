import React from 'react'
import DealsCard from '../Cards/DealsCard'
import DealsBanner from './DealsBanner'
import { Product } from '@/types/Product'
import { getAllProducts, getCategories } from '@/services/getProducts'
import DealsProductsCard from '../Cards/DealsProductsCard'


export default async function DealsSection() {

  const products: Product[] = await getAllProducts()
  const categories: string[] = await getCategories()

  return (
    <section className='w-full flex justify-center flex-col items'>
      <DealsBanner/>
      <DealsCard/>
      <DealsProductsCard categories={categories} products={products}/>
    </section>
  )
}
