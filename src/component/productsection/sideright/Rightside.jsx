// import React from 'react';
// import './Rightside.css';
// import Tapcard from '../tapcard/Tapcard';
// import { products } from '../../../assets/assets';  

// const Rightside = () => {
//   const faucetProducts = products.filter(product => product.category === 'faucet');

//   return (
//     <div className='rightsidebar'>
//       <div className='div'>
//         {faucetProducts.map((product) => (
//           <Tapcard key={product._id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };
import React, { useState } from 'react';
import './Rightside.css';
import Tapcard from '../tapcard/Tapcard';
import { products } from '../../../assets/assets'; // Import products from assets.js

const Rightside = () => {
  // State to manage selected subcategories
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  // Ensure products is an array
  const faucetProducts = Array.isArray(products)
    ? products.filter(product => product.category === 'faucet')
    : [];

  // Handle subCategory selection
  const handlesubCategoryChange = (subCategory) => {
    setSelectedSubcategories((prev) =>
      prev.includes(subCategory)
        ? prev.filter((item) => item !== subCategory)
        : [...prev, subCategory]
    );
  };

  // Predefined subcategories and items
  const subcategories = {
    flt: ['Bib Cock', 'Pillar Cock', 'Pillar Cock High Neck', 'Angle Cock', 'Central Hole Basin Mixer', 'Bib Cock 2 Way'],
    scropius: ['Bib Cock with Flange', 'Pillar Cock', 'Pillar Cock High Neck', 'Angle Cock with Flange', 'Central Hole Basin Mixer', 'Bib Cock 2 Way with Flange'],
    canis: ['Pillar Cock', 'Bib Cock with Flange', 'Pillar Cock High Neck', 'Angle Cock with Flange', 'Central Hole Basin Mixer', 'Bib Cock 2 Way with Flange'],
    auriga: ['Bib Cock', 'Pillar Cock', 'Sink Cock', 'Concealed Cock', 'Bib Cock 2 Way'],
    duet: ['Bib Cock', 'Pillar Cock', 'Angle Cock', 'Bib Cock Long Body', 'Bib Cock 2 Way', 'Sink Cock']
  };

  // Filter products based on subCategory selections
  const filteredProducts = faucetProducts.filter(product =>
    selectedSubcategories.length === 0 || selectedSubcategories.includes(product.subCategory)
  );

  return (
    <div className='rightsidebar'>
      {/* subCategory Filter Section */}
      <div className='filter-section'>
        <h3>Filter by categories:</h3>
        {Object.entries(subcategories).map(([subCategory, items]) => (
          <div key={subCategory} className='subCategory'>
            <h3>
              <input
                type='checkbox'
                checked={selectedSubcategories.includes(subCategory)}
                onChange={() => handlesubCategoryChange(subCategory)}
              />
              {subCategory}
            </h3>
            <ul >
              {items.map(item => (
                <li key={item}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
            <div className='underline-tap'></div>
          </div>
        ))}
      </div>

      {/* Products Display Section */}
      <div className='div'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Tapcard key={product._id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Rightside;