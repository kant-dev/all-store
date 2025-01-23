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
  fullName: z.string().min(6, 'Informe seu Nome Completo'),
  email: z.string().email(),
  password: z.string().min(6, "Senha de 6 caracteres"),
})

export default function FormRegister() {

  const register = useAuthStore((state) => state.register);
  const router = useRouter();


  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    register(
      { name: data.fullName, email: data.email },
      data.password,
      (success: boolean) => {
        if (success) {
          router.push("/"); // Redireciona para o dashboard
        } else {
          alert("Erro no registro. Tente novamente.");
        }
      }
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='shadow-md py-4 px-6 flex flex-col gap-6'>
        <div className='flex flex-col items-center'>
          <p className="text-lg font-bold">
              All <span className="text-blue-600">Store</span>
            </p>
          <Separator className='my-2'/>
          <h2 className='text-2xl font-bold text-center'>Cadastro</h2>
        </div>
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Completo</FormLabel>
              <FormControl>
                <Input {...field} className='rounded-none w-64'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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

        <Button type='submit'>Cadastrar-me</Button>

        <Separator className=''/>
        <div className='w-full flex'>
          <p className="text-sm text-gray-600">
            Já possui uma conta? <Link href={'/login'}><span className="text-blue-600">Entrar Agora</span></Link>
          </p>
        </div>
      </form>
    </Form>
  )
}
