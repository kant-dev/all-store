import { Card, CardHeader } from '@/components/ui/card'
import { ShirtIcon, GemIcon, HeadsetIcon, ShoppingBagIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type ShopCategoriesCardProps = {
  categories: string[]
}

const categoryIcons: Record<string, React.ReactNode> = {
  'men\'s clothing': <ShirtIcon size={60} />,
  'jewelery': <GemIcon size={60} />,
  'electronics': <HeadsetIcon size={60} />,
  'women\'s clothing': <ShoppingBagIcon size={60} />,
}

export default function ShopCategoriesCard({ categories }: ShopCategoriesCardProps) {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 px-0-4'>
      {
        categories.map((category, index) => (
          <Link href={`/categories/${encodeURIComponent(category.toLowerCase())}`} key={index}>
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex flex-col items-center space-y-2">
                  <div>{categoryIcons[category.toLowerCase()]}</div>
                  <h3 className="text-center text-lg">{category}</h3>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))
      }
    </div>
  )
}
