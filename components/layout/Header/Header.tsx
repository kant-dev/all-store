"use client"

import React from 'react';
import Navbar from './Navbar';
import Link from 'next/link';
import ToggleMenu from './ToggleMenu';
import Cart from '../Cart/Cart';
import {UserCircleIcon } from 'lucide-react';
import { useAuthStore } from '@/storage/user-storage';


export default function Header() {
  const isLogged = useAuthStore(state => state.isAuthenticated)

  return (
    <header className="w-full flex justify-center shadow-md ">
      <div className="container p-4 flex items-center justify-between">
        {/* Logo e Navbar */}
        <div className="flex items-center gap-4 grow lg:grow-0">
          <ToggleMenu />
          <Link href="/">
            <p className="text-2xl font-bold">
              All <span className="text-blue-600">Store</span>
            </p>
          </Link>
          <Navbar />
        </div>

        {/* Campo de Busca e Botões */}
        <div className="hidden lg:flex items-center gap-8 grow justify-end px-8 ">
          {/* Botões de usuário */}
          {isLogged ? (
            <Link href={`/profile`} className='flex items-center justify-center gap-2 border border-black py-2 px-4 hover:bg-stone-700 hover:text-white text-black ease-in-out duration-300'>
                <span className='text-md font-medium'>Profile</span>
                <UserCircleIcon />
            </Link>
          ) : (
            <Link href={`/login`} className="text-sm font-medium hover:underline">
              Login
            </Link>
          )}
        </div>
        {/* Carrinho */}
        <Cart />
      </div>
    </header>
  );
}
