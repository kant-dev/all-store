"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/hooks/use-toast'
import { useCartStorage } from '@/storage/cart-storage'
import { Product } from '@/types/Product'
import React from 'react'

type FeaturedCardProps = {
  itemProduct: Product[]
}
export default function FeaturedCard({ itemProduct }: FeaturedCardProps) {
  const {toast} = useToast()
  const {upsertCartItem} = useCartStorage(state => state)


  const handleAddProduct = (product: Product) => {
    upsertCartItem(product, 1)
    toast({
      title: 'Product added to cart',
      description: 'Check your cart to proceed',
      duration: 3000,
      action: <ToastAction altText='fechar'>Fechar</ToastAction>
    })
  }
  // argumne
  return (
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 place-items-center'>
      {
        itemProduct.slice(0, 4).map((product, index) => (
          <Card key={index} className='lg:w-auto w-[80%] hover:shadow-lg transition-shadow duration-200'>
            <CardHeader>
              <div className='border p-2 flex justify-center items-center'>
                <img 
                  src={product.image} 
                  alt="" 
                  className='lg:h-60 h-44 object-cover'
                />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className='line-clamp-1'>
                {product.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                {product.description}
              </p>
              <p className="text-lg font-bold mt-2">$ {product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => handleAddProduct(product)}>Add to Cart</Button>
            </CardFooter>
          </Card>
        ))
      }
    </div>
  )
}
