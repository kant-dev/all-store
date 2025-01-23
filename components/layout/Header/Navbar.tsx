import { isAuth } from '@/hooks/isAuthenticated';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  const isLogged = isAuth;

  return (
    <nav className="hidden lg:flex items-center space-x-6 text-lg pt-1 font-medium ml-8">
      <Link href="/products" className="transition-colors hover:text-foreground/80">
        Products
      </Link>
      <Link href="/deals" className="transition-colors hover:text-foreground/80">
        Deals
      </Link>
      <Link href="/about" className="transition-colors hover:text-foreground/80">
        About
      </Link>
    </nav>
  );
}
