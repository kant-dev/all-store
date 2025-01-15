import Footer from '@/components/layout/Footer/Footer'
import Header from '@/components/layout/Header/Header'
import React from 'react'

type PagesProps = {
  params: Promise<{category: string}>
}

export default async function page({params} : PagesProps) {
  const category = (await params).category.replace(/%20/g, ' ').replace(/'/g, '')
  return (
    <div className='w-screen h-screen'>
      <Header/>
      <div className='w-full flex justify-center'>
        <div className='container'>
          <h2>Produtos da categoria: {category}</h2>
        </div>
      </div>
      <Footer/>
    </div>

  )
}
