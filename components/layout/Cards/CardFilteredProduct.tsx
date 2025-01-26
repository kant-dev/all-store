"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/hooks/use-toast';
import { Product } from '@/types/Product';
import { ShoppingCartIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import DetailsSheet from '../Sheet/DetailsSheet';
import ChecktProduct from '../DialogProd/CheckProduct';

type CardFilteredProps = {
  categorySelected: string;
  products: Product[];
};

export default function CardFilteredProduct({ categorySelected, products }: CardFilteredProps) {
  const [catProdFiltereds, setCatProdFiltereds] = useState<Product[]>([]);
  const { toast } = useToast();

  // Estado para controlar o produto selecionado
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const filtered = products.filter(product => product.category === categorySelected);
    setCatProdFiltereds(filtered);
  }, [categorySelected, products]);

  const handleBuyNow = (product: Product) => {
    toast({
      title: "Comprando Produto",
      description: "Aguarde um momento",
      duration: 3000,
      action: <ToastAction altText="fechar">Fechar</ToastAction>,
    });
    // Atualiza o estado para o produto selecionado e abre o modal
    setSelectedProduct(product);
    setIsOpen(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
      {catProdFiltereds.length > 0 ? (
        catProdFiltereds.map((product, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-center border rounded-md p-2">
                <img src={product.image} alt={product.title} className="lg:h-60 h-44" />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-y-4">
              <CardTitle className="line-clamp-1 px-2">{product.title}</CardTitle>
              <CardDescription className="px-2 flex flex-col gap-y-4">
                <p className="line-clamp-2">{product.description}</p>
                <p className="text-lg text-slate-900 font-semibold">$ {product.price.toFixed(2)}</p>
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex gap-6">
                <Button onClick={() => handleBuyNow(product)}>Buy Now</Button>
                <DetailsSheet product={product} />
              </div>
              <Button>
                <ShoppingCartIcon />
              </Button>
            </CardFooter>
          </Card>
        ))
      ) : (
        products.map((product, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-center border rounded-md p-2">
                <img src={product.image} alt={product.title} className="lg:h-60 h-44" />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-y-4">
              <CardTitle className="line-clamp-1 px-2">{product.title}</CardTitle>
              <CardDescription className="px-2 flex flex-col gap-y-4">
                <p className="line-clamp-2">{product.description}</p>
                <p className="text-lg text-slate-900 font-semibold">$ {product.price.toFixed(2)}</p>
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex gap-6">
                <Button onClick={() => handleBuyNow(product)}>Buy Now</Button>
                <DetailsSheet product={product} />
              </div>
              <Button>
                <ShoppingCartIcon />
              </Button>
            </CardFooter>
          </Card>
        ))
      )}
      {/* Passa o produto correto para o modal */}
      <ChecktProduct open={isOpen} onOpenChange={() => setIsOpen(false)} product={selectedProduct} />
    </div>
  );
}
