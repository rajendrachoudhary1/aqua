import Fcatogary from '../component/homesection/faucets-catogary/Fcatogary'
import Flt from '../component/homesection/fltfaucets/Flt'
import Footer from '../component/homesection/footer/Footer'
import Product from '../component/homesection/product/Product'
import Slider from '../component/homesection/slider/Slider'
import Tapcard from '../component/homesection/tapcard/Tapcard'
import Abovefooter from '../component/homesection/abovefooter/abovefooter'

const Homepage = () => {
  return (
    <div>
      
      <Slider/>
      <Product/>
      <Fcatogary/>
       <Flt/>
       <Tapcard/>
       <Abovefooter/>
       <Footer/>
    
      
    </div>
  )
}

export default Homepage
