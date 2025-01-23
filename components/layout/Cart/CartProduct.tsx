import React from 'react';
import CartQuantity from './CartQuantity';
import { Cart } from '@/types/Cart';

type CartProductProps = {
  item: Cart; // Atualizado para usar o nome "item" em vez de "product"
};

export default function CartProduct({ item }: CartProductProps) {
  return (
    <div className="flex items-center gap-8">
      <div className="w-16 overflow-hidden">
        <img
          src={item.product.image}
          alt={item.product.title}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex-1">
        <p className='text-md line-clamp-2 lg:line-clamp-2'>{item.product.title}</p>
        <p>
          <span className="text-sm text-gray-500">
            {item.quantity} x {item.product.price.toFixed(2)} $
          </span>
        </p>
      </div>
      <div>
        <CartQuantity item={item} />
      </div>
    </div>
  );
}
