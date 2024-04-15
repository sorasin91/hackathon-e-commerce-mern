import React, { useContext } from "react";
import { itemContext } from "../context/ItemContext.js";

const ProductItem = ({ product }) => {
  const { addToCart, removeFromCart } = useContext(itemContext);
  const handleAddToCart = (product) => {
    console.log(product);
    addToCart(product);
  };
  const handleRemoveCart = (product) => {
    console.log("product removed", product);
    removeFromCart(product);
  };

  return (
    <div className="container">
      <div className="row">
        <div class="col-md-5">
          <div className="product-card">
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
            <div className="product-details">
              <h3 style={{ fontWeight: "700" }}>{product.title}</h3>
              <p style={{ fontWeight: "300" }}>{product.description}</p>
              <p style={{ fontWeight: "500" }}>Price: {product.price} Rs</p>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
              <button onClick={() => handleRemoveCart(product)}>-</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
