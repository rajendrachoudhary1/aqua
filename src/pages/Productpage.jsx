import Fproduct from '../component/productsection/fuacetsproduct/Fproduct' 
import Psidebar from '../component/productsection/pslidebar/Psidebar' 
import Rightside from '../component/productsection/sideright/Rightside'
const Productpage = () => {
   
  return (
    <div>
      
       
      <Fproduct/>
      <div className='productpage-container'>
      <Psidebar/>
      <Rightside/>
      </div>
       
      
    </div>
  )
}

export default Productpage
