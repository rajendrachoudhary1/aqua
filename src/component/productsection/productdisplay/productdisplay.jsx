 
// import React, { useState } from 'react';
// import './productdisplay.css';
// import Tapcard from '../productcard/productcard';
// import { products } from '../../../assets/assets'; // Import products from assets.js

// const Productdisplay = ({ category }) => {
//   const [selectedSubcategories, setSelectedSubcategories] = useState([]);

//   // Filter products based on selected category
//   const categoryProducts = Array.isArray(products)
//     ? products.filter(product => product.category === category)
//     : [];

//   // Handle subCategory selection
//   const handlesubCategoryChange = (subCategory) => {
//     setSelectedSubcategories((prev) =>
//       prev.includes(subCategory)
//         ? prev.filter((item) => item !== subCategory)
//         : [...prev, subCategory]
//     );
//   };

//   // Define subcategories for each category
//   const subcategories = {
//     faucet: ['flt', 'canis', 'jiva', 'scorpius'],
//     shower: ['Hand Shower', 'Overhead Shower', 'Body Jets'],
//     accessory: ['Soap Dish', 'Towel Ring', 'Robe Hook'],
//   };

//   // Filter products based on subCategory selections
//   const filteredProducts = categoryProducts.filter(product =>
//     selectedSubcategories.length === 0 || selectedSubcategories.includes(product.subCategory)
//   );

//   return (
//     <div className='rightsidebar'>
//       {/* SubCategory Filter Section */}
//       <div className='filter-section'>
//         <h3>Filter by categories:</h3>
//         {subcategories[category] && subcategories[category].map((subCategory) => (
//           <div key={subCategory} className='subCategory'>
//             <h3>
//               <input
//                 type='checkbox'
//                 checked={selectedSubcategories.includes(subCategory)}
//                 onChange={() => handlesubCategoryChange(subCategory)}
//               />
//               {subCategory}
//             </h3>
//           </div>
//         ))}
//       </div>

//       {/* Products Display Section */}
//       <div className='div'>
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <Tapcard key={product._id} product={product} />
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// // export default Productdisplay; 
// import React, { useState } from 'react';
// import './productdisplay.css';
// import Tapcard from '../productcard/productcard';
// import { products } from '../../../assets/assets';

// const Productdisplay = ({ category }) => {
//   const [selectedSubcategories, setSelectedSubcategories] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 9;
  

//   const categoryProducts = Array.isArray(products)
//     ? products.filter(product => product.category === category)
//     : [];

//   const handlesubCategoryChange = (subCategory) => {
//     setSelectedSubcategories((prev) =>
//       prev.includes(subCategory)
//         ? prev.filter((item) => item !== subCategory)
//         : [...prev, subCategory]
//     );
//     setCurrentPage(1);  
//   };

//   const subcategories = {
//     faucet: ['FLT', 'CANIS', 'JIVA', 'SCORPIUS','PELICAN','SLIKA'],
//     shower: ['Hand Shower', 'Overhead Shower', 'Body Jets'],
//     accessory: ['Soap Dish', 'Towel Ring', 'Robe Hook'],
//   };

//   const filteredProducts = categoryProducts.filter(product =>
//     selectedSubcategories.length === 0 || selectedSubcategories.includes(product.subCategory)
//   );

  
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) setCurrentPage((prev) => prev - 1);
//   };

//   return (
//     <div className='rightsidebar'> 
//       <div className='filter-section'>
//         <h3>Filter by categories:</h3>
//         {subcategories[category] && subcategories[category].map((subCategory) => (
//           <div key={subCategory} className='subCategory'>
//             <h3>
//               <input
//                 type='checkbox'
//                 checked={selectedSubcategories.includes(subCategory)}
//                 onChange={() => handlesubCategoryChange(subCategory)}
//               />
//               {subCategory}
//             </h3>
//           </div>
//         ))}
//       </div>

//       {/* Products Display Section */}
//       <div className='main-div'>
//       <div className='div'>
//         {currentProducts.length > 0 ? (
//           currentProducts.map((product) => (
//             <Tapcard key={product._id} product={product} />
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
       

//       {/* Pagination Controls */}
//       <div className='pagination-controls'>
//         <button onClick={handlePrevPage} disabled={currentPage === 1} className='pagination-button'>
//           Prev
//         </button>
        
//         <button onClick={handleNextPage} disabled={currentPage === totalPages} className='pagination-button'>
//           Next
//         </button>
//       </div>
//       </div>
     

      
//     </div>
//   );
// };

// export default Productdisplay;
import React, { useState, useEffect } from 'react';
import './productdisplay.css';
import Tapcard from '../productcard/productcard';
import { products } from '../../../assets/assets';

const Productdisplay = ({ category }) => {
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentPage, selectedSubcategories]);
  

  const categoryProducts = Array.isArray(products)
    ? products.filter(product => product.category === category)
    : [];

  const handlesubCategoryChange = (subCategory) => {
    setSelectedSubcategories((prev) =>
      prev.includes(subCategory)
        ? prev.filter((item) => item !== subCategory)
        : [...prev, subCategory]
    );
    setCurrentPage(1);
  };

  const subcategories = {
    faucet: ['FLT', 'CANIS', 'JIVA', 'SCORPIUS', 'PELICAN', 'SLIKA'],
    shower: ['Hand Shower', 'Overhead Shower', 'Body Jets'],
    accessory: ['Soap Dish', 'Towel Ring', 'Robe Hook'],
  };

  const filteredProducts = categoryProducts.filter(product =>
    selectedSubcategories.length === 0 || selectedSubcategories.includes(product.subCategory)
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className='rightsidebar'>
      <div className='filter-section'>
        <h3>Filter by categories:</h3>
        {subcategories[category] && subcategories[category].map((subCategory) => (
          <div key={subCategory} className='subCategory'>
            <h3>
              <input
                type='checkbox'
                checked={selectedSubcategories.includes(subCategory)}
                onChange={() => handlesubCategoryChange(subCategory)}
              />
              {subCategory}
            </h3>
          </div>
        ))}
      </div>

      {/* Products Display Section */}
      <div className='main-div'>
        <div className='div'>
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <Tapcard key={product._id} product={product} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>

        {/* Pagination Controls */}
        <div className='pagination-controls'>
          <button onClick={handlePrevPage} disabled={currentPage === 1} className='pagination-button'>
            Prev
          </button>

          <button onClick={handleNextPage} disabled={currentPage === totalPages} className='pagination-button'>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productdisplay;
