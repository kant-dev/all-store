import React, { Dispatch, SetStateAction } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCheckoutStorage } from '@/storage/checkout-storage'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Steps } from '@/types/steps'

const formSchema = z.object({
  street: z.string().min(3, 'Informe seu endereço'),
  number: z.string().min(1, 'Informe o numero da Moradia'),
  complement: z.string().optional(),
  district: z.string().min(3, 'Informe seu Bairro'),
})

type StepUserProps = {
  setStep: Dispatch<SetStateAction<Steps>>
}
export default function StepAddress({ setStep }: StepUserProps) {
  const { address, setAddress } = useCheckoutStorage(state => state)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...address
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setAddress(values)
    setStep('finish')
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} >
        <div className='grid grid-cols-2 gap-4'>
          <FormField
            control={form.control}
            name='street'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Endereço</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
                    <FormField
            control={form.control}
            name='number'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Numero da Moradia</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name='complement'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Complemento</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name='district'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bairro</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
          <div className='flex justify-between mt-4'>
          <Button variant="link" onClick={() => setStep('user')}>Voltar</Button>
          <Button type='submit'>Concluir</Button>
          </div>
      </form>
    </Form>
  )
}