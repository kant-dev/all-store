"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { useAuthStore } from '@/storage/user-storage'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Senha de 6 caracteres"),
})

export default function FormLogin() {

  const login = useAuthStore((state) => state.login);
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const success = login(data.email, data.password);
    if (success) {
      router.push("/"); 
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='shadow-md py-4 px-6 flex flex-col gap-6'>
        <div className='flex flex-col items-center'>
          <h2 className='text-2xl font-bold text-center'>Login</h2>
          <Separator className='my-2'/>
          <p className="text-lg font-bold">
              All <span className="text-blue-600">Store</span>
            </p>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} className='rounded-none w-64'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input {...field} className='rounded-none w-64'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit'>Entrar</Button>

        <Separator className=''/>
        <div>
          <p className="text-sm text-gray-600">
            Não possui uma conta? <Link href={'/register'}><span className="text-blue-600">Crie uma agora</span></Link>
          </p>
        </div>
      </form>
    </Form>
  )
}
