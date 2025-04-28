import { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../src/store";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Product from "./components/Products/Product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Provider>
    </Router>
  );
}

export default App;
