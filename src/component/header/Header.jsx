import React from 'react'
//import hero from '../../assets/FLT/FLT.jpg'
import './Header.css'
const Header = (props) => {
  return (
    <div>
        <div className='hero'>
            <img src={props.img} alt="" />
        </div>
      
      
    </div>
  )
}

export default Header
