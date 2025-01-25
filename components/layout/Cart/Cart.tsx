"use client";

import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCartStorage } from "@/storage/cart-storage";
import { ShoppingBagIcon } from "lucide-react";
import React, { useMemo, useState } from "react";
import CartProduct from "./CartProduct";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Link from "next/link";
import Checkout from "../Dialog/Checkout";
import { useAuthStore } from "@/storage/user-storage";

export default function Cart() {
  const { cart } = useCartStorage((state) => state);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const { toast } = useToast();

  const isLogged = useAuthStore((state) => state.isAuthenticated);

  // Calcula o subtotal usando useMemo para evitar recalcular em cada renderização
  const subtotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity * (item.product.price || 0), 0);
  }, [cart]);

  const handleCheckout = () => {
    if (isLogged) {
      setCheckoutOpen(!checkoutOpen);
      toast({
        title: "Checkout",
        description: "Your order has been successfully created!",
        className: "bg-emerald-600 text-white rounded-none border-none",
        duration: 1000,
      });
    } else {
      toast({
        title: "Log in to complete your purchase",
        description: "You need to be logged in to proceed with the checkout.",
        className: "bg-amber-300 text-black rounded-none border-none",
        duration: 3000,
        action: (
          <ToastAction altText="login">
            <Link href={"/login"}>Log In</Link>
          </ToastAction>
        ),
      });
    }
  };
  

  return (
    <div className="flex items-center justify-center px-4">
      <Sheet>
        <SheetTrigger className="relative shadow-sm shadow-neutral-300 flex items-center p-2 rounded-md">
          <ShoppingBagIcon size={30} />
          {/* Mostra o alerta no ícone do carrinho */}
          {cart.length > 0 && (
            <span className="absolute size-4 bg-red-500 rounded-full -right-1 -top-1"></span>
          )}
        </SheetTrigger>

        <SheetContent className="border-2 border-black">
          <SheetHeader>
            <SheetTitle className="text-start">My Cart</SheetTitle>
          </SheetHeader>
          <Separator className="my-4" />

          <div className="grid grid-cols-1 gap-y-5">
            {cart.map((prod) => (
              <CartProduct key={prod.product.id} item={prod} />
            ))}
          </div>

          <Separator className="my-4" />
          <SheetFooter className="grid grid-cols-1 place-content-center p-2">
            <div className="flex justify-between items-center text-xs p-2">
              <p className="text-base">Subtotal:</p>
              <p className="text-sm">$ {subtotal.toFixed(2)}</p>
            </div>

            <Separator className="my-4" />
            <div className="text-center w-full">
              <Button
                className={`w-full rounded-none font-bold ${
                  cart.length === 0 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : ""
                }`}
                disabled={cart.length === 0}
                onClick={handleCheckout}
              >
                Checkout
              </Button>
              <Button
                className={`w-full rounded-none font-bold ${
                  cart.length === 0 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : ""
                }`}
                disabled={cart.length === 0}
                onClick={handleCheckout}
              >
                Clean Cart
              </Button>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <Checkout open={checkoutOpen} onOpenChange={setCheckoutOpen} />
    </div>
  );
}
