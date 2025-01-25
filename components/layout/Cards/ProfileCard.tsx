'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import AvatarProfile from '../Avatar/Avatar'
import { useAuthStore } from '@/storage/user-storage';
import { Separator } from '@radix-ui/react-separator';

export default function ProfileCard() {
    const user = useAuthStore((state) => state.user); // Pegando o usuário direto do Zustand
    const logout = useAuthStore((state) => state.logout); // Pegando a função logout
    const logged = useAuthStore((state) => state.isAuthenticated); // Verifica se está autenticado
  return (
    <Card>
      <CardHeader>        
          <AvatarProfile name={user?.name}/>
      </CardHeader>
      <CardContent>
        <CardTitle>{user?.name}</CardTitle>
        <CardDescription>{user?.email}</CardDescription>
        <Separator />
        <div></div>
      </CardContent>
    </Card>
  )
}
