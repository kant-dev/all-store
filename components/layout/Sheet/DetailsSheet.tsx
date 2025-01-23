import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Product } from '@/types/Product';
import Link from 'next/link';
import React from 'react';

type DetailsProduct = {
  product: Product;
};

export default function DetailsSheet({ product }: DetailsProduct) {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">View Details</Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="lg:px-20">
          <SheetHeader>
            <SheetTitle className="text-start">
              <Link href="/">
                <p className="text-2xl">
                  All <span className="font-bold text-blue-600">Store</span>
                </p>
              </Link>
            </SheetTitle>
          </SheetHeader>
          <Separator className="my-4" />
          <div className="flex justify-center w-full">
            {product ? (
              <Card className="flex flex-col items-center lg:flex-row lg:items-start gap-6 p-4">
                {/* Imagem do Produto */}
                <CardHeader className=" w-full lg:w-1/3 border">
                  <div className="flex justify-center py-4 px-8">
                    <img
                      src={product.image}
                      alt={`Image of ${product.title}`}
                      className="lg:h-60 h-44"
                    />
                  </div>
                </CardHeader>

                {/* Conteúdo do Produto */}
                <CardContent className="w-full">
                  <CardTitle className="text-xl font-bold">{product.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-700 my-2">
                    {product.description}
                  </CardDescription>
                  <div className="text-md font-medium my-2">
                    <p>Category: <span className="font-normal text-gray-600">{product.category}</span></p>
                    <p>Price: <span className="text-green-600">$ {product.price.toFixed(2)}</span></p>
                  </div>
                  <div className="text-sm text-gray-600 my-2">
                    <p>
                      Rating: <span className="font-medium">{product.rating.rate} / 5.0</span> 
                      {' '}({product.rating.count} reviews)
                    </p>
                  </div>
                  {/* Botões */}
                  <div className="py-4 flex flex-wrap gap-4">
                    <Button variant="default">Buy Now</Button>
                    <Button variant="outline">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <p className="text-center w-full text-gray-500">No product details available.</p>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
