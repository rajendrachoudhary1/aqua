import React from 'react'
import faucets_img from '../../assets/main2.jpg'
import './Product.css'

const Product = () => {
  return (
    <div className='container'>
        <h1>Faucets</h1>
        <div className='faucets'>
            <div className='faucets-left'>
                <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, iste.</h4>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium assumenda necessitatibus voluptas nam quod velit sed enim voluptatibus vero neque?
                    </p> 

            </div>
            <div className='faucets-right'>
                <img src={faucets_img} alt="" />

            </div>

        </div>
      
    </div>
  )
}

export default Product
