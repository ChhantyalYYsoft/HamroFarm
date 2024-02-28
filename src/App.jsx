import { useState, React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import ProductLandingPage from "./pages/product/ProductLandingPage";
import Cart from "./pages/home/cart/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/product/:id" element={<ProductLandingPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
