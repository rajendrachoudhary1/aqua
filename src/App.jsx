import Basin from './component/basin/Basin'
import Fcatogary from './component/faucets-catogary/Fcatogary'
import Flt from './component/fltfaucets/Flt'
import Footer from './component/footer/Footer'
import Navbar from './component/navbar/Navbar'
import Product from './component/product/Product'
import Slider from './component/slider/Slider'
import Tapcard from './component/tapcard/Tapcard'
import Basinslider from './component/basinslider/Basinslider'
 
function App() {
  

  return (
    <>
      <Navbar/>
      <Slider/>
      <Product/>
      <Fcatogary/>
       <Flt/>
       <Tapcard/>
       {/* <Basin/> */}
       <Basinslider/>
       <Footer/>
    
    </>
  )
}

export default App
