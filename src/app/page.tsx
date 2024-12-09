import Feauture from '../Components/feauture'
import Mainsection from '../Components/mainsection'
import React from 'react'
import Topcategory from '../Components/topcategory'
import Newstyle from '@/Components/newstyle'
import OurProduct from '@/Components/ourproduct'
import Footer from '@/Components/footer'

export default function Home() {
  return (
    <div className='m-3'>
      <Mainsection/>
      <Feauture/>
      <Topcategory/>
      <Newstyle/>
      <OurProduct/>
      <Footer/>
    </div>
  )
}