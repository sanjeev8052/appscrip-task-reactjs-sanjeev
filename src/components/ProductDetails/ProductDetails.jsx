import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProducts } from "../../Features/Product/productSlice";
import "./ProductDetails.css"; // 💬 Import your CSS
import ProductCard from "../ProductCard/ProductCard";
import Loader from "../Loader/Loader";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, status, error } = useSelector((state) => state.product);

  useEffect(() => {
    document.title = "Product Details";
    if (status === "idle") {
      dispatch(getProducts());
    }
  }, [dispatch, status]);
  const product = products.find((item) => item.id === parseInt(id));
  if (status == "pending" || status == "idle") {
    return <Loader />;
  }

  return (
    <>
      <button onClick={() => navigate(-1)} className="btn-back">
        Back
      </button>
      <div className="product-details-container">
        <div className="product-image-section">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
        </div>
        <div className="product-details-section">
          <h1>{product.title}</h1>
          <p>&#8377; {product.price}</p>
          <p>⭐ {product.rating?.rate} / 5</p>
          <p>{product.description}</p>
        </div>
      </div>
      <div className="product-detail-heading">
        <h1>Related Products</h1>
        <hr className="details-divider" />
      </div>

      <div
        className="card-container"
      >
        {products &&
          products.map((item) => {
            if (item.category == product.category)
              return (
                <ProductCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  rating={item.rating.rate}
                  price={item.price}
                  productId={item.id}
                ></ProductCard>
              );
          })}
      </div>
    </>
  );
};

export default ProductDetails;
