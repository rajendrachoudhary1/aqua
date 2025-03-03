// import Basin from './component/basin/Basin'
import Fcatogary from '../component/homesection/faucets-catogary/Fcatogary'
import Flt from '../component/homesection/fltfaucets/Flt'
import Footer from '../component/homesection/footer/Footer'
// import Navbar from '../component/homesection/navbar/Navbar'
import Product from '../component/homesection/product/Product'
import Slider from '../component/homesection/slider/Slider'
import Tapcard from '../component/homesection/tapcard/Tapcard'
import Basinslider from '../component/homesection/basinslider/Basinslider'

const Homepage = () => {
  return (
    <div>
         {/* <Navbar/> */}
      <Slider/>
      <Product/>
      <Fcatogary/>
       <Flt/>
       <Tapcard/>
       {/* <Basin/> */}
       <Basinslider/>
       <Footer/>
    
      
    </div>
  )
}

export default Homepage
