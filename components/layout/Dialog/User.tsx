import React, { Dispatch, SetStateAction } from 'react'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { useCheckoutStorage } from '@/storage/checkout-storage'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Steps } from '@/types/Steps'

const formSchema = z.object({
  name: z.string().min(3, 'Informe seu nome completo')
})

type StepUserProps = {
  setStep:  Dispatch<SetStateAction<Steps>>
}
export default function User({setStep} : StepUserProps) {
  const {name, setName} = useCheckoutStorage(state => state)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setName(values.name)
    setStep('address')
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        <FormField 
          control={form.control}
          name='name'
          render={({field}) => (
            <FormItem>
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input 
                    autoFocus
                    placeholder='Digite seu nome Completo'
                    {...field}
                  />
                </FormControl>
                <FormMessage/>
            </FormItem>
          )}
        />
        <Button type='submit'>Próximo</Button>
      </form>
    </Form>
  )
}