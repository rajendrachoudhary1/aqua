import React from 'react'
import Contacttitle from '../component/contactus/contactpagetitle/contacttitle'
import Aquafaq from '../component/contactus/aquafaq/aquafaq'
import Footer from '../component/homesection/footer/Footer'
const Contactuspage = () => {
  return (
    <>
      <div className='contactpage-main-container'>
      <Contacttitle/>
      
    </div>
    <Aquafaq/> 
    <Footer/>
    </>
   
  )
}

export default Contactuspage
