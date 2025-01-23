import Footer from '@/components/layout/Footer/Footer'
import Header from '@/components/layout/Header/Header'
import DealsSection from '@/components/layout/Sections/DealsSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <Header/>
      <DealsSection/>
      <Footer/>
    </div>
  )
}
