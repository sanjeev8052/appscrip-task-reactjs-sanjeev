import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Filter = ({ setSelectedCategory }) => {
  const { products, status } = useSelector((state) => state.product);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (status === "success") {
      setCategories(["All", ...new Set(products.map((item) => item.category))]);
    }
  }, [status, products]);

  return (
    <div>
      <div className="navbar-second">
        <div className="category-option">
          <select onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Filter by category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
