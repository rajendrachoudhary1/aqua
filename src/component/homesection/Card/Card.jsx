import React from 'react'
import './Card.css'

const Card = (props) => {
  // console.log(props.title);
  
  return (
    <div className='tcard'>
        <img src={props.img} alt="" />
        <div className='underline1'></div>
        <p>{props.title}</p>
        <p>{props.name}</p>
      
    </div>
  )
}

export default Card
