import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../assets/assets"; // Adjust path if needed
import "./ProductDetailpage.css"; // Import CSS

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the product
  const product = products.find((item) => item._id === id);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
    <div className="product-detail-container">
    <div className="product-detail"> 
      <img src={product.image} alt={product.name} />
      <div>
      <h1>{product.name}</h1>
      <h3>{product.model}</h3>
      <p>{product.description}</p> 
      </div>
      
    </div>
      <button className="back-button" onClick={() => navigate(-1)}>
      ← Back to Products
    </button>
    </div>
    
    </>
     
  );
};

export default ProductDetailPage;
