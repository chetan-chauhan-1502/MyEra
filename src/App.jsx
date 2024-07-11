import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Product from "./Components/Product";
import ProductDetail from "./Components/ProductDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />}>
          <Route path="product-detail" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// below is dynamic routing

// xyz.com/productDetail/p1 => p1 Product detail
// xyz.com/productDetail/p2 => p2 Product detail
// xyz.com/productDetail/:<any value>  => p2 Product detail
