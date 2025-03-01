import React from 'react'
import './Card.css'
import flt_1 from '../../assets/FLT/f.png'

const Card = (props) => {
  console.log(props.title);
  
  return (
    <div className='tcard'>
      {/* <h1>fdhfdf</h1> */}
        <img src={props.img} alt="" />
        <div className='underline1'></div>
        <p>{props.title}</p>
        <p>{props.name}</p>
      
    </div>
  )
}

export default Card
