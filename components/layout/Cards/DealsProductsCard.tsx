"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { useCartStorage } from "@/storage/cart-storage";
import { Product } from "@/types/Product";
import { ShoppingCartIcon } from "lucide-react";
import React, { useState } from "react";
import DetailsSheet from "../Sheet/DetailsSheet";
import Checkout from "../Dialog/Checkout";

type DealsProductsCardProps = {
  products: Product[];
  categories: string[];
};

export default function DealsProductsCard({ products, categories }: DealsProductsCardProps) {
  const { upsertCartItem } = useCartStorage((state) => state);
  const { toast } = useToast();


  // Lógica para pegar 2 produtos por categoria
  const discountProductsByCategory = categories.map((category) => {
    const discountProduct = products.filter((product) => product.category === category);
    return discountProduct.slice(0, 2);
  });

  const discountedProducts = discountProductsByCategory.flat();

  const handleAddToCart = (product: Product) => {
    upsertCartItem(product, 1);
    toast({
      title: "Product added to cart",
      description: "Check your cart to proceed",
      duration: 3000,
      action: <ToastAction altText="fechar">Fechar</ToastAction>,
    });
  };

  const handleBuyNow = () => {
    toast({
      title: "Comprando Produto",
      description: "Aguarde um momento",
      duration: 3000,
      action: <ToastAction altText="fechar">Fechar</ToastAction>,
    });
  };

  return (
    <section className="w-full flex justify-center py-6">
      <div className="container px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">Featured Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {discountedProducts.map((product) => {
            const discountedPrice = (product.price * 0.9).toFixed(2);

            return (
              <Card key={product.id} className="relative hover:shadow-lg transition-shadow duration-200 border rounded-lg h-96">
                {/* Badge de desconto */}
                <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">
                  -10%
                </div>
                <CardHeader className="p-0">
                  <div className="w-full h-40 bg-gray-100 flex items-center justify-center">
                    <img src={product.image} className="object-cover h-36" />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg font-bold line-clamp-1">{product.title}</CardTitle>
                  <p className="text-sm text-gray-500 line-through">$ {product.price.toFixed(2)}</p>
                  <p className="text-xl font-semibold text-gray-800">$ {discountedPrice}</p>
                  <p className="text-sm text-gray-600 mt-1">Ends in: 2d 15h 30m</p>
                </CardContent>
                <CardFooter className="absolute top-[85%] flex justify-between w-full">
                  <div className="flex gap-6">
                    <Button onClick={handleBuyNow}>Buy</Button>
                    <DetailsSheet product={product} />
                  </div>
                  <Button onClick={() => handleAddToCart(product)}>
                    <ShoppingCartIcon />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>

    </section>
  );
}
