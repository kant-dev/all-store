import Footer from '@/components/layout/Footer/Footer'
import Header from '@/components/layout/Header/Header'
import ProfileSection from '@/components/layout/Sections/ProfileSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <Header/>
      <ProfileSection/>
      <Footer/>
    </div>
  )
}
