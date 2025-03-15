import React from "react";
import { useNavigate } from "react-router-dom";
import "./productcard.css";

const Tapcard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product._id}`); // Navigate to the product details page
  };

  return (
    <div className="tapcard-product" onClick={handleCardClick} style={{ cursor: "pointer" }}>
      <img src={product.image} alt={product.title} />
      <div className="underline-tap-product"></div>
      <p>{product.model}</p>
      <p>{product.name}</p>
    </div>
  );
};

export default Tapcard;
