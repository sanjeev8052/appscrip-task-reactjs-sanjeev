import React from "react";
import { truncateDescription } from "../../utils/textUtils";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ image, title, description, price, rating, productId }) {
  const navigate = useNavigate();
  return (
    <div
      className="product-card"
      onClick={() => navigate("/product/" + productId)}
    >
      <img src={image} alt={title} className="product-image" />
      <div className="product-content">
        <h2 className="product-title"> {truncateDescription(title, 50)}</h2>
        <p className="product-description">
          {truncateDescription(description, 100)}
        </p>
        <div className="product-footer">
          <span className="product-price">&#8377; {price}</span>
          <div className="product-rating">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={i < rating ? "star filled" : "star"}>
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
