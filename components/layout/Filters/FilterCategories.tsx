'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Product } from '@/types/Product';
import { SlidersHorizontalIcon } from 'lucide-react';
import React, { useState } from 'react';
import CardFilteredProduct from '../Cards/CardFilteredProduct';
import { Separator } from '@/components/ui/separator';

type FilterCategoryProps = {
  categories: string[];
  products: Product[];
};

export default function FilterCategories({ categories, products }: FilterCategoryProps) {
  const [categorySelected, setCategorySelected] = useState('');

  const handleSelected = (option: string) => {
    setCategorySelected((prev) => (prev === option ? '' : option));
    console.log(`Selected category: ${option}`);
  };

  return (
    <div className="-2 flex flex-col lg:flex-row  gap-4">
      <aside className=" w-auto p-2 lg:border-r-2 lg:px-4"> {/* Largura automática */}
        <h2 className="flex gap-2 items-center">
          <SlidersHorizontalIcon />
          <span>Filters</span>
        </h2>
        <Separator className='mt-4 mb-2'/>
        <div className='grid grid-cols-2 lg:grid-cols-1 '>
          {categories.map((category, index) => (
            <div key={index} className="px-1 py-1 flex gap-2 items-center">
              <Checkbox
                className='w-5 h-5'
                id={`category-${index}`}
                value={category}
                checked={categorySelected === category}
                onCheckedChange={() => handleSelected(category)}
              />
              <Label htmlFor={`category-${index}`} className='text-md'>{category}</Label>
            </div>
          ))}
        </div>
      </aside>

      <div className="flex-1"> {/* Div de cards ocupa o restante do espaço */}
        <CardFilteredProduct categorySelected={categorySelected} products={products}/>
      </div>
    </div>
  );
}
