import { Button } from '@/components/ui/button'
import { generateMessage } from '@/lib/genereate-message'
import { useCheckoutStorage } from '@/storage/checkout-storage'
import Link from 'next/link'
import React from 'react'
import { Product } from '@/types/Product'

type CheckDialogProps = {
  productsInCart?: Product[] | null,
}

const StepFinaly = ({ productsInCart }: CheckDialogProps) => {
  const { name } = useCheckoutStorage(state => state)

  // Se o produto único não estiver presente, passamos o carrinho para o generateMessage
  const message = generateMessage();  
  const linkZap = `https://wa.me/${process.env.NEXT_PUBLIC_STORE_PHONE}?text=${encodeURI(message)}`
  
  return (
    <div className='text-center flex flex-col gap-4'>
      <p>Estamos quase lá, {name}!</p>
      <p>Basta enviar o seu pedido e receba o status do seu pedido.</p>
      <Button>
        <Link target='_blank' href={linkZap}>Enviar para Atendente</Link>
      </Button>
    </div>
  )
}

export default StepFinaly
