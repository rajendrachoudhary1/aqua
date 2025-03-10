import img from '../../../assets/product/backgrd.png'
import './showertitle.css'
const Showertitle = () => {
  return (
     <div className="fproduct-container">
         <div className="fproduct">
           <img src={img} alt="" />
         </div>
         <div className="fproduct-title">
           {/* <h1>FAUCETS COLLECTION</h1> */}
           <div className="fproduct-sub">
             <a href="">HOME</a>
             <span> | </span>
             <p>Product</p>
           </div>
         </div>
       </div>
  )
}

export default Showertitle
