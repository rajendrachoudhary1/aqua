import React from 'react'
import faucets_img from '../../assets/main2.jpg'
import './Product.css'

const Product = () => {
  return (
    <div className='container'>
        {/* <h1>Faucets</h1> */}
        <div className='faucets'>
            <div className='faucets-left'>
                <h4> Brass is an alloy of copper and zinc that is popularly used for 
                     manufacturing faucets because of its property to be 
                     resistant to corrosion and hard-water calcification.</h4>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium assumenda necessitatibus voluptas nam quod velit sed enim voluptatibus vero neque?</p> 

            </div>
            <div className='faucets-right'>
                <img src={faucets_img} alt="" />

            </div>

        </div>
      
    </div>
  )
}

export default Product
