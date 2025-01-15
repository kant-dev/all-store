import { Product } from '@/types/Product'
import {req} from './httpClient'

export const getAllProducts = async() => {
  const res = await req.get(`/products`)
  return res.data
}

export const getCategories = async ():  Promise<string[]> => {
  try{
    const res = await req.get<Product[]>('/products')
    const categories = res.data

    const allCategories = [...new Set(categories.map((produc: Product) => produc.category))]

    return allCategories

  } catch (err) {
    console.error(err)
    throw err
  }
}