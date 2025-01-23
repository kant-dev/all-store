

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/hooks/use-toast'
import { useCartStorage } from '@/storage/cart-storage'
import { Product } from '@/types/Product'
import { ShoppingCartIcon } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import DetailsSheet from '../Sheet/DetailsSheet'

type CardFilteredProps = {
  categorySelected: string,
  products: Product[]
}

export default function CardFilteredProduct({ categorySelected, products }: CardFilteredProps) {


  const [catProdFiltereds, setCatProdFiltereds] = useState<Product[]>([])
  const {upsertCartItem} = useCartStorage(state => state)
  const {toast} =  useToast()
  

  useEffect(() => {
    const filtered = products.filter(product => product.category === categorySelected)
    setCatProdFiltereds(filtered)
  }, [categorySelected, products]) 

  const handleAddToCart = (product: Product) => {
    upsertCartItem(product, 1)
    toast({
      title: 'Product added to cart',
      description: 'Check your cart to proceed',
      duration: 3000,
      action: <ToastAction altText='fechar'>Fechar</ToastAction>
    })
  }


  return (
    <div className=' grid grid-cols-1 lg:grid-cols-3 gap-6 p-4'>
      {catProdFiltereds.length > 0 ? (
        catProdFiltereds.map((product, index) => (
          <Card key={index} className=''>
            <CardHeader>
              <div className='flex justify-center border rounded-md p-2'>
                <img src={product.image} alt={product.title} className='lg:h-60 h-44 '
                />
              </div>
            </CardHeader>
            <CardContent className='flex flex-col gap-y-4'>
              <CardTitle className='line-clamp-1 px-2'>{product.title}</CardTitle>
              <CardDescription className='px-2 flex flex-col gap-y-4'>
                <p className='line-clamp-2'>{product.description}</p>
                <p className='text-lg text-slate-900 font-semibold'>$ {product.price.toFixed(2)}</p>
              </CardDescription>
            </CardContent>
            <CardFooter className='flex justify-between'>
              <div className='flex gap-6'>
                <Button>Buy</Button>
                <DetailsSheet product={product}/>
              </div>
              <Button onClick={() => handleAddToCart(product)}>
                <ShoppingCartIcon />
              </Button>
            </CardFooter>
          </Card>
        ))
      ) : (
        products.map((product, index) => (
          <Card key={index}>
            <CardHeader>
              <div className='flex justify-center border rounded-md p-2'>
                <img src={product.image} alt={product.title} className='lg:h-60 h-44 '
                />
              </div>
            </CardHeader>
            <CardContent className='flex flex-col gap-y-4'>
              <CardTitle className='line-clamp-1 px-2'>{product.title}</CardTitle>
              <CardDescription className='px-2 flex flex-col gap-y-4'>
                <p className='line-clamp-2'>{product.description}</p>
                <p className='text-lg text-slate-900 font-semibold'>$ {product.price.toFixed(2)}</p>
              </CardDescription>
            </CardContent>
            <CardFooter className='flex justify-between'>
            <div className='flex gap-6'>
                <Button>Buy</Button>
                <DetailsSheet product={product}/>
                {/* <Button className='bg-white text-black hover:text-[#fafaf9]' >View Details</Button> */}
              </div>
              <Button onClick={() => handleAddToCart(product)}>
                <ShoppingCartIcon />
              </Button>
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  )
}
