import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { isAuth } from '@/hooks/isAuthenticated'
import { useAuthStore } from '@/storage/user-storage'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function ToggleMenu() {

  const isLogged = useAuthStore(state => state.isAuthenticated)

  return (
    <div className='lg:hidden'>
      <Sheet>
        <SheetTrigger className='relative shadow-sm shadow-neutral-300 flex items-center p-2 rounded-md'>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side={'left'}>
          <SheetHeader>
            <SheetTitle className='text-start'>
              <Link href={'/'}>
                <p className='text-2xl'>
                  All <span className='font-bold text-blue-600'>Store</span>
                </p>
              </Link>
            </SheetTitle>
          </SheetHeader>
          <Separator className='my-4' />
          <div className='flex flex-col gap-y-4'>
            <Link href="/products" className="transition-colors hover:text-foreground/80 text-xl border border-black text-center py-4">
              Products
            </Link>
            <Link href="/deals" className="transition-colors hover:text-foreground/80 text-xl border border-black text-center py-4">
              Deals
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80 text-xl border border-black text-center py-4">
              About
            </Link>
            {
              isLogged ? (
                <Link href="/profile" className="transition-colors hover:text-foreground/80 text-xl border border-black text-center py-4">
                  Profile
                </Link>
              ) : (
                <Link href="/login" className="transition-colors hover:text-foreground/80 text-xl border border-black text-center py-4">
                  Login
                </Link>
              )
            }
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
