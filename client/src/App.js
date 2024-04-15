import React from "react";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import "./App.css";
import CustomItemContext from "./context/ItemContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../src/components/Navbar";
import Home from "../src/components/Home";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </Router>
      <CustomItemContext>
        <Header />
        <ProductList />
      </CustomItemContext>
    </div>
  );
};

export default App;
