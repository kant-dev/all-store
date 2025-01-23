import { Button } from '@/components/ui/button'
import { useCartStorage } from '@/storage/cart-storage'
import { Cart } from '@/types/Cart'
import { MinusIcon, PlusIcon } from 'lucide-react'
import React from 'react'

type CartItemQuantityProps = {
  item: Cart
}

export default function CartQuantity({ item }: CartItemQuantityProps) {

  const {upsertCartItem} = useCartStorage(state => state)

  const handleAddProduct = () => {
    upsertCartItem(item.product,  1)
  }
  
  const handleRemoveProduct = () => {
    upsertCartItem(item.product,  -1)
  }

  return (
    <div className='flex gap-3 items-center'>
      <Button
      onClick={handleAddProduct}
      size='icon'
      className='size-5'
      >
        <PlusIcon />
      </Button>

      <span className='text-gray-600'>{item.quantity}</span>

      <Button
        onClick={handleRemoveProduct}
        size='icon'
        className='size-5'
      >
        <MinusIcon />
      </Button>
    </div>
  )
}