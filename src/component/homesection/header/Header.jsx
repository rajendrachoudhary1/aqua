import React from 'react'
import './Header.css'
const Header = (props) => {
  return (
    <div>
        <div className='hero'>
            <img src={props.img} alt="" />

            <div className='hero-main-title'>
              <h1>LUXURY FAUCETS <br />COLLECTIONS</h1>
            </div>
             
        </div>
           <div className='hero-title'>
              <p className='p'>Aquabenz</p>
              <p><span>FAUCETS |</span><span>SHOWERS |</span> <span>ALLIEDS</span></p>
            </div>
    </div>
  )
}

export default Header
