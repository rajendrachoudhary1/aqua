import React from 'react';
import { useParams } from 'react-router-dom';
import { backgrnimg } from '../../../assets/assets';
import './productTitle.css';

const ProductTitle = () => {
  const { category } = useParams();  
 
  const backgroundImage = category === 'faucet' ? backgrnimg.back1 : category === 'shower' ? backgrnimg.back2 : category === 'accessory' ? backgrnimg.back2 : null;

  return (
    <div className='productTitle-container'>
      {backgroundImage && <img src={backgroundImage} alt={category} />}
    </div>
  );
}

export default ProductTitle;
