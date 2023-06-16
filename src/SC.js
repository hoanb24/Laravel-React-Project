import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
import CartDisplay from "./CartLaza";

export default function ShoppingCart() {
  const cartData = JSON.parse(sessionStorage.getItem("cart"));
  return (
    <div>
      <section>
        <CartDisplay cart={cartData} />
      </section>
    </div>
  );
}
