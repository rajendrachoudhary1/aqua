import React from 'react'
import FLT_IMG1 from '../../assets/FLT/FLT1101.jpg'
import FLT_IMG2 from '../../assets/FLT/FLT-1102.jpg'
import FLT_IMG3 from '../../assets/FLT/FLT-1103.jpg'
import FLT_IMG4 from '../../assets/FLT/FLT-1104.jpg'
import './Flt.css'


const Flt = () => {
  return (
    <> 
    <div className='flt-title'><h3>FLT</h3></div>
    
    <div className='flt-main'>
         
         <div className='flt'>
             <img src={FLT_IMG1} alt="" />
             <div className='underline'> </div>
             <p>FLT-1101</p>
             <p>Bib Cock with Flange</p>
         </div>
         <div className='flt'>
             <img src={FLT_IMG2} alt="" />
             <div className='underline'> </div>
             <p>FLT-1102</p>
             <p>Pillar Cock</p>
         </div>
         <div className='flt'>
             <img src={FLT_IMG3} alt="" />
             <div className='underline'> </div>
             <p>FLT-1103</p>
             <p>Pillar Cock High Neck</p>
         </div>
         <div className='flt'>
             <img src={FLT_IMG4} alt="" />
             <div className='underline'> </div>
             <p>FLT-1104</p>
             <p> Angle Cock with Flange</p>
         </div>
       
     </div>
    </>
    
  )
}

export default Flt
