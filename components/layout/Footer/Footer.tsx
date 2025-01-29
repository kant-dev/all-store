import Link from 'next/link'
import React from 'react'

export default function Footer() {

  const urlDev = 'https://github.com/kant-dev'

  return (
    <footer className="border-t flex justify-center">
      <div className="container py-8 md:py-12 px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">About Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#">Our Story</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Press</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Customer Service</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">Shipping</Link></li>
              <li><Link href="#">Returns</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms of Service</Link></li>
              <li><Link href="#">Cookie Policy</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Newsletter</h4>
            <p className="text-sm text-muted-foreground">Subscribe to our newsletter for updates and exclusive offers.</p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm">
          <p>&copy; 2025 All <span className='text-blue-600'>Store</span>. All rights reserved.</p>
            <p>Created by: <Link href={`${urlDev}`} target='_blank'><span>kant-dev</span></Link></p>
        </div>
      </div>
    </footer>
  )
}