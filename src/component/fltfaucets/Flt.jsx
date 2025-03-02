import React from 'react'
import FLT_IMG1 from '../../assets/flt.jpg'
import FLT_IMG2 from '../../assets/SHOWER.jpg'
import FLT_IMG3 from '../../assets/flt3.jpg'
import FLT_IMG4 from '../../assets/flt4.jpg'
import './Flt.css'


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
              <button>Explore Now</button>
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
         
         {/* <div className='flt'>
         <img src={FLT_IMG3} alt="" />
            <div className='flt-info'>
              <p>JIVA-SERIES</p>
              <div className='underline'></div>
              <button>Explore Now</button>
            </div>   
         </div>
         
         <div className='flt'>
         <img src={FLT_IMG4} alt="" />
            <div className='flt-info'>
              <p>DUCK-SERIES</p>
              <div className='underline'></div>
              <button>Explore Now</button>
            </div>   
         </div>
          */}
       
     </div>
    </>
    
  )
}

export default Flt
