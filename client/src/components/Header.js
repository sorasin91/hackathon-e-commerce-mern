import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { itemContext } from "../context/ItemContext";

function Header() {
  const { itemsInCart, totalPrice } = useContext(itemContext);

  return (
    <div>
      {/* <div className="navbar-brand">
        <h1 className="ecom">Welcome To Fashion Avenue</h1>
      </div> */}
      <div className="navbar-items">
        <h3 style={{ color: "#007bff" }}>Total Price: {totalPrice}</h3>
        <div className="cart-num">
          <FontAwesomeIcon icon={faCartShopping} size="2x" />
          <div className="cart-items">{itemsInCart}</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
