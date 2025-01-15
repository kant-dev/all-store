import { getAllProducts } from "@/services/getProducts"
import { Product } from "@/types/Product"
import FeaturedCard from "../Cards/FeaturedCard"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"


export  async function FeaturedProducts() {

  const products: Product[] = await getAllProducts()

  return (
    <section className="w-full flex justify-center ">
      <div className="container py-12 px-4 lg:px-0">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-8">Featured Products</h2>
        <FeaturedCard itemProduct={products}/>
      </div>
    </section>
  )
}

