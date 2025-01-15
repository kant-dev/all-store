"use client"

import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useCartStorage } from '@/storage/cart-storage';
import { ShoppingBagIcon } from 'lucide-react';
import React from 'react';

export default function Cart() {

  const {cart} = useCartStorage(state => state)

  return (
    <div className="flex items-center justify-center px-4">
      <Sheet>
        <SheetTrigger className="relative shadow-sm shadow-neutral-300 flex items-center p-2 rounded-md">
          <ShoppingBagIcon size={30} />
          {
            cart.length >  0 && <span className="absolute size-4 bg-red-500 rounded-full -right-1 -top-1"></span>
          }
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-start">Meu Carrinho</SheetTitle>
          </SheetHeader>
          <Separator className="my-4" />
          
        </SheetContent>
      </Sheet>
    </div>
  );
}
