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
    <div className="product-detail">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <h3>Price: ${product.price}</h3>

      {/* Back to Home Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back to Products
      </button>
    </div>
  );
};

export default ProductDetailPage;
