import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Features/Product/productSlice";
import ProductCard from "../ProductCard/ProductCard";
import Filter from "../Filter/Filter";
import Loader from "../Loader/Loader";

const Product = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.product);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (status == "pending" || status == "idle") {
    return <Loader />;
  }
  return (
    <>
      <Filter setSelectedCategory={setSelectedCategory} />
      <div
        style={{
          padding: "40px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {products &&
          products.map((item) => {
            if (item.category == selectedCategory || selectedCategory == "All")
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

export default Product;
