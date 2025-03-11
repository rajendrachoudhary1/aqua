import React from "react";
import "./Tapcard.css";
import Card from "../Card/Card";
import {products} from '../../../assets/assets'
import { useNavigate } from "react-router-dom";
 
const Tapcard = (props) => {

  const navigate = useNavigate();
  const bestsellerProducts = products.filter((product) => product.bestseller);
  // Function to handle card click
  const handleCardClick = (id) => {
    console.log("Clicked Product ID:", id);
    navigate(`/product/${id}`);
  };
  return (
    <>
      <div className="tapcard">
        <h3>BEST SELLER</h3>
        <p className="tap-text">
          Discover our top-selling faucets, designed for durability, style, and
          flawless functionality. Made from high-quality brass, these faucets
          offer exceptional resistance to corrosion and hard-water buildup,
          ensuring long-lasting performance.{" "}
        </p>
        <div className="tap">
        {bestsellerProducts.map((product, index) => (
          <div 
            className={`taps ${index % 3 === 2 ? "lastcard" : ""}`} 
            key={product._id} // Unique key should be product.id
            onClick={() => handleCardClick(product._id)} // Pass ID on click
          >
            <Card img={product.image} title={product.title} name={product.name} />
          </div>
        ))}
      </div>
        
      </div>
    </>
  );
};

export default Tapcard;
