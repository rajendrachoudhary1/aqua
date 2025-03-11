import React from 'react';
import './Rightside.css';
import Tapcard from '../tapcard/Tapcard';
import { products } from '../../../assets/assets'; // Import products from assets.js

const Rightside = () => {
  return (
    <div className='rightsidebar'>
      <div className='div'>
        {products.map((product) => (
          <Tapcard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Rightside;
