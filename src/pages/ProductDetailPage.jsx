// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { products } from "../assets/assets"; // Adjust path if needed
// import "./ProductDetailpage.css"; // Import CSS

// const ProductDetailPage = () => {
  
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // Find the product
//   const product = products.find((item) => item._id === id);

//   if (!product) {
//     return <h2>Product not found</h2>;
//   }

//   return (
//     <>
//     <div className="product-detail-container">
//     <div className="product-detail"> 
//       <img src={product.image} alt={product.name} />
//       <div>
//       <h1>{product.name}</h1>
//       <h3>{product.model}</h3>
//       <p>{product.description}</p> 
//       </div>
      
//     </div>
//       <button className="back-button" onClick={() => navigate(-1)}>
//       ← Back to Products
//     </button>
//     </div>
    
//     </>
     
//   );
// };

// 
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../assets/assets"; // Adjust path if needed
import "./ProductDetailpage.css"; // Import CSS

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFullView, setIsFullView] = useState(false);

  // Find the product
  const product = products.find((item) => item._id === id);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-detail-container">
      <div className={`product-detail ${isFullView ? "full-view" : ""}`}>
        <img src={product.image} alt={product.name} onClick={() => setIsFullView(true)} />
        
        {!isFullView && (
          <div>
            <h1>{product.name}</h1>
            <h3>{product.model}</h3>
            <p>{product.description}</p>
            <button className="full-view-button" onClick={() => setIsFullView(true)}>
              Full View
            </button>
          </div>
        )}

        {isFullView && (
          <button className="full-view-button" onClick={() => setIsFullView(false)}>
            Exit Full View
          </button>
        )}
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back to Products
      </button>
    </div>
  );
};

export default ProductDetailPage;
