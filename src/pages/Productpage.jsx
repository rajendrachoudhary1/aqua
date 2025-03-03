import React from 'react'
import Fproduct from '../component/productsection/fuacetsproduct/Fproduct'
// import Navbar from '../component/homesection/navbar/Navbar'
import Psidebar from '../component/productsection/pslidebar/Psidebar'
import Footer from '../component/homesection/footer/Footer'
import Rightside from '../component/productsection/sideright/Rightside'
const Productpage = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Fproduct/>
      <div className='productpage-container'>
      <Psidebar/>
      <Rightside/>
      </div>
       
      <Footer/>
    </div>
  )
}

export default Productpage
