import React from 'react'
import FLT_IMG1 from '../../../assets/flt.jpg'
import FLT_IMG2 from '../../../assets/SHOWER.jpg'
import './Flt.css'
import { Link } from "react-router-dom";

const Flt = () => {
  return (
    <> 
    <div className='flt-title'><h3>Category</h3></div>
    
    <div className='flt-main'>
         
         <div className='flt'>
            <img src={FLT_IMG1} alt="" />
            <div className='flt-info'>
              <p>FAUCETS</p>
              <div className='underline'></div>
             <Link to ='/product'><button>Explore Now</button></Link>  
            </div>  
         </div>

         <div className='flt'>
         <img src={FLT_IMG2} alt="" />
            <div className='flt-info'>
              <p>SHOWERS</p>
              <div className='underline'></div>
              <button>Explore Now</button>
            </div>   
         </div>  
     </div>
    </>
    
  )
}

export default Flt
