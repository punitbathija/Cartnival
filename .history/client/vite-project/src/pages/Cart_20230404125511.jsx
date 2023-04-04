import React, { useState, useEffect } from "react";

const Cart = () => {
  return (
    <div className="flex">
      <h1>Please review your cart before checkout</h1>
      <ul>
        Items
        <li>Toothpaste</li>
        <li>Toothbrush</li>
        <li>Soap</li>
        <li>shampoo</li>
        <li>Tshirt</li>
      </ul>
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Cart;
