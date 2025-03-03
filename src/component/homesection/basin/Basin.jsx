import React from 'react'
import './Basin.css'

const Basin = (props) => {
  return (
    <div className='basin-container'>
        <div className='basin'>
            <img src={props.img} alt="" />
        </div>
        <div className="basin-title">
            <h1>{props.title}</h1>
            <p>FLAT 60% OFF</p>
            <button>EXPLORE MORE</button>
        </div> 
    </div>
  )
}

export default Basin
