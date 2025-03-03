import React from 'react'
import './Tapcard.css'
import img from '../../../assets/t1.png'
const Tapcard = () => {
  return (
    <div className='tapcard-product'>
      <img src={img} alt="" />
      <div className='underline-tap-product'></div>
      <p>FLT-1111</p>
      <p>bib cock</p>
    </div>
  )
}

export default Tapcard
