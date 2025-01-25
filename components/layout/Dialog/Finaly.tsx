import { Button } from '@/components/ui/button'
import { generateMessage } from '@/lib/genereate-message'
import { useCheckoutStorage } from '@/storage/checkout-storage'
import Link from 'next/link'
import React from 'react'

export default function StepFinaly() {
  const {name} = useCheckoutStorage(state => state)

  const message = generateMessage();
  const linkZap = `https://wa.me/${process.env.NEXT_PUBLIC_STORE_PHONE}?text=${encodeURI(message)}`
  return (
    <div className='text-center flex flex-col gap-4'>
      <p>Estamos Quase lá {name}</p>
      <p>Basta enviar o seu pedido e receba o status do seu pedido.</p>
      <Button>
          <Link target='_blank' href={linkZap}>Enviar para Atendente</Link>
      </Button>
    </div>
  )
}